"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceEndpointAclPolicy = exports.InstanceEndpointAclPolicyProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cr_generated_1 = require("./cr.generated");
Object.defineProperty(exports, "InstanceEndpointAclPolicyProperty", { enumerable: true, get: function () { return cr_generated_1.RosInstanceEndpointAclPolicy; } });
/**
 * A ROS resource type:  `ALIYUN::CR::InstanceEndpointAclPolicy`
 */
class InstanceEndpointAclPolicy extends ros.Resource {
    /**
     * Create a new `ALIYUN::CR::InstanceEndpointAclPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstanceEndpointAclPolicy = new cr_generated_1.RosInstanceEndpointAclPolicy(this, id, {
            comment: props.comment,
            entry: props.entry,
            instanceId: props.instanceId,
            moduleName: props.moduleName ? props.moduleName : 'Registry',
            endpointType: props.endpointType ? props.endpointType : 'internet',
            regionId: props.regionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceEndpointAclPolicy;
        this.attrEntry = rosInstanceEndpointAclPolicy.attrEntry;
        this.attrInstanceId = rosInstanceEndpointAclPolicy.attrInstanceId;
    }
}
exports.InstanceEndpointAclPolicy = InstanceEndpointAclPolicy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VlbmRwb2ludGFjbHBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhbmNlZW5kcG9pbnRhY2xwb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUE4RDtBQUVyQixrSEFGaEMsMkNBQTRCLE9BRXFDO0FBdUMxRTs7R0FFRztBQUNILE1BQWEseUJBQTBCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQnZEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUMsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sNEJBQTRCLEdBQUcsSUFBSSwyQ0FBNEIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQzVELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ2xFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUMzQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLDRCQUE0QixDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsNEJBQTRCLENBQUMsU0FBUyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsNEJBQTRCLENBQUMsY0FBYyxDQUFDO0lBQ3RFLENBQUM7Q0FDSjtBQXZDRCw4REF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5IH0gZnJvbSAnLi9jci5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5IGFzIEluc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q1I6Okluc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnRyeTogVGhlIElQIGFkZHJlc3MgcmFuZ2UgdGhhdCBpcyBhbGxvd2VkIHRvIGFjY2VzcyB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW50cnk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21tZW50OiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGVudHJ5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5kcG9pbnRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZW5kcG9pbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZHVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgaW4gdGhlIGluc3RhbmNlIGZvciB3aGljaCBhIHdoaXRlbGlzdCBpcyBjb25maWd1cmVkLiBWYWxpZFxuICAgICAqIHZhbHVlczogUmVnaXN0cnkgYW5kIENoYXJ0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZHVsZU5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uSWQ6IFJlZ2lvbiBJRCBvZiBpbnN0YW5jZS4gRGVmYXVsdCBpcyBjdXJyZW50IHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25JZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q1I6Okluc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lgXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRW50cnk6IFRoZSBJUCBhZGRyZXNzIHJhbmdlIHRoYXQgaXMgYWxsb3dlZCB0byBhY2Nlc3MgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRW50cnk6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDUjo6SW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3kgPSBuZXcgUm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNvbW1lbnQ6IHByb3BzLmNvbW1lbnQsXG4gICAgICAgICAgICBlbnRyeTogcHJvcHMuZW50cnksXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgbW9kdWxlTmFtZTogcHJvcHMubW9kdWxlTmFtZSA/IHByb3BzLm1vZHVsZU5hbWUgOiAnUmVnaXN0cnknLFxuICAgICAgICAgICAgZW5kcG9pbnRUeXBlOiBwcm9wcy5lbmRwb2ludFR5cGUgPyBwcm9wcy5lbmRwb2ludFR5cGUgOiAnaW50ZXJuZXQnLFxuICAgICAgICAgICAgcmVnaW9uSWQ6IHByb3BzLnJlZ2lvbklkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3k7XG4gICAgICAgIHRoaXMuYXR0ckVudHJ5ID0gcm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeS5hdHRyRW50cnk7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSByb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5LmF0dHJJbnN0YW5jZUlkO1xuICAgIH1cbn1cbiJdfQ==