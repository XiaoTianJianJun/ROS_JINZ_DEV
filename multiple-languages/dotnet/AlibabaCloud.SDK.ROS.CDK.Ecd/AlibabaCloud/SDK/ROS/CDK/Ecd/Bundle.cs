using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>A ROS resource type:  `ALIYUN::ECD::Bundle`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecd.Bundle), fullyQualifiedName: "@alicloud/ros-cdk-ecd.Bundle", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecd.BundleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Bundle : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ECD::Bundle`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Bundle(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecd.IBundleProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecd.IBundleProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Bundle(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Bundle(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute BundleId: Desktop bundle ID.</summary>
        [JsiiProperty(name: "attrBundleId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrBundleId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }
    }
}
