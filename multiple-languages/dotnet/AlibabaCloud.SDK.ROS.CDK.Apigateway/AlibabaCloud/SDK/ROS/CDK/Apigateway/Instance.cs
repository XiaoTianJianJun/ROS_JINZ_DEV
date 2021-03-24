using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>A ROS resource type:  `ALIYUN::ApiGateway::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Apigateway.Instance), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ApiGateway::Instance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Apigateway.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute EgressIpv6Enable: Whether enable egress IPV6.</summary>
        [JsiiProperty(name: "attrEgressIpv6Enable", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEgressIpv6Enable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: Instance ID.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceType: Instance type.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetEgressAddress: Internet egress dddress.</summary>
        [JsiiProperty(name: "attrInternetEgressAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetEgressAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SupportIpv6: Whether support IPV6.</summary>
        [JsiiProperty(name: "attrSupportIpv6", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSupportIpv6
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcEgressAddress: VPC network egress address.</summary>
        [JsiiProperty(name: "attrVpcEgressAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcEgressAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcIntranetEnable: Whether enable VPC intranet.</summary>
        [JsiiProperty(name: "attrVpcIntranetEnable", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcIntranetEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcSlbIntranetEnable: Whether enable VPC SLB intranet.</summary>
        [JsiiProperty(name: "attrVpcSlbIntranetEnable", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcSlbIntranetEnable
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
