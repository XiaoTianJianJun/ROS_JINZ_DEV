// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::PAI::Dataset`
 */
export interface RosDatasetProps {

    /**
     * @Property datasetName: The name of the dataset. The naming rules are as follows:
     * - Start with a lowercase letter, uppercase letter, number, or Chinese.
     * - Can contain an underscore (_) or a dash (-).
     * - 1~127 characters in length.
     */
    readonly datasetName: string | ros.IResolvable;

    /**
     * @Property dataSourceType: The data source type. The following values are supported:
     * - OSS: Alibaba Cloud Object Storage (OSS).
     * - NAS: Alibaba cloud file storage (NAS).
     */
    readonly dataSourceType: string | ros.IResolvable;

    /**
     * @Property property: The properties of the dataset. The following values are supported:
     * - FILE: FILE.
     * - DIRECTORY: folder.
     */
    readonly property: string | ros.IResolvable;

    /**
     * @Property uri: The Uri configuration sample is as follows:
     * - The data source type is OSS:'oss:// bucket.endpoint/object'
     * - The data source type is NAS:
     * The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/';
     * CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /';
     * CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'.
     * CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
     */
    readonly uri: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property accessibility: Workspace visibility. The following values are supported:
     * - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
     * - PUBLIC: The workspace is visible to all users.
     */
    readonly accessibility?: string | ros.IResolvable;

    /**
     * @Property dataType: The dataset type. The default value is COMMON. The following values are supported:
     * - COMMON: COMMON.
     * - PIC: picture.
     * - TEXT: TEXT.
     * - VIDEO: VIDEO.
     * - AUDIO: AUDIO.
     */
    readonly dataType?: string | ros.IResolvable;

    /**
     * @Property description: Custom descriptions of datasets to distinguish between different datasets.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property options: The extended field, which is of the JsonString type.
     * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
     */
    readonly options?: string | ros.IResolvable;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    readonly sourceId?: string | ros.IResolvable;

    /**
     * @Property sourceType: The data source type. The default value is USER. The following values are supported:
     * - PAI-PUBLIC-DATASET:PAI public dataset.
     * - ITAG: The dataset generated by the iTAG module annotation result.
     * - USER: The data set registered by the USER.
     */
    readonly sourceType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatasetProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasetProps`
 *
 * @returns the result of the validation.
 */
function RosDatasetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('options', ros.validateString)(properties.options));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.accessibility && (typeof properties.accessibility) !== 'object') {
        errors.collect(ros.propertyValidator('accessibility', ros.validateAllowedValues)({
          data: properties.accessibility,
          allowedValues: ["PRIVATE","PUBLIC"],
        }));
    }
    errors.collect(ros.propertyValidator('accessibility', ros.validateString)(properties.accessibility));
    errors.collect(ros.propertyValidator('datasetName', ros.requiredValidator)(properties.datasetName));
    errors.collect(ros.propertyValidator('datasetName', ros.validateString)(properties.datasetName));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["USER","ITAG","PAI-PUBLIC-DATASET"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('sourceId', ros.validateString)(properties.sourceId));
    errors.collect(ros.propertyValidator('dataSourceType', ros.requiredValidator)(properties.dataSourceType));
    if(properties.dataSourceType && (typeof properties.dataSourceType) !== 'object') {
        errors.collect(ros.propertyValidator('dataSourceType', ros.validateAllowedValues)({
          data: properties.dataSourceType,
          allowedValues: ["OSS","NAS"],
        }));
    }
    errors.collect(ros.propertyValidator('dataSourceType', ros.validateString)(properties.dataSourceType));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.dataType && (typeof properties.dataType) !== 'object') {
        errors.collect(ros.propertyValidator('dataType', ros.validateAllowedValues)({
          data: properties.dataType,
          allowedValues: ["COMMON","PIC","TEXT","VIDEO","AUDIO"],
        }));
    }
    errors.collect(ros.propertyValidator('dataType', ros.validateString)(properties.dataType));
    errors.collect(ros.propertyValidator('uri', ros.requiredValidator)(properties.uri));
    errors.collect(ros.propertyValidator('uri', ros.validateString)(properties.uri));
    errors.collect(ros.propertyValidator('property', ros.requiredValidator)(properties.property));
    if(properties.property && (typeof properties.property) !== 'object') {
        errors.collect(ros.propertyValidator('property', ros.validateAllowedValues)({
          data: properties.property,
          allowedValues: ["FILE","DIRECTORY"],
        }));
    }
    errors.collect(ros.propertyValidator('property', ros.validateString)(properties.property));
    return errors.wrap('supplied properties not correct for "RosDatasetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::Dataset` resource
 *
 * @param properties - the TypeScript properties of a `RosDatasetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::Dataset` resource.
 */
// @ts-ignore TS6133
function rosDatasetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatasetPropsValidator(properties).assertSuccess();
    }
    return {
      DatasetName: ros.stringToRosTemplate(properties.datasetName),
      DataSourceType: ros.stringToRosTemplate(properties.dataSourceType),
      Property: ros.stringToRosTemplate(properties.property),
      Uri: ros.stringToRosTemplate(properties.uri),
      WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
      Accessibility: ros.stringToRosTemplate(properties.accessibility),
      DataType: ros.stringToRosTemplate(properties.dataType),
      Description: ros.stringToRosTemplate(properties.description),
      Options: ros.stringToRosTemplate(properties.options),
      SourceId: ros.stringToRosTemplate(properties.sourceId),
      SourceType: ros.stringToRosTemplate(properties.sourceType),
    };
}

/**
 * A ROS template type:  `ALIYUN::PAI::Dataset`
 */
export class RosDataset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Dataset";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Accessibility: Workspace visibility.
     */
    public readonly attrAccessibility: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DataSourceType: The data source type.
     */
    public readonly attrDataSourceType: ros.IResolvable;

    /**
     * @Attribute DataType: The dataset type. The default value is COMMON.
     */
    public readonly attrDataType: ros.IResolvable;

    /**
     * @Attribute DatasetId: The first ID of the resource.
     */
    public readonly attrDatasetId: ros.IResolvable;

    /**
     * @Attribute DatasetName: The name of the dataset.
     */
    public readonly attrDatasetName: ros.IResolvable;

    /**
     * @Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute GmtModifiedTime: Update time.
     */
    public readonly attrGmtModifiedTime: ros.IResolvable;

    /**
     * @Attribute Options: The extended field, which is of the JsonString type.
     */
    public readonly attrOptions: ros.IResolvable;

    /**
     * @Attribute OwnerId: The ID of the primary account.
     */
    public readonly attrOwnerId: ros.IResolvable;

    /**
     * @Attribute Property: The properties of the dataset.
     */
    public readonly attrProperty: ros.IResolvable;

    /**
     * @Attribute SourceId: The data source ID.
     */
    public readonly attrSourceId: ros.IResolvable;

    /**
     * @Attribute SourceType: The data source type. The default value is USER.
     */
    public readonly attrSourceType: ros.IResolvable;

    /**
     * @Attribute Uri: The Uri configuration sample is as follows:.
     */
    public readonly attrUri: ros.IResolvable;

    /**
     * @Attribute UserId: The ID of the user to which the dataset belongs.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property datasetName: The name of the dataset. The naming rules are as follows:
     * - Start with a lowercase letter, uppercase letter, number, or Chinese.
     * - Can contain an underscore (_) or a dash (-).
     * - 1~127 characters in length.
     */
    public datasetName: string | ros.IResolvable;

    /**
     * @Property dataSourceType: The data source type. The following values are supported:
     * - OSS: Alibaba Cloud Object Storage (OSS).
     * - NAS: Alibaba cloud file storage (NAS).
     */
    public dataSourceType: string | ros.IResolvable;

    /**
     * @Property property: The properties of the dataset. The following values are supported:
     * - FILE: FILE.
     * - DIRECTORY: folder.
     */
    public property: string | ros.IResolvable;

    /**
     * @Property uri: The Uri configuration sample is as follows:
     * - The data source type is OSS:'oss:// bucket.endpoint/object'
     * - The data source type is NAS:
     * The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/';
     * CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /';
     * CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'.
     * CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
     */
    public uri: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property accessibility: Workspace visibility. The following values are supported:
     * - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
     * - PUBLIC: The workspace is visible to all users.
     */
    public accessibility: string | ros.IResolvable | undefined;

    /**
     * @Property dataType: The dataset type. The default value is COMMON. The following values are supported:
     * - COMMON: COMMON.
     * - PIC: picture.
     * - TEXT: TEXT.
     * - VIDEO: VIDEO.
     * - AUDIO: AUDIO.
     */
    public dataType: string | ros.IResolvable | undefined;

    /**
     * @Property description: Custom descriptions of datasets to distinguish between different datasets.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property options: The extended field, which is of the JsonString type.
     * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
     */
    public options: string | ros.IResolvable | undefined;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    public sourceId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceType: The data source type. The default value is USER. The following values are supported:
     * - PAI-PUBLIC-DATASET:PAI public dataset.
     * - ITAG: The dataset generated by the iTAG module annotation result.
     * - USER: The data set registered by the USER.
     */
    public sourceType: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::PAI::Dataset`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDataset.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessibility = this.getAtt('Accessibility');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDataSourceType = this.getAtt('DataSourceType');
        this.attrDataType = this.getAtt('DataType');
        this.attrDatasetId = this.getAtt('DatasetId');
        this.attrDatasetName = this.getAtt('DatasetName');
        this.attrDescription = this.getAtt('Description');
        this.attrGmtModifiedTime = this.getAtt('GmtModifiedTime');
        this.attrOptions = this.getAtt('Options');
        this.attrOwnerId = this.getAtt('OwnerId');
        this.attrProperty = this.getAtt('Property');
        this.attrSourceId = this.getAtt('SourceId');
        this.attrSourceType = this.getAtt('SourceType');
        this.attrUri = this.getAtt('Uri');
        this.attrUserId = this.getAtt('UserId');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.datasetName = props.datasetName;
        this.dataSourceType = props.dataSourceType;
        this.property = props.property;
        this.uri = props.uri;
        this.workspaceId = props.workspaceId;
        this.accessibility = props.accessibility;
        this.dataType = props.dataType;
        this.description = props.description;
        this.options = props.options;
        this.sourceId = props.sourceId;
        this.sourceType = props.sourceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            datasetName: this.datasetName,
            dataSourceType: this.dataSourceType,
            property: this.property,
            uri: this.uri,
            workspaceId: this.workspaceId,
            accessibility: this.accessibility,
            dataType: this.dataType,
            description: this.description,
            options: this.options,
            sourceId: this.sourceId,
            sourceType: this.sourceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatasetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::PAI::Service`
 */
export interface RosServiceProps {

    /**
     * @Property serviceConfig: Service configuration information.
     */
    readonly serviceConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property develop: Whether to enter the development mode.
     */
    readonly develop?: string | ros.IResolvable;

    /**
     * @Property labels: Service Tag.
     */
    readonly labels?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the result of the validation.
 */
function RosServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('develop', ros.validateString)(properties.develop));
    errors.collect(ros.propertyValidator('serviceConfig', ros.requiredValidator)(properties.serviceConfig));
    errors.collect(ros.propertyValidator('serviceConfig', ros.hashValidator(ros.validateAny))(properties.serviceConfig));
    errors.collect(ros.propertyValidator('labels', ros.hashValidator(ros.validateAny))(properties.labels));
    return errors.wrap('supplied properties not correct for "RosServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::Service` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::Service` resource.
 */
// @ts-ignore TS6133
function rosServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServicePropsValidator(properties).assertSuccess();
    }
    return {
      ServiceConfig: ros.hashMapper(ros.objectToRosTemplate)(properties.serviceConfig),
      Develop: ros.stringToRosTemplate(properties.develop),
      Labels: ros.hashMapper(ros.objectToRosTemplate)(properties.labels),
    };
}

/**
 * A ROS template type:  `ALIYUN::PAI::Service`
 */
export class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Service";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccessToken: Service Request authentication token.
     */
    public readonly attrAccessToken: ros.IResolvable;

    /**
     * @Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
     */
    public readonly attrCallerUid: ros.IResolvable;

    /**
     * @Attribute Cpu: Number of service CPU cores.
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time of the service.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CurrentVersion: Current running version of the service.
     */
    public readonly attrCurrentVersion: ros.IResolvable;

    /**
     * @Attribute ExtraData: Service Extra Information.
     */
    public readonly attrExtraData: ros.IResolvable;

    /**
     * @Attribute Gpu: Number of service GPU cards.
     */
    public readonly attrGpu: ros.IResolvable;

    /**
     * @Attribute Image: Service Deployment Mirroring.
     */
    public readonly attrImage: ros.IResolvable;

    /**
     * @Attribute InternetEndpoint: Public network Endpoint of the service.
     */
    public readonly attrInternetEndpoint: ros.IResolvable;

    /**
     * @Attribute IntranetEndpoint: The intranet Endpoint of the service.
     */
    public readonly attrIntranetEndpoint: ros.IResolvable;

    /**
     * @Attribute Labels: Service Tag.
     */
    public readonly attrLabels: ros.IResolvable;

    /**
     * @Attribute LatestVersion: The latest version of the service.
     */
    public readonly attrLatestVersion: ros.IResolvable;

    /**
     * @Attribute Memory: Memory of service (MB).
     */
    public readonly attrMemory: ros.IResolvable;

    /**
     * @Attribute Message: Latest information on services.
     */
    public readonly attrMessage: ros.IResolvable;

    /**
     * @Attribute Namespace: The namespace to which the service belongs.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * @Attribute ParentUid: Primary account ID of the creator.
     */
    public readonly attrParentUid: ros.IResolvable;

    /**
     * @Attribute PendingInstance: Number of instances where the service is not currently ready.
     */
    public readonly attrPendingInstance: ros.IResolvable;

    /**
     * @Attribute Reason: Service deployment failure reason.
     */
    public readonly attrReason: ros.IResolvable;

    /**
     * @Attribute Resource: The ID of the resource group to which the service belongs.
     */
    public readonly attrResource: ros.IResolvable;

    /**
     * @Attribute ResourceAlias: Name of the resource group where the service resides.
     */
    public readonly attrResourceAlias: ros.IResolvable;

    /**
     * @Attribute Role: Grouping Service Role.
     */
    public readonly attrRole: ros.IResolvable;

    /**
     * @Attribute RoleAttrs: Grouping Service Role Properties.
     */
    public readonly attrRoleAttrs: ros.IResolvable;

    /**
     * @Attribute RunningInstance: Number of instances in service running.
     */
    public readonly attrRunningInstance: ros.IResolvable;

    /**
     * @Attribute SafetyLock: Service Security Lock Status.
     */
    public readonly attrSafetyLock: ros.IResolvable;

    /**
     * @Attribute ServiceConfig: Service configuration information.
     */
    public readonly attrServiceConfig: ros.IResolvable;

    /**
     * @Attribute ServiceGroup: Group to which the service belongs.
     */
    public readonly attrServiceGroup: ros.IResolvable;

    /**
     * @Attribute ServiceName: Service Name.
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute ServiceUid: Unique Service ID.
     */
    public readonly attrServiceUid: ros.IResolvable;

    /**
     * @Attribute TotalInstance: Total number of instances required by the service.
     */
    public readonly attrTotalInstance: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Service Last Updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute Weight: Packet Service Traffic Weight.
     */
    public readonly attrWeight: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceConfig: Service configuration information.
     */
    public serviceConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property develop: Whether to enter the development mode.
     */
    public develop: string | ros.IResolvable | undefined;

    /**
     * @Property labels: Service Tag.
     */
    public labels: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::PAI::Service`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessToken = this.getAtt('AccessToken');
        this.attrCallerUid = this.getAtt('CallerUid');
        this.attrCpu = this.getAtt('Cpu');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCurrentVersion = this.getAtt('CurrentVersion');
        this.attrExtraData = this.getAtt('ExtraData');
        this.attrGpu = this.getAtt('Gpu');
        this.attrImage = this.getAtt('Image');
        this.attrInternetEndpoint = this.getAtt('InternetEndpoint');
        this.attrIntranetEndpoint = this.getAtt('IntranetEndpoint');
        this.attrLabels = this.getAtt('Labels');
        this.attrLatestVersion = this.getAtt('LatestVersion');
        this.attrMemory = this.getAtt('Memory');
        this.attrMessage = this.getAtt('Message');
        this.attrNamespace = this.getAtt('Namespace');
        this.attrParentUid = this.getAtt('ParentUid');
        this.attrPendingInstance = this.getAtt('PendingInstance');
        this.attrReason = this.getAtt('Reason');
        this.attrResource = this.getAtt('Resource');
        this.attrResourceAlias = this.getAtt('ResourceAlias');
        this.attrRole = this.getAtt('Role');
        this.attrRoleAttrs = this.getAtt('RoleAttrs');
        this.attrRunningInstance = this.getAtt('RunningInstance');
        this.attrSafetyLock = this.getAtt('SafetyLock');
        this.attrServiceConfig = this.getAtt('ServiceConfig');
        this.attrServiceGroup = this.getAtt('ServiceGroup');
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrServiceUid = this.getAtt('ServiceUid');
        this.attrTotalInstance = this.getAtt('TotalInstance');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrWeight = this.getAtt('Weight');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceConfig = props.serviceConfig;
        this.develop = props.develop;
        this.labels = props.labels;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceConfig: this.serviceConfig,
            develop: this.develop,
            labels: this.labels,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::PAI::Workspace`
 */
export interface RosWorkspaceProps {

    /**
     * @Property description: Workspace description, no more than 80 characters.
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property envTypes: Environments contained in the workspace:
     * - Simple mode only production environment (prod).
     * - Standard mode includes development environment (dev) and production environment (prod).
     */
    readonly envTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly workspaceName: string | ros.IResolvable;

    /**
     * @Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly displayName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspaceProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.displayName && (typeof properties.displayName) !== 'object') {
        errors.collect(ros.propertyValidator('displayName', ros.validateAllowedPattern)({
          data: properties.displayName,
          reg: /^[a-zA-Z][_a-zA-Z0-9]{2,22}$/
        }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('workspaceName', ros.requiredValidator)(properties.workspaceName));
    if(properties.workspaceName && (typeof properties.workspaceName) !== 'object') {
        errors.collect(ros.propertyValidator('workspaceName', ros.validateAllowedPattern)({
          data: properties.workspaceName,
          reg: /^[a-zA-Z][_a-zA-Z0-9]{2,22}$/
        }));
    }
    errors.collect(ros.propertyValidator('workspaceName', ros.validateString)(properties.workspaceName));
    errors.collect(ros.propertyValidator('envTypes', ros.requiredValidator)(properties.envTypes));
    errors.collect(ros.propertyValidator('envTypes', ros.listValidator(ros.validateString))(properties.envTypes));
    return errors.wrap('supplied properties not correct for "RosWorkspaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::Workspace` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::Workspace` resource.
 */
// @ts-ignore TS6133
function rosWorkspacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspacePropsValidator(properties).assertSuccess();
    }
    return {
      Description: ros.stringToRosTemplate(properties.description),
      EnvTypes: ros.listMapper(ros.stringToRosTemplate)(properties.envTypes),
      WorkspaceName: ros.stringToRosTemplate(properties.workspaceName),
      DisplayName: ros.stringToRosTemplate(properties.displayName),
    };
}

/**
 * A ROS template type:  `ALIYUN::PAI::Workspace`
 */
export class RosWorkspace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Workspace";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AdminNames: List of administrator account names.
     */
    public readonly attrAdminNames: ros.IResolvable;

    /**
     * @Attribute Creator: The user ID of the creator.
     */
    public readonly attrCreator: ros.IResolvable;

    /**
     * @Attribute Description: Workspace description, no more than 80 characters.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute EnvTypes: Environments contained in the workspace:.
     */
    public readonly attrEnvTypes: ros.IResolvable;

    /**
     * @Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    public readonly attrExtraInfos: ros.IResolvable;

    /**
     * @Attribute Owner: Workspace owner ID, displayed when Verbose is true.
     */
    public readonly attrOwner: ros.IResolvable;

    /**
     * @Attribute Users: List of users.
     */
    public readonly attrUsers: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: The ID of the workspace.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    /**
     * @Attribute WorkspaceName: The workspace name.
     */
    public readonly attrWorkspaceName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Workspace description, no more than 80 characters.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property envTypes: Environments contained in the workspace:
     * - Simple mode only production environment (prod).
     * - Standard mode includes development environment (dev) and production environment (prod).
     */
    public envTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    public workspaceName: string | ros.IResolvable;

    /**
     * @Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    public displayName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::PAI::Workspace`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAdminNames = this.getAtt('AdminNames');
        this.attrCreator = this.getAtt('Creator');
        this.attrDescription = this.getAtt('Description');
        this.attrDisplayName = this.getAtt('DisplayName');
        this.attrEnvTypes = this.getAtt('EnvTypes');
        this.attrExtraInfos = this.getAtt('ExtraInfos');
        this.attrOwner = this.getAtt('Owner');
        this.attrUsers = this.getAtt('Users');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');
        this.attrWorkspaceName = this.getAtt('WorkspaceName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.envTypes = props.envTypes;
        this.workspaceName = props.workspaceName;
        this.displayName = props.displayName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            envTypes: this.envTypes,
            workspaceName: this.workspaceName,
            displayName: this.displayName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
