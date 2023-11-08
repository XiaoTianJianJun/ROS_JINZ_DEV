import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './threatdetection.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `DATASOURCE::ThreatDetection::Instances`
 */
export interface InstancesProps {
    /**
     * Property instanceId: The first ID of the resource.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ThreatDetection::Instances`
 */
export declare class Instances extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ThreatDetection::Instances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
