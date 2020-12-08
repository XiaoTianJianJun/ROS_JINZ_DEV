"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBInstance = exports.DBInstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const polardb_generated_1 = require("./polardb.generated");
Object.defineProperty(exports, "DBInstanceProperty", { enumerable: true, get: function () { return polardb_generated_1.RosDBInstance; } });
/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBInstance`
 */
class DBInstance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::POLARDB::DBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDBInstance = new polardb_generated_1.RosDBInstance(this, id, {
            characterSetName: props.characterSetName,
            accountPrivilege: props.accountPrivilege ? props.accountPrivilege : 'ReadWrite',
            dbDescription: props.dbDescription,
            dbClusterId: props.dbClusterId,
            dbName: props.dbName,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstance;
    }
}
exports.DBInstance = DBInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJpbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRiaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJEQUFvRDtBQUUxQixtR0FGakIsaUNBQWEsT0FFc0I7QUFnRDVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFFeEM7OztPQUdHO0lBRUg7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxhQUFhLEdBQUcsSUFBSSxpQ0FBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsV0FBVztZQUMvRSxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7SUFDbEMsQ0FBQztDQUNKO0FBM0JELGdDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RCSW5zdGFuY2UgfSBmcm9tICcuL3BvbGFyZGIuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zREJJbnN0YW5jZSBhcyBEQkluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlBPTEFSREI6OkRCSW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgREJJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGFyYWN0ZXJTZXROYW1lOiBUaGUgY2hhcmFjdGVyIHNldCBvZiB0aGUgZGF0YWJhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgQ2hhcmFjdGVyIHNldHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hhcmFjdGVyU2V0TmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIEFwc2FyYURCIGZvciBQT0xBUkRCIGNsdXN0ZXIgZm9yIHdoaWNoIGEgZGF0YWJhc2UgaXMgdG8gYmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkNsdXN0ZXJJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiTmFtZTogVGhlIG5hbWUgb2YgdGhlIGRhdGFiYXNlIHRvIGJlIGNyZWF0ZWQuIFRoZSBuYW1lIG11c3QgY29tcGx5IHdpdGggdGhlIGZvbGxvd2luZyBydWxlczpcbiAgICAgKiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsb3dlcmNhc2UgbGV0dGVyIGFuZCBjb25zaXN0IG9mIGxvd2VyY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGh5cGhlbnNcbiAgICAgKiAoLSksIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogSXQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBhIGRpZ2l0LiBJdCBjYW4gYmUgdXAgdG8gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjb3VudE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZSBhY2NvdW50IHRvIGJlIHVzZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudE5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjb3VudFByaXZpbGVnZTogVGhlIHBlcm1pc3Npb25zIG9mIHRoZSBkYXRhYmFzZSBhY2NvdW50IG9uIHRoZSBkYXRhYmFzZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFJlYWRXcml0ZTogaGFzIHJlYWQgYW5kIHdyaXRlIHBlcm1pc3Npb25zIG9uIHRoZSBkYXRhYmFzZS5cbiAgICAgKiBSZWFkT25seTogaGFzIHRoZSByZWFkLW9ubHkgcGVybWlzc2lvbiBvbiB0aGUgZGF0YWJhc2UuXG4gICAgICogRE1MT25seTogcnVucyBvbmx5IGRhdGEgbWFuaXB1bGF0aW9uIGxhbmd1YWdlIChETUwpIHN0YXRlbWVudHMuXG4gICAgICogRERMT25seTogcnVucyBvbmx5IGRhdGEgZGVmaW5pdGlvbiBsYW5ndWFnZSAoRERMKSBzdGF0ZW1lbnRzLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IFJlYWRXcml0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NvdW50UHJpdmlsZWdlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZGF0YWJhc2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBJdCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqIEl0IG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJEZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UE9MQVJEQjo6REJJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGNsYXNzIERCSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlBPTEFSREI6OkRCSW5zdGFuY2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERCSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NEQkluc3RhbmNlID0gbmV3IFJvc0RCSW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjaGFyYWN0ZXJTZXROYW1lOiBwcm9wcy5jaGFyYWN0ZXJTZXROYW1lLFxuICAgICAgICAgICAgYWNjb3VudFByaXZpbGVnZTogcHJvcHMuYWNjb3VudFByaXZpbGVnZSA/IHByb3BzLmFjY291bnRQcml2aWxlZ2UgOiAnUmVhZFdyaXRlJyxcbiAgICAgICAgICAgIGRiRGVzY3JpcHRpb246IHByb3BzLmRiRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkYkNsdXN0ZXJJZDogcHJvcHMuZGJDbHVzdGVySWQsXG4gICAgICAgICAgICBkYk5hbWU6IHByb3BzLmRiTmFtZSxcbiAgICAgICAgICAgIGFjY291bnROYW1lOiBwcm9wcy5hY2NvdW50TmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEQkluc3RhbmNlO1xuICAgIH1cbn1cbiJdfQ==