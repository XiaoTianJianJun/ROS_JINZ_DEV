using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    #pragma warning disable CS8618

    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.MetadataEntryResult")]
    public class MetadataEntryResult : AlibabaCloud.SDK.ROS.CDK.Cxapi.IMetadataEntryResult
    {
        /// <summary>The path in which this entry was defined.</summary>
        [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
        public string Path
        {
            get;
            set;
        }

        /// <summary>The type of the metadata entry.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        public string Type
        {
            get;
            set;
        }

        private object? _data;

        /// <summary>The data.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no data.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.Tag\"},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Data
        {
            get => _data;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ITag[] cast_cd4240:
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ITag).FullName}[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _data = value;
            }
        }

        /// <summary>A stack trace for when the entry was created.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no trace.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "trace", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public string[]? Trace
        {
            get;
            set;
        }
    }
}
