import ros_cdk_core as core
import ros_cdk_ecs as ecs
import ros_cdk_ros as ros


class DeployDocker(core.Stack):
    """
    window.globalData = {
    website: "cn",
    lang: "zh",
    nodeId:"51853",
    };
    """

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        """
        Create an ECS :
        实例规格：ecs.c6.large
        操作系统：公共镜像Alibaba Cloud Linux 3.2104 LTS 64位
        网络类型：专有网络VPC
        IP地址：公网IP
        安全组：入方向添加安全组规则并放行80、22、8080端口
        部署Docker
        Docker基本用法
        使用Docker制作镜像
        安装并使用docker-compose
        """

        core.RosInfo(self, core.RosInfo.description, "部署并使用Docker created by jinzhan")
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
            default_value="ecs.c6.large",
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
                vpc_name="java-web-ros-cdk-vpc",
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
        sg_ingress_80 = ecs.SecurityGroupIngress(
            self,
            "SecurityGroupIngress_80",
            ecs.SecurityGroupIngressProps(
                security_group_id=sg.resource.ref,
                source_cidr_ip="0.0.0.0/0",
                ip_protocol="tcp",
                nic_type="intranet",
                port_range="80/80",
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

        sg_ingress_8080 = ecs.SecurityGroupIngress(
            self,
            "SecurityGroupIngress_8080",
            ecs.SecurityGroupIngressProps(
                security_group_id=sg.resource.ref,
                source_cidr_ip="0.0.0.0/0",
                ip_protocol="tcp",
                nic_type="intranet",
                port_range="8080/8080",
            ),
        )
        wait_condition_handle_param = ros.WaitConditionHandle(
            self, "WebServerConditionHandle", ros.WaitConditionHandleProps(count=3)
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
                                    #部署Docker
                                    "dnf config-manager --add-repo=https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo \n",
                                    "dnf -y install dnf-plugin-releasever-adapter --repo alinux3-plus \n",
                                    "dnf -y install docker-ce --nobest \n",
                                    "docker -v \n",
                                    # Docker基本用法-管理Docker守护进程
                                    "systemctl start docker \n",
                                    "systemctl enable docker \n",
                                    "systemctl status docker \n",
                                    "systemctl start docker \n",
                                    "systemctl stop docker \n",
                                    "systemctl restart docker \n",
                                    "systemctl enable docker \n",
                                    "systemctl status docker \n",
                                    # Docker基本用法-管理镜像
                                    "docker pull registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5 \n",
                                    "docker tag registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5:latest aliweb:v1 \n",
                                    "docker images \n",
                                    "docker rmi -f registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5 \n",
                                    # Docker基本用法-管理容器
                                    "echo 'touch ManageDocker.sh...' \n",
                                    "echo '#!/bin/bash' >> ManageDocker.sh \n",
                                    'echo "image_list=\$(docker images)" >> ManageDocker.sh \n '
                                    "echo 'image_id=\$(echo \"\$image_list\" | awk \'NR==2{print \$3}\')' >> ManageDocker.sh"
                                    "echo 'docker run -it \$image_id /bin/bash' >> ManageDocker.sh \n",
                                    "echo 'docker run -d --name docker_test1 \$image_id' >> ManageDocker.sh \n",
                                    "echo 'docker ps' >> ManageDocker.sh \n",
                                    "echo 'docker commit docker_test1 store:test' >> ManageDocker.sh \n",
                                    "chmod 777 ManageDocker.sh \n",
                                    "./ManageDocker.sh \n",
                                    # 使用Docker制作镜像
                                    "docker pull registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5 \n",
                                    "docker tag registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5:latest aliweb:v1 \n",
                                    # 创建Dockerfile文件并且写入指定内容
                                    "echo -e '#声明基础镜像来源。\nFROM aliweb:v1\n#声明镜像拥有者。\nMAINTAINER DTSTACK\n#RUN后面接容器运行前需要执行的命令，由于Dockerfile文件不能超过127行，因此当命令较多时建议写到脚本中执行。\nRUN mkdir /dtstact\n#开机启动命令，此处最后一个命令需要是可在前台持续执行的命令，否则容器后台运行时会因为命令执行完而退出。\nENTRYPOINT ping www.aliyun.com' > Dockerfile \n",
                                    "docker build -t aliweb:v2 . \n",
                                    "docker images \n",
                                    # 安装并使用docker-compose
                                    "pip3 install -U pip setuptools \n",
                                    "pip3 install docker-compose \n",
                                    "docker-compose --version \n",
                                    #使用docker-compose部署应用
                                    #创建docker-compose.yaml并写入指定内容
                                    "echo -e 'version: '\"\'3.1\'\"'\n\nservices:\n\n  wordpress:\n    image: wordpress\n    restart: always\n    ports:\n      - 80:80\n    environment:\n      WORDPRESS_DB_HOST: db\n      WORDPRESS_DB_USER: wordpress\n      WORDPRESS_DB_PASSWORD: 123456\n      WORDPRESS_DB_NAME: wordpress\n    volumes:\n      - wordpress:/var/www/html\n\n  db:\n    image: mysql:5.7\n    restart: always\n    ports:\n       - 3306:3306\n    environment:\n      MYSQL_DATABASE: wordpress\n      MYSQL_USER: wordpress\n      MYSQL_PASSWORD: 123456\n      MYSQL_RANDOM_ROOT_PASSWORD: '1'\n    volumes:\n      - db:/var/lib/mysql\n\nvolumes:\n  wordpress:\n  db:' > docker-compose.yaml  \n",
                                    "sudo env \"\"PATH=$PATH\"\" docker-compose up -d",
                                ],
                            ]
                        },
                    ]
                ),
            ),
        )
        # 安全组：入方向添加安全组规则并放行80、22、8080端口
        install_web = ecs.RunCommand(
            self,
            "InstallWeb",
            ecs.RunCommandProps(
                instance_ids=[ecs_instance.attr_instance_id],
                type="RunShellScript",
                sync=True,
                timeout=600,
                command_content=""
                
            ),
        )
        install_web.add_dependency(sg_ingress_80)
        install_web.add_dependency(sg_ingress_22)
        install_web.add_dependency(sg_ingress_8080)

# Output
        core.RosOutput(self, "ECS URL",
                       value=core.FnJoin("", ["http://", ecs_instance.attr_public_ip]))


