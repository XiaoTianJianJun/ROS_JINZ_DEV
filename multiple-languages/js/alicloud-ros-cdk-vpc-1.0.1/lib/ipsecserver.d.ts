import * as ros from '@alicloud/ros-cdk-core';
import { RosIpsecServer } from './vpc.generated';
export { RosIpsecServer as IpsecServerProperty };
/**
 * Properties for defining a `ALIYUN::VPC::IpsecServer`
 */
export interface IpsecServerProps {
    /**
     * Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
     */
    readonly clientIpPool: string | ros.IResolvable;
    /**
     * Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
     */
    readonly localSubnet: string | ros.IResolvable;
    /**
     * Property vpnGatewayId: VPN gateway instance ID.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
     * false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
     */
    readonly effectImmediately?: boolean | ros.IResolvable;
    /**
     * Property ikeConfig: Negotiation parameter configuration in the first phase.
     */
    readonly ikeConfig?: RosIpsecServer.IkeConfigProperty | ros.IResolvable;
    /**
     * Property ipsecConfig: Negotiation parameter configuration in the second phase.
     */
    readonly ipsecConfig?: RosIpsecServer.IpsecConfigProperty | ros.IResolvable;
    /**
     * Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
     */
    readonly ipsecServerName?: string | ros.IResolvable;
    /**
     * Property psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
     */
    readonly psk?: string | ros.IResolvable;
    /**
     * Property pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
     */
    readonly pskEnabled?: boolean | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::IpsecServer`
 */
export declare class IpsecServer extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute IpsecServerId: IPsec server ID.
     */
    readonly attrIpsecServerId: ros.IResolvable;
    /**
     * Attribute IpsecServerName: IPsec server name.
     */
    readonly attrIpsecServerName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::IpsecServer`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpsecServerProps, enableResourcePropertyConstraint?: boolean);
}
