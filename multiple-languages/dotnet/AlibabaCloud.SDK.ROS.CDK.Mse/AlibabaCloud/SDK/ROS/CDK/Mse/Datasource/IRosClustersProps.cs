using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::MSE::Clusters`.</summary>
    [JsiiInterface(nativeType: typeof(IRosClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.datasource.RosClustersProps")]
    public interface IRosClustersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterAliasName: The alias name of cluster.
        /// </remarks>
        [JsiiProperty(name: "clusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterAliasName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::MSE::Clusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.datasource.RosClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.Datasource.IRosClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterAliasName: The alias name of cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterAliasName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
