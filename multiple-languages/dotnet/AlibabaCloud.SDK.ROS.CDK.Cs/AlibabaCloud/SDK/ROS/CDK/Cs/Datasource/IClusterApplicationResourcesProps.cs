using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CS::ClusterApplicationResources`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterApplicationResourcesProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.ClusterApplicationResourcesProps")]
    public interface IClusterApplicationResourcesProps
    {
        /// <summary>Property clusterId: The ID of the kubernetes cluster.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property kind: The kind of kubernetes resources to query.</summary>
        [JsiiProperty(name: "kind", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Kind
        {
            get;
        }

        /// <summary>Property firstMatch: Only the first matching result in jsonpath's filtered results is returned.</summary>
        /// <remarks>
        /// Default False
        /// </remarks>
        [JsiiProperty(name: "firstMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirstMatch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jsonPath: Json path expression to filter the output.</summary>
        [JsiiProperty(name: "jsonPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JsonPath
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the kubernetes resource to query.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property namespace: The namespace of kubernetes containing the resource.</summary>
        /// <remarks>
        /// Default value is default
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Namespace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CS::ClusterApplicationResources`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterApplicationResourcesProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.ClusterApplicationResourcesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterApplicationResourcesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: The ID of the kubernetes cluster.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property kind: The kind of kubernetes resources to query.</summary>
            [JsiiProperty(name: "kind", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Kind
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property firstMatch: Only the first matching result in jsonpath's filtered results is returned.</summary>
            /// <remarks>
            /// Default False
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "firstMatch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirstMatch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jsonPath: Json path expression to filter the output.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "jsonPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JsonPath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the kubernetes resource to query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespace: The namespace of kubernetes containing the resource.</summary>
            /// <remarks>
            /// Default value is default
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Namespace
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
