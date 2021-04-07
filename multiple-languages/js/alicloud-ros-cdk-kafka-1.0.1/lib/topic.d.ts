import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './kafka.generated';
export { RosTopic as TopicProperty };
/**
 * Properties for defining a `ALIYUN::KAFKA::Topic`
 */
export interface TopicProps {
    /**
     * Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * You can call the GetInstanceList operation to query instances.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property remark: The description of the topic. The value of this parameter must meet the following
     * requirements:
     * The value can only contain letters, digits, hyphens (-), and underscores (_).
     * The value must be 3 to 64 characters in length.
     */
    readonly remark: string | ros.IResolvable;
    /**
     * Property topic: The name of the topic. The value of this parameter must meet the following requirements:
     * The name can only contain letters, digits, hyphens (-), and underscores (_).
     * The name must be 3 to 64 characters in length, and will be automatically truncated
     * if it contains more characters.
     * The name cannot be modified after being created.
     */
    readonly topic: string | ros.IResolvable;
    /**
     * Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    readonly partitionNum?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::KAFKA::Topic`
 */
export declare class Topic extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
You can call the GetInstanceList operation to query instances.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute Topic: Topic name.
     */
    readonly attrTopic: ros.IResolvable;
    /**
     * Create a new `ALIYUN::KAFKA::Topic`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
