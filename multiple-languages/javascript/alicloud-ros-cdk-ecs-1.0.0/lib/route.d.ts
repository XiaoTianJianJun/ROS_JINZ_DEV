import * as ros from '@alicloud/ros-cdk-core';
import { RosRoute } from './ecs.generated';
export { RosRoute as RouteProperty };
/**
 * Properties for defining a `ALIYUN::ECS::Route`
 */
export interface RouteProps {
    /**
     * @Property destinationCidrBlock: The RouteEntry's target network segment.
     */
    readonly destinationCidrBlock: string;
    /**
     * @Property routeId: RouteId of created route entry.
     */
    readonly routeId: string;
    /**
     * @Property routeTableId: RouteTableId of created route entry.
     */
    readonly routeTableId: string;
    /**
     * @Property nextHopId: The route entry's next hop. When the NextHopList is specified, the value will be ignored.
     */
    readonly nextHopId?: string;
    /**
     * @Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    readonly nextHopList?: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property nextHopType: The next hop type. Available value options: Instance | Tunnel | HaVip | RouterInterface. The default value is Instance.When the NextHopList is specified, the value will be ignored.
     */
    readonly nextHopType?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::Route`
 */
export declare class Route extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ECS::Route`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteProps, enableResourcePropertyConstraint?: boolean);
}
