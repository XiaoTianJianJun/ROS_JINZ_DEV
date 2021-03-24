using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterProps")]
    public interface IDBClusterProps
    {
        /// <summary>Property dbNodeClass: The node specifications of the cluster.</summary>
        /// <remarks>
        /// For more information, see Specifications and pricing.
        /// </remarks>
        [JsiiProperty(name: "dbNodeClass", typeJson: "{\"primitive\":\"string\"}")]
        string DbNodeClass
        {
            get;
        }

        /// <summary>Property dbType: Database type, value: MySQL PostgreSQL Oracle.</summary>
        [JsiiProperty(name: "dbType", typeJson: "{\"primitive\":\"string\"}")]
        string DbType
        {
            get;
        }

        /// <summary>Property dbVersion: The version of the database.</summary>
        /// <remarks>
        /// Valid values:
        /// MySQL: 5.6, 5.7 or 8.0
        /// PostgreSQL: 11
        /// Oracle: 11
        /// </remarks>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"primitive\":\"string\"}")]
        string DbVersion
        {
            get;
        }

        /// <summary>Property payType: The billing method of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}")]
        string PayType
        {
            get;
        }

        /// <summary>Property autoRenewPeriod: Set the cluster auto renewal time.</summary>
        /// <remarks>
        /// Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        /// </remarks>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.</summary>
        /// <remarks>
        /// LATEST: Permanently keep the last backup (automatic backup before deletion).
        /// NONE: The backup set is not retained when the cluster is deleted.
        /// When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
        /// Note: This parameter takes effect only when the value of DBType is MySQL.
        /// </remarks>
        [JsiiProperty(name: "backupRetentionPolicyOnClusterDeletion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BackupRetentionPolicyOnClusterDeletion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cloneDataPoint: The time point of data to be cloned.</summary>
        /// <remarks>
        /// Valid values:
        /// LATEST: clones data of the latest time point.
        /// <BackupID xmlns="http://www.w3.org/1999/xhtml"></BackupID>: clones historical backup data. Specify the ID of the specific backup set.
        /// <Timestamp xmlns="http://www.w3.org/1999/xhtml"></Timestamp>: clones data of a historical time point. Specify the specific time in
        /// the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
        /// Default value: LATEST.
        /// Note
        /// This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
        /// If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
        /// </remarks>
        [JsiiProperty(name: "cloneDataPoint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CloneDataPoint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterNetworkType: The network type of the cluster.</summary>
        /// <remarks>
        /// Currently, only VPC is supported. Default value: VPC.
        /// </remarks>
        [JsiiProperty(name: "clusterNetworkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ClusterNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property creationCategory: Cluster series.</summary>
        /// <remarks>
        /// The value could be Normal (standard version).
        /// </remarks>
        [JsiiProperty(name: "creationCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CreationCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Normal: creates an ApsaraDB for POLARDB cluster.
        /// CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
        /// CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
        /// for POLARDB cluster.
        /// MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
        /// CreateGdnStandby: Create a secondary cluster.
        /// Default value: Normal.
        /// Note:
        /// When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
        /// When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
        /// </remarks>
        [JsiiProperty(name: "creationOption", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CreationOption
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
        /// <remarks>
        /// The description must comply with the following rules:
        /// It must start with a Chinese character or an English letter.
        /// It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
        /// It cannot start with http:// or https://.
        /// It must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbClusterDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.</summary>
        [JsiiProperty(name: "dbClusterParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.</summary>
        /// <remarks>
        /// This is default value.
        /// Other pickable value range is from -12:00 to +13:00, for example, 00:00.
        /// Note: This parameter takes effect only when DBType is MySQL.
        /// </remarks>
        [JsiiProperty(name: "defaultTimeZone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DefaultTimeZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gdnId: The ID of the Global Database Network (GDN).</summary>
        /// <remarks>
        /// Note: This parameter is required when the CreationOption is CreateGdnStandby.
        /// </remarks>
        [JsiiProperty(name: "gdnId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? GdnId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.</summary>
        /// <remarks>
        /// Note: This parameter takes effect only when the value of DBType is MySQL.
        /// </remarks>
        [JsiiProperty(name: "lowerCaseTableNames", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? LowerCaseTableNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.</summary>
        /// <remarks>
        /// Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        /// </remarks>
        [JsiiProperty(name: "maintainTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MaintainTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period of the cluster in month.</summary>
        /// <remarks>
        /// Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.</summary>
        /// <remarks>
        /// Normal: manually renews the cluster.
        /// NotRenewal: does not renew the cluster.
        /// Default value: Normal.
        /// Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
        /// but only sends an SMS message three days before the cluster expires to remind you
        /// that the cluster is not renewed.
        /// </remarks>
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RenewalStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupIds: The ID of the security group.</summary>
        /// <remarks>
        /// You can add up to three security groups to a cluster.
        /// </remarks>
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? SecurityGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpList: The whitelist of the Apsara PolarDB cluster.</summary>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.</summary>
        /// <remarks>
        /// Note
        /// This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
        /// This parameter is required if the CreationOption parameter is not set to Normal.
        /// </remarks>
        [JsiiProperty(name: "sourceResourceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceResourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).</summary>
        /// <remarks>
        /// Valid values:
        /// true: enable TDE
        /// false: disable TDE (default)
        /// Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        /// </remarks>
        [JsiiProperty(name: "tdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TdeStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VPC to connect to.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch to connect to.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The zone ID of the cluster.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query available zones.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::POLARDB::DBCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbNodeClass: The node specifications of the cluster.</summary>
            /// <remarks>
            /// For more information, see Specifications and pricing.
            /// </remarks>
            [JsiiProperty(name: "dbNodeClass", typeJson: "{\"primitive\":\"string\"}")]
            public string DbNodeClass
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbType: Database type, value: MySQL PostgreSQL Oracle.</summary>
            [JsiiProperty(name: "dbType", typeJson: "{\"primitive\":\"string\"}")]
            public string DbType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbVersion: The version of the database.</summary>
            /// <remarks>
            /// Valid values:
            /// MySQL: 5.6, 5.7 or 8.0
            /// PostgreSQL: 11
            /// Oracle: 11
            /// </remarks>
            [JsiiProperty(name: "dbVersion", typeJson: "{\"primitive\":\"string\"}")]
            public string DbVersion
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property payType: The billing method of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Postpaid: pay-as-you-go
            /// Prepaid: subscription
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}")]
            public string PayType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property autoRenewPeriod: Set the cluster auto renewal time.</summary>
            /// <remarks>
            /// Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? AutoRenewPeriod
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.</summary>
            /// <remarks>
            /// LATEST: Permanently keep the last backup (automatic backup before deletion).
            /// NONE: The backup set is not retained when the cluster is deleted.
            /// When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
            /// Note: This parameter takes effect only when the value of DBType is MySQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupRetentionPolicyOnClusterDeletion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BackupRetentionPolicyOnClusterDeletion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property cloneDataPoint: The time point of data to be cloned.</summary>
            /// <remarks>
            /// Valid values:
            /// LATEST: clones data of the latest time point.
            /// <BackupID xmlns="http://www.w3.org/1999/xhtml"></BackupID>: clones historical backup data. Specify the ID of the specific backup set.
            /// <Timestamp xmlns="http://www.w3.org/1999/xhtml"></Timestamp>: clones data of a historical time point. Specify the specific time in
            /// the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
            /// Default value: LATEST.
            /// Note
            /// This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
            /// If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloneDataPoint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CloneDataPoint
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property clusterNetworkType: The network type of the cluster.</summary>
            /// <remarks>
            /// Currently, only VPC is supported. Default value: VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterNetworkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ClusterNetworkType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property creationCategory: Cluster series.</summary>
            /// <remarks>
            /// The value could be Normal (standard version).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "creationCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CreationCategory
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Normal: creates an ApsaraDB for POLARDB cluster.
            /// CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
            /// CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
            /// for POLARDB cluster.
            /// MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
            /// CreateGdnStandby: Create a secondary cluster.
            /// Default value: Normal.
            /// Note:
            /// When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
            /// When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "creationOption", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CreationOption
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
            /// <remarks>
            /// The description must comply with the following rules:
            /// It must start with a Chinese character or an English letter.
            /// It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
            /// It cannot start with http:// or https://.
            /// It must be 2 to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbClusterDescription
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty\"}]}}", isOptional: true)]
            public object? DbClusterParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.</summary>
            /// <remarks>
            /// This is default value.
            /// Other pickable value range is from -12:00 to +13:00, for example, 00:00.
            /// Note: This parameter takes effect only when DBType is MySQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultTimeZone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DefaultTimeZone
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property gdnId: The ID of the Global Database Network (GDN).</summary>
            /// <remarks>
            /// Note: This parameter is required when the CreationOption is CreateGdnStandby.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gdnId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GdnId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.</summary>
            /// <remarks>
            /// Note: This parameter takes effect only when the value of DBType is MySQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lowerCaseTableNames", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? LowerCaseTableNames
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.</summary>
            /// <remarks>
            /// Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maintainTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MaintainTime
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property period: The subscription period of the cluster in month.</summary>
            /// <remarks>
            /// Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.</summary>
            /// <remarks>
            /// Normal: manually renews the cluster.
            /// NotRenewal: does not renew the cluster.
            /// Default value: Normal.
            /// Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
            /// but only sends an SMS message three days before the cluster expires to remind you
            /// that the cluster is not renewed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RenewalStatus
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupIds: The ID of the security group.</summary>
            /// <remarks>
            /// You can add up to three security groups to a cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? SecurityGroupIds
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property securityIpList: The whitelist of the Apsara PolarDB cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityIpList
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.</summary>
            /// <remarks>
            /// Note
            /// This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
            /// This parameter is required if the CreationOption parameter is not set to Normal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceResourceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceResourceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).</summary>
            /// <remarks>
            /// Valid values:
            /// true: enable TDE
            /// false: disable TDE (default)
            /// Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TdeStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC to connect to.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch to connect to.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property zoneId: The zone ID of the cluster.</summary>
            /// <remarks>
            /// You can call the DescribeRegions operation to query available zones.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ZoneId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
