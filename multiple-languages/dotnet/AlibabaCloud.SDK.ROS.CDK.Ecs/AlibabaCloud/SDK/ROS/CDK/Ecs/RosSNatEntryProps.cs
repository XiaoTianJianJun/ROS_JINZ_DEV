using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::SNatEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosSNatEntryProps")]
    public class RosSNatEntryProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSNatEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: sNatIp: Source IP, must belongs to bandwidth package internet IP
        /// </remarks>
        [JsiiProperty(name: "sNatIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SNatIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sNatTableId: Create SNAT entry in specified SNAT table.
        /// </remarks>
        [JsiiProperty(name: "sNatTableId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SNatTableId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "snatEntryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SnatEntryName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SourceCidr
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceVSwitchId: Allow which switch can access internet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceVSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SourceVSwitchId
        {
            get;
            set;
        }
    }
}
