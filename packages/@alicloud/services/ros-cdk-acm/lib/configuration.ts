import * as ros from '@alicloud/ros-cdk-core';
import { RosConfiguration } from './acm.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConfiguration as ConfigurationProperty };

/**
 * Properties for defining a `ALIYUN::ACM::Configuration`
 */
export interface ConfigurationProps {

    /**
     * Property content: The contents of the configuration
     */
    readonly content: string;

    /**
     * Property dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
     * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
     * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
     */
    readonly dataId: string;

    /**
     * Property namespaceId: ID of namespace
     */
    readonly namespaceId: string;

    /**
     * Property appName: Configuration application name
     */
    readonly appName?: string;

    /**
     * Property desc: Configuration description explains
     */
    readonly desc?: string;

    /**
     * Property group: Group
     */
    readonly group?: string;

    /**
     * Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas
     */
    readonly tags?: string;

    /**
     * Property type: Provisioning content format, optional values as follows:
     * text, json, xml, yaml, text/html, properties
     */
    readonly type?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ACM::Configuration`
 */
export class Configuration extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DataId: The ID of the configuration
     */
    public readonly attrDataId: any;

    /**
     * Attribute Group: Group
     */
    public readonly attrGroup: any;

    /**
     * Attribute NamespaceId: ID of namespace
     */
    public readonly attrNamespaceId: any;

    /**
     * Create a new `ALIYUN::ACM::Configuration`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConfigurationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosConfiguration = new RosConfiguration(this, id,  {
            group: props.group ? props.group : 'DEFAULT_GROUP',
            desc: props.desc,
            type: props.type ? props.type : 'text',
            dataId: props.dataId,
            content: props.content,
            namespaceId: props.namespaceId,
            tags: props.tags,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConfiguration;
        this.attrDataId = rosConfiguration.attrDataId;
        this.attrGroup = rosConfiguration.attrGroup;
        this.attrNamespaceId = rosConfiguration.attrNamespaceId;
    }
}
