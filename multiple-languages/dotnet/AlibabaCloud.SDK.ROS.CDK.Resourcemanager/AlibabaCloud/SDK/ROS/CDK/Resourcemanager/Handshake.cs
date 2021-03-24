using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>A ROS resource type:  `ALIYUN::ResourceManager::Handshake`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.Handshake), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.Handshake", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.HandshakeProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Handshake : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ResourceManager::Handshake`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Handshake(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IHandshakeProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Handshake(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Handshake(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute HandshakeId: This ID of Resource Manager handshake.</summary>
        [JsiiProperty(name: "attrHandshakeId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHandshakeId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterAccountId: Resource account master account ID.</summary>
        [JsiiProperty(name: "attrMasterAccountId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterAccountId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterAccountName: The name of the main account of the resource directory.</summary>
        [JsiiProperty(name: "attrMasterAccountName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterAccountName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Note: Remarks.</summary>
        [JsiiProperty(name: "attrNote", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNote
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceDirectoryId: Resource directory ID.</summary>
        [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrResourceDirectoryId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TargetEntity: Invited account ID or login email.</summary>
        [JsiiProperty(name: "attrTargetEntity", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTargetEntity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TargetType: Type of account being invited.</summary>
        /// <remarks>
        /// Valid values: Account, Email
        /// </remarks>
        [JsiiProperty(name: "attrTargetType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTargetType
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
