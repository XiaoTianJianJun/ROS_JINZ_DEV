using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `ALIYUN::ALB::ServerGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.ServerGroupProps")]
    public interface IServerGroupProps
    {
        /// <summary>Property healthCheckConfig: The configuration of health checks.</summary>
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty\"}]}}")]
        object HealthCheckConfig
        {
            get;
        }

        /// <summary>Property serverGroupName: The name of the server group.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, and
        /// can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        /// must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServerGroupName
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
        /// <remarks>
        /// You can add only servers that are deployed
        /// in the specified VPC to the server group.
        /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property protocol: The backend protocol.</summary>
        /// <remarks>
        /// Valid values:
        /// HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
        /// HTTPS: The server group can be associated with HTTPS listeners.
        /// gRPC: The server group can be associated with HTTPS and QUIC listeners.
        /// Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Protocol
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduler: The scheduling algorithm.</summary>
        /// <remarks>
        /// Valid values:
        /// Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
        /// Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
        /// Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
        /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Scheduler
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverGroupType: The type of the server group.</summary>
        /// <remarks>
        /// Valid values:
        /// Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
        /// Ip: allows you to add servers by specifying IP addresses.
        /// Fc: allows you to add servers by specifying functions of Function Compute.
        /// </remarks>
        [JsiiProperty(name: "serverGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerGroupType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceName: This parameter is available only if the ALB Ingress controller is used.</summary>
        /// <remarks>
        /// In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property stickySessionConfig: The configuration of session persistence.</summary>
        /// <remarks>
        /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiProperty(name: "stickySessionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StickySessionConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ALB::ServerGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.ServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property healthCheckConfig: The configuration of health checks.</summary>
            [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty\"}]}}")]
            public object HealthCheckConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serverGroupName: The name of the server group.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, and
            /// can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
            /// must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
            /// <remarks>
            /// You can add only servers that are deployed
            /// in the specified VPC to the server group.
            /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocol: The backend protocol.</summary>
            /// <remarks>
            /// Valid values:
            /// HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
            /// HTTPS: The server group can be associated with HTTPS listeners.
            /// gRPC: The server group can be associated with HTTPS and QUIC listeners.
            /// Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Protocol
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduler: The scheduling algorithm.</summary>
            /// <remarks>
            /// Valid values:
            /// Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
            /// Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
            /// Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
            /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scheduler
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serverGroupType: The type of the server group.</summary>
            /// <remarks>
            /// Valid values:
            /// Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
            /// Ip: allows you to add servers by specifying IP addresses.
            /// Fc: allows you to add servers by specifying functions of Function Compute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerGroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceName: This parameter is available only if the ALB Ingress controller is used.</summary>
            /// <remarks>
            /// In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property stickySessionConfig: The configuration of session persistence.</summary>
            /// <remarks>
            /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stickySessionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty\"}]}}", isOptional: true)]
            public object? StickySessionConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.ITagsProperty[]?>();
            }
        }
    }
}
