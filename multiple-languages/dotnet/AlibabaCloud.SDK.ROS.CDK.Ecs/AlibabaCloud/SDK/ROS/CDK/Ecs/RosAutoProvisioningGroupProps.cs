using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::AutoProvisioningGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosAutoProvisioningGroupProps")]
    public class RosAutoProvisioningGroupProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosAutoProvisioningGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
        /// of the following three parts:
        /// The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
        /// The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
        /// The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
        /// </remarks>
        [JsiiProperty(name: "totalTargetCapacity", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TotalTargetCapacity
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
        /// in length. It must start with a letter but cannot start with http:// or https://.
        /// It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoProvisioningGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoProvisioningGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoProvisioningGroupType: The type of the auto provisioning group. Valid values:
        /// request: One-time delivery. After the auto provisioning group is started, it only attempts
        /// to create an instance cluster once. If the cluster fails to be created, the group
        /// does not try again.
        /// maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
        /// is started, it continuously attempts to create and maintain the instance cluster.
        /// The auto provisioning group compares the real-time and target capacity of the cluster.
        /// If the cluster does not meet the target capacity, the group will create instances
        /// until the cluster meets the target capacity.
        /// Default value: maintain
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoProvisioningGroupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoProvisioningGroupType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultTargetCapacityType: The type of supplemental instances. When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
        /// the capacity requirements. Valid values:
        /// PayAsYouGo: Pay-as-you-go instances.
        /// Spot: Preemptible instances.
        /// Default value: Spot
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultTargetCapacityType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DefaultTargetCapacityType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the auto provisioning group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of
        /// the auto provisioning group exceeds the target capacity. Valid values:
        /// no-termination: Excess preemptible instances are not shut down.
        /// termination: Excess preemptible instances are to be shut down. The action to be performed on these
        /// shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
        /// Default value: no-termination
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "excessCapacityTerminationPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ExcessCapacityTerminationPolicy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: launchConfiguration:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? LaunchConfiguration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateConfig:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup.LaunchTemplateConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? LaunchTemplateConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
        /// You can call the DescribeLaunchTemplates operation to query available instance launch templates.
        /// An auto provisioning group can be associated with only one instance launch template.
        /// But you can configure multiple extended configurations for the launch template through
        /// the LaunchTemplateConfig parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LaunchTemplateId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateVersion: The version of the instance launch template associated with the auto provisioning
        /// group. You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchTemplateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LaunchTemplateVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
        /// If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxSpotPrice", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MaxSpotPrice
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
        /// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
        /// types of the lowest cost to create instances.
        /// prioritized: The priority-based policy the auto provisioning group follows to create instances.
        /// The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
        /// Default value: lowest-price
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payAsYouGoAllocationStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PayAsYouGoAllocationStrategy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payAsYouGoTargetCapacity", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PayAsYouGoTargetCapacity
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: spotAllocationStrategy: The scale-out policy for preemptible instances. Valid values:
        /// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
        /// types of the lowest cost to create instances.
        /// diversified: The distribution balancing policy the auto provisioning group follows to evenly create
        /// instances across zones specified in multiple extended template configurations.
        /// Default value: lowest-price
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotAllocationStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SpotAllocationStrategy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. Value values:
        /// stop: stops preemptible instances.
        /// terminate: releases preemptible instances.
        /// Default value: stop
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotInstanceInterruptionBehavior", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SpotInstanceInterruptionBehavior
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. The auto provisioning group selects instance types of the lowest cost to create
        /// instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotInstancePoolsToUseCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? SpotInstancePoolsToUseCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotTargetCapacity", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SpotTargetCapacity
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: terminateInstances: Specifies whether to release instances of the auto provisioning group. Valid values:
        /// true
        /// false
        /// Default: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "terminateInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TerminateInstances
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.
        /// Valid values:
        /// true: shuts down preemptible instances. The action to be performed on these shutdown instances
        /// is specified by the SpotInstanceInterruptionBehavior parameter.
        /// false: does not shut down preemptible instances.
        /// Default: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "terminateInstancesWithExpiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TerminateInstancesWithExpiration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: validFrom: The time when the auto provisioning group is started. The period of time between this
        /// point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
        /// By default, an auto provisioning group is immediately started after creation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "validFrom", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ValidFrom
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: validUntil: The time when the auto provisioning group expires. The period of time between this
        /// point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
        /// By default, an auto provisioning group never expires.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "validUntil", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ValidUntil
        {
            get;
            set;
        }
    }
}
