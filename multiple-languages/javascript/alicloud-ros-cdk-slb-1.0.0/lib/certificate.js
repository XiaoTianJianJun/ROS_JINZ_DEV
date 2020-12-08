"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = exports.CertificateProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "CertificateProperty", { enumerable: true, get: function () { return slb_generated_1.RosCertificate; } });
/**
 * A ROS resource type:  `ALIYUN::SLB::Certificate`
 */
class Certificate extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLB::Certificate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCertificate = new slb_generated_1.RosCertificate(this, id, {
            certificateType: props.certificateType ? props.certificateType : 'Server',
            aliCloudCertificateName: props.aliCloudCertificateName,
            privateKey: props.privateKey,
            resourceGroupId: props.resourceGroupId,
            certificateName: props.certificateName,
            certificate: props.certificate,
            aliCloudCertificateId: props.aliCloudCertificateId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCertificate;
        this.attrCertificateId = rosCertificate.attrCertificateId;
        this.attrFingerprint = rosCertificate.attrFingerprint;
    }
}
exports.Certificate = Certificate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VydGlmaWNhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZXJ0aWZpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQTJDOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCekM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVE7WUFDekUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLHVCQUF1QjtZQUN0RCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtTQUNyRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUF4Q0Qsa0NBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2VydGlmaWNhdGUgfSBmcm9tICcuL3NsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDZXJ0aWZpY2F0ZSBhcyBDZXJ0aWZpY2F0ZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTEI6OkNlcnRpZmljYXRlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENlcnRpZmljYXRlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlOiBUaGUgY29udGVudCBvZiB0aGUgY2VydGlmaWNhdGUgcHVibGljIGtleS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZXJ0aWZpY2F0ZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsaUNsb3VkQ2VydGlmaWNhdGVJZDogVGhlIElEIG9mIHRoZSBBbGliYWJhIENsb3VkIGNlcnRpZmljYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsaUNsb3VkQ2VydGlmaWNhdGVJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGlDbG91ZENlcnRpZmljYXRlTmFtZTogVGhlIG5hbWUgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxpQ2xvdWRDZXJ0aWZpY2F0ZU5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydGlmaWNhdGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VydGlmaWNhdGVOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlVHlwZTogVGhlIHR5cGUgb2YgdGhlIGNlcnRpZmljYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcml2YXRlS2V5OiBUaGUgcHJpdmF0ZSBrZXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpdmF0ZUtleT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6U0xCOjpDZXJ0aWZpY2F0ZWBcbiAqL1xuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2VydGlmaWNhdGVJZDogVGhlIElEIG9mIHRoZSBjZXJ0aWZpY2F0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNlcnRpZmljYXRlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRmluZ2VycHJpbnQ6IFRoZSBmaW5nZXJwcmludCBvZiB0aGUgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGaW5nZXJwcmludDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMQjo6Q2VydGlmaWNhdGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENlcnRpZmljYXRlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQ2VydGlmaWNhdGUgPSBuZXcgUm9zQ2VydGlmaWNhdGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZVR5cGU6IHByb3BzLmNlcnRpZmljYXRlVHlwZSA/IHByb3BzLmNlcnRpZmljYXRlVHlwZSA6ICdTZXJ2ZXInLFxuICAgICAgICAgICAgYWxpQ2xvdWRDZXJ0aWZpY2F0ZU5hbWU6IHByb3BzLmFsaUNsb3VkQ2VydGlmaWNhdGVOYW1lLFxuICAgICAgICAgICAgcHJpdmF0ZUtleTogcHJvcHMucHJpdmF0ZUtleSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgY2VydGlmaWNhdGVOYW1lOiBwcm9wcy5jZXJ0aWZpY2F0ZU5hbWUsXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZTogcHJvcHMuY2VydGlmaWNhdGUsXG4gICAgICAgICAgICBhbGlDbG91ZENlcnRpZmljYXRlSWQ6IHByb3BzLmFsaUNsb3VkQ2VydGlmaWNhdGVJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDZXJ0aWZpY2F0ZTtcbiAgICAgICAgdGhpcy5hdHRyQ2VydGlmaWNhdGVJZCA9IHJvc0NlcnRpZmljYXRlLmF0dHJDZXJ0aWZpY2F0ZUlkO1xuICAgICAgICB0aGlzLmF0dHJGaW5nZXJwcmludCA9IHJvc0NlcnRpZmljYXRlLmF0dHJGaW5nZXJwcmludDtcbiAgICB9XG59XG4iXX0=