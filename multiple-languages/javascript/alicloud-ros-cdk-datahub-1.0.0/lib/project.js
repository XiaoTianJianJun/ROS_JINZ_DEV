"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.ProjectProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const datahub_generated_1 = require("./datahub.generated");
Object.defineProperty(exports, "ProjectProperty", { enumerable: true, get: function () { return datahub_generated_1.RosProject; } });
/**
 * A ROS resource type:  `ALIYUN::DATAHUB::Project`
 */
class Project extends ros.Resource {
    /**
     * Create a new `ALIYUN::DATAHUB::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosProject = new datahub_generated_1.RosProject(this, id, {
            comment: props.comment,
            projectName: props.projectName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrProjectName = rosProject.attrProjectName;
    }
}
exports.Project = Project;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJEQUFpRDtBQUUxQixnR0FGZCw4QkFBVSxPQUVtQjtBQWtCdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlyQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1CLEVBQUUsbUNBQTJDLElBQUk7UUFDOUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFVBQVUsR0FBRyxJQUFJLDhCQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN6QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQ2pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUN0RCxDQUFDO0NBQ0o7QUE3QkQsMEJBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUHJvamVjdCB9IGZyb20gJy4vZGF0YWh1Yi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NQcm9qZWN0IGFzIFByb2plY3RQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6REFUQUhVQjo6UHJvamVjdGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1lbnQ6IFRoZSBjb21tZW50IG9mIHByb2plY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tbWVudDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gTGVuZ3RoIFszLCAzMl0uIEJlZ2lubmluZyB3aXRoIGNoYXJhY3RlcnMsIG9ubHkgY2hhcmFjdGVycywgbnVtYmVycyBhbmQgXyBhcmUgYWxsb3dlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0TmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpEQVRBSFVCOjpQcm9qZWN0YFxuICovXG5leHBvcnQgY2xhc3MgUHJvamVjdCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFByb2plY3ROYW1lOiBQcm9qZWN0IG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByb2plY3ROYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6REFUQUhVQjo6UHJvamVjdGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUHJvamVjdFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1Byb2plY3QgPSBuZXcgUm9zUHJvamVjdCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNvbW1lbnQ6IHByb3BzLmNvbW1lbnQsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvcHMucHJvamVjdE5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUHJvamVjdDtcbiAgICAgICAgdGhpcy5hdHRyUHJvamVjdE5hbWUgPSByb3NQcm9qZWN0LmF0dHJQcm9qZWN0TmFtZTtcbiAgICB9XG59XG4iXX0=