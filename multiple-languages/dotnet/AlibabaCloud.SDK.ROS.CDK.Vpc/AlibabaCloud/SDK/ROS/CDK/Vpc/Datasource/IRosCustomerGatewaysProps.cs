using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::CustomerGateways`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCustomerGatewaysProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosCustomerGatewaysProps")]
    public interface IRosCustomerGatewaysProps
    {
        /// <remarks>
        /// <strong>Property</strong>: customerGatewayId: The ID of the customer gateway.
        /// </remarks>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomerGatewayId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::CustomerGateways`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCustomerGatewaysProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosCustomerGatewaysProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosCustomerGatewaysProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: customerGatewayId: The ID of the customer gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomerGatewayId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
