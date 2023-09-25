"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityGroupAttachment = exports.SecurityGroupAttachmentProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nlb_generated_1 = require("./nlb.generated");
Object.defineProperty(exports, "SecurityGroupAttachmentProperty", { enumerable: true, get: function () { return nlb_generated_1.RosSecurityGroupAttachment; } });
/**
 * A ROS resource type:  `ALIYUN::NLB::SecurityGroupAttachment`
 */
class SecurityGroupAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::NLB::SecurityGroupAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSecurityGroupAttachment = new nlb_generated_1.RosSecurityGroupAttachment(this, id, {
            loadBalancerId: props.loadBalancerId,
            securityGroupIds: props.securityGroupIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupAttachment;
    }
}
exports.SecurityGroupAttachment = SecurityGroupAttachment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHlncm91cGF0dGFjaG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWN1cml0eWdyb3VwYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTZEO0FBRXRCLGdIQUY5QiwwQ0FBMEIsT0FFbUM7QUFrQnRFOztHQUVHO0FBQ0gsTUFBYSx1QkFBd0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQUVyRDs7O09BR0c7SUFFSDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1DLEVBQUUsbUNBQTJDLElBQUk7UUFDOUgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLDBCQUEwQixHQUFHLElBQUksMENBQTBCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN6RSxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtTQUMzQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLDBCQUEwQixDQUFDO0lBQy9DLENBQUM7Q0FDSjtBQXZCRCwwREF1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTZWN1cml0eUdyb3VwQXR0YWNobWVudCB9IGZyb20gJy4vbmxiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NlY3VyaXR5R3JvdXBBdHRhY2htZW50IGFzIFNlY3VyaXR5R3JvdXBBdHRhY2htZW50UHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok5MQjo6U2VjdXJpdHlHcm91cEF0dGFjaG1lbnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlHcm91cEF0dGFjaG1lbnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIHRoZSBuZXR3b3JrLWJhc2VkIHNlcnZlciBsb2FkIGJhbGFuY2VyIGluc3RhbmNlIHRvIGJlIGJvdW5kIHRvIHRoZSBzZWN1cml0eSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2FkQmFsYW5jZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkczogTGlzdCBvZiBzZWN1cml0eSBncm91cCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpOTEI6OlNlY3VyaXR5R3JvdXBBdHRhY2htZW50YFxuICovXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlHcm91cEF0dGFjaG1lbnQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok5MQjo6U2VjdXJpdHlHcm91cEF0dGFjaG1lbnRgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNlY3VyaXR5R3JvdXBBdHRhY2htZW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU2VjdXJpdHlHcm91cEF0dGFjaG1lbnQgPSBuZXcgUm9zU2VjdXJpdHlHcm91cEF0dGFjaG1lbnQodGhpcywgaWQsICB7XG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJJZDogcHJvcHMubG9hZEJhbGFuY2VySWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWRzOiBwcm9wcy5zZWN1cml0eUdyb3VwSWRzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NlY3VyaXR5R3JvdXBBdHRhY2htZW50O1xuICAgIH1cbn1cbiJdfQ==