"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.RoleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "RoleProperty", { enumerable: true, get: function () { return ram_generated_1.RosRole; } });
/**
 * A ROS resource type:  `ALIYUN::RAM::Role`
 */
class Role extends ros.Resource {
    /**
     * Create a new `ALIYUN::RAM::Role`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRole = new ram_generated_1.RosRole(this, id, {
            maxSessionDuration: props.maxSessionDuration,
            roleName: props.roleName,
            policyAttachments: props.policyAttachments,
            policies: props.policies,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            description: props.description,
            assumeRolePolicyDocument: props.assumeRolePolicyDocument,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRole;
        this.attrArn = rosRole.attrArn;
        this.attrRoleId = rosRole.attrRoleId;
        this.attrRoleName = rosRole.attrRoleName;
    }
}
exports.Role = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUEwQztBQUV0Qiw2RkFGWCx1QkFBTyxPQUVnQjtBQTZDaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQXNCbEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFnQixFQUFFLG1DQUEyQyxJQUFJO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDbkMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQzlHLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5Qix3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1NBQzNELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQTlDRCxvQkE4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSb2xlIH0gZnJvbSAnLi9yYW0uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUm9sZSBhcyBSb2xlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJBTTo6Um9sZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb2xlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiBUaGUgUkFNIGFzc3VtZSByb2xlIHBvbGljeSB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJvbGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiBSb3NSb2xlLkFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm9sZU5hbWU6IFNwZWNpZmllcyB0aGUgcm9sZSBuYW1lLCBjb250YWluaW5nIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9sZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGV0YWNoIHRoZSBwb2xpY2llcyBhdHRhY2hlZCB0byB0aGUgcm9sZS4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvbkZvcmNlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBSZW1hcmsgaW5mb3JtYXRpb24sIHVwIHRvIDEwMjQgY2hhcmFjdGVycyBvciBDaGluZXNlIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXhTZXNzaW9uRHVyYXRpb246IFRoZSBtYXhpbXVtIHNlc3Npb24gZHVyYXRpb24gb2YgdGhlIFJBTSByb2xlLlxuICAgICAqIFZhbGlkIHZhbHVlczogMzYwMCB0byA0MzIwMC4gVW5pdDogc2Vjb25kcy4gRGVmYXVsdCB2YWx1ZTogMzYwMC5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGlmIHRoZSBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhTZXNzaW9uRHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2xpY2llczogRGVzY3JpYmVzIHdoYXQgYWN0aW9ucyBhcmUgYWxsb3dlZCBvbiB3aGF0IHJlc291cmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY2llcz86IEFycmF5PFJvc1JvbGUuUG9saWNpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2xpY3lBdHRhY2htZW50czogU3lzdGVtIGFuZCBjdXN0b20gcG9saWN5IG5hbWVzIHRvIGF0dGFjaC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY3lBdHRhY2htZW50cz86IFJvc1JvbGUuUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UkFNOjpSb2xlYFxuICovXG5leHBvcnQgY2xhc3MgUm9sZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQXJuOiBOYW1lIG9mIGFsaWNsb3VkIHJlc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUm9sZUlkOiBJZCBvZiByYW0gcm9sZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvbGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvbGVOYW1lOiBOYW1lIG9mIHJhbSByb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm9sZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpSQU06OlJvbGVgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvbGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSb2xlID0gbmV3IFJvc1JvbGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBtYXhTZXNzaW9uRHVyYXRpb246IHByb3BzLm1heFNlc3Npb25EdXJhdGlvbixcbiAgICAgICAgICAgIHJvbGVOYW1lOiBwcm9wcy5yb2xlTmFtZSxcbiAgICAgICAgICAgIHBvbGljeUF0dGFjaG1lbnRzOiBwcm9wcy5wb2xpY3lBdHRhY2htZW50cyxcbiAgICAgICAgICAgIHBvbGljaWVzOiBwcm9wcy5wb2xpY2llcyxcbiAgICAgICAgICAgIGRlbGV0aW9uRm9yY2U6IHByb3BzLmRlbGV0aW9uRm9yY2UgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5kZWxldGlvbkZvcmNlID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiBwcm9wcy5hc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUm9sZTtcbiAgICAgICAgdGhpcy5hdHRyQXJuID0gcm9zUm9sZS5hdHRyQXJuO1xuICAgICAgICB0aGlzLmF0dHJSb2xlSWQgPSByb3NSb2xlLmF0dHJSb2xlSWQ7XG4gICAgICAgIHRoaXMuYXR0clJvbGVOYW1lID0gcm9zUm9sZS5hdHRyUm9sZU5hbWU7XG4gICAgfVxufVxuIl19