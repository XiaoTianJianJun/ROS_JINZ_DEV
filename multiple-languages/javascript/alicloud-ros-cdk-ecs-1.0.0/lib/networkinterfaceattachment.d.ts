import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterfaceAttachment } from './ecs.generated';
export { RosNetworkInterfaceAttachment as NetworkInterfaceAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`
 */
export interface NetworkInterfaceAttachmentProps {
    /**
     * @Property instanceId: ECS instance id
     */
    readonly instanceId: string;
    /**
     * @Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string;
    /**
     * @Property trunkNetworkInstanceId: undefined
     */
    readonly trunkNetworkInstanceId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::NetworkInterfaceAttachment`
 */
export declare class NetworkInterfaceAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: any;
    /**
     * @Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
     */
    readonly attrTrunkNetworkInstanceId: any;
    /**
     * Create a new `ALIYUN::ECS::NetworkInterfaceAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfaceAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
