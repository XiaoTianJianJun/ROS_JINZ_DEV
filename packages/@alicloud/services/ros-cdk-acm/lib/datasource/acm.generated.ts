// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::ACM::Configurations`
 */
export interface RosConfigurationsProps {

    /**
     * @Property namespaceId: The namespace ID of configuration
     */
    readonly namespaceId: string | ros.IResolvable;

    /**
     * @Property appName: The app name of configuration
     */
    readonly appName?: string | ros.IResolvable;

    /**
     * @Property dataId: The data ID of configuration
     */
    readonly dataId?: string | ros.IResolvable;

    /**
     * @Property group: The group of configuration
     */
    readonly group?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConfigurationsProps`
 *
 * @param properties - the TypeScript properties of a `RosConfigurationsProps`
 *
 * @returns the result of the validation.
 */
function RosConfigurationsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('group', ros.validateString)(properties.group));
    errors.collect(ros.propertyValidator('dataId', ros.validateString)(properties.dataId));
    errors.collect(ros.propertyValidator('namespaceId', ros.requiredValidator)(properties.namespaceId));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    return errors.wrap('supplied properties not correct for "RosConfigurationsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ACM::Configurations` resource
 *
 * @param properties - the TypeScript properties of a `RosConfigurationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ACM::Configurations` resource.
 */
// @ts-ignore TS6133
function rosConfigurationsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConfigurationsPropsValidator(properties).assertSuccess();
    }
    return {
      NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
      AppName: ros.stringToRosTemplate(properties.appName),
      DataId: ros.stringToRosTemplate(properties.dataId),
      Group: ros.stringToRosTemplate(properties.group),
    };
}

/**
 * A ROS template type:  `DATASOURCE::ACM::Configurations`
 */
export class RosConfigurations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ACM::Configurations";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Configurations: The list of configurations.
     */
    public readonly attrConfigurations: ros.IResolvable;

    /**
     * @Attribute DataIds: The list of configuration data IDs.
     */
    public readonly attrDataIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property namespaceId: The namespace ID of configuration
     */
    public namespaceId: string | ros.IResolvable;

    /**
     * @Property appName: The app name of configuration
     */
    public appName: string | ros.IResolvable | undefined;

    /**
     * @Property dataId: The data ID of configuration
     */
    public dataId: string | ros.IResolvable | undefined;

    /**
     * @Property group: The group of configuration
     */
    public group: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::ACM::Configurations`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConfigurationsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConfigurations.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigurations = this.getAtt('Configurations');
        this.attrDataIds = this.getAtt('DataIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespaceId = props.namespaceId;
        this.appName = props.appName;
        this.dataId = props.dataId;
        this.group = props.group;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            namespaceId: this.namespaceId,
            appName: this.appName,
            dataId: this.dataId,
            group: this.group,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConfigurationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::ACM::Namespaces`
 */
export interface RosNamespacesProps {
}

/**
 * Determine whether the given properties match those of a `RosNamespacesProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespacesProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosNamespacesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ACM::Namespaces` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespacesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ACM::Namespaces` resource.
 */
// @ts-ignore TS6133
function rosNamespacesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacesPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * A ROS template type:  `DATASOURCE::ACM::Namespaces`
 */
export class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ACM::Namespaces";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NamespaceIds: The list of namespace IDs.
     */
    public readonly attrNamespaceIds: ros.IResolvable;

    /**
     * @Attribute Namespaces: The list of namespaces.
     */
    public readonly attrNamespaces: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * Create a new `DATASOURCE::ACM::Namespaces`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaceIds = this.getAtt('NamespaceIds');
        this.attrNamespaces = this.getAtt('Namespaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
