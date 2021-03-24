using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.</summary>
    [JsiiInterface(nativeType: typeof(IBandwidthPackageAcceleratorAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BandwidthPackageAcceleratorAdditionProps")]
    public interface IBandwidthPackageAcceleratorAdditionProps
    {
        /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
        string AcceleratorId
        {
            get;
        }

        /// <summary>Property bandwidthPackageId: The ID of the bandwidth package to associate.</summary>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"primitive\":\"string\"}")]
        string BandwidthPackageId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBandwidthPackageAcceleratorAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BandwidthPackageAcceleratorAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackageAcceleratorAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
            public string AcceleratorId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property bandwidthPackageId: The ID of the bandwidth package to associate.</summary>
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"primitive\":\"string\"}")]
            public string BandwidthPackageId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
