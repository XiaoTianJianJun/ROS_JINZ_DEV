using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DRDS::DrdsDB`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-drds.DrdsDBProps")]
    public class DrdsDBProps : AlibabaCloud.SDK.ROS.CDK.Drds.IDrdsDBProps
    {
        /// <summary>Property drdsInstanceId: DRDS instance ID.</summary>
        [JsiiProperty(name: "drdsInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DrdsInstanceId
        {
            get;
            set;
        }

        /// <summary>Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AccountName
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceIsCreating: Check whether the RDS instance is being created.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceIsCreating", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DbInstanceIsCreating
        {
            get;
            set;
        }

        /// <summary>Property dbInstType: The type of the attached storage.</summary>
        /// <remarks>
        /// Valid values:
        /// RDS or POLARDB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstType
        {
            get;
            set;
        }

        /// <summary>Property dbName: Database Name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbName
        {
            get;
            set;
        }

        /// <summary>Property encode: Encoding used by the database.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "encode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Encode
        {
            get;
            set;
        }

        /// <summary>Property instDbName:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instDbName", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? InstDbName
        {
            get;
            set;
        }

        /// <summary>Property password: The logon password of the database instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Password
        {
            get;
            set;
        }

        /// <summary>Property rdsInstance: This property is required only for vertical partitioning.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "rdsInstance", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? RdsInstance
        {
            get;
            set;
        }

        /// <summary>Property type: Database Sharding method.</summary>
        /// <remarks>
        /// For more information, see scalability principle. Valid values:
        /// HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        /// and table sharding.
        /// VERTICAL: indicates VERTICAL partitioning.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Type
        {
            get;
            set;
        }
    }
}
