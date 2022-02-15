using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>A ROS template type:  `ALIYUN::CMS::MetricRuleTemplate`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplateProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosMetricRuleTemplate : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CMS::MetricRuleTemplate`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosMetricRuleTemplate(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMetricRuleTemplateProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMetricRuleTemplate(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMetricRuleTemplate(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Id: Alarm template ID.
        /// </remarks>
        [JsiiProperty(name: "attrId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the alert template.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Name
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: alertTemplates: Valid values of N: 0 to 200.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "alertTemplates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? AlertTemplates
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the alert template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Description
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
        /// to obtain information about the alert templates. The combination of version and ID
        /// uniquely identifies an alert template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RestVersion
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: templateId: The ID of the alert template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? TemplateId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IAlertTemplatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty")]
        public interface IAlertTemplatesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: The abbreviation of the service name.Value including but not limited to:
            /// ecs: Elastic Compute Service (ECS) instances provided by Alibaba Cloud and hosts not
            /// provided by Alibaba Cloud
            /// rds: ApsaraDB for RDS
            /// ads: AnalyticDB
            /// slb: Server Load Balancer (SLB)
            /// vpc: Virtual Private Cloud (VPC)
            /// apigateway: API Gateway
            /// cdn: CDN: Alibaba Cloud Content Delivery Network (CDN)
            /// cs: Container Service for Swarm
            /// dcdn: Dynamic Route for CDN
            /// ddos: Anti-DDoS Pro
            /// eip: Elastic IP Address (EIP)
            /// elasticsearch: Elasticsearch
            /// emr: E-MapReduce
            /// ess: Auto Scaling
            /// hbase: ApsaraDB for Hbase
            /// iot_edge: IoT Edge
            /// k8s_pod: pods in Container Service for Kubernetes
            /// kvstore_sharding: ApsaraDB for Redis of the cluster architecture
            /// kvstore_splitrw: ApsaraDB for Redis of the read/write splitting architecture
            /// kvstore_standard: ApsaraDB for Redis of the standard architecture
            /// memcache: ApsaraDB for Memcache
            /// mns: Message Service (MNS)
            /// mongodb: ApsaraDB for MongoDB of the replica set architecture
            /// mongodb_cluster: ApsaraDB for MongoDB of the cluster architecture
            /// mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
            /// mq_topic: MNS topics
            /// ocs: ApsaraDB for Memcache of earlier versions
            /// opensearch: Open Search
            /// oss: Object Storage Service (OSS)
            /// polardb: PolarDB
            /// petadata: HybridDB for MySQL
            /// scdn: Secure Content Delivery Network (SCDN)
            /// sharebandwidthpackages: EIP Bandwidth Plan
            /// sls: Log Service
            /// vpn: VPN Gateway
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Category
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: metricName: The name of the metric.
            /// Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
            /// </remarks>
            [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object MetricName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespace: The namespace of the service.
            /// Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
            /// </remarks>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Namespace
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: The name of the alert rule.
            /// </remarks>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object RuleName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: escalations: undefined
            /// </remarks>
            [JsiiProperty(name: "escalations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.EscalationsProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Escalations
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The aggregation period of the monitoring data. Unit: seconds.
            /// The default value is the lowest frequency at which the metric is polled. Typically,
            /// you do not need to specify the aggregation period.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Period
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: selector: The dimension of the alert. It is an extended field.
            /// </remarks>
            [JsiiProperty(name: "selector", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Selector
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: webhook: The callback URL to which a POST request is sent when an alert is triggered based
            /// on the alert rule.
            /// </remarks>
            [JsiiProperty(name: "webhook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Webhook
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IAlertTemplatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.IAlertTemplatesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: category: The abbreviation of the service name.Value including but not limited to:
                /// ecs: Elastic Compute Service (ECS) instances provided by Alibaba Cloud and hosts not
                /// provided by Alibaba Cloud
                /// rds: ApsaraDB for RDS
                /// ads: AnalyticDB
                /// slb: Server Load Balancer (SLB)
                /// vpc: Virtual Private Cloud (VPC)
                /// apigateway: API Gateway
                /// cdn: CDN: Alibaba Cloud Content Delivery Network (CDN)
                /// cs: Container Service for Swarm
                /// dcdn: Dynamic Route for CDN
                /// ddos: Anti-DDoS Pro
                /// eip: Elastic IP Address (EIP)
                /// elasticsearch: Elasticsearch
                /// emr: E-MapReduce
                /// ess: Auto Scaling
                /// hbase: ApsaraDB for Hbase
                /// iot_edge: IoT Edge
                /// k8s_pod: pods in Container Service for Kubernetes
                /// kvstore_sharding: ApsaraDB for Redis of the cluster architecture
                /// kvstore_splitrw: ApsaraDB for Redis of the read/write splitting architecture
                /// kvstore_standard: ApsaraDB for Redis of the standard architecture
                /// memcache: ApsaraDB for Memcache
                /// mns: Message Service (MNS)
                /// mongodb: ApsaraDB for MongoDB of the replica set architecture
                /// mongodb_cluster: ApsaraDB for MongoDB of the cluster architecture
                /// mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
                /// mq_topic: MNS topics
                /// ocs: ApsaraDB for Memcache of earlier versions
                /// opensearch: Open Search
                /// oss: Object Storage Service (OSS)
                /// polardb: PolarDB
                /// petadata: HybridDB for MySQL
                /// scdn: Secure Content Delivery Network (SCDN)
                /// sharebandwidthpackages: EIP Bandwidth Plan
                /// sls: Log Service
                /// vpn: VPN Gateway
                /// </remarks>
                [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Category
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: metricName: The name of the metric.
                /// Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
                /// </remarks>
                [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object MetricName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: namespace: The namespace of the service.
                /// Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
                /// </remarks>
                [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Namespace
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleName: The name of the alert rule.
                /// </remarks>
                [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object RuleName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: escalations: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "escalations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.EscalationsProperty\"}]}}", isOptional: true)]
                public object? Escalations
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: period: The aggregation period of the monitoring data. Unit: seconds.
                /// The default value is the lowest frequency at which the metric is polled. Typically,
                /// you do not need to specify the aggregation period.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Period
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: selector: The dimension of the alert. It is an extended field.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "selector", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Selector
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: webhook: The callback URL to which a POST request is sent when an alert is triggered based
                /// on the alert rule.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "webhook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Webhook
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty")]
        public class AlertTemplatesProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.IAlertTemplatesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: The abbreviation of the service name.Value including but not limited to:
            /// ecs: Elastic Compute Service (ECS) instances provided by Alibaba Cloud and hosts not
            /// provided by Alibaba Cloud
            /// rds: ApsaraDB for RDS
            /// ads: AnalyticDB
            /// slb: Server Load Balancer (SLB)
            /// vpc: Virtual Private Cloud (VPC)
            /// apigateway: API Gateway
            /// cdn: CDN: Alibaba Cloud Content Delivery Network (CDN)
            /// cs: Container Service for Swarm
            /// dcdn: Dynamic Route for CDN
            /// ddos: Anti-DDoS Pro
            /// eip: Elastic IP Address (EIP)
            /// elasticsearch: Elasticsearch
            /// emr: E-MapReduce
            /// ess: Auto Scaling
            /// hbase: ApsaraDB for Hbase
            /// iot_edge: IoT Edge
            /// k8s_pod: pods in Container Service for Kubernetes
            /// kvstore_sharding: ApsaraDB for Redis of the cluster architecture
            /// kvstore_splitrw: ApsaraDB for Redis of the read/write splitting architecture
            /// kvstore_standard: ApsaraDB for Redis of the standard architecture
            /// memcache: ApsaraDB for Memcache
            /// mns: Message Service (MNS)
            /// mongodb: ApsaraDB for MongoDB of the replica set architecture
            /// mongodb_cluster: ApsaraDB for MongoDB of the cluster architecture
            /// mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
            /// mq_topic: MNS topics
            /// ocs: ApsaraDB for Memcache of earlier versions
            /// opensearch: Open Search
            /// oss: Object Storage Service (OSS)
            /// polardb: PolarDB
            /// petadata: HybridDB for MySQL
            /// scdn: Secure Content Delivery Network (SCDN)
            /// sharebandwidthpackages: EIP Bandwidth Plan
            /// sls: Log Service
            /// vpn: VPN Gateway
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Category
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: metricName: The name of the metric.
            /// Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
            /// </remarks>
            [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MetricName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespace: The namespace of the service.
            /// Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
            /// </remarks>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: The name of the alert rule.
            /// </remarks>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: escalations: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "escalations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.EscalationsProperty\"}]}}", isOptional: true)]
            public object? Escalations
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The aggregation period of the monitoring data. Unit: seconds.
            /// The default value is the lowest frequency at which the metric is polled. Typically,
            /// you do not need to specify the aggregation period.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: selector: The dimension of the alert. It is an extended field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "selector", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Selector
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: webhook: The callback URL to which a POST request is sent when an alert is triggered based
            /// on the alert rule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "webhook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Webhook
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ICriticalProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.CriticalProperty")]
        public interface ICriticalProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
            /// GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// GreaterThanThreshold: greater than the threshold
            /// LessThanOrEqualToThreshold: less than or equal to the threshold
            /// LessThanThreshold: less than the threshold
            /// NotEqualToThreshold: not equal to the threshold
            /// GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// LessThanYesterday: less than the metric value at the same time yesterday
            /// GreaterThanLastWeek: greater than the metric value at the same time last week
            /// LessThanLastWeek: less than the metric value at the same time last week
            /// GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ICriticalProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.CriticalProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.ICriticalProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
                /// GreaterThanOrEqualToThreshold: greater than or equal to the threshold
                /// GreaterThanThreshold: greater than the threshold
                /// LessThanOrEqualToThreshold: less than or equal to the threshold
                /// LessThanThreshold: less than the threshold
                /// NotEqualToThreshold: not equal to the threshold
                /// GreaterThanYesterday: greater than the metric value at the same time yesterday
                /// LessThanYesterday: less than the metric value at the same time yesterday
                /// GreaterThanLastWeek: greater than the metric value at the same time last week
                /// LessThanLastWeek: less than the metric value at the same time last week
                /// GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
                /// LessThanLastPeriod: less than the metric value in the last monitoring cycle
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical method for alerts.
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The threshold for alerts.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.CriticalProperty")]
        public class CriticalProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.ICriticalProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
            /// GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// GreaterThanThreshold: greater than the threshold
            /// LessThanOrEqualToThreshold: less than or equal to the threshold
            /// LessThanThreshold: less than the threshold
            /// NotEqualToThreshold: not equal to the threshold
            /// GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// LessThanYesterday: less than the metric value at the same time yesterday
            /// GreaterThanLastWeek: greater than the metric value at the same time last week
            /// LessThanLastWeek: less than the metric value at the same time last week
            /// GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IEscalationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.EscalationsProperty")]
        public interface IEscalationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: critical: undefined
            /// </remarks>
            [JsiiProperty(name: "critical", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.CriticalProperty\"}]}}")]
            object Critical
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: info: undefined
            /// </remarks>
            [JsiiProperty(name: "info", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.InfoProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Info
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: warn: undefined
            /// </remarks>
            [JsiiProperty(name: "warn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.WarnProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Warn
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IEscalationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.EscalationsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.IEscalationsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: critical: undefined
                /// </remarks>
                [JsiiProperty(name: "critical", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.CriticalProperty\"}]}}")]
                public object Critical
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: info: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "info", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.InfoProperty\"}]}}", isOptional: true)]
                public object? Info
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: warn: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "warn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.WarnProperty\"}]}}", isOptional: true)]
                public object? Warn
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.EscalationsProperty")]
        public class EscalationsProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.IEscalationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: critical: undefined
            /// </remarks>
            [JsiiProperty(name: "critical", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.CriticalProperty\"}]}}")]
            public object Critical
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: info: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "info", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.InfoProperty\"}]}}", isOptional: true)]
            public object? Info
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: warn: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "warn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.WarnProperty\"}]}}", isOptional: true)]
            public object? Warn
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.InfoProperty")]
        public interface IInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
            /// GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// GreaterThanThreshold: greater than the threshold
            /// LessThanOrEqualToThreshold: less than or equal to the threshold
            /// LessThanThreshold: less than the threshold
            /// NotEqualToThreshold: not equal to the threshold
            /// GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// LessThanYesterday: less than the metric value at the same time yesterday
            /// GreaterThanLastWeek: greater than the metric value at the same time last week
            /// LessThanLastWeek: less than the metric value at the same time last week
            /// GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.InfoProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.IInfoProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
                /// GreaterThanOrEqualToThreshold: greater than or equal to the threshold
                /// GreaterThanThreshold: greater than the threshold
                /// LessThanOrEqualToThreshold: less than or equal to the threshold
                /// LessThanThreshold: less than the threshold
                /// NotEqualToThreshold: not equal to the threshold
                /// GreaterThanYesterday: greater than the metric value at the same time yesterday
                /// LessThanYesterday: less than the metric value at the same time yesterday
                /// GreaterThanLastWeek: greater than the metric value at the same time last week
                /// LessThanLastWeek: less than the metric value at the same time last week
                /// GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
                /// LessThanLastPeriod: less than the metric value in the last monitoring cycle
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical method for alerts.
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The threshold for alerts.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.InfoProperty")]
        public class InfoProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.IInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
            /// GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// GreaterThanThreshold: greater than the threshold
            /// LessThanOrEqualToThreshold: less than or equal to the threshold
            /// LessThanThreshold: less than the threshold
            /// NotEqualToThreshold: not equal to the threshold
            /// GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// LessThanYesterday: less than the metric value at the same time yesterday
            /// GreaterThanLastWeek: greater than the metric value at the same time last week
            /// LessThanLastWeek: less than the metric value at the same time last week
            /// GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IWarnProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.WarnProperty")]
        public interface IWarnProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
            /// GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// GreaterThanThreshold: greater than the threshold
            /// LessThanOrEqualToThreshold: less than or equal to the threshold
            /// LessThanThreshold: less than the threshold
            /// NotEqualToThreshold: not equal to the threshold
            /// GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// LessThanYesterday: less than the metric value at the same time yesterday
            /// GreaterThanLastWeek: greater than the metric value at the same time last week
            /// LessThanLastWeek: less than the metric value at the same time last week
            /// GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IWarnProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.WarnProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.IWarnProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
                /// GreaterThanOrEqualToThreshold: greater than or equal to the threshold
                /// GreaterThanThreshold: greater than the threshold
                /// LessThanOrEqualToThreshold: less than or equal to the threshold
                /// LessThanThreshold: less than the threshold
                /// NotEqualToThreshold: not equal to the threshold
                /// GreaterThanYesterday: greater than the metric value at the same time yesterday
                /// LessThanYesterday: less than the metric value at the same time yesterday
                /// GreaterThanLastWeek: greater than the metric value at the same time last week
                /// LessThanLastWeek: less than the metric value at the same time last week
                /// GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
                /// LessThanLastPeriod: less than the metric value in the last monitoring cycle
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical method for alerts.
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The threshold for alerts.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.WarnProperty")]
        public class WarnProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTemplate.IWarnProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
            /// GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// GreaterThanThreshold: greater than the threshold
            /// LessThanOrEqualToThreshold: less than or equal to the threshold
            /// LessThanThreshold: less than the threshold
            /// NotEqualToThreshold: not equal to the threshold
            /// GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// LessThanYesterday: less than the metric value at the same time yesterday
            /// GreaterThanLastWeek: greater than the metric value at the same time last week
            /// LessThanLastWeek: less than the metric value at the same time last week
            /// GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get;
                set;
            }
        }
    }
}
