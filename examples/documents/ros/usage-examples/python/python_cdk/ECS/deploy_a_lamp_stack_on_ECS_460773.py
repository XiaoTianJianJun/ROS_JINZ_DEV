import ros_cdk_core as core
import ros_cdk_ecs as ecs
import ros_cdk_ros as ros


class LAMPStack(core.Stack):
    """
    Documentation Info:
    website: "cn",
    lang: "zh",
    nodeId:"460773"
    """

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        """
        Create an ECS :
        实例规格：ecs.c6.large
        操作系统：公共镜像Alibaba Cloud Linux 3.2104 LTS 64位
        网络类型：专有网络VPC
        IP地址：公网IP
        安全组：入方向添加安全组规则并放行22、80端口
        """
        core.RosInfo(self, core.RosInfo.description, "This is the simple ros cdk app example created by xiali")
        # Parameters
        ecs_password_param = core.RosParameter(self,
                                               "ECS_password",
                                               type=core.RosParameterType.STRING,
                                               association_property="ALIYUN::ECS::Instance::Password",
                                               default_value='zaq1@WSX'
                                               )
        # Parameters - Create parameters for the template
        image_id_param = core.RosParameter(self,
                                           "ImageId",
                                           default_value='aliyun_3_x64_20G_alibase_20230629.vhd',
                                           type=core.RosParameterType.STRING,
                                           description={
                                               "zh-cn": "镜像ID",
                                               "en": "Image ID"
                                           },
                                           label="Image"
                                           )
        instance_type_param = core.RosParameter(self,
                                                "InstanceType",
                                                association_property='ALIYUN::ECS::Instance::InstanceType',
                                                association_property_metadata={
                                                    "ZoneId": "ZoneId"
                                                },
                                                default_value="ecs.c6.large",
                                                label="Instance Type",
                                                type=core.RosParameterType.STRING,
                                                description={
                                                    "zh-cn": "<font color='blue'><b>1.选择机型前请先确认当前可用区下该机型是否有货，部分机型需要提前报备</b></font><br><font color='blue'><b>2.可选机型列表</font><br></b></font>[ecs.c5.large <font color='green'>2vCPU 4GiB 内网带宽1Gbps 内网收发包30万PPS</font>]<br></b>[ecs.c5.xlarge <font color='green'>4vCPU 8GiB 内网带宽1.5Gbps 内网收发包50万PPS</font>]<br></b>[ecs.c5.2xlarge <font color='green'>8vCPU 16GiB 内网带宽2.5Gbps 内网收发包80万PPS</font>]",
                                                    "en": "<font color='blue'><b>1.Before selecting the model please confirm that the current available zone under the model is in stock, some models need to be reported in advance</b></font><br><font color='blue'><b>2.List of optional models</font><br></b></font>[ecs.c5.large <font color='green'>2vCPU 4GiB Intranet bandwidth1Gbps In-grid sending and receiving packages30MillionPPS</font>]<br></b>[ecs.c5.xlarge <font color='green'>4vCPU 8GiB Intranet bandwidth1.5Gbps In-grid sending and receiving packages50MillionPPS</font>]<br></b>[ecs.c5.2xlarge <font color='green'>8vCPU 16GiB Intranet bandwidth2.5Gbps In-grid sending and receiving packages80MillionPPS</font>]"
                                                })
        db_user_param = core.RosParameter(self,
                                          "DBUser",
                                          type=core.RosParameterType.STRING,
                                          description={
                                              "zh-cn": "MySQL数据库访问的用户名。它由小写字母、数字和下划线（_）组成，以字母开头。不超过16个字符。",
                                              "en": "Username for MySQL database access.It consists of lowercase letters, numbers and underscores (_), and begins with a letter. Not longer than 16 characters."
                                          },
                                          constraint_description={
                                              "zh-cn": "必须以字母开头并且只包含字母数字字符。",
                                              "en": "Must begin with a letter and contain only alphanumeric characters."
                                          },
                                          label="DB UserName",
                                          max_length=16,
                                          min_length=1,
                                          default_value="DefaultUser"
                                          )

        db_password_param = core.RosParameter(self,
                                              "DBPassword",
                                              no_echo=True,
                                              type=core.RosParameterType.STRING,
                                              label="DB User Password",
                                              description={
                                                  "zh-cn": "MySQL用户密码，数据库访问大小写字母、数字和下划线（_），8-32个字符",
                                                  "en": "The MySQL user password, consisting of letters, numbers, and underline(_), 8 to 32 characters in length"
                                              },
                                              constraint_description={
                                                  "zh-cn": "由字母、数字和下划线(_)组成，长度为8到32个字符",
                                                  "en": "Consisting of letters, numbers, and underline(_), 8 to 32 characters in length"
                                              },
                                              min_length=9,
                                              max_length=32,
                                              default_value="L0v32t3st_"
                                              )

        db_root_password_param = core.RosParameter(self,
                                                   "DBRootPassword",
                                                   no_echo=True,
                                                   type=core.RosParameterType.STRING,
                                                   description={
                                                       "zh-cn": "MySQL的root用户密码, 由字母、数字、下划线（_）组成，长度为8~32个字符",
                                                       "en": "Root user password for MySQL, consisting of letters, numbers, and underline(_), 8 to 32 characters in length"
                                                   },
                                                   label="DB Root Password",
                                                   constraint_description={
                                                       "zh-cn": "由字母、数字和下划线(_)组成，长度为8到32个字符",
                                                       "en": "Consisting of letters, numbers, and underline(_), 8 to 32 characters in length"
                                                   },
                                                   min_length=8,
                                                   max_length=32,
                                                   default_value="L0v32t3st_"
                                                   )
        wait_condition_handle_param = ros.WaitConditionHandle(self, "WebServerConditionHandle",
                                                              ros.WaitConditionHandleProps(
                                                                  count=3
                                                              ))
        zone_id_param = core.RosParameter(
            self,
            "ZoneId",
            type=core.RosParameterType.STRING,
            association_property="ALIYUN::ECS::Instance::ZoneId",
            default_value="cn-hangzhou-k"
        )
        # Resources - Create resources in the template

        # Create a Virtual Private Cloud (VPC)
        vpc = ecs.Vpc(self, "VPC", ecs.VPCProps(
            cidr_block='10.0.0.0/8',
            vpc_name='test-ros-cdk-vpc',
            description='This is ros python cdk test'
        ))
        # Create a vswitch under the vpc
        vswitch = ecs.VSwitch(
            self,
            "VSwitch",
            ecs.VSwitchProps(
                zone_id=zone_id_param,
                vpc_id=vpc.resource.ref,
                cidr_block="10.0.0.0/24",
            )
        )
        # Create a security group
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

        ros.WaitCondition(self, "WebServerCondition", ros.WaitConditionProps(
            timeout=3000,
            count=3,
            show_progress_event="Enabled",
            handle=core.FnRef("WebServerConditionHandle")
        ))

        # create an ECS instance
        ecs_instance = ecs.Instance(self, "ECS-demo", ecs.InstanceProps(
            instance_name='ecs-xiali-ros-python-cdk2',
            vpc_id=vpc.resource.ref,
            v_switch_id=vswitch.resource.ref,
            security_group_id=sg.resource.ref,
            image_id=image_id_param,
            instance_type=instance_type_param,
            instance_charge_type='PayAsYouGo',
            password=ecs_password_param,
            # spot_strategy='SpotAsPriceGo',

            user_data=core.FnReplace(value=[{"ros-notify": wait_condition_handle_param.attr_curl_cli},
                                            {"Fn::Join": ["", [
                                                "#!/bin/bash",
                                                "\n",
                                                "dbname=",
                                                db_password_param.value_as_string,
                                                "\n",
                                                "dbuser=",
                                                db_user_param.value_as_string,
                                                "\n",
                                                "dbpassword=",
                                                db_password_param.value_as_string,
                                                "\n",
                                                "dbrootpassword=",
                                                db_root_password_param.value_as_string,
                                                "\n",
                                                "export HOME=/root \n",
                                                "export HOSTNAME=`hostname` \n",
                                                "systemctl status firewalld \n",
                                                "systemctl stop firewalld.service \n",
                                                "systemctl disable firewalld.service \n",
                                                "sed -i 's/^SELINUX=/# SELINUX=/' /etc/selinux/config \n",
                                                "sed -i '/# SELINUX=/a SELINUX=disabled' /etc/selinux/config \n",
                                                "setenforce 0 \n",
                                                # Documentation demo code
                                                "yum -y install httpd httpd-manual mod_ssl mod_perl \n",
                                                "yum -y install httpd httpd-devel \n",
                                                "httpd -v \n",
                                                "systemctl start httpd \n",
                                                "systemctl enable httpd \n",
                                                "ros-notify -d '{\"data\" : \"Install httpd.\"}'\n",
                                                ########################
                                                "wget http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm && yum -y install mysql57-community-release-el7-10.noarch.rpm && yum -y install mysql-community-server --nogpgcheck \n",
                                                "mysql -V \n",
                                                "ros-notify -d '{\"data\" : \"Install mysql.\"}' \n",
                                                "systemctl start mysqld \n",
                                                "systemctl enable mysqld \n",
                                                "systemctl daemon-reload \n",
                                                "tmp=$(grep \"password\" /var/log/mysqld.log | awk '{print $NF}') \n",
                                                "echo $tmp\n",
                                                "cd $HOME\n",
                                                "yum install -y expect \n"
                                                "echo 'creating mysqlinstall.sh...'\n",
                                                "echo \'#!/bin/expect\' >> mysqlinstall.sh \n",
                                                "echo set timeput 30 >> mysqlinstall.sh \n",
                                                "echo spawn mysql_secure_installation >> mysqlinstall.sh \n",
                                                "echo 'expect \"Enter password for user root: \"' >> mysqlinstall.sh \n",
                                                "echo \"\"send $tmp\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"New password:\"' >> mysqlinstall.sh \n",
                                                "echo \"\"send $dbpassword\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"Re-enter new password:\"' >> mysqlinstall.sh \n",
                                                "echo \"\"send $dbpassword\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"Change the password for root ? ((Press y|Y for Yes, any other key for No) : \"' >> mysqlinstall.sh \n",
                                                "echo \"\"send y\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"New password: \"' >> mysqlinstall.sh \n",
                                                "echo \"\"send $dbpassword\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"Re-enter new password:\"' >> mysqlinstall.sh \n",
                                                "echo \"\"send $dbpassword\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : \"' >> mysqlinstall.sh \n",
                                                "echo \"\"send y\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"Remove anonymous users? (Press y|Y for Yes, any other key for No) : \"' >> mysqlinstall.sh \n",
                                                "echo \"\"send y\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"Disallow root login remotely? (Press y|Y for Yes, any other key for No) :\"' >> mysqlinstall.sh \n",
                                                "echo \"\"send y\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"Remove test database and access to it? (Press y|Y for Yes, any other key for No) : \"' >> mysqlinstall.sh \n",
                                                "echo \"\"send y\r\"\" >> mysqlinstall.sh \n",
                                                "echo 'expect \"Reload privilege tables now? (Press y|Y for Yes, any other key for No) :\"' >> mysqlinstall.sh \n",
                                                "echo \"\"send y\r\"\" >> mysqlinstall.sh \n",
                                                "chmod 777 mysqlinstall.sh \n",
                                                # "./mysqlinstall.sh \n",
                                                "rpm -ivh --nodeps https://rpms.remirepo.net/enterprise/remi-release-8.rpm \n",
                                                "dnf update -y dnf libdnf \n",
                                                "sed -i 's/PLATFORM_ID=\"platform:al8\"/PLATFORM_ID=\"platform:el8\"/g' /etc/os-release \n",
                                                "yum -y module install php:remi-7.4 \n",
                                                "sed -i 's/PLATFORM_ID=\"platform:el8\"/PLATFORM_ID=\"platform:al8\"/g' /etc/os-release \n",
                                                "php -v \n",
                                                "echo \"<?php phpinfo(); ?>\" > /var/www/html/phpinfo.php \n",
                                                "systemctl restart httpd \n",
                                                "ros-notify -d '{\"data\" : \"Install php.\"}'\n"
                                            ]]}
                                            ])
        ))  # create an ecs.Instance

        # 安全组：入方向添加安全组规则并放行80端口
        install_web = ecs.RunCommand(
            self,
            "InstallWeb",
            ecs.RunCommandProps(
                instance_ids=[ecs_instance.attr_instance_id],
                type="RunShellScript",
                sync=True,
                timeout=600,
                command_content="""yum -y install httpd
        systemctl start httpd""",
            ),
        )
        install_web.add_dependency(sg_ingress_80)

        # Output
        core.RosOutput(self, "ECS URL",
                       value=core.FnJoin("", ["http://", ecs_instance.attr_public_ip, "/phpinfo.php"])
                       )
