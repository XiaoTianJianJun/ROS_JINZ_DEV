import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CAS::Certificate`
 */
export interface RosCertificateProps {
    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    readonly cert: string;
    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    readonly key: string;
    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    readonly name: string;
    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    readonly lang?: string;
    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    readonly sourceIp?: string;
}
/**
 * A ROS template type:  `ALIYUN::CAS::Certificate`
 */
export declare class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::Certificate";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CertId: Certificate ID.
     */
    readonly attrCertId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    cert: string;
    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    key: string;
    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    name: string;
    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    lang: string | undefined;
    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    sourceIp: string | undefined;
    /**
     * Create a new `ALIYUN::CAS::Certificate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
