import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancer as LoadBalancerProperty };

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancer`
 */
export interface LoadBalancerProps {

    /**
     * Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * Property addressType: The network type of the CLB instance. Valid values:
     * - **internet** (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
     * - **intranet**: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * Property autoPay: Specifies whether to automatically pay for the subscription Internet-facing CLB instance. Valid values:
     * - **true**: automatically pays for the CLB instance. After you call this operation, the system automatically completes the payment and creates the CLB instance.- **false** (default): After you call the operation, the order is created but the payment is not completed. You can view the pending order in the console. The CLB instance will not be created until you complete the payment.**Note** This parameter is supported only by subscription instances created on the Alibaba Cloud China site.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:- **true**: Automatic renewal is enabled.- **false** (default): Automatic renewal is not enabled. You must renew the instance manually.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required:
     * When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
     * When PeriodUnit = year, the value range is 1-3.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * Property deletionProtection: Whether to enable deletion protection.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property duration: Optional. The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
     * If PricingCycle is year, the value range is 1 to 5.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * Property instanceChargeType: Instance billing method. Valid value:
     * - **PayBySpec** (default): Pay by spec.
     * - **PayByCLCU**: billed by usage.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property internetChargeType: The metering method of the Internet-facing CLB instance. Valid values:
     * - **paybytraffic** (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.
     * - **paybybandwidth**: pay-by-bandwidth.
     * **Note** If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * Property loadBalancerSpec: The specification of the CLB instance. Valid values:
     * - **slb.s1.small**
     * - **slb.s2.small**
     * - **slb.s2.medium**
     * - **slb.s3.small**
     * - **slb.s3.medium**
     * - **slb.s3.large**
     * **Note** If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
     * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you do not need to specify this parameter.
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;

    /**
     * Property masterZoneId: The master zone id to create load balancer instance.
     */
    readonly masterZoneId?: string | ros.IResolvable;

    /**
     * Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    readonly modificationProtectionReason?: string | ros.IResolvable;

    /**
     * Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    readonly modificationProtectionStatus?: string | ros.IResolvable;

    /**
     * Property payType: Optional. The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly slaveZoneId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];

    /**
     * Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::LoadBalancer`
 */
export class LoadBalancer extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AddressIPVersion: IP version
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * Attribute AddressType: The address type of the load balancer. "intranet" or "internet".
     */
    public readonly attrAddressType: ros.IResolvable;

    /**
     * Attribute Bandwidth: The bandwidth for network
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute IpAddress: The ip address of the load balancer.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * Attribute LoadBalancerId: The id of load balance created.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * Attribute LoadBalancerName: Name of created load balancer.
     */
    public readonly attrLoadBalancerName: ros.IResolvable;

    /**
     * Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance
     */
    public readonly attrLoadBalancerSpec: ros.IResolvable;

    /**
     * Attribute MasterZoneId: The master zone id to create load balancer instance.
     */
    public readonly attrMasterZoneId: ros.IResolvable;

    /**
     * Attribute NetworkType: The network type of the load balancer. "vpc" or "classic" network.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute PayType: The billing method of the instance to be created.
     */
    public readonly attrPayType: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SlaveZoneId: The slave zone id to create load balancer instance.
     */
    public readonly attrSlaveZoneId: ros.IResolvable;

    /**
     * Attribute VSwitchId: VSwitch id
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: Vpc id
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLB::LoadBalancer`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLoadBalancer = new RosLoadBalancer(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod,
            resourceGroupId: props.resourceGroupId,
            instanceChargeType: props.instanceChargeType,
            pricingCycle: props.pricingCycle === undefined || props.pricingCycle === null ? 'month' : props.pricingCycle,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            addressIpVersion: props.addressIpVersion,
            duration: props.duration === undefined || props.duration === null ? 1 : props.duration,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            deletionProtection: props.deletionProtection === undefined || props.deletionProtection === null ? false : props.deletionProtection,
            payType: props.payType,
            slaveZoneId: props.slaveZoneId,
            modificationProtectionStatus: props.modificationProtectionStatus,
            internetChargeType: props.internetChargeType === undefined || props.internetChargeType === null ? 'paybytraffic' : props.internetChargeType,
            loadBalancerSpec: props.loadBalancerSpec,
            loadBalancerName: props.loadBalancerName,
            vpcId: props.vpcId,
            bandwidth: props.bandwidth === undefined || props.bandwidth === null ? 1 : props.bandwidth,
            modificationProtectionReason: props.modificationProtectionReason,
            addressType: props.addressType === undefined || props.addressType === null ? 'internet' : props.addressType,
            tags: props.tags,
            masterZoneId: props.masterZoneId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancer;
        this.attrAddressIpVersion = rosLoadBalancer.attrAddressIpVersion;
        this.attrAddressType = rosLoadBalancer.attrAddressType;
        this.attrBandwidth = rosLoadBalancer.attrBandwidth;
        this.attrIpAddress = rosLoadBalancer.attrIpAddress;
        this.attrLoadBalancerId = rosLoadBalancer.attrLoadBalancerId;
        this.attrLoadBalancerName = rosLoadBalancer.attrLoadBalancerName;
        this.attrLoadBalancerSpec = rosLoadBalancer.attrLoadBalancerSpec;
        this.attrMasterZoneId = rosLoadBalancer.attrMasterZoneId;
        this.attrNetworkType = rosLoadBalancer.attrNetworkType;
        this.attrOrderId = rosLoadBalancer.attrOrderId;
        this.attrPayType = rosLoadBalancer.attrPayType;
        this.attrResourceGroupId = rosLoadBalancer.attrResourceGroupId;
        this.attrSlaveZoneId = rosLoadBalancer.attrSlaveZoneId;
        this.attrVSwitchId = rosLoadBalancer.attrVSwitchId;
        this.attrVpcId = rosLoadBalancer.attrVpcId;
    }
}
