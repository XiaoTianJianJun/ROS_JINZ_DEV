using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceClone`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.DBInstanceCloneProps")]
    public class DBInstanceCloneProps : AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstanceCloneProps
    {
        /// <summary>Property dbInstanceId: Instance id.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceId
        {
            get;
            set;
        }

        /// <summary>Property payType: The charge type of created instance.</summary>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PayType
        {
            get;
            set;
        }

        /// <summary>Property allocatePublicConnection: If true, allocate public connection automate.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "allocatePublicConnection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AllocatePublicConnection
        {
            get;
            set;
        }

        /// <summary>Property backupId: The ID of the backup set that you want to use.</summary>
        /// <remarks>
        /// You can call the DescribeBackups operation to query the most recent backup set list.
        /// Note You must specify at least one of the BackupId and RestoreTime parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BackupId
        {
            get;
            set;
        }

        /// <summary>Property backupRetentionPeriod: The retention period of the data backup.</summary>
        /// <remarks>
        /// Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? BackupRetentionPeriod
        {
            get;
            set;
        }

        /// <summary>Property backupType: The type of backup used by the new instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 
        /// <list type="bullet">
        /// <description>FullBackup: full backup</description>
        /// <description>IncrementalBackup: incremental backup</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BackupType
        {
            get;
            set;
        }

        /// <summary>Property category: The edition of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Basic: specifies to use the Basic Edition.
        /// HighAvailability: specifies to use the High-availability Edition.
        /// AlwaysOn: specifies to use the Cluster Edition.
        /// Finance: specifies to use the Enterprise Edition.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Category
        {
            get;
            set;
        }

        /// <summary>Property connectionStringPrefix: The prefix of the endpoint.</summary>
        /// <remarks>
        /// Only the prefix of the CurrentConnectionString parameter value can be modified.
        /// The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ConnectionStringPrefix
        {
            get;
            set;
        }

        /// <summary>Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "connectionStringType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ConnectionStringType
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceClass: Database instance type.</summary>
        /// <remarks>
        /// Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceClass
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceDescription
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceStorage: Database instance storage size.</summary>
        /// <remarks>
        /// mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? DbInstanceStorage
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceStorageType: The storage type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// local_ssd: specifies to use local SSDs. This is the recommended storage type.
        /// cloud_ssd: specifies to use standard SSDs.
        /// cloud_essd: specifies to use enhanced SSDs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceStorageType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceStorageType
        {
            get;
            set;
        }

        /// <summary>Property dbMappings: Database mappings to attach to db instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceClone.DBMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DbMappings
        {
            get;
            set;
        }

        /// <summary>Property dbNames: The names of the databases that you want to create on the new instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbNames", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbNames
        {
            get;
            set;
        }

        /// <summary>Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DedicatedHostGroupId
        {
            get;
            set;
        }

        /// <summary>Property instanceNetworkType: The network type of the new instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 
        /// <list type="bullet">
        /// <description>VPC</description>
        /// <description>Classic
        /// The default value is the network type of the original instance.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceNetworkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceNetworkType
        {
            get;
            set;
        }

        /// <summary>Property maintainTime: The period during which the maintenance performs.</summary>
        /// <remarks>
        /// The format is HH:mmZ-HH:mmZ.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maintainTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MaintainTime
        {
            get;
            set;
        }

        /// <summary>Property masterUsername: The master user name for the database instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "masterUsername", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MasterUsername
        {
            get;
            set;
        }

        /// <summary>Property masterUserPassword: The master password for the database instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "masterUserPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MasterUserPassword
        {
            get;
            set;
        }

        /// <summary>Property masterUserType: Privilege type of account.</summary>
        /// <remarks>
        /// Normal: Common privilege.
        /// Super: High privilege.
        /// Sysadmin: Super privileges (SA) (only supported by SQL Server)
        /// The default value is Normal.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterUserType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MasterUserType
        {
            get;
            set;
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <summary>Property periodType: Charge period for created instances.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "periodType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PeriodType
        {
            get;
            set;
        }

        /// <summary>Property port: The port of the database service.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Port
        {
            get;
            set;
        }

        /// <summary>Property preferredBackupPeriod: The backup period.</summary>
        /// <remarks>
        /// Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PreferredBackupPeriod
        {
            get;
            set;
        }

        /// <summary>Property preferredBackupTime: The time when the backup task is performed.</summary>
        /// <remarks>
        /// Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PreferredBackupTime
        {
            get;
            set;
        }

        /// <summary>Property privateIpAddress: The private ip for created instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateIpAddress
        {
            get;
            set;
        }

        /// <summary>Property restoreTable: Specifies whether to restore specific databases and tables.</summary>
        /// <remarks>
        /// The value 1 specifies to restore specific databases and tables.
        /// If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTable", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreTable
        {
            get;
            set;
        }

        /// <summary>Property restoreTime: The point in time to which you want to restore the data of the original instance.</summary>
        /// <remarks>
        /// The point in time must fall within the specified log backup retention period.
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
        /// The time must be in UTC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreTime
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: The ID of the ECS security groups.</summary>
        /// <remarks>
        /// Each RDS instance can be associated with up to three ECS security groups.
        /// You must separate them with commas (,).
        /// To delete an ECS Security group, leave this parameter empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpList", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityIpList
        {
            get;
            set;
        }

        /// <summary>Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.</summary>
        /// <remarks>
        /// Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slaveZoneIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? SlaveZoneIds
        {
            get;
            set;
        }

        /// <summary>Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.</summary>
        /// <remarks>
        /// Valid values:Enable | Disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sqlCollectorStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SqlCollectorStatus
        {
            get;
            set;
        }

        /// <summary>Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Disabled: Disable SSL
        /// EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        /// EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        /// Default value is Disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sslSetting", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SslSetting
        {
            get;
            set;
        }

        /// <summary>Property tableMeta: The information about the databases and tables that you want to restore.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tableMeta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceClone.TableMetaProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? TableMeta
        {
            get;
            set;
        }

        /// <summary>Property tags: The tags of an instance.</summary>
        /// <remarks>
        /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        /// At most 5 tags can be specified.
        /// Key
        /// It can be up to 64 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:// or https://.
        /// Cannot be a null string.
        /// Value
        /// It can be up to 128 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:// or https://.
        /// Can be a null string.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property timeoutInMinutes: The timeout period for creating the clone instance resource.</summary>
        /// <remarks>
        /// Unit: Minute. Default: 120.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeoutInMinutes", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? TimeoutInMinutes
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The VPC id of created database instance.</summary>
        /// <remarks>
        /// For VPC network, the property is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The vSwitch id of created instance.</summary>
        /// <remarks>
        /// For VPC network, the property is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property zoneId: selected zone to create database instance.</summary>
        /// <remarks>
        /// You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}
