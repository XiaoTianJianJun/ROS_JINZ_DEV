using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>A ROS template type:  `ALIYUN::ResourceManager::Account`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosAccount), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosAccount", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosAccountProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosAccount : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ResourceManager::Account`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosAccount(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosAccountProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAccount(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAccount(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosAccount))!;

        /// <remarks>
        /// <strong>Attribute</strong>: AccountId: This ID of Resource Manager Account
        /// </remarks>
        [JsiiProperty(name: "attrAccountId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAccountId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DisplayName: Member name
        /// </remarks>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDisplayName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: FolderId: The ID of the parent folder
        /// </remarks>
        [JsiiProperty(name: "attrFolderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrFolderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
        /// </remarks>
        [JsiiProperty(name: "attrJoinMethod", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrJoinMethod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ResourceDirectoryId: Resource directory ID
        /// </remarks>
        [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrResourceDirectoryId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Type: Member type. The value of ResourceAccount indicates the resource account
        /// </remarks>
        [JsiiProperty(name: "attrType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrType
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: displayName: Member name
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DisplayName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: folderId: The ID of the parent folder
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "folderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? FolderId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: payerAccountId:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payerAccountId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PayerAccountId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
    }
}
