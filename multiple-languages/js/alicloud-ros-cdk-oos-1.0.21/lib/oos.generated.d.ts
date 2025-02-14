import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::OOS::DefaultPatchBaseline`
 */
export interface RosDefaultPatchBaselineProps {
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::OOS::DefaultPatchBaseline`
 */
export declare class RosDefaultPatchBaseline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::DefaultPatchBaseline";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly attrApprovalRules: ros.IResolvable;
    /**
     * @Attribute CreatedBy: The creator of the patch baseline.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * @Attribute CreatedDate: The time when the patch baseline was created.
     */
    readonly attrCreatedDate: ros.IResolvable;
    /**
     * @Attribute Description: The description of the patch baseline.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute OperationSystem: The type of the operating system.
     */
    readonly attrOperationSystem: ros.IResolvable;
    /**
     * @Attribute PatchBaselineId: The ID of the patch baseline.
     */
    readonly attrPatchBaselineId: ros.IResolvable;
    /**
     * @Attribute PatchBaselineName: The name of the patch baseline.
     */
    readonly attrPatchBaselineName: ros.IResolvable;
    /**
     * @Attribute ShareType: The share type of the patch baseline.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * @Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    readonly attrUpdatedBy: ros.IResolvable;
    /**
     * @Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    readonly attrUpdatedDate: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    patchBaselineName: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::OOS::DefaultPatchBaseline`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDefaultPatchBaselineProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::OOS::Execution`
 */
export interface RosExecutionProps {
    /**
     * @Property templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
     */
    readonly templateName: string | ros.IResolvable;
    /**
     * @Property mode: Execution mode.
     */
    readonly mode?: string | ros.IResolvable;
    /**
     * @Property parameters: Parameters for the execution of template.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property parentExecutionId: Parent execution ID.
     */
    readonly parentExecutionId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property resourceOptions: Resource options user by ROS.
     */
    readonly resourceOptions?: RosExecution.ResourceOptionsProperty | ros.IResolvable;
    /**
     * @Property safetyCheck: Security check mode. Allowed values:
     * - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
     * - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
     */
    readonly safetyCheck?: string | ros.IResolvable;
    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags?: {
        [key: string]: (any);
    };
    /**
     * @Property templateVersion: Version number of template. Default to the latest version.
     */
    readonly templateVersion?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::OOS::Execution`
 */
export declare class RosExecution extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Execution";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
     */
    readonly attrCounters: ros.IResolvable;
    /**
     * @Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    readonly attrCurlCli: ros.IResolvable;
    /**
     * @Attribute ExecutionId: Execution ID.
     */
    readonly attrExecutionId: ros.IResolvable;
    /**
     * @Attribute Outputs: Execution output.
     */
    readonly attrOutputs: ros.IResolvable;
    /**
     * @Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    readonly attrPowerShellCurlCli: ros.IResolvable;
    /**
     * @Attribute Status: Execution status.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute StatusMessage: Execution status information.
     */
    readonly attrStatusMessage: ros.IResolvable;
    /**
     * @Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary "{\"data\": {\"NotifyType\": \"Approve\"}}"
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    readonly attrWindowsCurlCli: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
     */
    templateName: string | ros.IResolvable;
    /**
     * @Property mode: Execution mode.
     */
    mode: string | ros.IResolvable | undefined;
    /**
     * @Property parameters: Parameters for the execution of template.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property parentExecutionId: Parent execution ID.
     */
    parentExecutionId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceOptions: Resource options user by ROS.
     */
    resourceOptions: RosExecution.ResourceOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property safetyCheck: Security check mode. Allowed values:
     * - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
     * - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
     */
    safetyCheck: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    tags: {
        [key: string]: (any);
    } | undefined;
    /**
     * @Property templateVersion: Version number of template. Default to the latest version.
     */
    templateVersion: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::OOS::Execution`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExecutionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosExecution {
    /**
     * @stability external
     */
    interface ResourceOptionsProperty {
        /**
         * @Property cancelOnDelete: Whether to cancel execution for resource deletion, if the execution is not completed. Default to false.
         */
        readonly cancelOnDelete?: boolean | ros.IResolvable;
        /**
         * @Property timeout: Timeout seconds before the completion of execution. Default to 1800.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property successStatuses: It is used for ROS to judge if resource creation is successful.
     * Default to [Success].
     * ROS will wait util some status in SuccessStatuses or FailureStatuses.
     * FailureStatuses has higher priority.
     * Specified all statuses(Started,Queued,Running,Waiting,Success,Failed,Cancelled) if you do not want to wait for the completion of execution.
         */
        readonly successStatuses?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property failureStatuses: It is used for ROS to judge if resource creation fails.
     * Default to [Failed, Cancelled].
     * ROS will wait util some status in SuccessStatuses or FailureStatuses.
     * FailureStatuses has higher priority.
         */
        readonly failureStatuses?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::OOS::Parameter`
 */
export interface RosParameterProps {
    /**
     * @Property name: The name of the parameter.
     * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
     * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property type: The data type of the common parameter.
     * Valid values: String and StringList.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property value: The value of the parameter.
     * The value must be 1 to 4096 characters in length.
     */
    readonly value: string | ros.IResolvable;
    /**
     * @Property constraints: The constraints of the parameter.
     * By default, this parameter is null. Valid values:
     * AllowedValues: The value that is allowed for the parameter. It must be an array string.
     * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
     * MinLength: The minimum length of the parameter.
     * MaxLength: The maximum length of the parameter.
     */
    readonly constraints?: string | ros.IResolvable;
    /**
     * @Property description: The description of the parameter.
     * The description must be 1 to 200 characters in length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::OOS::Parameter`
 */
export declare class RosParameter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Parameter";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Name: The Name of the parameter.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute Value: The Value of the parameter.
     */
    readonly attrValue: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the parameter.
     * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
     * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    name: string | ros.IResolvable;
    /**
     * @Property type: The data type of the common parameter.
     * Valid values: String and StringList.
     */
    type: string | ros.IResolvable;
    /**
     * @Property value: The value of the parameter.
     * The value must be 1 to 4096 characters in length.
     */
    value: string | ros.IResolvable;
    /**
     * @Property constraints: The constraints of the parameter.
     * By default, this parameter is null. Valid values:
     * AllowedValues: The value that is allowed for the parameter. It must be an array string.
     * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
     * MinLength: The minimum length of the parameter.
     * MaxLength: The maximum length of the parameter.
     */
    constraints: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the parameter.
     * The description must be 1 to 200 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::OOS::Parameter`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosParameterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::OOS::PatchBaseline`
 */
export interface RosPatchBaselineProps {
    /**
     * @Property approvalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly approvalRules: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property operationSystem: The type of the operating system.
     */
    readonly operationSystem: string | ros.IResolvable;
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;
    /**
     * @Property description: The description of the patch baseline.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::OOS::PatchBaseline`
 */
export declare class RosPatchBaseline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::PatchBaseline";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly attrApprovalRules: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the patch baseline was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CreatedBy: The creator of the patch baseline.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * @Attribute Description: The description of the patch baseline.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute OperationSystem: The type of the operating system.
     */
    readonly attrOperationSystem: ros.IResolvable;
    /**
     * @Attribute PatchBaselineId: The ID of the patch baseline.
     */
    readonly attrPatchBaselineId: ros.IResolvable;
    /**
     * @Attribute PatchBaselineName: The name of the patch baseline.
     */
    readonly attrPatchBaselineName: ros.IResolvable;
    /**
     * @Attribute ShareType: The share type of the patch baseline.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * @Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    readonly attrUpdatedBy: ros.IResolvable;
    /**
     * @Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    readonly attrUpdatedDate: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property approvalRules: The rules of scanning and installing patches for the specified operating system.
     */
    approvalRules: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property operationSystem: The type of the operating system.
     */
    operationSystem: string | ros.IResolvable;
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    patchBaselineName: string | ros.IResolvable;
    /**
     * @Property description: The description of the patch baseline.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::OOS::PatchBaseline`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPatchBaselineProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::OOS::SecretParameter`
 */
export interface RosSecretParameterProps {
    /**
     * @Property secretParameterName: The name of the encryption parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    readonly secretParameterName: string | ros.IResolvable;
    /**
     * @Property value: The value of the encryption parameter. The value must be 1 to 4096 characters in length.
     */
    readonly value: string | ros.IResolvable;
    /**
     * @Property constraints: The constraints of the encryption parameter.
     */
    readonly constraints?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property description: The description of the encryption parameter. The description must be 1 to 200 characters in length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    readonly keyId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of encryption parameter.
     */
    readonly tags?: RosSecretParameter.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::OOS::SecretParameter`
 */
export declare class RosSecretParameter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::SecretParameter";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Constraints: The constraints of the encryption parameter.
     */
    readonly attrConstraints: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the encryption parameter was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CreatedBy: The user who created the encryption parameter.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * @Attribute Description: The description of the encryption parameter.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    readonly attrKeyId: ros.IResolvable;
    /**
     * @Attribute ParameterVersion: The version number of the encryption parameter.
     */
    readonly attrParameterVersion: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecretParameterId: The ID of the encryption parameter.
     */
    readonly attrSecretParameterId: ros.IResolvable;
    /**
     * @Attribute SecretParameterName: The name of the encryption parameter.
     */
    readonly attrSecretParameterName: ros.IResolvable;
    /**
     * @Attribute ShareType: The share type of the encryption parameter.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * @Attribute Tags: Tags of encryption parameter.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute Type: The data type of the encryption parameter.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    readonly attrUpdatedBy: ros.IResolvable;
    /**
     * @Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    readonly attrUpdatedDate: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property secretParameterName: The name of the encryption parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    secretParameterName: string | ros.IResolvable;
    /**
     * @Property value: The value of the encryption parameter. The value must be 1 to 4096 characters in length.
     */
    value: string | ros.IResolvable;
    /**
     * @Property constraints: The constraints of the encryption parameter.
     */
    constraints: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the encryption parameter. The description must be 1 to 200 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    keyId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of encryption parameter.
     */
    tags: RosSecretParameter.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::OOS::SecretParameter`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretParameterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSecretParameter {
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
/**
 * Properties for defining a `ALIYUN::OOS::Template`
 */
export interface RosTemplateProps {
    /**
     * @Property content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
     */
    readonly content: string | ros.IResolvable;
    /**
     * @Property templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
     */
    readonly templateName: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags?: {
        [key: string]: (any);
    };
}
/**
 * A ROS template type:  `ALIYUN::OOS::Template`
 */
export declare class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Template";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ExecutionPolicy: Execution Policy
     */
    readonly attrExecutionPolicy: ros.IResolvable;
    /**
     * @Attribute TemplateId: Template ID
     */
    readonly attrTemplateId: ros.IResolvable;
    /**
     * @Attribute TemplateName: Template Name
     */
    readonly attrTemplateName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
     */
    content: string | ros.IResolvable;
    /**
     * @Property templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
     */
    templateName: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    tags: {
        [key: string]: (any);
    } | undefined;
    /**
     * Create a new `ALIYUN::OOS::Template`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
