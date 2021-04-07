"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = exports.CertificateProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cas_generated_1 = require("./cas.generated");
Object.defineProperty(exports, "CertificateProperty", { enumerable: true, get: function () { return cas_generated_1.RosCertificate; } });
/**
 * A ROS resource type:  `ALIYUN::CAS::Certificate`
 */
class Certificate extends ros.Resource {
    /**
     * Create a new `ALIYUN::CAS::Certificate`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCertificate = new cas_generated_1.RosCertificate(this, id, {
            sourceIp: props.sourceIp,
            lang: props.lang,
            cert: props.cert,
            key: props.key,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCertificate;
        this.attrCertId = rosCertificate.attrCertId;
    }
}
exports.Certificate = Certificate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VydGlmaWNhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZXJ0aWZpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQWlDOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQVl6Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7Q0FDSjtBQWhDRCxrQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NDZXJ0aWZpY2F0ZSB9IGZyb20gJy4vY2FzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0NlcnRpZmljYXRlIGFzIENlcnRpZmljYXRlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNBUzo6Q2VydGlmaWNhdGVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2VydGlmaWNhdGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZXJ0OiBTcGVjaWZ5IHRoZSBjb250ZW50IG9mIHRoZSBjZXJ0aWZpY2F0ZS4gVG8gdXNlIHRoZSBQRU0gZW5jb2RpbmcgZm9ybWF0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGtleTogU3BlY2lmeSB0aGUgY2VydGlmaWNhdGUgcHJpdmF0ZSBrZXkgY29udGVudC4gVG8gdXNlIHRoZSBQRU0gZW5jb2RpbmcgZm9ybWF0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogQ3VzdG9tIGNlcnRpZmljYXRlIG5hbWUuIFRoZSBjZXJ0aWZpY2F0ZSBuYW1lIHVuZGVyIGEgdXNlciBjYW5ub3QgYmUgZHVwbGljYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsYW5nOiBTcGVjaWZpZXMgdGhlIGxhbmd1YWdlIHR5cGUgZm9yIHJlcXVlc3RpbmcgYW5kIHJlY2VpdmluZyBtZXNzYWdlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBsYW5nPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc291cmNlSXA6IFNwZWNpZmllcyB0aGUgc291cmNlIElQIGFkZHJlc3Mgb2YgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlSXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkNBUzo6Q2VydGlmaWNhdGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2VydElkOiBDZXJ0aWZpY2F0ZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNlcnRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNBUzo6Q2VydGlmaWNhdGVgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENlcnRpZmljYXRlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQ2VydGlmaWNhdGUgPSBuZXcgUm9zQ2VydGlmaWNhdGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBzb3VyY2VJcDogcHJvcHMuc291cmNlSXAsXG4gICAgICAgICAgICBsYW5nOiBwcm9wcy5sYW5nLFxuICAgICAgICAgICAgY2VydDogcHJvcHMuY2VydCxcbiAgICAgICAgICAgIGtleTogcHJvcHMua2V5LFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDZXJ0aWZpY2F0ZTtcbiAgICAgICAgdGhpcy5hdHRyQ2VydElkID0gcm9zQ2VydGlmaWNhdGUuYXR0ckNlcnRJZDtcbiAgICB9XG59XG4iXX0=