import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceInstance } from './computenest.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServiceInstance as ServiceInstanceProperty };

/**
 * Properties for defining a `ALIYUN::ComputeNest::ServiceInstance`
 */
export interface ServiceInstanceProps {

    /**
     * Property service: Service details.
     */
    readonly service: RosServiceInstance.ServiceProperty | ros.IResolvable;

    /**
     * Property commodity: Cloud market commodity purchase parameters.
     */
    readonly commodity?: RosServiceInstance.CommodityProperty | ros.IResolvable;

    /**
     * Property contactGroup: Alarm Contact Group.
     */
    readonly contactGroup?: string | ros.IResolvable;

    /**
     * Property enableInstanceOps: Whether the service instance has the O & M function. Possible values:
     * - true: The service instance has a generation O & M function.
     * - false: The service instance does not have the O & M function.
     */
    readonly enableInstanceOps?: boolean | ros.IResolvable;

    /**
     * Property enableUserPrometheus: Whether Prometheus monitoring is enabled. Possible values:
     * - true: enabled.
     * - false: not enabled.
     */
    readonly enableUserPrometheus?: boolean | ros.IResolvable;

    /**
     * Property marketInstanceId: The ID of the cloud marketplace instance.
     */
    readonly marketInstanceId?: string | ros.IResolvable;

    /**
     * Property name: The name of the service instance.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property operationName: Change operation name.
     */
    readonly operationName?: string | ros.IResolvable;

    /**
     * Property parameters: The parameters entered by the deployment service instance.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property predefinedParameterName: Package name.
     */
    readonly predefinedParameterName?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property specificationCode: Commodity specification Code.
     */
    readonly specificationCode?: string | ros.IResolvable;

    /**
     * Property tags: Tags of service instance.
     */
    readonly tags?: RosServiceInstance.TagsProperty[];

    /**
     * Property templateName: Template name.
     */
    readonly templateName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ComputeNest::ServiceInstance`
 */
export class ServiceInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Components: Additional billing items.
     */
    public readonly attrComponents: ros.IResolvable;

    /**
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute EnableInstanceOps: Whether the service instance has the O & M function.
     */
    public readonly attrEnableInstanceOps: ros.IResolvable;

    /**
     * Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
     */
    public readonly attrEnableUserPrometheus: ros.IResolvable;

    /**
     * Attribute IsOperated: Whether the generation O & M function of the service instance is enabled.
     */
    public readonly attrIsOperated: ros.IResolvable;

    /**
     * Attribute LicenseEndTime: License expiration time.
     */
    public readonly attrLicenseEndTime: ros.IResolvable;

    /**
     * Attribute Name: The name of the service instance.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute NetworkConfig: Network configuration information.
     */
    public readonly attrNetworkConfig: ros.IResolvable;

    /**
     * Attribute Outputs: Create the output Field returned by the service instance.
     */
    public readonly attrOutputs: ros.IResolvable;

    /**
     * Attribute Parameters: The parameters entered by the deployment service instance.
     */
    public readonly attrParameters: ros.IResolvable;

    /**
     * Attribute PredefinedParameterName: Package name.
     */
    public readonly attrPredefinedParameterName: ros.IResolvable;

    /**
     * Attribute Progress: The deployment progress of the service instance. Unit:%.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Service: Service details.
     */
    public readonly attrService: ros.IResolvable;

    /**
     * Attribute ServiceInstanceId: The ID of the service instance.
     */
    public readonly attrServiceInstanceId: ros.IResolvable;

    /**
     * Attribute ServiceType: Service type.
     */
    public readonly attrServiceType: ros.IResolvable;

    /**
     * Attribute Source: The source of the service instance.
     */
    public readonly attrSource: ros.IResolvable;

    /**
     * Attribute StatusDetail: The status description of the deployment instance.
     */
    public readonly attrStatusDetail: ros.IResolvable;

    /**
     * Attribute SupplierUid: Service provider AliUid.
     */
    public readonly attrSupplierUid: ros.IResolvable;

    /**
     * Attribute Tags: User-defined labels.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute TemplateName: Template name.
     */
    public readonly attrTemplateName: ros.IResolvable;

    /**
     * Attribute UpdateTime: Update time.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * Attribute UserId: AliUid of the user.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ComputeNest::ServiceInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosServiceInstance = new RosServiceInstance(this, id,  {
            specificationCode: props.specificationCode,
            parameters: props.parameters,
            resourceGroupId: props.resourceGroupId,
            operationName: props.operationName,
            enableInstanceOps: props.enableInstanceOps,
            service: props.service,
            predefinedParameterName: props.predefinedParameterName,
            name: props.name,
            commodity: props.commodity,
            enableUserPrometheus: props.enableUserPrometheus,
            templateName: props.templateName,
            marketInstanceId: props.marketInstanceId,
            contactGroup: props.contactGroup,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceInstance;
        this.attrComponents = rosServiceInstance.attrComponents;
        this.attrCreateTime = rosServiceInstance.attrCreateTime;
        this.attrEnableInstanceOps = rosServiceInstance.attrEnableInstanceOps;
        this.attrEnableUserPrometheus = rosServiceInstance.attrEnableUserPrometheus;
        this.attrIsOperated = rosServiceInstance.attrIsOperated;
        this.attrLicenseEndTime = rosServiceInstance.attrLicenseEndTime;
        this.attrName = rosServiceInstance.attrName;
        this.attrNetworkConfig = rosServiceInstance.attrNetworkConfig;
        this.attrOutputs = rosServiceInstance.attrOutputs;
        this.attrParameters = rosServiceInstance.attrParameters;
        this.attrPredefinedParameterName = rosServiceInstance.attrPredefinedParameterName;
        this.attrProgress = rosServiceInstance.attrProgress;
        this.attrResourceGroupId = rosServiceInstance.attrResourceGroupId;
        this.attrService = rosServiceInstance.attrService;
        this.attrServiceInstanceId = rosServiceInstance.attrServiceInstanceId;
        this.attrServiceType = rosServiceInstance.attrServiceType;
        this.attrSource = rosServiceInstance.attrSource;
        this.attrStatusDetail = rosServiceInstance.attrStatusDetail;
        this.attrSupplierUid = rosServiceInstance.attrSupplierUid;
        this.attrTags = rosServiceInstance.attrTags;
        this.attrTemplateName = rosServiceInstance.attrTemplateName;
        this.attrUpdateTime = rosServiceInstance.attrUpdateTime;
        this.attrUserId = rosServiceInstance.attrUserId;
    }
}
