using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>A ROS resource type:  `ALIYUN::FC::ProvisionConfig`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Fc.ProvisionConfig), fullyQualifiedName: "@alicloud/ros-cdk-fc.ProvisionConfig", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-fc.ProvisionConfigProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ProvisionConfig : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::FC::ProvisionConfig`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public ProvisionConfig(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IProvisionConfigProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ProvisionConfig(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ProvisionConfig(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute FunctionName: The function name.</summary>
        [JsiiProperty(name: "attrFunctionName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrFunctionName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Qualifier: The service alias.</summary>
        [JsiiProperty(name: "attrQualifier", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrQualifier
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Resource: The resource.</summary>
        [JsiiProperty(name: "attrResource", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrResource
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceName: The service name.</summary>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrServiceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Target: Number of provision.</summary>
        [JsiiProperty(name: "attrTarget", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTarget
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
