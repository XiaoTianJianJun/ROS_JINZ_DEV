"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDomain = exports.CustomDomainProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const apigateway_generated_1 = require("./apigateway.generated");
Object.defineProperty(exports, "CustomDomainProperty", { enumerable: true, get: function () { return apigateway_generated_1.RosCustomDomain; } });
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::CustomDomain`
 */
class CustomDomain extends ros.Resource {
    /**
     * Create a new `ALIYUN::ApiGateway::CustomDomain`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCustomDomain = new apigateway_generated_1.RosCustomDomain(this, id, {
            certificateBody: props.certificateBody,
            domainName: props.domainName,
            certificatePrivateKey: props.certificatePrivateKey,
            certificateName: props.certificateName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomDomain;
        this.attrCertificateId = rosCustomDomain.attrCertificateId;
    }
}
exports.CustomDomain = CustomDomain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpRUFBeUQ7QUFFN0IscUdBRm5CLHNDQUFlLE9BRXdCO0FBaUNoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWTFDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZUFBZSxHQUFHLElBQUksc0NBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3pCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLENBQUMsaUJBQWlCLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBaENELG9DQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0N1c3RvbURvbWFpbiB9IGZyb20gJy4vYXBpZ2F0ZXdheS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDdXN0b21Eb21haW4gYXMgQ3VzdG9tRG9tYWluUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkFwaUdhdGV3YXk6OkN1c3RvbURvbWFpbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDdXN0b21Eb21haW5Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkb21haW5OYW1lOiBDdXN0b20gZG9tYWluIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBJZDogVGhlIGlkIG9mIHRoZSBHcm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZXJ0aWZpY2F0ZUJvZHk6IFNTTCBjZXJ0aWZpY2F0ZSBib2R5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlQm9keT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNlcnRpZmljYXRlTmFtZTogU1NMIGNlcnRpZmljYXRlIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VydGlmaWNhdGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2VydGlmaWNhdGVQcml2YXRlS2V5OiBTU0wgY2VydGlmaWNhdGUga2V5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlUHJpdmF0ZUtleT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6QXBpR2F0ZXdheTo6Q3VzdG9tRG9tYWluYFxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tRG9tYWluIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDZXJ0aWZpY2F0ZUlkOiBUaGUgaWQgb2YgdGhlIGNlcnRpZmljYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VydGlmaWNhdGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkFwaUdhdGV3YXk6OkN1c3RvbURvbWFpbmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQ3VzdG9tRG9tYWluUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQ3VzdG9tRG9tYWluID0gbmV3IFJvc0N1c3RvbURvbWFpbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNlcnRpZmljYXRlQm9keTogcHJvcHMuY2VydGlmaWNhdGVCb2R5LFxuICAgICAgICAgICAgZG9tYWluTmFtZTogcHJvcHMuZG9tYWluTmFtZSxcbiAgICAgICAgICAgIGNlcnRpZmljYXRlUHJpdmF0ZUtleTogcHJvcHMuY2VydGlmaWNhdGVQcml2YXRlS2V5LFxuICAgICAgICAgICAgY2VydGlmaWNhdGVOYW1lOiBwcm9wcy5jZXJ0aWZpY2F0ZU5hbWUsXG4gICAgICAgICAgICBncm91cElkOiBwcm9wcy5ncm91cElkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0N1c3RvbURvbWFpbjtcbiAgICAgICAgdGhpcy5hdHRyQ2VydGlmaWNhdGVJZCA9IHJvc0N1c3RvbURvbWFpbi5hdHRyQ2VydGlmaWNhdGVJZDtcbiAgICB9XG59XG4iXX0=