"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupClients = exports.BackupClientsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const hbr_generated_1 = require("./hbr.generated");
Object.defineProperty(exports, "BackupClientsProperty", { enumerable: true, get: function () { return hbr_generated_1.RosBackupClients; } });
/**
 * A ROS resource type:  `ALIYUN::HBR::BackupClients`
 */
class BackupClients extends ros.Resource {
    /**
     * Create a new `ALIYUN::HBR::BackupClients`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosBackupClients = new hbr_generated_1.RosBackupClients(this, id, {
            instanceIds: props.instanceIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackupClients;
        this.attrClientIds = rosBackupClients.attrClientIds;
        this.attrInstanceIds = rosBackupClients.attrInstanceIds;
    }
}
exports.BackupClients = BackupClients;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja3VwY2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhY2t1cGNsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBYWxEOztHQUVHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjNDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBeUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQzVELENBQUM7Q0FDSjtBQWxDRCxzQ0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NCYWNrdXBDbGllbnRzIH0gZnJvbSAnLi9oYnIuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQmFja3VwQ2xpZW50cyBhcyBCYWNrdXBDbGllbnRzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkhCUjo6QmFja3VwQ2xpZW50c2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYWNrdXBDbGllbnRzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZHM6IElEIGxpc3Qgb2YgaW5zdGFuY2VzIHRvIGluc3RhbGwgYmFja3VwIGNsaWVudFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpIQlI6OkJhY2t1cENsaWVudHNgXG4gKi9cbmV4cG9ydCBjbGFzcyBCYWNrdXBDbGllbnRzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbGllbnRJZHM6IElEIGxpc3Qgb2YgY2xpZW50cyBpbnN0YWxsZWQgaW4gaW5zdGFuY2VzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbGllbnRJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZUlkczogSUQgbGlzdCBvZiBpbnN0YW5jZXMgdG8gaW5zdGFsbCBiYWNrdXAgY2xpZW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkhCUjo6QmFja3VwQ2xpZW50c2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQmFja3VwQ2xpZW50c1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0JhY2t1cENsaWVudHMgPSBuZXcgUm9zQmFja3VwQ2xpZW50cyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGluc3RhbmNlSWRzOiBwcm9wcy5pbnN0YW5jZUlkcyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NCYWNrdXBDbGllbnRzO1xuICAgICAgICB0aGlzLmF0dHJDbGllbnRJZHMgPSByb3NCYWNrdXBDbGllbnRzLmF0dHJDbGllbnRJZHM7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWRzID0gcm9zQmFja3VwQ2xpZW50cy5hdHRySW5zdGFuY2VJZHM7XG4gICAgfVxufVxuIl19