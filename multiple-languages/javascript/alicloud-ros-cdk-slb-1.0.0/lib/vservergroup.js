"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VServerGroup = exports.VServerGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "VServerGroupProperty", { enumerable: true, get: function () { return slb_generated_1.RosVServerGroup; } });
/**
 * A ROS resource type:  `ALIYUN::SLB::VServerGroup`
 */
class VServerGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLB::VServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVServerGroup = new slb_generated_1.RosVServerGroup(this, id, {
            vServerGroupName: props.vServerGroupName,
            loadBalancerId: props.loadBalancerId,
            backendServers: props.backendServers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVServerGroup;
        this.attrBackendServers = rosVServerGroup.attrBackendServers;
        this.attrVServerGroupId = rosVServerGroup.attrVServerGroupId;
    }
}
exports.VServerGroup = VServerGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNlcnZlcmdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidnNlcnZlcmdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBdUJoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUIxQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXdCLEVBQUUsbUNBQTJDLElBQUk7UUFDbkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGVBQWUsR0FBRyxJQUFJLCtCQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7U0FDdkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pFLENBQUM7Q0FDSjtBQXBDRCxvQ0FvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NWU2VydmVyR3JvdXAgfSBmcm9tICcuL3NsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWU2VydmVyR3JvdXAgYXMgVlNlcnZlckdyb3VwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMQjo6VlNlcnZlckdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZTZXJ2ZXJHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIGlkIG9mIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U2VydmVyR3JvdXBOYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIFZTZXJ2ZXJHcm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U2VydmVyR3JvdXBOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlcnM6IFRoZSBsaXN0IG9mIGEgY29tYmluYXRpb24gb2YgRUNTIEluc3RhbmNlLVBvcnQtV2VpZ2h0LlNhbWUgZWNzIGluc3RhbmNlIHdpdGggZGlmZmVyZW50IHBvcnQgaXMgYWxsb3dlZCwgYnV0IHNhbWUgZWNzIGluc3RhbmNlIHdpdGggc2FtZSBwb3J0IGlzbid0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJzPzogQXJyYXk8Um9zVlNlcnZlckdyb3VwLkJhY2tlbmRTZXJ2ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpTTEI6OlZTZXJ2ZXJHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIFZTZXJ2ZXJHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJhY2tlbmRTZXJ2ZXJzOiBCYWNrZW5kIHNlcnZlciBsaXN0IGluIHRoaXMgVlNlcnZlckdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmFja2VuZFNlcnZlcnM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVlNlcnZlckdyb3VwSWQ6IFRoZSBpZCBvZiBWU2VydmVyR3JvdXAgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZTZXJ2ZXJHcm91cElkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xCOjpWU2VydmVyR3JvdXBgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFZTZXJ2ZXJHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1ZTZXJ2ZXJHcm91cCA9IG5ldyBSb3NWU2VydmVyR3JvdXAodGhpcywgaWQsICB7XG4gICAgICAgICAgICB2U2VydmVyR3JvdXBOYW1lOiBwcm9wcy52U2VydmVyR3JvdXBOYW1lLFxuICAgICAgICAgICAgbG9hZEJhbGFuY2VySWQ6IHByb3BzLmxvYWRCYWxhbmNlcklkLFxuICAgICAgICAgICAgYmFja2VuZFNlcnZlcnM6IHByb3BzLmJhY2tlbmRTZXJ2ZXJzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1ZTZXJ2ZXJHcm91cDtcbiAgICAgICAgdGhpcy5hdHRyQmFja2VuZFNlcnZlcnMgPSByb3NWU2VydmVyR3JvdXAuYXR0ckJhY2tlbmRTZXJ2ZXJzO1xuICAgICAgICB0aGlzLmF0dHJWU2VydmVyR3JvdXBJZCA9IHJvc1ZTZXJ2ZXJHcm91cC5hdHRyVlNlcnZlckdyb3VwSWQ7XG4gICAgfVxufVxuIl19