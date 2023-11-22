import ros_cdk_core as core
import ros_cdk_ecs as ecs
import ros_cdk_ros as ros


class DeployFTP(core.Stack):
    """
    window.globalData = {
    website: "cn",
    lang: "zh",
    nodeId:"460772",
    };
    """

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        """
        Create an ECS :
        实例规格：ecs.g6.large
        操作系统：公共镜像Alibaba Cloud Linux 3.2104 LTS 64位
        网络类型：专有网络VPC
        IP地址：公网IP
        安全组：入方向添加安全组规则并放行50000/50010、22、21端口
        搭建FTP站点
        """

        core.RosInfo(self, core.RosInfo.description, "部署并使用FTP created by jinzhan")
        # Parameters
        # 设置ECS实例密码
        ecs_password_param = core.RosParameter(
            self,
            "ECS_password",
            type=core.RosParameterType.STRING,
            association_property="ALIYUN::ECS::Instance::Password",
            default_value="Jinz_Aliyun1",
        )

        # 设置ECS实例镜像
        image_id_param = core.RosParameter(
            self,
            "ImageId",
            default_value="aliyun_3_x64_20G_alibase_20230629.vhd",
            type=core.RosParameterType.STRING,
            description={"zh-cn": "镜像ID", "en": "Image ID"},
            label="公共镜像Alibaba Cloud Linux 3.2104 LTS 64位",
        )
        # 设置ECS实例类型
        instance_type_param = core.RosParameter(
            self,
            "InstanceType",
            association_property="ALIYUN::ECS::Instance::InstanceType",
            association_property_metadata={"ZoneId": "ZoneId"},
            default_value="ecs.g6.large",
            label="Instance Type",
            type=core.RosParameterType.STRING,
            description={
                "zh-cn": "1. Before selecting the model please confirm that the current available zone under the model is in stock, some models need to be reported in advance.\n"
                         "2. List of optional models: \n"
                         "[ecs.c5.large 2vCPU 4GiB Intranet bandwidth1Gbps In-grid sending and receiving packages30 Million PPS]\n"
                         "[ecs.c5.xlarge 4vCPU 8GiB Intranet bandwidth1.5Gbps In-grid sending and receiving packages50 Million PPS]\n"
                         "[ecs.c5.2xlarge 8vCPU 16GiB Intranet bandwidth2.5Gbps In-grid sending and receiving packages80 Million PPS]",
                "en": "1. Choose the model after confirming whether the model under the current zone is available, and some models need to be reported in advance.\n"
                      "2. Optional model list: \n"
                      "[ecs.c5.large 2vCPU 4GiB Intranet bandwidth1Gbps In-grid sending and receiving packages30 Million PPS]\n"
                      "[ecs.c5.xlarge 4vCPU 8GiB Intranet bandwidth1.5Gbps In-grid sending and receiving packages50 Million PPS]\n"
                      "[ecs.c5.2xlarge 8vCPU 16GiB Intranet bandwidth2.5Gbps In-grid sending and receiving packages80 Million PPS]",
            },
        )
        # 地区id类型
        zone_id_param = core.RosParameter(
            self,
            "ZoneId",
            type=core.RosParameterType.STRING,
            association_property="ALIYUN::ECS::Instance::ZoneId",
            default_value="cn-hangzhou-k",
        )
        # Resources - Create resources in the template
        # 创建VPC
        vpc = ecs.Vpc(
            self,
            "VPC",
            ecs.VPCProps(
                cidr_block="10.0.0.0/8",
                vpc_name="ftp-ros-cdk-vpc",
                description="This is ros python cdk from jinzhan",
            ),
        )
        # 创建交换机
        vswitch = ecs.VSwitch(
            self,
            "VSwitch",
            ecs.VSwitchProps(
                zone_id=zone_id_param,
                vpc_id=vpc.resource.ref,
                cidr_block="10.0.0.0/20",
            ),
        )
        # 创建安全组
        sg = ecs.SecurityGroup(
            self,
            "SecurityGroup",
            ecs.SecurityGroupProps(
                vpc_id=vpc.resource.ref,
            ),
        )
        sg_ingress_50000_50010 = ecs.SecurityGroupIngress(
            self,
            "SecurityGroupIngress_80",
            ecs.SecurityGroupIngressProps(
                security_group_id=sg.resource.ref,
                source_cidr_ip="0.0.0.0/0",
                ip_protocol="tcp",
                nic_type="intranet",
                port_range="50000/50010",
            ),
        )

        sg_ingress_21 = ecs.SecurityGroupIngress(
            self,
            "SecurityGroupIngress_8080",
            ecs.SecurityGroupIngressProps(
                security_group_id=sg.resource.ref,
                source_cidr_ip="0.0.0.0/0",
                ip_protocol="tcp",
                nic_type="intranet",
                port_range="21/21",
            ),
        )

        sg_ingress_22 = ecs.SecurityGroupIngress(
            self,
            "SecurityGroupIngress_22",
            ecs.SecurityGroupIngressProps(
                security_group_id=sg.resource.ref,
                source_cidr_ip="0.0.0.0/0",
                ip_protocol="tcp",
                nic_type="intranet",
                port_range="22/22",
            ),
        )

        wait_condition_handle_param = ros.WaitConditionHandle(
            self, "ftpserver", ros.WaitConditionHandleProps(count=3)
        )
        # 创建ECS实例
        ecs_instance = ecs.Instance(
            self,
            "ECS-demo",
            ecs.InstanceProps(
                instance_name="ecs-jinzhan-agent-ros-python-cdk",
                vpc_id=vpc.resource.ref,
                v_switch_id=vswitch.resource.ref,
                security_group_id=sg.resource.ref,
                image_id=image_id_param,
                instance_type=instance_type_param,
                instance_charge_type="PayAsYouGo",
                password=ecs_password_param,
                allocate_public_ip=True,
                user_data=core.FnReplace(
                    value=[
                        {"ros-notify": wait_condition_handle_param.attr_curl_cli},
                        {
                            "Fn::Join": [
                                "",
                                [
                                    "#!/bin/bash\n",
                                    "dnf install -y vsftpd\n",
                                    "systemctl enable vsftpd.service\n",
                                    "systemctl start vsftpd.service\n",
                                    "netstat -antup | grep ftp\n",
                                    "adduser ftptest\n",
                                    # 将ftp用户密码设置为abc123
                                    "sudo chpasswd <<< \"ftptest:abc123\"\n",
                                    "mkdir /var/ftp/test\n",
                                    "touch /var/ftp/test/testfile.txt\n",
                                    "chown -R ftptest:ftptest /var/ftp/test\n",
                                    # 编写update_vsftpd_conf.sh脚本，更改vsftp.conf的参数
                                    # '''sudo echo "#!/bin/bash\n
                                    # if [ -f \\"/etc/vsftpd/vsftpd.conf\\" ]; then
                                    #     sed -i 's/^anonymous_enable=.*/anonymous_enable=NO/' /etc/vsftpd/vsftpd.conf
                                    #     sed -i 's/^local_enable=.*/local_enable=YES/' /etc/vsftpd/vsftpd.conf
                                    #     sed -i 's/^listen=.*/listen=YES/' /etc/vsftpd/vsftpd.conf
                            
                                    #     echo \\"修改成功！\\"
                                    # else
                                    #     echo \\"vsftpd.conf文件不存在。\\"
                                    # fi" > update_vsftpd_conf.sh''',
                                    "sudo echo '#!/bin/bash' | sudo tee update_vsftpd_conf.sh\n",
                                    '''sudo echo 'if [ -f "/etc/vsftpd/vsftpd.conf" ]; then \n    sed -i "s/^anonymous_enable=.*/anonymous_enable=NO/" /etc/vsftpd/vsftpd.conf \n    sed -i "s/^local_enable=.*/local_enable=YES/" /etc/vsftpd/vsftpd.conf\n    sed -i "s/^listen=.*/listen=YES/" /etc/vsftpd/vsftpd.conf\n    echo "修改成功！"\nelse\n    echo "vsftpd.conf文件不存在。"\nfi' | sudo tee  -a update_vsftpd_conf.sh'''
                                    "\n",
                                    "sudo chmod +x update_vsftpd_conf.sh\n",
                                    "sudo ./update_vsftpd_conf.sh\n",
                                    # 在行首添加#注释掉listen_ipv6=YES，关闭监听IPv6 sockets
                                    "sudo sed -i 's/^listen_ipv6=YES/#&/' /etc/vsftpd/vsftpd.conf\n",
                                    "sudo tee -a /etc/vsftpd/vsftpd.conf << EOF\n",
                                    "#设置本地用户登录后所在目录。\n"
                                    "local_root=/var/ftp/test\n",
                                    "#全部用户被限制在主目录。\n",
                                    "chroot_local_user=YES\n",
                                    "#启用例外用户名单。\n",
                                    "chroot_list_enable=YES\n",
                                    "#指定例外用户列表文件，列表中用户不被锁定在主目录。\n",
                                    "chroot_list_file=/etc/vsftpd/chroot_list\n",
                                    "#开启被动模式。\n",
                                    "pasv_enable=YES\n",
                                    "allow_writeable_chroot=YES\n",
                                    "#本教程中为Linux实例的公网IP。\n",
                                    "EOF\n",
                                    # 创建update_vsftpd_conf_ip.sh脚本，将获取本机ip并替换pasv_address=<本机ftp地址>
                                    "echo '#!/bin/bash' > update_vsftpd_conf_ip.sh\n",
                                    "echo '' >> update_vsftpd_conf_ip.sh\n",
                                    "echo 'public_ip=$(curl -s ifconfig.me)' >> update_vsftpd_conf_ip.sh\n"
                                    "echo '' >> update_vsftpd_conf_ip.sh\n",
                                    '''echo 'sudo sh -c "echo \"pasv_address=$public_ip\" >> /etc/vsftpd/vsftpd.conf"' >> update_vsftpd_conf_ip.sh\n''',
                                    "echo '' >> update_vsftpd_conf_ip.sh\n",
                                    "chmod +x update_vsftpd_conf_ip.sh\n",
                                    "./update_vsftpd_conf_ip.sh\n",

                                    "sudo tee -a /etc/vsftpd/vsftpd.conf << EOF\n",
                                    "#设置被动模式下，建立数据传输可使用的端口范围的最小值。\n",
                                    "#建议您把端口范围设置在一段比较高的范围内，例如50000~50010，有助于提高访问FTP服务器的安全性。\n",
                                    "pasv_min_port=50000\n",
                                    "#设置被动模式下，建立数据传输可使用的端口范围的最大值。\n",
                                    "pasv_max_port=50010\n",
                                    "EOF\n",
                                    
                                    "touch /etc/vsftpd/chroot_list\n",
                                    "systemctl restart vsftpd.service\n"
                                ],
                            ]
                        },
                    ]
                ),
            ),
        )
        # 安全组：入方向添加安全组规则并放行50000/50010、22、21端口
        install_ftp = ecs.RunCommand(
            self,
            "InstallFTP",
            ecs.RunCommandProps(
                instance_ids=[ecs_instance.attr_instance_id],
                type="RunShellScript",
                sync=True,
                timeout=600,
                command_content=""

            ),
        )
        install_ftp.add_dependency(sg_ingress_50000_50010)
        install_ftp.add_dependency(sg_ingress_22)
        install_ftp.add_dependency(sg_ingress_21)

        # Output
        core.RosOutput(self, "FTP URL",
                       value=core.FnJoin("", ["ftp://", ecs_instance.attr_public_ip, ":21"]), description="FTP User:ftptest, FTP Password:abc123, port:21, 50000/50010")
