using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Devops
{
    /// <summary>A ROS resource type:  `ALIYUN::DEVOPS::PipelineRun`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Devops.PipelineRun), fullyQualifiedName: "@alicloud/ros-cdk-devops.PipelineRun", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-devops.PipelineRunProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class PipelineRun : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::DEVOPS::PipelineRun`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public PipelineRun(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Devops.IPipelineRunProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Devops.IPipelineRunProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PipelineRun(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PipelineRun(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute PipelineRunId: Pipeline run id.</summary>
        [JsiiProperty(name: "attrPipelineRunId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPipelineRunId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }
    }
}
