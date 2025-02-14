using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ApiGateway::Apps`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAppsProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.RosAppsProps")]
    public interface IRosAppsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: Unique ID of the app.
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: appOwner: Alibaba Cloud account ID of the app owner.
        /// </remarks>
        [JsiiProperty(name: "appOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppOwner
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ApiGateway::Apps`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAppsProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.RosAppsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource.IRosAppsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appId: Unique ID of the app.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: appOwner: Alibaba Cloud account ID of the app owner.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppOwner
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
