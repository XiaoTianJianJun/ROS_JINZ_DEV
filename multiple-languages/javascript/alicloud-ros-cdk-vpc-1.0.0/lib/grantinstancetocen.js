"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrantInstanceToCen = exports.GrantInstanceToCenProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "GrantInstanceToCenProperty", { enumerable: true, get: function () { return vpc_generated_1.RosGrantInstanceToCen; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::GrantInstanceToCen`
 */
class GrantInstanceToCen extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::GrantInstanceToCen`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosGrantInstanceToCen = new vpc_generated_1.RosGrantInstanceToCen(this, id, {
            instanceId: props.instanceId,
            cenOwnerId: props.cenOwnerId,
            cenId: props.cenId,
            instanceType: props.instanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGrantInstanceToCen;
        this.attrCenId = rosGrantInstanceToCen.attrCenId;
        this.attrInstanceId = rosGrantInstanceToCen.attrInstanceId;
    }
}
exports.GrantInstanceToCen = GrantInstanceToCen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhbnRpbnN0YW5jZXRvY2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JhbnRpbnN0YW5jZXRvY2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBd0Q7QUFFdEIsMkdBRnpCLHFDQUFxQixPQUU4QjtBQStCNUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJoRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQThCLEVBQUUsbUNBQTJDLElBQUk7UUFDekgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHFCQUFxQixHQUFHLElBQUkscUNBQXFCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMvRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7U0FDbkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLGNBQWMsQ0FBQztJQUMvRCxDQUFDO0NBQ0o7QUFyQ0QsZ0RBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zR3JhbnRJbnN0YW5jZVRvQ2VuIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zR3JhbnRJbnN0YW5jZVRvQ2VuIGFzIEdyYW50SW5zdGFuY2VUb0NlblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OkdyYW50SW5zdGFuY2VUb0NlbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHcmFudEluc3RhbmNlVG9DZW5Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlIHRvIGJlIGF1dGhvcml6ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5Pd25lcklkOiBUaGUgVUlEIG9mIHRoZSBhY2NvdW50IHRvIHdoaWNoIHRoZSB0YXJnZXQgQ0VOIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuT3duZXJJZDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgbmV0d29yayBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbmV0d29yayBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFZQQzogVmlydHVhbCBQcml2YXRlIENsb3VkIChWUEMpLlxuICAgICAqIFZCUjogVmlydHVhbCBCb3JkZXIgUm91dGVyIChWQlIpLlxuICAgICAqIENDTjogQ2xvdWQgQ29ubmVjdCBOZXR3b3JrIChDQ04pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkdyYW50SW5zdGFuY2VUb0NlbmBcbiAqL1xuZXhwb3J0IGNsYXNzIEdyYW50SW5zdGFuY2VUb0NlbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENlbklkOiBUaGUgSUQgb2YgdGhlIENFTiBpbnN0YW5jZSB0byBiZSBhdXRob3JpemVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VuSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBuZXR3b3JrIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6R3JhbnRJbnN0YW5jZVRvQ2VuYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBHcmFudEluc3RhbmNlVG9DZW5Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NHcmFudEluc3RhbmNlVG9DZW4gPSBuZXcgUm9zR3JhbnRJbnN0YW5jZVRvQ2VuKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNlbk93bmVySWQ6IHByb3BzLmNlbk93bmVySWQsXG4gICAgICAgICAgICBjZW5JZDogcHJvcHMuY2VuSWQsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IHByb3BzLmluc3RhbmNlVHlwZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NHcmFudEluc3RhbmNlVG9DZW47XG4gICAgICAgIHRoaXMuYXR0ckNlbklkID0gcm9zR3JhbnRJbnN0YW5jZVRvQ2VuLmF0dHJDZW5JZDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0dyYW50SW5zdGFuY2VUb0Nlbi5hdHRySW5zdGFuY2VJZDtcbiAgICB9XG59XG4iXX0=