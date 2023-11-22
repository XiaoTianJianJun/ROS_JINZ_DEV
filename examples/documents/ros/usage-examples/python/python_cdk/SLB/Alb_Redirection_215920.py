import ros_cdk_core as core
import ros_cdk_ecs as ecs
import ros_cdk_ros as ros
import ros_cdk_alb as alb


class AlbRedirection(core.Stack):
    #  注意需要上传证书才能创建slb的七层监听，在servercertificationid中设置了默认ID值，需要根据实际值做修改
    #  文档名称：将HTTP访问重定向至HTTPS
    # window.globalData = {
    # website: "cn",
    # lang: "zh",
    # nodeId:"215920",
    # };

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # The code that defines your stack goes here
        image_id_param = core.RosParameter(
            self,
            "ImageId",
            default_value="aliyun_3_x64_20G_alibase_20230629.vhd",
            type=core.RosParameterType.STRING,
            description={"zh-cn": "镜像ID", "en": "Image ID"},
            label="Image",
        )

        instance_type_param = core.RosParameter(
            self,
            "InstanceType",
            association_property="ALIYUN::ECS::Instance::InstanceType",
            association_property_metadata={"ZoneId": "ZoneId"},
            default_value="ecs.c6.large",
            label="Instance Type",
            type=core.RosParameterType.STRING,
            description={
                "zh-cn": "<font color='blue'><b>1.选择机型前请先确认当前可用区下该机型是否有货，部分机型需要提前报备</b></font><br><font color='blue'><b>2.可选机型列表</font><br></b></font>[ecs.c5.large <font color='green'>2vCPU 4GiB 内网带宽1Gbps 内网收发包30万PPS</font>]<br></b>[ecs.c5.xlarge <font color='green'>4vCPU 8GiB 内网带宽1.5Gbps 内网收发包50万PPS</font>]<br></b>[ecs.c5.2xlarge <font color='green'>8vCPU 16GiB 内网带宽2.5Gbps 内网收发包80万PPS</font>]",
                "en": "<font color='blue'><b>1.Before selecting the model please confirm that the current available zone under the model is in stock, some models need to be reported in advance</b></font><br><font color='blue'><b>2.List of optional models</font><br></b></font>[ecs.c5.large <font color='green'>2vCPU 4GiB Intranet bandwidth1Gbps In-grid sending and receiving packages30MillionPPS</font>]<br></b>[ecs.c5.xlarge <font color='green'>4vCPU 8GiB Intranet bandwidth1.5Gbps In-grid sending and receiving packages50MillionPPS</font>]<br></b>[ecs.c5.2xlarge <font color='green'>8vCPU 16GiB Intranet bandwidth2.5Gbps In-grid sending and receiving packages80MillionPPS</font>]",
            },
        )
        zone_id_param = core.RosParameter(
            self,
            "ZoneId",
            type=core.RosParameterType.STRING,
            association_property="ALIYUN::ECS::Instance::ZoneId",
            default_value="cn-hangzhou-h",
        )

        # # # slb参数
        # address_type_param = core.RosParameter(
        #     self,
        #     "AddressType",
        #     type=core.RosParameterType.STRING,
        #     default_value="internet",
        # )

        # band_width_param = core.RosParameter(
        #     self,
        #     "BandWidth",
        #     type=core.RosParameterType.NUMBER,
        #     description={
        #         "en": "The bandwidth peak of a public network type instance of fixed bandwidth billing.",
        #         "zh-cn": "固定带宽计费方式的公网类型实例的带宽峰值。",
        #     },
        #     default_value=1,
        #     max_value=1000,
        #     min_value=1,
        # )

        # load_balancer_spec_param = core.RosParameter(
        #     self,
        #     "LoadBalancerSpec",
        #     type=core.RosParameterType.STRING,
        #     default_value="alb.s1.small",
        #     description={
        #         "zh-cn": "实例规格，详见：</b><a href='https://help.aliyun.com/document_detail/85939.html' target='_blank'><b><font color='blue'>性能保障型</b></font></a>",
        #         "en": "Instance specifications, see detail：</b><a href='https://www.alibabacloud.com/help/doc-detail/85939.html' target='_blank'><b><font color='blue'>Performance support type</b></font></a>",
        #     },
        # )
        server_certificate_id_param = core.RosParameter(
            self,
            "ServerCertificateID",
            type=core.RosParameterType.STRING,
            default_value="11194895",
            description={
                "en": "please update a certification before test my ros",
                "zh-cn": "在测试我的ros文档以前，请上传你的证书",
            },
        )

        servergroup = alb.ServerGroup(self, "ServerGroup", alb.ServerGroupProps(
            serverGroupName = "test_group",

        ))
        
        
        
        # resource
        vpc = ecs.Vpc(
            self,
            "VPC",
            ecs.VPCProps(
                cidr_block="10.0.0.0/8",
                vpc_name="alb_test_vpc",
                description="This is ros python cdk test",
            ),
        )

        vswitch1 = ecs.VSwitch(
            self,
            "VSwitch1",
            ecs.VSwitchProps(
                zone_id=zone_id_param, vpc_id=vpc.resource.ref, cidr_block="10.0.0.0/24"
            ),
        )
        
        vswitch2 = ecs.VSwitch(
            self,
            "VSwitch2",
            ecs.VSwitchProps(
                zone_id=zone_id_param, vpc_id=vpc.resource.ref, cidr_block="10.0.1.0/24"
            ),
        )

        sg = ecs.SecurityGroup(
            self,
            "SecurityGroup",
            ecs.SecurityGroupProps(
                vpc_id=vpc.resource.ref,
            ),
        )

        ecs_instance1 = ecs.Instance(
            self,
            "ECS01",
            ecs.InstanceProps(
                instance_name="ECS01",
                vpc_id=vpc.resource.ref,
                v_switch_id=vswitch1.resource.ref,
                security_group_id=sg.resource.ref,
                image_id=image_id_param,
                instance_type=instance_type_param,
                instance_charge_type="PayAsYouGo",
                password="Admin123",
            ),
        )

        ecs_instance2 = ecs.Instance(
            self,
            "ECS02",
            ecs.InstanceProps(
                instance_name="ECS02",
                vpc_id=vpc.resource.ref,
                v_switch_id=vswitch1.resource.ref,
                security_group_id=sg.resource.ref,
                image_id=image_id_param,
                instance_type=instance_type_param,
                instance_charge_type="PayAsYouGo",
                password="Admin123",
            ),
        )



        props = {
            "loadBalancerEdition": "Standard",
            "loadBalancerBillingConfig": {
                "payType": "PostPay"
            },
            "zoneMappings": [
                {
                "zoneId": "cn-hangzhou-h",
                "vSwitchId": vswitch1.resource.ref
                },
                {
                "zoneId": "cn-hangzhou-h",
                "vSwitchId": vswitch2.resource.ref
                }
            ],
            "loadBalancerName": "test",
            "vpcId": vpc.resource.ref,
            "addressType": "intranet"
            }
        
        load_balancer = alb.LoadBalancer(self, "LoadBalancer", props)
        # # # 创建alb
        # load_balancer = alb.LoadBalancer(
        #     self,
        #     "LoadBalancer",
        #     alb.LoadBalancerProps(
        #         address_type=address_type_param,
        #         bandwidth=band_width_param,
        #         internet_charge_type="PayByTraffic",
        #         # load_balancer_spec=load_balancer_spec_param,
        #     ),
        # )

        # # 挂载后端服务器：
        attachment = alb.BackendServerAttachment(
            self,
            "BackendServerAttachment",
            alb.BackendServerAttachmentProps(
                backend_servers=[
                    {"serverId": ecs_instance1.resource.ref, "weight": 80},
                    {"serverId": ecs_instance2.resource.ref, "weight": 80},
                ],
                load_balancer_id=load_balancer.resource.ref,
            ),
        )

        # 创建https监听
        https_listener = alb.Listener(
            self,
            "HTTPSListener",
            alb.ListenerProps(
                protocol="https",
                listener_port=443,
                load_balancer_id=load_balancer.attr_load_balancer_id,
                scheduler="wrr",
                server_certificate_id=server_certificate_id_param,
                backend_server_port=443,
                bandwidth=50,
            ),
        )

        # 创建http监听
        https_listener = alb.Listener(
            self,
            "HTTPListener",
            alb.ListenerProps(
                protocol="http",
                listener_port=80,
                load_balancer_id=load_balancer.attr_load_balancer_id,
                scheduler="wrr",
                backend_server_port=80,
                http_config={"listenerForward": "on", "forwardPort": 443},
                bandwidth=50,
            ),
        )
