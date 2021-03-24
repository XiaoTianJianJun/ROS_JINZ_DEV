using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::AnycastEIPAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps")]
    public class AnycastEIPAssociationProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPAssociationProps
    {
        /// <summary>Property anycastId: Anycast EIP instance ID.</summary>
        [JsiiProperty(name: "anycastId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AnycastId
        {
            get;
            set;
        }

        /// <summary>Property bindInstanceId: The ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "bindInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string BindInstanceId
        {
            get;
            set;
        }

        /// <summary>Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "bindInstanceRegionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string BindInstanceRegionId
        {
            get;
            set;
        }

        /// <summary>Property bindInstanceType: The cloud resource instance type to be bound.</summary>
        /// <remarks>
        /// Valid value: SlbInstance, SLB instance of private network type.
        /// </remarks>
        [JsiiProperty(name: "bindInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string BindInstanceType
        {
            get;
            set;
        }
    }
}
