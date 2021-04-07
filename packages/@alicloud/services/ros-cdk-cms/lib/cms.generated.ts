// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::CMS::Contact`
 */
export interface RosContactProps {

    /**
     * @Property channels: undefined
     */
    readonly channels: RosContact.ChannelsProperty | ros.IResolvable;

    /**
     * @Property contactName: The name of the alarm contact.
     */
    readonly contactName: string | ros.IResolvable;

    /**
     * @Property describe: The description of the alert contact.
     */
    readonly describe: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosContactProps`
 *
 * @param properties - the TypeScript properties of a `RosContactProps`
 *
 * @returns the result of the validation.
 */
function RosContactPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('describe', ros.requiredValidator)(properties.describe));
    errors.collect(ros.propertyValidator('describe', ros.validateString)(properties.describe));
    errors.collect(ros.propertyValidator('contactName', ros.requiredValidator)(properties.contactName));
    errors.collect(ros.propertyValidator('contactName', ros.validateString)(properties.contactName));
    errors.collect(ros.propertyValidator('channels', ros.requiredValidator)(properties.channels));
    errors.collect(ros.propertyValidator('channels', RosContact_ChannelsPropertyValidator)(properties.channels));
    return errors.wrap('supplied properties not correct for "RosContactProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::Contact` resource
 *
 * @param properties - the TypeScript properties of a `RosContactProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::Contact` resource.
 */
// @ts-ignore TS6133
function rosContactPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosContactPropsValidator(properties).assertSuccess();
    }
    return {
      Channels: rosContactChannelsPropertyToRosTemplate(properties.channels),
      ContactName: ros.stringToRosTemplate(properties.contactName),
      Describe: ros.stringToRosTemplate(properties.describe),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::Contact`
 */
export class RosContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::Contact";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ContactName: The name of the alarm contact.
     */
    public readonly attrContactName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property channels: undefined
     */
    public channels: RosContact.ChannelsProperty | ros.IResolvable;

    /**
     * @Property contactName: The name of the alarm contact.
     */
    public contactName: string | ros.IResolvable;

    /**
     * @Property describe: The description of the alert contact.
     */
    public describe: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::CMS::Contact`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContactProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosContact.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactName = this.getAtt('ContactName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.channels = props.channels;
        this.contactName = props.contactName;
        this.describe = props.describe;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            channels: this.channels,
            contactName: this.contactName,
            describe: this.describe,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosContact {
    /**
     * @stability external
     */
    export interface ChannelsProperty {
        /**
         * @Property mail: The email address of the contact.
         */
        readonly mail?: string | ros.IResolvable;
        /**
         * @Property aliIm: The TradeManager ID.
         */
        readonly aliIm?: string | ros.IResolvable;
        /**
         * @Property dingWebHook: The DingTalk Chatbot address.
         */
        readonly dingWebHook?: string | ros.IResolvable;
        /**
         * @Property sms: The mobile phone number of the contact.
         */
        readonly sms?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ChannelsProperty`
 *
 * @param properties - the TypeScript properties of a `ChannelsProperty`
 *
 * @returns the result of the validation.
 */
function RosContact_ChannelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mail', ros.validateString)(properties.mail));
    errors.collect(ros.propertyValidator('aliIm', ros.validateString)(properties.aliIm));
    errors.collect(ros.propertyValidator('dingWebHook', ros.validateString)(properties.dingWebHook));
    errors.collect(ros.propertyValidator('sms', ros.validateString)(properties.sms));
    return errors.wrap('supplied properties not correct for "ChannelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::Contact.Channels` resource
 *
 * @param properties - the TypeScript properties of a `ChannelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::Contact.Channels` resource.
 */
// @ts-ignore TS6133
function rosContactChannelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContact_ChannelsPropertyValidator(properties).assertSuccess();
    return {
      Mail: ros.stringToRosTemplate(properties.mail),
      AliIM: ros.stringToRosTemplate(properties.aliIm),
      DingWebHook: ros.stringToRosTemplate(properties.dingWebHook),
      SMS: ros.stringToRosTemplate(properties.sms),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::ContactGroup`
 */
export interface RosContactGroupProps {

    /**
     * @Property contactGroupName: The name of the alert contact group.
     */
    readonly contactGroupName: string | ros.IResolvable;

    /**
     * @Property contactNames: The name of the alert contact.
     */
    readonly contactNames: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property describe: The description of the alert contact group.
     */
    readonly describe: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosContactGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosContactGroupProps`
 *
 * @returns the result of the validation.
 */
function RosContactGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('describe', ros.requiredValidator)(properties.describe));
    errors.collect(ros.propertyValidator('describe', ros.validateString)(properties.describe));
    errors.collect(ros.propertyValidator('contactGroupName', ros.requiredValidator)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('contactGroupName', ros.validateString)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('contactNames', ros.requiredValidator)(properties.contactNames));
    if(properties.contactNames && (Array.isArray(properties.contactNames) || (typeof properties.contactNames) === 'string')) {
        errors.collect(ros.propertyValidator('contactNames', ros.validateLength)({
            data: properties.contactNames.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('contactNames', ros.listValidator(ros.validateString))(properties.contactNames));
    return errors.wrap('supplied properties not correct for "RosContactGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::ContactGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosContactGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::ContactGroup` resource.
 */
// @ts-ignore TS6133
function rosContactGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosContactGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ContactGroupName: ros.stringToRosTemplate(properties.contactGroupName),
      ContactNames: ros.listMapper(ros.stringToRosTemplate)(properties.contactNames),
      Describe: ros.stringToRosTemplate(properties.describe),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::ContactGroup`
 */
export class RosContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::ContactGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ContactGroupName: The name of the alert contact group.
     */
    public readonly attrContactGroupName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactGroupName: The name of the alert contact group.
     */
    public contactGroupName: string | ros.IResolvable;

    /**
     * @Property contactNames: The name of the alert contact.
     */
    public contactNames: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property describe: The description of the alert contact group.
     */
    public describe: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::CMS::ContactGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContactGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosContactGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactGroupName = this.getAtt('ContactGroupName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactGroupName = props.contactGroupName;
        this.contactNames = props.contactNames;
        this.describe = props.describe;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            contactGroupName: this.contactGroupName,
            contactNames: this.contactNames,
            describe: this.describe,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosContactGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CMS::DynamicTagGroup`
 */
export interface RosDynamicTagGroupProps {

    /**
     * @Property contactGroupList: Alarm contacts.
     */
    readonly contactGroupList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tagKey: Tag key.
     */
    readonly tagKey: string | ros.IResolvable;

    /**
     * @Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    readonly enableInstallAgent?: boolean | ros.IResolvable;

    /**
     * @Property enableSubscribeEvent: Whether the event subscription is enabled. Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    readonly enableSubscribeEvent?: boolean | ros.IResolvable;

    /**
     * @Property matchExpress: Matching list. Only supports one currently.
     */
    readonly matchExpress?: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    readonly matchExpressFilterRelation?: string | ros.IResolvable;

    /**
     * @Property templateIdList: Alarm template ID list.
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    readonly templateIdList?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDynamicTagGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDynamicTagGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDynamicTagGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('contactGroupList', ros.requiredValidator)(properties.contactGroupList));
    errors.collect(ros.propertyValidator('contactGroupList', ros.listValidator(ros.validateString))(properties.contactGroupList));
    if(properties.matchExpressFilterRelation && (typeof properties.matchExpressFilterRelation) !== 'object') {
        errors.collect(ros.propertyValidator('matchExpressFilterRelation', ros.validateAllowedValues)({
          data: properties.matchExpressFilterRelation,
          allowedValues: ["and","or"],
        }));
    }
    errors.collect(ros.propertyValidator('matchExpressFilterRelation', ros.validateString)(properties.matchExpressFilterRelation));
    errors.collect(ros.propertyValidator('enableSubscribeEvent', ros.validateBoolean)(properties.enableSubscribeEvent));
    if(properties.templateIdList && (Array.isArray(properties.templateIdList) || (typeof properties.templateIdList) === 'string')) {
        errors.collect(ros.propertyValidator('templateIdList', ros.validateLength)({
            data: properties.templateIdList.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('templateIdList', ros.listValidator(ros.validateString))(properties.templateIdList));
    errors.collect(ros.propertyValidator('tagKey', ros.requiredValidator)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagKey', ros.validateString)(properties.tagKey));
    errors.collect(ros.propertyValidator('enableInstallAgent', ros.validateBoolean)(properties.enableInstallAgent));
    if(properties.matchExpress && (Array.isArray(properties.matchExpress) || (typeof properties.matchExpress) === 'string')) {
        errors.collect(ros.propertyValidator('matchExpress', ros.validateLength)({
            data: properties.matchExpress.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('matchExpress', ros.listValidator(RosDynamicTagGroup_MatchExpressPropertyValidator))(properties.matchExpress));
    return errors.wrap('supplied properties not correct for "RosDynamicTagGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::DynamicTagGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDynamicTagGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::DynamicTagGroup` resource.
 */
// @ts-ignore TS6133
function rosDynamicTagGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDynamicTagGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ContactGroupList: ros.listMapper(ros.stringToRosTemplate)(properties.contactGroupList),
      TagKey: ros.stringToRosTemplate(properties.tagKey),
      EnableInstallAgent: ros.booleanToRosTemplate(properties.enableInstallAgent),
      EnableSubscribeEvent: ros.booleanToRosTemplate(properties.enableSubscribeEvent),
      MatchExpress: ros.listMapper(rosDynamicTagGroupMatchExpressPropertyToRosTemplate)(properties.matchExpress),
      MatchExpressFilterRelation: ros.stringToRosTemplate(properties.matchExpressFilterRelation),
      TemplateIdList: ros.listMapper(ros.stringToRosTemplate)(properties.templateIdList),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::DynamicTagGroup`
 */
export class RosDynamicTagGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::DynamicTagGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    public readonly attrDynamicTagRuleId: ros.IResolvable;

    /**
     * @Attribute TagKey: Tag key.
     */
    public readonly attrTagKey: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactGroupList: Alarm contacts.
     */
    public contactGroupList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tagKey: Tag key.
     */
    public tagKey: string | ros.IResolvable;

    /**
     * @Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    public enableInstallAgent: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableSubscribeEvent: Whether the event subscription is enabled. Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    public enableSubscribeEvent: boolean | ros.IResolvable | undefined;

    /**
     * @Property matchExpress: Matching list. Only supports one currently.
     */
    public matchExpress: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    public matchExpressFilterRelation: string | ros.IResolvable | undefined;

    /**
     * @Property templateIdList: Alarm template ID list.
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    public templateIdList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CMS::DynamicTagGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDynamicTagGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDynamicTagGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDynamicTagRuleId = this.getAtt('DynamicTagRuleId');
        this.attrTagKey = this.getAtt('TagKey');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactGroupList = props.contactGroupList;
        this.tagKey = props.tagKey;
        this.enableInstallAgent = props.enableInstallAgent;
        this.enableSubscribeEvent = props.enableSubscribeEvent;
        this.matchExpress = props.matchExpress;
        this.matchExpressFilterRelation = props.matchExpressFilterRelation;
        this.templateIdList = props.templateIdList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            contactGroupList: this.contactGroupList,
            tagKey: this.tagKey,
            enableInstallAgent: this.enableInstallAgent,
            enableSubscribeEvent: this.enableSubscribeEvent,
            matchExpress: this.matchExpress,
            matchExpressFilterRelation: this.matchExpressFilterRelation,
            templateIdList: this.templateIdList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDynamicTagGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDynamicTagGroup {
    /**
     * @stability external
     */
    export interface MatchExpressProperty {
        /**
         * @Property tagValue: Tag value, used with TagValueMatchFunction.
         */
        readonly tagValue: string | ros.IResolvable;
        /**
         * @Property tagValueMatchFunction: Matching labeled keys. Values are:
     * contains: contains
     * startWith: Prefix
     * endWith: suffix
     * notContains: not included
     * equals: equals
     * all: All
         */
        readonly tagValueMatchFunction: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MatchExpressProperty`
 *
 * @param properties - the TypeScript properties of a `MatchExpressProperty`
 *
 * @returns the result of the validation.
 */
function RosDynamicTagGroup_MatchExpressPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagValue', ros.requiredValidator)(properties.tagValue));
    errors.collect(ros.propertyValidator('tagValue', ros.validateString)(properties.tagValue));
    errors.collect(ros.propertyValidator('tagValueMatchFunction', ros.requiredValidator)(properties.tagValueMatchFunction));
    if(properties.tagValueMatchFunction && (typeof properties.tagValueMatchFunction) !== 'object') {
        errors.collect(ros.propertyValidator('tagValueMatchFunction', ros.validateAllowedValues)({
          data: properties.tagValueMatchFunction,
          allowedValues: ["contains","startWith","endWith","notContains","equals","all"],
        }));
    }
    errors.collect(ros.propertyValidator('tagValueMatchFunction', ros.validateString)(properties.tagValueMatchFunction));
    return errors.wrap('supplied properties not correct for "MatchExpressProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::DynamicTagGroup.MatchExpress` resource
 *
 * @param properties - the TypeScript properties of a `MatchExpressProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::DynamicTagGroup.MatchExpress` resource.
 */
// @ts-ignore TS6133
function rosDynamicTagGroupMatchExpressPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDynamicTagGroup_MatchExpressPropertyValidator(properties).assertSuccess();
    return {
      TagValue: ros.stringToRosTemplate(properties.tagValue),
      TagValueMatchFunction: ros.stringToRosTemplate(properties.tagValueMatchFunction),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::EventRule`
 */
export interface RosEventRuleProps {

    /**
     * @Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
     */
    readonly eventPattern: Array<RosEventRule.EventPatternProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleName: The name of the alarm rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property description: The description of the alert rule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property eventType: The type of the event alert. Valid values:
     * SYSTEM
     * CUSTOM
     */
    readonly eventType?: string | ros.IResolvable;

    /**
     * @Property groupId: The ID of the application group.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * @Property state: The status of the alert rule. Valid values:
     * ENABLED
     * DISABLED
     */
    readonly state?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEventRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosEventRuleProps`
 *
 * @returns the result of the validation.
 */
function RosEventRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('eventPattern', ros.requiredValidator)(properties.eventPattern));
    if(properties.eventPattern && (Array.isArray(properties.eventPattern) || (typeof properties.eventPattern) === 'string')) {
        errors.collect(ros.propertyValidator('eventPattern', ros.validateLength)({
            data: properties.eventPattern.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('eventPattern', ros.listValidator(RosEventRule_EventPatternPropertyValidator))(properties.eventPattern));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('eventType', ros.validateString)(properties.eventType));
    errors.collect(ros.propertyValidator('state', ros.validateString)(properties.state));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosEventRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRule` resource
 *
 * @param properties - the TypeScript properties of a `RosEventRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRule` resource.
 */
// @ts-ignore TS6133
function rosEventRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEventRulePropsValidator(properties).assertSuccess();
    }
    return {
      EventPattern: ros.listMapper(rosEventRuleEventPatternPropertyToRosTemplate)(properties.eventPattern),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      Description: ros.stringToRosTemplate(properties.description),
      EventType: ros.stringToRosTemplate(properties.eventType),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      State: ros.stringToRosTemplate(properties.state),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::EventRule`
 */
export class RosEventRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Data: Number of rows affected.
     */
    public readonly attrData: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
     */
    public eventPattern: Array<RosEventRule.EventPatternProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleName: The name of the alarm rule.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property description: The description of the alert rule.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property eventType: The type of the event alert. Valid values:
     * SYSTEM
     * CUSTOM
     */
    public eventType: string | ros.IResolvable | undefined;

    /**
     * @Property groupId: The ID of the application group.
     */
    public groupId: string | ros.IResolvable | undefined;

    /**
     * @Property state: The status of the alert rule. Valid values:
     * ENABLED
     * DISABLED
     */
    public state: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CMS::EventRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEventRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEventRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrData = this.getAtt('Data');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.eventPattern = props.eventPattern;
        this.ruleName = props.ruleName;
        this.description = props.description;
        this.eventType = props.eventType;
        this.groupId = props.groupId;
        this.state = props.state;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            eventPattern: this.eventPattern,
            ruleName: this.ruleName,
            description: this.description,
            eventType: this.eventType,
            groupId: this.groupId,
            state: this.state,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEventRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEventRule {
    /**
     * @stability external
     */
    export interface EventPatternProperty {
        /**
         * @Property nameList: The name of the event. Please refer to the configuration of CMS.
         */
        readonly nameList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property levelList: The severity of the event alert. Valid values: CRITICAL, WARN, INFO, and * (all severity
     * levels).
         */
        readonly levelList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property statusList: The status of the event. Please refer to the configuration of CMS.
         */
        readonly statusList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property eventTypeList: The type of the event. A value of * indicates any type. Please refer to the configuration of CMS.
         */
        readonly eventTypeList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property product: The name of the service. Please refer to the configuration of CMS.
         */
        readonly product?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EventPatternProperty`
 *
 * @param properties - the TypeScript properties of a `EventPatternProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRule_EventPatternPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nameList', ros.listValidator(ros.validateAny))(properties.nameList));
    errors.collect(ros.propertyValidator('levelList', ros.listValidator(ros.validateAny))(properties.levelList));
    errors.collect(ros.propertyValidator('statusList', ros.listValidator(ros.validateAny))(properties.statusList));
    errors.collect(ros.propertyValidator('eventTypeList', ros.listValidator(ros.validateAny))(properties.eventTypeList));
    errors.collect(ros.propertyValidator('product', ros.validateString)(properties.product));
    return errors.wrap('supplied properties not correct for "EventPatternProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRule.EventPattern` resource
 *
 * @param properties - the TypeScript properties of a `EventPatternProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRule.EventPattern` resource.
 */
// @ts-ignore TS6133
function rosEventRuleEventPatternPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRule_EventPatternPropertyValidator(properties).assertSuccess();
    return {
      NameList: ros.listMapper(ros.objectToRosTemplate)(properties.nameList),
      LevelList: ros.listMapper(ros.objectToRosTemplate)(properties.levelList),
      StatusList: ros.listMapper(ros.objectToRosTemplate)(properties.statusList),
      EventTypeList: ros.listMapper(ros.objectToRosTemplate)(properties.eventTypeList),
      Product: ros.stringToRosTemplate(properties.product),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::EventRuleTargets`
 */
export interface RosEventRuleTargetsProps {

    /**
     * @Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property contactParameters: CONTACT configuration.A maximum of 5 parameters
     */
    readonly contactParameters?: Array<RosEventRuleTargets.ContactParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    readonly fcParameters?: Array<RosEventRuleTargets.FcParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property mnsParameters: MNS configuration.A maximum of 5 parameters
     */
    readonly mnsParameters?: Array<RosEventRuleTargets.MnsParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    readonly slsParameters?: Array<RosEventRuleTargets.SlsParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    readonly webhookParameters?: Array<RosEventRuleTargets.WebhookParametersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEventRuleTargetsProps`
 *
 * @param properties - the TypeScript properties of a `RosEventRuleTargetsProps`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.contactParameters && (Array.isArray(properties.contactParameters) || (typeof properties.contactParameters) === 'string')) {
        errors.collect(ros.propertyValidator('contactParameters', ros.validateLength)({
            data: properties.contactParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('contactParameters', ros.listValidator(RosEventRuleTargets_ContactParametersPropertyValidator))(properties.contactParameters));
    if(properties.slsParameters && (Array.isArray(properties.slsParameters) || (typeof properties.slsParameters) === 'string')) {
        errors.collect(ros.propertyValidator('slsParameters', ros.validateLength)({
            data: properties.slsParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('slsParameters', ros.listValidator(RosEventRuleTargets_SlsParametersPropertyValidator))(properties.slsParameters));
    if(properties.webhookParameters && (Array.isArray(properties.webhookParameters) || (typeof properties.webhookParameters) === 'string')) {
        errors.collect(ros.propertyValidator('webhookParameters', ros.validateLength)({
            data: properties.webhookParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('webhookParameters', ros.listValidator(RosEventRuleTargets_WebhookParametersPropertyValidator))(properties.webhookParameters));
    if(properties.fcParameters && (Array.isArray(properties.fcParameters) || (typeof properties.fcParameters) === 'string')) {
        errors.collect(ros.propertyValidator('fcParameters', ros.validateLength)({
            data: properties.fcParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('fcParameters', ros.listValidator(RosEventRuleTargets_FcParametersPropertyValidator))(properties.fcParameters));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    if(properties.mnsParameters && (Array.isArray(properties.mnsParameters) || (typeof properties.mnsParameters) === 'string')) {
        errors.collect(ros.propertyValidator('mnsParameters', ros.validateLength)({
            data: properties.mnsParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('mnsParameters', ros.listValidator(RosEventRuleTargets_MnsParametersPropertyValidator))(properties.mnsParameters));
    return errors.wrap('supplied properties not correct for "RosEventRuleTargetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets` resource
 *
 * @param properties - the TypeScript properties of a `RosEventRuleTargetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEventRuleTargetsPropsValidator(properties).assertSuccess();
    }
    return {
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      ContactParameters: ros.listMapper(rosEventRuleTargetsContactParametersPropertyToRosTemplate)(properties.contactParameters),
      FcParameters: ros.listMapper(rosEventRuleTargetsFcParametersPropertyToRosTemplate)(properties.fcParameters),
      MnsParameters: ros.listMapper(rosEventRuleTargetsMnsParametersPropertyToRosTemplate)(properties.mnsParameters),
      SlsParameters: ros.listMapper(rosEventRuleTargetsSlsParametersPropertyToRosTemplate)(properties.slsParameters),
      WebhookParameters: ros.listMapper(rosEventRuleTargetsWebhookParametersPropertyToRosTemplate)(properties.webhookParameters),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::EventRuleTargets`
 */
export class RosEventRuleTargets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRuleTargets";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ruleName: The name of the alert rule.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property contactParameters: CONTACT configuration.A maximum of 5 parameters
     */
    public contactParameters: Array<RosEventRuleTargets.ContactParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    public fcParameters: Array<RosEventRuleTargets.FcParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property mnsParameters: MNS configuration.A maximum of 5 parameters
     */
    public mnsParameters: Array<RosEventRuleTargets.MnsParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    public slsParameters: Array<RosEventRuleTargets.SlsParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    public webhookParameters: Array<RosEventRuleTargets.WebhookParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CMS::EventRuleTargets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEventRuleTargetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEventRuleTargets.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ruleName = props.ruleName;
        this.contactParameters = props.contactParameters;
        this.fcParameters = props.fcParameters;
        this.mnsParameters = props.mnsParameters;
        this.slsParameters = props.slsParameters;
        this.webhookParameters = props.webhookParameters;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ruleName: this.ruleName,
            contactParameters: this.contactParameters,
            fcParameters: this.fcParameters,
            mnsParameters: this.mnsParameters,
            slsParameters: this.slsParameters,
            webhookParameters: this.webhookParameters,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEventRuleTargetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface ContactParametersProperty {
        /**
         * @Property contactGroupName: The name of the alert contact group.
         */
        readonly contactGroupName?: string | ros.IResolvable;
        /**
         * @Property level: The method of alert notification. Valid values: 2, 3, and 4.2: DingTalk Chatbot and email.3: DingTalk Chatbot and email.4: DingTalk Chatbot and email.
         */
        readonly level?: string | ros.IResolvable;
        /**
         * @Property id: The unique ID of the alert contact group notification.
         */
        readonly id?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ContactParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ContactParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_ContactParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('contactGroupName', ros.validateString)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('level', ros.validateString)(properties.level));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    return errors.wrap('supplied properties not correct for "ContactParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.ContactParameters` resource
 *
 * @param properties - the TypeScript properties of a `ContactParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.ContactParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsContactParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_ContactParametersPropertyValidator(properties).assertSuccess();
    return {
      ContactGroupName: ros.stringToRosTemplate(properties.contactGroupName),
      Level: ros.stringToRosTemplate(properties.level),
      Id: ros.stringToRosTemplate(properties.id),
    };
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface FcParametersProperty {
        /**
         * @Property functionName: The name of the function.
         */
        readonly functionName?: string | ros.IResolvable;
        /**
         * @Property serviceName: The name of the Function Compute service.
         */
        readonly serviceName?: string | ros.IResolvable;
        /**
         * @Property region: The region where Function Compute is deployed.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property id: The unique ID of the Function Compute notification.
         */
        readonly id?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FcParametersProperty`
 *
 * @param properties - the TypeScript properties of a `FcParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_FcParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    return errors.wrap('supplied properties not correct for "FcParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.FcParameters` resource
 *
 * @param properties - the TypeScript properties of a `FcParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.FcParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsFcParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_FcParametersPropertyValidator(properties).assertSuccess();
    return {
      FunctionName: ros.stringToRosTemplate(properties.functionName),
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      Region: ros.stringToRosTemplate(properties.region),
      Id: ros.stringToRosTemplate(properties.id),
    };
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface MnsParametersProperty {
        /**
         * @Property region: The region where MNS is deployed.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property id: The unique ID of the Message Service (MNS) notification.
         */
        readonly id?: string | ros.IResolvable;
        /**
         * @Property queue: The name of the MNS queue.
         */
        readonly queue?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MnsParametersProperty`
 *
 * @param properties - the TypeScript properties of a `MnsParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_MnsParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    errors.collect(ros.propertyValidator('queue', ros.validateString)(properties.queue));
    return errors.wrap('supplied properties not correct for "MnsParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.MnsParameters` resource
 *
 * @param properties - the TypeScript properties of a `MnsParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.MnsParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsMnsParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_MnsParametersPropertyValidator(properties).assertSuccess();
    return {
      Region: ros.stringToRosTemplate(properties.region),
      Id: ros.stringToRosTemplate(properties.id),
      Queue: ros.stringToRosTemplate(properties.queue),
    };
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface SlsParametersProperty {
        /**
         * @Property project: The project corresponding to Log Service.
         */
        readonly project?: string | ros.IResolvable;
        /**
         * @Property logStore: The logstore corresponding to Log Service.
         */
        readonly logStore?: string | ros.IResolvable;
        /**
         * @Property region: The region where Log Service is deployed.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property id: The unique ID of the Log Service notification.
         */
        readonly id?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SlsParametersProperty`
 *
 * @param properties - the TypeScript properties of a `SlsParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_SlsParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('logStore', ros.validateString)(properties.logStore));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    return errors.wrap('supplied properties not correct for "SlsParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.SlsParameters` resource
 *
 * @param properties - the TypeScript properties of a `SlsParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.SlsParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsSlsParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_SlsParametersPropertyValidator(properties).assertSuccess();
    return {
      Project: ros.stringToRosTemplate(properties.project),
      LogStore: ros.stringToRosTemplate(properties.logStore),
      Region: ros.stringToRosTemplate(properties.region),
      Id: ros.stringToRosTemplate(properties.id),
    };
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface WebhookParametersProperty {
        /**
         * @Property id: The unique ID of the HTTP callback notification.
         */
        readonly id?: string | ros.IResolvable;
        /**
         * @Property method: The request method of the HTTP callback. Valid values: GET and POST.
         */
        readonly method?: string | ros.IResolvable;
        /**
         * @Property protocol: The name of the protocol.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property url: The callback URL.
         */
        readonly url?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WebhookParametersProperty`
 *
 * @param properties - the TypeScript properties of a `WebhookParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_WebhookParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    errors.collect(ros.propertyValidator('method', ros.validateString)(properties.method));
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('url', ros.validateString)(properties.url));
    return errors.wrap('supplied properties not correct for "WebhookParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.WebhookParameters` resource
 *
 * @param properties - the TypeScript properties of a `WebhookParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.WebhookParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsWebhookParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_WebhookParametersPropertyValidator(properties).assertSuccess();
    return {
      Id: ros.stringToRosTemplate(properties.id),
      Method: ros.stringToRosTemplate(properties.method),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      Url: ros.stringToRosTemplate(properties.url),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::GroupMetricRule`
 */
export interface RosGroupMetricRuleProps {

    /**
     * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN)
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod)
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (original version of ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway)
     */
    readonly category: string | ros.IResolvable;

    /**
     * @Property escalations: undefined
     */
    readonly escalations: RosGroupMetricRule.EscalationsProperty | ros.IResolvable;

    /**
     * @Property groupId: The ID of application group.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * @Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
     */
    readonly metricName: string | ros.IResolvable;

    /**
     * @Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
     * or see Preset metrics reference.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
     * uniqueness.
     */
    readonly ruleId: string | ros.IResolvable;

    /**
     * @Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property dimensions: The expended resource dimensions.
     */
    readonly dimensions?: string | ros.IResolvable;

    /**
     * @Property effectiveInterval: The period when the alert rule is effective.
     */
    readonly effectiveInterval?: string | ros.IResolvable;

    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    readonly emailSubject?: string | ros.IResolvable;

    /**
     * @Property interval: The detection period of alerts.
     */
    readonly interval?: number | ros.IResolvable;

    /**
     * @Property noEffectiveInterval: The period when the alert rule is ineffective.
     */
    readonly noEffectiveInterval?: string | ros.IResolvable;

    /**
     * @Property period: The aggregation period. Unite: second.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
     * conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
     */
    readonly silenceTime?: number | ros.IResolvable;

    /**
     * @Property webhook: The URL of the callback triggered when an alert occurs.
     */
    readonly webhook?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupMetricRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupMetricRuleProps`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('noEffectiveInterval', ros.validateString)(properties.noEffectiveInterval));
    if(properties.silenceTime && (typeof properties.silenceTime) !== 'object') {
        errors.collect(ros.propertyValidator('silenceTime', ros.validateRange)({
            data: properties.silenceTime,
            min: 60,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('silenceTime', ros.validateNumber)(properties.silenceTime));
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('ruleId', ros.requiredValidator)(properties.ruleId));
    errors.collect(ros.propertyValidator('ruleId', ros.validateString)(properties.ruleId));
    errors.collect(ros.propertyValidator('dimensions', ros.validateString)(properties.dimensions));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('effectiveInterval', ros.validateString)(properties.effectiveInterval));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    errors.collect(ros.propertyValidator('metricName', ros.requiredValidator)(properties.metricName));
    errors.collect(ros.propertyValidator('metricName', ros.validateString)(properties.metricName));
    errors.collect(ros.propertyValidator('escalations', ros.requiredValidator)(properties.escalations));
    errors.collect(ros.propertyValidator('escalations', RosGroupMetricRule_EscalationsPropertyValidator)(properties.escalations));
    errors.collect(ros.propertyValidator('emailSubject', ros.validateString)(properties.emailSubject));
    errors.collect(ros.propertyValidator('webhook', ros.validateString)(properties.webhook));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "RosGroupMetricRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupMetricRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupMetricRulePropsValidator(properties).assertSuccess();
    }
    return {
      Category: ros.stringToRosTemplate(properties.category),
      Escalations: rosGroupMetricRuleEscalationsPropertyToRosTemplate(properties.escalations),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      MetricName: ros.stringToRosTemplate(properties.metricName),
      Namespace: ros.stringToRosTemplate(properties.namespace),
      RuleId: ros.stringToRosTemplate(properties.ruleId),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      Dimensions: ros.stringToRosTemplate(properties.dimensions),
      EffectiveInterval: ros.stringToRosTemplate(properties.effectiveInterval),
      EmailSubject: ros.stringToRosTemplate(properties.emailSubject),
      Interval: ros.numberToRosTemplate(properties.interval),
      NoEffectiveInterval: ros.stringToRosTemplate(properties.noEffectiveInterval),
      Period: ros.numberToRosTemplate(properties.period),
      SilenceTime: ros.numberToRosTemplate(properties.silenceTime),
      Webhook: ros.stringToRosTemplate(properties.webhook),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::GroupMetricRule`
 */
export class RosGroupMetricRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::GroupMetricRule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RuleId: Rule ID.
     */
    public readonly attrRuleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN)
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod)
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (original version of ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway)
     */
    public category: string | ros.IResolvable;

    /**
     * @Property escalations: undefined
     */
    public escalations: RosGroupMetricRule.EscalationsProperty | ros.IResolvable;

    /**
     * @Property groupId: The ID of application group.
     */
    public groupId: string | ros.IResolvable;

    /**
     * @Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
     */
    public metricName: string | ros.IResolvable;

    /**
     * @Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
     * or see Preset metrics reference.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
     * uniqueness.
     */
    public ruleId: string | ros.IResolvable;

    /**
     * @Property ruleName: The name of the alert rule.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property dimensions: The expended resource dimensions.
     */
    public dimensions: string | ros.IResolvable | undefined;

    /**
     * @Property effectiveInterval: The period when the alert rule is effective.
     */
    public effectiveInterval: string | ros.IResolvable | undefined;

    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    public emailSubject: string | ros.IResolvable | undefined;

    /**
     * @Property interval: The detection period of alerts.
     */
    public interval: number | ros.IResolvable | undefined;

    /**
     * @Property noEffectiveInterval: The period when the alert rule is ineffective.
     */
    public noEffectiveInterval: string | ros.IResolvable | undefined;

    /**
     * @Property period: The aggregation period. Unite: second.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
     * conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
     */
    public silenceTime: number | ros.IResolvable | undefined;

    /**
     * @Property webhook: The URL of the callback triggered when an alert occurs.
     */
    public webhook: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CMS::GroupMetricRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupMetricRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroupMetricRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRuleId = this.getAtt('RuleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.category = props.category;
        this.escalations = props.escalations;
        this.groupId = props.groupId;
        this.metricName = props.metricName;
        this.namespace = props.namespace;
        this.ruleId = props.ruleId;
        this.ruleName = props.ruleName;
        this.dimensions = props.dimensions;
        this.effectiveInterval = props.effectiveInterval;
        this.emailSubject = props.emailSubject;
        this.interval = props.interval;
        this.noEffectiveInterval = props.noEffectiveInterval;
        this.period = props.period;
        this.silenceTime = props.silenceTime;
        this.webhook = props.webhook;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            category: this.category,
            escalations: this.escalations,
            groupId: this.groupId,
            metricName: this.metricName,
            namespace: this.namespace,
            ruleId: this.ruleId,
            ruleName: this.ruleName,
            dimensions: this.dimensions,
            effectiveInterval: this.effectiveInterval,
            emailSubject: this.emailSubject,
            interval: this.interval,
            noEffectiveInterval: this.noEffectiveInterval,
            period: this.period,
            silenceTime: this.silenceTime,
            webhook: this.webhook,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupMetricRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    export interface CriticalProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for critical-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * critical-level alerts before an alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for critical-level alerts. The statistical method varies with
     * metric.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for critical-level alerts.
         */
        readonly threshold: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CriticalProperty`
 *
 * @param properties - the TypeScript properties of a `CriticalProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_CriticalPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateNumber)(properties.threshold));
    return errors.wrap('supplied properties not correct for "CriticalProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Critical` resource
 *
 * @param properties - the TypeScript properties of a `CriticalProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Critical` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRuleCriticalPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroupMetricRule_CriticalPropertyValidator(properties).assertSuccess();
    return {
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Times: ros.numberToRosTemplate(properties.times),
      Statistics: ros.stringToRosTemplate(properties.statistics),
      Threshold: ros.numberToRosTemplate(properties.threshold),
    };
}

export namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    export interface EscalationsProperty {
        /**
         * @Property critical: undefined
         */
        readonly critical?: RosGroupMetricRule.CriticalProperty | ros.IResolvable;
        /**
         * @Property info: undefined
         */
        readonly info?: RosGroupMetricRule.InfoProperty | ros.IResolvable;
        /**
         * @Property warn: undefined
         */
        readonly warn?: RosGroupMetricRule.WarnProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EscalationsProperty`
 *
 * @param properties - the TypeScript properties of a `EscalationsProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_EscalationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('critical', RosGroupMetricRule_CriticalPropertyValidator)(properties.critical));
    errors.collect(ros.propertyValidator('info', RosGroupMetricRule_InfoPropertyValidator)(properties.info));
    errors.collect(ros.propertyValidator('warn', RosGroupMetricRule_WarnPropertyValidator)(properties.warn));
    return errors.wrap('supplied properties not correct for "EscalationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Escalations` resource
 *
 * @param properties - the TypeScript properties of a `EscalationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Escalations` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRuleEscalationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroupMetricRule_EscalationsPropertyValidator(properties).assertSuccess();
    return {
      Critical: rosGroupMetricRuleCriticalPropertyToRosTemplate(properties.critical),
      Info: rosGroupMetricRuleInfoPropertyToRosTemplate(properties.info),
      Warn: rosGroupMetricRuleWarnPropertyToRosTemplate(properties.warn),
    };
}

export namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    export interface InfoProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for info-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * info-level alerts before an alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for info-level alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for info-level alerts.
         */
        readonly threshold: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InfoProperty`
 *
 * @param properties - the TypeScript properties of a `InfoProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_InfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateNumber)(properties.threshold));
    return errors.wrap('supplied properties not correct for "InfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Info` resource
 *
 * @param properties - the TypeScript properties of a `InfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Info` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRuleInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroupMetricRule_InfoPropertyValidator(properties).assertSuccess();
    return {
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Times: ros.numberToRosTemplate(properties.times),
      Statistics: ros.stringToRosTemplate(properties.statistics),
      Threshold: ros.numberToRosTemplate(properties.threshold),
    };
}

export namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    export interface WarnProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for warn-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * warn-level alerts before an alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for warn-level alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for warn-level alerts.
         */
        readonly threshold: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WarnProperty`
 *
 * @param properties - the TypeScript properties of a `WarnProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_WarnPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateNumber)(properties.threshold));
    return errors.wrap('supplied properties not correct for "WarnProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Warn` resource
 *
 * @param properties - the TypeScript properties of a `WarnProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Warn` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRuleWarnPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroupMetricRule_WarnPropertyValidator(properties).assertSuccess();
    return {
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Times: ros.numberToRosTemplate(properties.times),
      Statistics: ros.stringToRosTemplate(properties.statistics),
      Threshold: ros.numberToRosTemplate(properties.threshold),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTargets`
 */
export interface RosMetricRuleTargetsProps {

    /**
     * @Property ruleId: The ID of the alert rule.
     */
    readonly ruleId: string | ros.IResolvable;

    /**
     * @Property targets: undefined
     */
    readonly targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMetricRuleTargetsProps`
 *
 * @param properties - the TypeScript properties of a `RosMetricRuleTargetsProps`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTargetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ruleId', ros.requiredValidator)(properties.ruleId));
    errors.collect(ros.propertyValidator('ruleId', ros.validateString)(properties.ruleId));
    errors.collect(ros.propertyValidator('targets', ros.requiredValidator)(properties.targets));
    if(properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
        errors.collect(ros.propertyValidator('targets', ros.validateLength)({
            data: properties.targets.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('targets', ros.listValidator(RosMetricRuleTargets_TargetsPropertyValidator))(properties.targets));
    return errors.wrap('supplied properties not correct for "RosMetricRuleTargetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTargets` resource
 *
 * @param properties - the TypeScript properties of a `RosMetricRuleTargetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTargets` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTargetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMetricRuleTargetsPropsValidator(properties).assertSuccess();
    }
    return {
      RuleId: ros.stringToRosTemplate(properties.ruleId),
      Targets: ros.listMapper(rosMetricRuleTargetsTargetsPropertyToRosTemplate)(properties.targets),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::MetricRuleTargets`
 */
export class RosMetricRuleTargets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTargets";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Arns: The ARN list of targets
     */
    public readonly attrArns: ros.IResolvable;

    /**
     * @Attribute Ids: The ID list of targets
     */
    public readonly attrIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ruleId: The ID of the alert rule.
     */
    public ruleId: string | ros.IResolvable;

    /**
     * @Property targets: undefined
     */
    public targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::CMS::MetricRuleTargets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricRuleTargetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMetricRuleTargets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArns = this.getAtt('Arns');
        this.attrIds = this.getAtt('Ids');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ruleId = props.ruleId;
        this.targets = props.targets;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ruleId: this.ruleId,
            targets: this.targets,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMetricRuleTargetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMetricRuleTargets {
    /**
     * @stability external
     */
    export interface TargetsProperty {
        /**
         * @Property level: The alert level, which is a JSON array. For example: ["INFO", "WARN", "CRITICAL"]. Valid values:
     * INFO
     * WARN
     * CRITICAL
         */
        readonly level?: string | ros.IResolvable;
        /**
         * @Property id: The ID of the message resource. The ID must be unique in the alert rule.
         */
        readonly id: string | ros.IResolvable;
        /**
         * @Property arn: The resource description in the format of acs:{Service name abbreviation}:{regionId}:{userId}:/{Message resource type}/{Resource
     * name}/message. Example: acs:mns:cn-hangzhou:111:/queues/test/message.
     * {Service name abbreviation}: the abbreviation of the service name. Set this value
     * to mns.
     * {regionId}: the region ID of the message queue or topic.
     * {userId}: the account ID of the user.
     * {Message resource type}: the type of the message resource. Valid values: queues and
     * topics.
     * {Resource name}: the name of a queue if the resource type is queues, or the name of
     * a topic if the type is topics.
         */
        readonly arn: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TargetsProperty`
 *
 * @param properties - the TypeScript properties of a `TargetsProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTargets_TargetsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('level', ros.validateString)(properties.level));
    errors.collect(ros.propertyValidator('id', ros.requiredValidator)(properties.id));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    errors.collect(ros.propertyValidator('arn', ros.requiredValidator)(properties.arn));
    errors.collect(ros.propertyValidator('arn', ros.validateString)(properties.arn));
    return errors.wrap('supplied properties not correct for "TargetsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTargets.Targets` resource
 *
 * @param properties - the TypeScript properties of a `TargetsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTargets.Targets` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTargetsTargetsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMetricRuleTargets_TargetsPropertyValidator(properties).assertSuccess();
    return {
      Level: ros.stringToRosTemplate(properties.level),
      Id: ros.stringToRosTemplate(properties.id),
      Arn: ros.stringToRosTemplate(properties.arn),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTemplate`
 */
export interface RosMetricRuleTemplateProps {

    /**
     * @Property name: The name of the alert template.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property alertTemplates: Valid values of N: 0 to 200.
     */
    readonly alertTemplates?: Array<RosMetricRuleTemplate.AlertTemplatesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the alert template.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
     * to obtain information about the alert templates. The combination of version and ID
     * uniquely identifies an alert template.
     */
    readonly restVersion?: number | ros.IResolvable;

    /**
     * @Property templateId: The ID of the alert template.
     */
    readonly templateId?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMetricRuleTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosMetricRuleTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.alertTemplates && (Array.isArray(properties.alertTemplates) || (typeof properties.alertTemplates) === 'string')) {
        errors.collect(ros.propertyValidator('alertTemplates', ros.validateLength)({
            data: properties.alertTemplates.length,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('alertTemplates', ros.listValidator(RosMetricRuleTemplate_AlertTemplatesPropertyValidator))(properties.alertTemplates));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('restVersion', ros.validateNumber)(properties.restVersion));
    errors.collect(ros.propertyValidator('templateId', ros.validateNumber)(properties.templateId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosMetricRuleTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate` resource
 *
 * @param properties - the TypeScript properties of a `RosMetricRuleTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMetricRuleTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      AlertTemplates: ros.listMapper(rosMetricRuleTemplateAlertTemplatesPropertyToRosTemplate)(properties.alertTemplates),
      Description: ros.stringToRosTemplate(properties.description),
      RestVersion: ros.numberToRosTemplate(properties.restVersion),
      TemplateId: ros.numberToRosTemplate(properties.templateId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::MetricRuleTemplate`
 */
export class RosMetricRuleTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTemplate";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Id: Alarm template ID.
     */
    public readonly attrId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the alert template.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property alertTemplates: Valid values of N: 0 to 200.
     */
    public alertTemplates: Array<RosMetricRuleTemplate.AlertTemplatesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the alert template.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
     * to obtain information about the alert templates. The combination of version and ID
     * uniquely identifies an alert template.
     */
    public restVersion: number | ros.IResolvable | undefined;

    /**
     * @Property templateId: The ID of the alert template.
     */
    public templateId: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CMS::MetricRuleTemplate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricRuleTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMetricRuleTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrId = this.getAtt('Id');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.alertTemplates = props.alertTemplates;
        this.description = props.description;
        this.restVersion = props.restVersion;
        this.templateId = props.templateId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            alertTemplates: this.alertTemplates,
            description: this.description,
            restVersion: this.restVersion,
            templateId: this.templateId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMetricRuleTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    export interface AlertTemplatesProperty {
        /**
         * @Property metricName: The name of the metric.
     * Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
         */
        readonly metricName: string | ros.IResolvable;
        /**
         * @Property category: The abbreviation of the service name.Value including but not limited to:
     * ecs: Elastic Compute Service (ECS) instances provided by Alibaba Cloud and hosts not
     * provided by Alibaba Cloud
     * rds: ApsaraDB for RDS
     * ads: AnalyticDB
     * slb: Server Load Balancer (SLB)
     * vpc: Virtual Private Cloud (VPC)
     * apigateway: API Gateway
     * cdn: CDN: Alibaba Cloud Content Delivery Network (CDN)
     * cs: Container Service for Swarm
     * dcdn: Dynamic Route for CDN
     * ddos: Anti-DDoS Pro
     * eip: Elastic IP Address (EIP)
     * elasticsearch: Elasticsearch
     * emr: E-MapReduce
     * ess: Auto Scaling
     * hbase: ApsaraDB for Hbase
     * iot_edge: IoT Edge
     * k8s_pod: pods in Container Service for Kubernetes
     * kvstore_sharding: ApsaraDB for Redis of the cluster architecture
     * kvstore_splitrw: ApsaraDB for Redis of the read/write splitting architecture
     * kvstore_standard: ApsaraDB for Redis of the standard architecture
     * memcache: ApsaraDB for Memcache
     * mns: Message Service (MNS)
     * mongodb: ApsaraDB for MongoDB of the replica set architecture
     * mongodb_cluster: ApsaraDB for MongoDB of the cluster architecture
     * mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
     * mq_topic: MNS topics
     * ocs: ApsaraDB for Memcache of earlier versions
     * opensearch: Open Search
     * oss: Object Storage Service (OSS)
     * polardb: PolarDB
     * petadata: HybridDB for MySQL
     * scdn: Secure Content Delivery Network (SCDN)
     * sharebandwidthpackages: EIP Bandwidth Plan
     * sls: Log Service
     * vpn: VPN Gateway
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property escalations: undefined
         */
        readonly escalations?: RosMetricRuleTemplate.EscalationsProperty | ros.IResolvable;
        /**
         * @Property period: The aggregation period of the monitoring data. Unit: seconds.
     * The default value is the lowest frequency at which the metric is polled. Typically,
     * you do not need to specify the aggregation period.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property webhook: The callback URL to which a POST request is sent when an alert is triggered based
     * on the alert rule.
         */
        readonly webhook?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of the service. 
     * Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
         */
        readonly namespace: string | ros.IResolvable;
        /**
         * @Property ruleName: The name of the alert rule.
         */
        readonly ruleName: string | ros.IResolvable;
        /**
         * @Property selector: The dimension of the alert. It is an extended field.
         */
        readonly selector?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AlertTemplatesProperty`
 *
 * @param properties - the TypeScript properties of a `AlertTemplatesProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_AlertTemplatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('metricName', ros.requiredValidator)(properties.metricName));
    errors.collect(ros.propertyValidator('metricName', ros.validateString)(properties.metricName));
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('escalations', RosMetricRuleTemplate_EscalationsPropertyValidator)(properties.escalations));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('webhook', ros.validateString)(properties.webhook));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    errors.collect(ros.propertyValidator('selector', ros.validateString)(properties.selector));
    return errors.wrap('supplied properties not correct for "AlertTemplatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.AlertTemplates` resource
 *
 * @param properties - the TypeScript properties of a `AlertTemplatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.AlertTemplates` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateAlertTemplatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMetricRuleTemplate_AlertTemplatesPropertyValidator(properties).assertSuccess();
    return {
      MetricName: ros.stringToRosTemplate(properties.metricName),
      Category: ros.stringToRosTemplate(properties.category),
      Escalations: rosMetricRuleTemplateEscalationsPropertyToRosTemplate(properties.escalations),
      Period: ros.numberToRosTemplate(properties.period),
      Webhook: ros.stringToRosTemplate(properties.webhook),
      Namespace: ros.stringToRosTemplate(properties.namespace),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      Selector: ros.stringToRosTemplate(properties.selector),
    };
}

export namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    export interface CriticalProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
     * GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * GreaterThanThreshold: greater than the threshold
     * LessThanOrEqualToThreshold: less than or equal to the threshold
     * LessThanThreshold: less than the threshold
     * NotEqualToThreshold: not equal to the threshold
     * GreaterThanYesterday: greater than the metric value at the same time yesterday
     * LessThanYesterday: less than the metric value at the same time yesterday
     * GreaterThanLastWeek: greater than the metric value at the same time last week
     * LessThanLastWeek: less than the metric value at the same time last week
     * GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value is measured before a alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for alerts.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CriticalProperty`
 *
 * @param properties - the TypeScript properties of a `CriticalProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_CriticalPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    if(properties.comparisonOperator && (typeof properties.comparisonOperator) !== 'object') {
        errors.collect(ros.propertyValidator('comparisonOperator', ros.validateAllowedValues)({
          data: properties.comparisonOperator,
          allowedValues: ["GreaterThanOrEqualToThreshold","GreaterThanThreshold","LessThanOrEqualToThreshold","LessThanThreshold","NotEqualToThreshold","GreaterThanYesterday","LessThanYesterday","GreaterThanLastWeek","LessThanLastWeek","GreaterThanLastPeriod","LessThanLastPeriod"],
        }));
    }
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateString)(properties.threshold));
    return errors.wrap('supplied properties not correct for "CriticalProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Critical` resource
 *
 * @param properties - the TypeScript properties of a `CriticalProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Critical` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateCriticalPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMetricRuleTemplate_CriticalPropertyValidator(properties).assertSuccess();
    return {
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Times: ros.numberToRosTemplate(properties.times),
      Statistics: ros.stringToRosTemplate(properties.statistics),
      Threshold: ros.stringToRosTemplate(properties.threshold),
    };
}

export namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    export interface EscalationsProperty {
        /**
         * @Property critical: undefined
         */
        readonly critical: RosMetricRuleTemplate.CriticalProperty | ros.IResolvable;
        /**
         * @Property info: undefined
         */
        readonly info?: RosMetricRuleTemplate.InfoProperty | ros.IResolvable;
        /**
         * @Property warn: undefined
         */
        readonly warn?: RosMetricRuleTemplate.WarnProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EscalationsProperty`
 *
 * @param properties - the TypeScript properties of a `EscalationsProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_EscalationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('critical', ros.requiredValidator)(properties.critical));
    errors.collect(ros.propertyValidator('critical', RosMetricRuleTemplate_CriticalPropertyValidator)(properties.critical));
    errors.collect(ros.propertyValidator('info', RosMetricRuleTemplate_InfoPropertyValidator)(properties.info));
    errors.collect(ros.propertyValidator('warn', RosMetricRuleTemplate_WarnPropertyValidator)(properties.warn));
    return errors.wrap('supplied properties not correct for "EscalationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Escalations` resource
 *
 * @param properties - the TypeScript properties of a `EscalationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Escalations` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateEscalationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMetricRuleTemplate_EscalationsPropertyValidator(properties).assertSuccess();
    return {
      Critical: rosMetricRuleTemplateCriticalPropertyToRosTemplate(properties.critical),
      Info: rosMetricRuleTemplateInfoPropertyToRosTemplate(properties.info),
      Warn: rosMetricRuleTemplateWarnPropertyToRosTemplate(properties.warn),
    };
}

export namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    export interface InfoProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
     * GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * GreaterThanThreshold: greater than the threshold
     * LessThanOrEqualToThreshold: less than or equal to the threshold
     * LessThanThreshold: less than the threshold
     * NotEqualToThreshold: not equal to the threshold
     * GreaterThanYesterday: greater than the metric value at the same time yesterday
     * LessThanYesterday: less than the metric value at the same time yesterday
     * GreaterThanLastWeek: greater than the metric value at the same time last week
     * LessThanLastWeek: less than the metric value at the same time last week
     * GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value is measured before a alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for alerts.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InfoProperty`
 *
 * @param properties - the TypeScript properties of a `InfoProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_InfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    if(properties.comparisonOperator && (typeof properties.comparisonOperator) !== 'object') {
        errors.collect(ros.propertyValidator('comparisonOperator', ros.validateAllowedValues)({
          data: properties.comparisonOperator,
          allowedValues: ["GreaterThanOrEqualToThreshold","GreaterThanThreshold","LessThanOrEqualToThreshold","LessThanThreshold","NotEqualToThreshold","GreaterThanYesterday","LessThanYesterday","GreaterThanLastWeek","LessThanLastWeek","GreaterThanLastPeriod","LessThanLastPeriod"],
        }));
    }
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateString)(properties.threshold));
    return errors.wrap('supplied properties not correct for "InfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Info` resource
 *
 * @param properties - the TypeScript properties of a `InfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Info` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMetricRuleTemplate_InfoPropertyValidator(properties).assertSuccess();
    return {
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Times: ros.numberToRosTemplate(properties.times),
      Statistics: ros.stringToRosTemplate(properties.statistics),
      Threshold: ros.stringToRosTemplate(properties.threshold),
    };
}

export namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    export interface WarnProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
     * GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * GreaterThanThreshold: greater than the threshold
     * LessThanOrEqualToThreshold: less than or equal to the threshold
     * LessThanThreshold: less than the threshold
     * NotEqualToThreshold: not equal to the threshold
     * GreaterThanYesterday: greater than the metric value at the same time yesterday
     * LessThanYesterday: less than the metric value at the same time yesterday
     * GreaterThanLastWeek: greater than the metric value at the same time last week
     * LessThanLastWeek: less than the metric value at the same time last week
     * GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value is measured before a alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for alerts.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WarnProperty`
 *
 * @param properties - the TypeScript properties of a `WarnProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_WarnPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    if(properties.comparisonOperator && (typeof properties.comparisonOperator) !== 'object') {
        errors.collect(ros.propertyValidator('comparisonOperator', ros.validateAllowedValues)({
          data: properties.comparisonOperator,
          allowedValues: ["GreaterThanOrEqualToThreshold","GreaterThanThreshold","LessThanOrEqualToThreshold","LessThanThreshold","NotEqualToThreshold","GreaterThanYesterday","LessThanYesterday","GreaterThanLastWeek","LessThanLastWeek","GreaterThanLastPeriod","LessThanLastPeriod"],
        }));
    }
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateString)(properties.threshold));
    return errors.wrap('supplied properties not correct for "WarnProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Warn` resource
 *
 * @param properties - the TypeScript properties of a `WarnProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Warn` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateWarnPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMetricRuleTemplate_WarnPropertyValidator(properties).assertSuccess();
    return {
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Times: ros.numberToRosTemplate(properties.times),
      Statistics: ros.stringToRosTemplate(properties.statistics),
      Threshold: ros.stringToRosTemplate(properties.threshold),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroup`
 */
export interface RosMonitorGroupProps {

    /**
     * @Property groupName: The name of the application group.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    readonly contactGroups?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMonitorGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupProps`
 *
 * @returns the result of the validation.
 */
function RosMonitorGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('contactGroups', ros.validateString)(properties.contactGroups));
    return errors.wrap('supplied properties not correct for "RosMonitorGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroup` resource.
 */
// @ts-ignore TS6133
function rosMonitorGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMonitorGroupPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
      ContactGroups: ros.stringToRosTemplate(properties.contactGroups),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::MonitorGroup`
 */
export class RosMonitorGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitorGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupId: Application group ID generated after the group is created.
     */
    public readonly attrGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: The name of the application group.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    public contactGroups: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CMS::MonitorGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMonitorGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.contactGroups = props.contactGroups;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            contactGroups: this.contactGroups,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMonitorGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroupInstances`
 */
export interface RosMonitorGroupInstancesProps {

    /**
     * @Property groupId: The ID of the application group.
     */
    readonly groupId: number | ros.IResolvable;

    /**
     * @Property instances:
     */
    readonly instances: Array<RosMonitorGroupInstances.InstancesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMonitorGroupInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosMonitorGroupInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instances', ros.requiredValidator)(properties.instances));
    if(properties.instances && (Array.isArray(properties.instances) || (typeof properties.instances) === 'string')) {
        errors.collect(ros.propertyValidator('instances', ros.validateLength)({
            data: properties.instances.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instances', ros.listValidator(RosMonitorGroupInstances_InstancesPropertyValidator))(properties.instances));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosMonitorGroupInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroupInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroupInstances` resource.
 */
// @ts-ignore TS6133
function rosMonitorGroupInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMonitorGroupInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      GroupId: ros.numberToRosTemplate(properties.groupId),
      Instances: ros.listMapper(rosMonitorGroupInstancesInstancesPropertyToRosTemplate)(properties.instances),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::MonitorGroupInstances`
 */
export class RosMonitorGroupInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitorGroupInstances";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupId: The ID of the application group.
     */
    public readonly attrGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupId: The ID of the application group.
     */
    public groupId: number | ros.IResolvable;

    /**
     * @Property instances:
     */
    public instances: Array<RosMonitorGroupInstances.InstancesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::CMS::MonitorGroupInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMonitorGroupInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.instances = props.instances;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupId: this.groupId,
            instances: this.instances,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMonitorGroupInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMonitorGroupInstances {
    /**
     * @stability external
     */
    export interface InstancesProperty {
        /**
         * @Property instanceName: The name of the instance.
         */
        readonly instanceName: string | ros.IResolvable;
        /**
         * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN )
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod )
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (old version ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway )
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the resource instance.
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
         */
        readonly regionId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstancesProperty`
 *
 * @param properties - the TypeScript properties of a `InstancesProperty`
 *
 * @returns the result of the validation.
 */
function RosMonitorGroupInstances_InstancesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('regionId', ros.requiredValidator)(properties.regionId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "InstancesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroupInstances.Instances` resource
 *
 * @param properties - the TypeScript properties of a `InstancesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroupInstances.Instances` resource.
 */
// @ts-ignore TS6133
function rosMonitorGroupInstancesInstancesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMonitorGroupInstances_InstancesPropertyValidator(properties).assertSuccess();
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      Category: ros.stringToRosTemplate(properties.category),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      RegionId: ros.stringToRosTemplate(properties.regionId),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`
 */
export interface RosMonitoringAgentProcessProps {

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property processName: The name of the process.
     */
    readonly processName?: string | ros.IResolvable;

    /**
     * @Property processUser: The user who launched the process.
     */
    readonly processUser?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMonitoringAgentProcessProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitoringAgentProcessProps`
 *
 * @returns the result of the validation.
 */
function RosMonitoringAgentProcessPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('processName', ros.validateString)(properties.processName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('processUser', ros.validateString)(properties.processUser));
    return errors.wrap('supplied properties not correct for "RosMonitoringAgentProcessProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitoringAgentProcess` resource
 *
 * @param properties - the TypeScript properties of a `RosMonitoringAgentProcessProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitoringAgentProcess` resource.
 */
// @ts-ignore TS6133
function rosMonitoringAgentProcessPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMonitoringAgentProcessPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      ProcessName: ros.stringToRosTemplate(properties.processName),
      ProcessUser: ros.stringToRosTemplate(properties.processUser),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::MonitoringAgentProcess`
 */
export class RosMonitoringAgentProcess extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitoringAgentProcess";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Id: The process ID.
     */
    public readonly attrId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property processName: The name of the process.
     */
    public processName: string | ros.IResolvable | undefined;

    /**
     * @Property processUser: The user who launched the process.
     */
    public processUser: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CMS::MonitoringAgentProcess`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitoringAgentProcessProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMonitoringAgentProcess.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrId = this.getAtt('Id');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.processName = props.processName;
        this.processUser = props.processUser;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            processName: this.processName,
            processUser: this.processUser,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMonitoringAgentProcessPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CMS::SiteMonitor`
 */
export interface RosSiteMonitorProps {

    /**
     * @Property address: The URL or IP address monitored by the monitoring task.
     */
    readonly address: string | ros.IResolvable;

    /**
     * @Property taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
     * It can contain letters, digits, and underscores (_).
     */
    readonly taskName: string | ros.IResolvable;

    /**
     * @Property taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
     * UDP, DNS, SMTP, POP3, and FTP.
     */
    readonly taskType: string | ros.IResolvable;

    /**
     * @Property alertIds:
     */
    readonly alertIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
     * minutes. Default value: 1.
     */
    readonly interval?: number | ros.IResolvable;

    /**
     * @Property ispCities: The information about detection points, which is specified in a JSON array. Example:
     * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
     * Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
     * points that can be used to create site monitoring tasks. For more information, see
     * DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
     * points for site monitoring.
     */
    readonly ispCities?: Array<RosSiteMonitor.IspCitiesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property optionsJson: The extended options of the protocol that is used by the site monitoring task. The
     * options vary based on the protocol.
     */
    readonly optionsJson?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSiteMonitorProps`
 *
 * @param properties - the TypeScript properties of a `RosSiteMonitorProps`
 *
 * @returns the result of the validation.
 */
function RosSiteMonitorPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('address', ros.requiredValidator)(properties.address));
    errors.collect(ros.propertyValidator('address', ros.validateString)(properties.address));
    errors.collect(ros.propertyValidator('optionsJson', ros.validateString)(properties.optionsJson));
    errors.collect(ros.propertyValidator('taskName', ros.requiredValidator)(properties.taskName));
    errors.collect(ros.propertyValidator('taskName', ros.validateString)(properties.taskName));
    errors.collect(ros.propertyValidator('taskType', ros.requiredValidator)(properties.taskType));
    errors.collect(ros.propertyValidator('taskType', ros.validateString)(properties.taskType));
    errors.collect(ros.propertyValidator('ispCities', ros.listValidator(RosSiteMonitor_IspCitiesPropertyValidator))(properties.ispCities));
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    errors.collect(ros.propertyValidator('alertIds', ros.listValidator(ros.validateString))(properties.alertIds));
    return errors.wrap('supplied properties not correct for "RosSiteMonitorProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::SiteMonitor` resource
 *
 * @param properties - the TypeScript properties of a `RosSiteMonitorProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::SiteMonitor` resource.
 */
// @ts-ignore TS6133
function rosSiteMonitorPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSiteMonitorPropsValidator(properties).assertSuccess();
    }
    return {
      Address: ros.stringToRosTemplate(properties.address),
      TaskName: ros.stringToRosTemplate(properties.taskName),
      TaskType: ros.stringToRosTemplate(properties.taskType),
      AlertIds: ros.listMapper(ros.stringToRosTemplate)(properties.alertIds),
      Interval: ros.numberToRosTemplate(properties.interval),
      IspCities: ros.listMapper(rosSiteMonitorIspCitiesPropertyToRosTemplate)(properties.ispCities),
      OptionsJson: ros.stringToRosTemplate(properties.optionsJson),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::SiteMonitor`
 */
export class RosSiteMonitor extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::SiteMonitor";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute TaskId: The ID of the site monitoring task.
     */
    public readonly attrTaskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property address: The URL or IP address monitored by the monitoring task.
     */
    public address: string | ros.IResolvable;

    /**
     * @Property taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
     * It can contain letters, digits, and underscores (_).
     */
    public taskName: string | ros.IResolvable;

    /**
     * @Property taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
     * UDP, DNS, SMTP, POP3, and FTP.
     */
    public taskType: string | ros.IResolvable;

    /**
     * @Property alertIds:
     */
    public alertIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
     * minutes. Default value: 1.
     */
    public interval: number | ros.IResolvable | undefined;

    /**
     * @Property ispCities: The information about detection points, which is specified in a JSON array. Example:
     * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
     * Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
     * points that can be used to create site monitoring tasks. For more information, see
     * DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
     * points for site monitoring.
     */
    public ispCities: Array<RosSiteMonitor.IspCitiesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property optionsJson: The extended options of the protocol that is used by the site monitoring task. The
     * options vary based on the protocol.
     */
    public optionsJson: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CMS::SiteMonitor`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSiteMonitorProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSiteMonitor.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTaskId = this.getAtt('TaskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.address = props.address;
        this.taskName = props.taskName;
        this.taskType = props.taskType;
        this.alertIds = props.alertIds;
        this.interval = props.interval;
        this.ispCities = props.ispCities;
        this.optionsJson = props.optionsJson;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            address: this.address,
            taskName: this.taskName,
            taskType: this.taskType,
            alertIds: this.alertIds,
            interval: this.interval,
            ispCities: this.ispCities,
            optionsJson: this.optionsJson,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSiteMonitorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSiteMonitor {
    /**
     * @stability external
     */
    export interface IspCitiesProperty {
        /**
         * @Property isp:
         */
        readonly isp: string | ros.IResolvable;
        /**
         * @Property city:
         */
        readonly city: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IspCitiesProperty`
 *
 * @param properties - the TypeScript properties of a `IspCitiesProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteMonitor_IspCitiesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isp', ros.requiredValidator)(properties.isp));
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    errors.collect(ros.propertyValidator('city', ros.requiredValidator)(properties.city));
    errors.collect(ros.propertyValidator('city', ros.validateString)(properties.city));
    return errors.wrap('supplied properties not correct for "IspCitiesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::SiteMonitor.IspCities` resource
 *
 * @param properties - the TypeScript properties of a `IspCitiesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::SiteMonitor.IspCities` resource.
 */
// @ts-ignore TS6133
function rosSiteMonitorIspCitiesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSiteMonitor_IspCitiesPropertyValidator(properties).assertSuccess();
    return {
      Isp: ros.stringToRosTemplate(properties.isp),
      City: ros.stringToRosTemplate(properties.city),
    };
}
