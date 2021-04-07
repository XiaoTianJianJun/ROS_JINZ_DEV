"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgpPeer = exports.BgpPeerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "BgpPeerProperty", { enumerable: true, get: function () { return vpc_generated_1.RosBgpPeer; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::BgpPeer`
 */
class BgpPeer extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::BgpPeer`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosBgpPeer = new vpc_generated_1.RosBgpPeer(this, id, {
            peerIpAddress: props.peerIpAddress,
            enableBfd: props.enableBfd,
            bgpGroupId: props.bgpGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBgpPeer;
        this.attrBgpPeerId = rosBgpPeer.attrBgpPeerId;
    }
}
exports.BgpPeer = BgpPeer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmdwcGVlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJncHBlZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQTBCdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlyQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1CLEVBQUUsbUNBQTJDLElBQUk7UUFDOUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFVBQVUsR0FBRyxJQUFJLDBCQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN6QyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBOUJELDBCQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0JncFBlZXIgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NCZ3BQZWVyIGFzIEJncFBlZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpCZ3BQZWVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJncFBlZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiZ3BHcm91cElkOiBUaGUgSUQgb2YgdGhlIEJHUCBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBiZ3BHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVCZmQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB0aGUgQmlkaXJlY3Rpb25hbCBGb3J3YXJkaW5nIERldGVjdGlvbiAoQkZEKSBmZWF0dXJlLlxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBlbmFibGVzIEJGRC5cbiAgICAgKiBmYWxzZTogZGlzYWJsZXMgQkZELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZUJmZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZWVySXBBZGRyZXNzOiBUaGUgSVAgYWRkcmVzcyBvZiB0aGUgQkdQIHBlZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVlcklwQWRkcmVzcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpCZ3BQZWVyYFxuICovXG5leHBvcnQgY2xhc3MgQmdwUGVlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQmdwUGVlcklkOiBUaGUgSUQgb2YgdGhlIEJHUCBwZWVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmdwUGVlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpCZ3BQZWVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBCZ3BQZWVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQmdwUGVlciA9IG5ldyBSb3NCZ3BQZWVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcGVlcklwQWRkcmVzczogcHJvcHMucGVlcklwQWRkcmVzcyxcbiAgICAgICAgICAgIGVuYWJsZUJmZDogcHJvcHMuZW5hYmxlQmZkLFxuICAgICAgICAgICAgYmdwR3JvdXBJZDogcHJvcHMuYmdwR3JvdXBJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NCZ3BQZWVyO1xuICAgICAgICB0aGlzLmF0dHJCZ3BQZWVySWQgPSByb3NCZ3BQZWVyLmF0dHJCZ3BQZWVySWQ7XG4gICAgfVxufVxuIl19