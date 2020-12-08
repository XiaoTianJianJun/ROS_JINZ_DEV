import * as ros from '@alicloud/ros-cdk-core';
import { RosTrailLogging } from './actiontrail.generated';
export { RosTrailLogging as TrailLoggingProperty };
/**
 * Properties for defining a `ALIYUN::ACTIONTRAIL::TrailLogging`
 */
export interface TrailLoggingProps {
    /**
     * @Property enable: Whether to enable the trail logging.
     */
    readonly enable: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the trail to be enabled.
     */
    readonly name: string;
}
/**
 * A ROS resource type:  `ALIYUN::ACTIONTRAIL::TrailLogging`
 */
export declare class TrailLogging extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute IsLogging: Indicates whether the trail is logging API invocations.
     */
    readonly attrIsLogging: any;
    /**
     * @Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
     */
    readonly attrLatestDeliveryError: any;
    /**
     * @Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.
     */
    readonly attrLatestDeliveryTime: any;
    /**
     * @Attribute StartLoggingTime: The most recent date and time when the user enables the trail.
     */
    readonly attrStartLoggingTime: any;
    /**
     * @Attribute StopLoggingTime: The most recent date and time when the user disables the trail.
     */
    readonly attrStopLoggingTime: any;
    /**
     * Create a new `ALIYUN::ACTIONTRAIL::TrailLogging`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrailLoggingProps, enableResourcePropertyConstraint?: boolean);
}
