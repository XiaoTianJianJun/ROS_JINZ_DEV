import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::Lindorm::Instances`
 */
export interface RosInstancesProps {
    /**
     * @Property instanceIds: The list of the instance id.
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property queryStr: Instance name keyword, which can be used for fuzzy search.
     */
    readonly queryStr?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The resource group id of lindorm instance.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceType: The type of lindorm instance.
     */
    readonly serviceType?: string | ros.IResolvable;
    /**
     * @Property supportEngine: Database engine types supported by the queried instance.
     * 1: Support search engines.
     * 2: Support timing engine.
     * 4: Support wide table engine.
     * 8: Support file engine.
     * Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
     */
    readonly supportEngine?: number | ros.IResolvable;
    /**
     * @Property tags: Tags of lindorm instance.
     */
    readonly tags?: RosInstances.TagsProperty[];
}
/**
 * A ROS template type:  `DATASOURCE::Lindorm::Instances`
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::Lindorm::Instances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceIds: The list of The instance list.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The detail list of The instance.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceIds: The list of the instance id.
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property queryStr: Instance name keyword, which can be used for fuzzy search.
     */
    queryStr: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The resource group id of lindorm instance.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceType: The type of lindorm instance.
     */
    serviceType: string | ros.IResolvable | undefined;
    /**
     * @Property supportEngine: Database engine types supported by the queried instance.
     * 1: Support search engines.
     * 2: Support timing engine.
     * 4: Support wide table engine.
     * 8: Support file engine.
     * Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
     */
    supportEngine: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of lindorm instance.
     */
    tags: RosInstances.TagsProperty[] | undefined;
    /**
     * Create a new `DATASOURCE::Lindorm::Instances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstances {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
