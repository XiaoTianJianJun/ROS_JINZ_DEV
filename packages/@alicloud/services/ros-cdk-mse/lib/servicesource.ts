import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceSource } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServiceSource as ServiceSourceProperty };

/**
 * Properties for defining a `ALIYUN::MSE::ServiceSource`
 */
export interface ServiceSourceProps {

    /**
     * Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;

    /**
     * Property name: The name.
     * If Source=K8S, this parameter specifies the name of the ACK cluster.
     * If Source=MSE, this parameter specifies the ID of the Nacos instance.
     * If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
     * If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
     * If Source=SAE, this parameter specifies the ID of the SAE namespace.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property source: The service source. Valid values:
     * K8S: ACK cluster
     * MSE: MSE Nacos instance
     */
    readonly source: string | ros.IResolvable;

    /**
     * Property address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    readonly address?: string | ros.IResolvable;

    /**
     * Property groupList: The list of service groups. This is required when Source=EDAS.
     */
    readonly groupList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ingressOptions: The Ingress configuration.
     */
    readonly ingressOptions?: RosServiceSource.IngressOptionsProperty | ros.IResolvable;

    /**
     * Property pathList: An array of service root paths.
     */
    readonly pathList?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::MSE::ServiceSource`
 */
export class ServiceSource extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    public readonly attrAddress: ros.IResolvable;

    /**
     * Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    public readonly attrGatewayUniqueId: ros.IResolvable;

    /**
     * Attribute Id: The ID of service source.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * Attribute Name: The name.
If Type is set to K8S, this parameter specifies the name of the ACK cluster.
If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::MSE::ServiceSource`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceSourceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosServiceSource = new RosServiceSource(this, id,  {
            gatewayUniqueId: props.gatewayUniqueId,
            ingressOptions: props.ingressOptions,
            groupList: props.groupList,
            address: props.address,
            pathList: props.pathList,
            source: props.source,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceSource;
        this.attrAddress = rosServiceSource.attrAddress;
        this.attrGatewayUniqueId = rosServiceSource.attrGatewayUniqueId;
        this.attrId = rosServiceSource.attrId;
        this.attrName = rosServiceSource.attrName;
    }
}
