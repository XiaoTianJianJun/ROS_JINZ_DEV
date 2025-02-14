using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::HaVips`.</summary>
    [JsiiInterface(nativeType: typeof(IHaVipsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.HaVipsProps")]
    public interface IHaVipsProps
    {
        /// <summary>Property haVipId: The  ID of the resource.</summary>
        [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HaVipId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::HaVips`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHaVipsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.HaVipsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVipsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property haVipId: The  ID of the resource.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HaVipId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
