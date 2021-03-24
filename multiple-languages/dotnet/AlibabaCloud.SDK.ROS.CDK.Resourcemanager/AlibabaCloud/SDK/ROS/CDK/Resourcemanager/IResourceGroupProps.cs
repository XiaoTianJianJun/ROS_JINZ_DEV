using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ResourceGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceGroupProps")]
    public interface IResourceGroupProps
    {
        /// <summary>Property displayName: The display name of the resource group.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
        string DisplayName
        {
            get;
        }

        /// <summary>Property name: The unique identifier of the resource group.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ResourceManager::ResourceGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property displayName: The display name of the resource group.</summary>
            [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
            public string DisplayName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property name: The unique identifier of the resource group.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
