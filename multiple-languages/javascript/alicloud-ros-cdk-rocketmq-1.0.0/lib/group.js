"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.GroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rocketmq_generated_1 = require("./rocketmq.generated");
Object.defineProperty(exports, "GroupProperty", { enumerable: true, get: function () { return rocketmq_generated_1.RosGroup; } });
/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ::Group`
 */
class Group extends ros.Resource {
    /**
     * Create a new `ALIYUN::ROCKETMQ::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosGroup = new rocketmq_generated_1.RosGroup(this, id, {
            groupType: props.groupType,
            instanceId: props.instanceId,
            remark: props.remark,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGroupId = rosGroup.attrGroupId;
        this.attrGroupType = rosGroup.attrGroupType;
        this.attrInstanceId = rosGroup.attrInstanceId;
    }
}
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsNkRBQWdEO0FBRTNCLDhGQUZaLDZCQUFRLE9BRWlCO0FBaUNsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0JuQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLDZCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDekIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBM0NELHNCQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0dyb3VwIH0gZnJvbSAnLi9yb2NrZXRtcS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NHcm91cCBhcyBHcm91cFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpST0NLRVRNUTo6R3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIGdyb3VwIElEIG9mIHRoZSBjb25zdW1wdGlvbiBjbHVzdGVyLiBXaGVuIGNyZWF0aW5nIGEgZ3JvdXAgSUQsIHBheSBhdHRlbnRpb24gdG8gdGhlIGZvbGxvd2luZyBhc3BlY3RzOlxuICAgICAqIEEgZ3JvdXAgSUQgc3RhcnRzIHdpdGhcIkdJRF9cIiBvciBcIkdJRC1cIiwgYW5kIGNvbnRhaW5zIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pLCBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIEEgZ3JvdXAgSUQgcmFuZ2VzIGZyb20gNyB0byA2NCBieXRlcy5cbiAgICAgKiBPbmNlIGEgZ3JvdXAgSUQgaXMgY3JlYXRlZCwgaXQgY2Fubm90IGJlIGVkaXRlZCBhbnltb3JlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cFR5cGU6IEdyb3VwIElEIHNwZWNpZnkgdGhlIGNyZWF0aW9uIG9mIGFwcGxpY2FibGUgYWdyZWVtZW50cy4gR3JvdXAgSUQgVENQIHByb3RvY29sIGFuZCB0aGUgSFRUUCBwcm90b2NvbCBjYW4gbm90IGJlIHNoYXJlZCwgdGhlIG5lZWQgdG8gY3JlYXRlIHNlcGFyYXRlbHkuIFZhbHVlIGFzIGZvbGxvd3M6XG4gICAgICogdGNwOiBEZWZhdWx0LCBpbmRpY2F0ZXMgR3JvdXAgSUQgaXMgY3JlYXRlZCBvbmx5IGZvciB0aGUgVENQIHByb3RvY29sIG1lc3NhZ2luZy5cbiAgICAgKiBodHRwOiByZXByZXNlbnRzIHRoZSBHcm91cCBJRCB3YXMgY3JlYXRlZCBvbmx5IGZvciB0aGUgSFRUUCBwcm90b2NvbCBtZXNzYWdpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbWFyazogVGhlIHJlbWFya3Mgb24gdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVtYXJrPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpST0NLRVRNUTo6R3JvdXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwSWQ6IEdyb3VwIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cElkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwVHlwZTogR3JvdXAgVHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IEluc3RhbmNlIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9DS0VUTVE6Okdyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0dyb3VwID0gbmV3IFJvc0dyb3VwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZ3JvdXBUeXBlOiBwcm9wcy5ncm91cFR5cGUsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgcmVtYXJrOiBwcm9wcy5yZW1hcmssXG4gICAgICAgICAgICBncm91cElkOiBwcm9wcy5ncm91cElkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0dyb3VwO1xuICAgICAgICB0aGlzLmF0dHJHcm91cElkID0gcm9zR3JvdXAuYXR0ckdyb3VwSWQ7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwVHlwZSA9IHJvc0dyb3VwLmF0dHJHcm91cFR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSByb3NHcm91cC5hdHRySW5zdGFuY2VJZDtcbiAgICB9XG59XG4iXX0=