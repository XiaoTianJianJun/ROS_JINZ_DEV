import * as ros from '@alicloud/ros-cdk-core';
import { RosContainerGroup } from './eci.generated';
export { RosContainerGroup as ContainerGroupProperty };
/**
 * Properties for defining a `ALIYUN::ECI::ContainerGroup`
 */
export interface ContainerGroupProps {
    /**
     * @Property container: The containers that constitute the container group.
     */
    readonly container: Array<RosContainerGroup.ContainerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property containerGroupName: The name of the container group.
     * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
     */
    readonly containerGroupName: string;
    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     */
    readonly securityGroupId: string;
    /**
     * @Property vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
     */
    readonly vSwitchId: string;
    /**
     * @Property activeDeadlineSeconds: The validity period in seconds.
     */
    readonly activeDeadlineSeconds?: number;
    /**
     * @Property autoMatchImageCache: Specifies whether to automatically match the image cache.
     */
    readonly autoMatchImageCache?: boolean | ros.IResolvable;
    /**
     * @Property cpu: CPU size
     */
    readonly cpu?: number;
    /**
     * @Property dnsConfig: The information about DNS configurations.
     */
    readonly dnsConfig?: RosContainerGroup.DnsConfigProperty | ros.IResolvable;
    /**
     * @Property eipInstanceId: Elastic IP ID
     */
    readonly eipInstanceId?: string;
    /**
     * @Property hostAliase: Customize the hostname mapping of a container inside the pod
     */
    readonly hostAliase?: Array<RosContainerGroup.HostAliaseProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
     */
    readonly imageRegistryCredential?: Array<RosContainerGroup.ImageRegistryCredentialProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageSnapshotId: Image cache ID or snapshot ID.
     */
    readonly imageSnapshotId?: string;
    /**
     * @Property initContainer: The containers that constitute the container group for initializing.
     */
    readonly initContainer?: Array<RosContainerGroup.InitContainerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceType: The type of the ECS instance.
     */
    readonly instanceType?: string;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses.
     */
    readonly ipv6AddressCount?: number;
    /**
     * @Property memory: memory size
     */
    readonly memory?: number;
    /**
     * @Property ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
     */
    readonly ramRoleName?: string;
    /**
     * @Property restartPolicy: The policy for restarting the instance. Default value: Always.
     */
    readonly restartPolicy?: string;
    /**
     * @Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
     * Currently only two Sysctl keyNames are supported:
     * Kernel.shm_rmid_forced
     * Kernel.msgmax
     */
    readonly securityContextSysctl?: Array<RosContainerGroup.SecurityContextSysctlProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property slsEnable: Enable user log collection. The default is False.
     */
    readonly slsEnable?: boolean | ros.IResolvable;
    /**
     * @Property spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
     */
    readonly spotPriceLimit?: number;
    /**
     * @Property spotStrategy: Instance preemption strategy.
     * Ranges:
     * NoSpot (default): normal pay-as-you-go instances.
     * SpotWithPriceLimit: Preemptive instance that sets a cap price.
     * SpotAsPriceGo: The system automatically bids, following the current market actual price.
     */
    readonly spotStrategy?: string;
    /**
     * @Property tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
     */
    readonly terminationGracePeriodSeconds?: number;
    /**
     * @Property volume: The data volume. You can specify a maximum of 20 data volumes.
     */
    readonly volume?: Array<RosContainerGroup.VolumeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    readonly zoneId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECI::ContainerGroup`
 */
export declare class ContainerGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ContainerGroupId: The ID of the container group.
     */
    readonly attrContainerGroupId: any;
    /**
     * @Attribute ContainerGroupName: The name of the container group.
     */
    readonly attrContainerGroupName: any;
    /**
     * @Attribute EniInstanceId: ENI instance ID.
     */
    readonly attrEniInstanceId: any;
    /**
     * @Attribute InternetIp: Internet IP.
     */
    readonly attrInternetIp: any;
    /**
     * @Attribute IntranetIp: Intranet IP.
     */
    readonly attrIntranetIp: any;
    /**
     * @Attribute Ipv6Address: Ipv6 address.
     */
    readonly attrIpv6Address: any;
    /**
     * @Attribute RegionId: The ID of the region in which the instance resides.
     */
    readonly attrRegionId: any;
    /**
     * @Attribute SecurityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     */
    readonly attrSecurityGroupId: any;
    /**
     * @Attribute VSwitchId: The ID of the VSwitch. Currently, ECI instances can only be deployed in VPCs.
     */
    readonly attrVSwitchId: any;
    /**
     * @Attribute ZoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    readonly attrZoneId: any;
    /**
     * Create a new `ALIYUN::ECI::ContainerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ContainerGroupProps, enableResourcePropertyConstraint?: boolean);
}
