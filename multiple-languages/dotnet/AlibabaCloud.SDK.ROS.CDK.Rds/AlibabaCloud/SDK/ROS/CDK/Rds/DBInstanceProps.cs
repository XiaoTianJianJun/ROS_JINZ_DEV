using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.DBInstanceProps")]
    public class DBInstanceProps : AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstanceProps
    {
        /// <summary>Property dbInstanceClass: Database instance type.</summary>
        /// <remarks>
        /// Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        /// </remarks>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceClass
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceStorage: Database instance storage size.</summary>
        /// <remarks>
        /// mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double DbInstanceStorage
        {
            get;
            set;
        }

        /// <summary>Property engine: Database instance engine type.</summary>
        /// <remarks>
        /// Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Engine
        {
            get;
            set;
        }

        /// <summary>Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0; SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent; PostgreSQL: 9.4/10.0/11.0/12.0; PPAS: 9.3/10.0; MariaDB: 10.3.</summary>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EngineVersion
        {
            get;
            set;
        }

        /// <summary>Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.</summary>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SecurityIpList
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

        /// <summary>Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.</summary>
        /// <remarks>
        /// Default is RDS system assigns.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ConnectionMode
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

        /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceDescription
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceNetType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceNetType
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

        /// <summary>Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: Table names are not case-sensitive. This is the default value.
        /// 0: Table names are case-sensitive.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbIsIgnoreCase", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? DbIsIgnoreCase
        {
            get;
            set;
        }

        /// <summary>Property dbMappings: Database mappings to attach to db instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstance.DBMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DbMappings
        {
            get;
            set;
        }

        /// <summary>Property dbParamGroupId: The ID of the parameter template used by the instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbParamGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbParamGroupId
        {
            get;
            set;
        }

        /// <summary>Property dbTimeZone: The UTC time zone of the instance.</summary>
        /// <remarks>
        /// Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbTimeZone", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbTimeZone
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

        /// <summary>Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.</summary>
        /// <remarks>
        /// You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encryptionKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EncryptionKey
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

        /// <summary>Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "multiAz", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? MultiAz
        {
            get;
            set;
        }

        /// <summary>Property payType: The charge type of created instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PayType
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

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.</summary>
        /// <remarks>
        /// You can copy the ARN from the RAM console.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "roleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RoleArn
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

        /// <summary>Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "targetDedicatedHostIdForLog", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TargetDedicatedHostIdForLog
        {
            get;
            set;
        }

        /// <summary>Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "targetDedicatedHostIdForMaster", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TargetDedicatedHostIdForMaster
        {
            get;
            set;
        }

        /// <summary>Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "targetDedicatedHostIdForSlave", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TargetDedicatedHostIdForSlave
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
