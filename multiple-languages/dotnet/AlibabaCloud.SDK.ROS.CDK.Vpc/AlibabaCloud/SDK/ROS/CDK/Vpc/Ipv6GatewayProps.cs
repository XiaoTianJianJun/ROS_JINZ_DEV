using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::Ipv6Gateway`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.Ipv6GatewayProps")]
    public class Ipv6GatewayProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6GatewayProps
    {
        /// <summary>Property vpcId: To open VPC ID IPv6 gateway.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VpcId
        {
            get;
            set;
        }

        /// <summary>Property description: Description of IPv6 gateway.</summary>
        /// <remarks>
        /// Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property name: Name of the IPv6 gateway.</summary>
        /// <remarks>
        /// Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property spec: Specifications IPv6 gateway, the value: Small (default): Free.</summary>
        /// <remarks>
        /// Medium: Enterprise Edition.
        /// Large: Enterprise Enhanced Edition.
        /// Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Spec
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }
    }
}
