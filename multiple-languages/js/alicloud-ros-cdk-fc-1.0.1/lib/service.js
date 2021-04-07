"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.ServiceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const fc_generated_1 = require("./fc.generated");
Object.defineProperty(exports, "ServiceProperty", { enumerable: true, get: function () { return fc_generated_1.RosService; } });
/**
 * A ROS resource type:  `ALIYUN::FC::Service`
 */
class Service extends ros.Resource {
    /**
     * Create a new `ALIYUN::FC::Service`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosService = new fc_generated_1.RosService(this, id, {
            role: props.role,
            internetAccess: props.internetAccess,
            description: props.description,
            deletionForce: props.deletionForce ? props.deletionForce : false,
            tracingConfig: props.tracingConfig,
            vpcConfig: props.vpcConfig,
            serviceName: props.serviceName,
            tags: props.tags,
            nasConfig: props.nasConfig,
            logConfig: props.logConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosService;
        this.attrInternetAccess = rosService.attrInternetAccess;
        this.attrLogProject = rosService.attrLogProject;
        this.attrLogstore = rosService.attrLogstore;
        this.attrRole = rosService.attrRole;
        this.attrServiceId = rosService.attrServiceId;
        this.attrServiceName = rosService.attrServiceName;
        this.attrTags = rosService.attrTags;
        this.attrVpcId = rosService.attrVpcId;
    }
}
exports.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUE0QztBQUVyQixnR0FGZCx5QkFBVSxPQUVtQjtBQTBEdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQStDckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxVQUFVLEdBQUcsSUFBSSx5QkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEUsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDN0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDMUMsQ0FBQztDQUNKO0FBL0VELDBCQStFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NlcnZpY2UgfSBmcm9tICcuL2ZjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NlcnZpY2UgYXMgU2VydmljZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpGQzo6U2VydmljZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRlbGV0ZSB0aGUgc2VydmljZSB3aXRob3V0IHdhaXRpbmcgZm9yIG5ldHdvcmsgaW50ZXJmYWNlcyB0byBiZSBjbGVhbmVkIHVwIGlmIFZwY0NvbmZpZyBpcyBzcGVjaWZpZWQuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Gb3JjZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogU2VydmljZSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJuZXRBY2Nlc3M6IFNldCBpdCB0byB0cnVlIHRvIGVuYWJsZSBJbnRlcm5ldCBhY2Nlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9nQ29uZmlnOiBMb2cgY29uZmlndXJhdGlvbi4gRnVuY3Rpb24gQ29tcHV0ZSBwdXNoZXMgZnVuY3Rpb24gZXhlY3V0aW9uIGxvZ3MgdG8gdGhlIGNvbmZpZ3VyZWQgbG9nIHN0b3JlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ0NvbmZpZz86IFJvc1NlcnZpY2UuTG9nQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYXNDb25maWc6IE5BUyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgYSBzcGVjaWZpZWQgTkFTIGNvbmZpZ3VyZWQgb24gdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFzQ29uZmlnPzogUm9zU2VydmljZS5OYXNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJvbGU6IFRoZSByb2xlIGdyYW50cyBGdW5jdGlvbiBDb21wdXRlIHRoZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyB1c2Vy4oCZcyBjbG91ZCByZXNvdXJjZXMsIHN1Y2ggYXMgcHVzaGluZyBsb2dzIHRvIHVzZXLigJlzIGxvZyBzdG9yZS4gVGhlIHRlbXBvcmFyeSBTVFMgdG9rZW4gZ2VuZXJhdGVkIGZyb20gdGhpcyByb2xlIGNhbiBiZSByZXRyaWV2ZWQgZnJvbSBmdW5jdGlvbiBjb250ZXh0IGFuZCB1c2VkIHRvIGFjY2VzcyBjbG91ZCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9sZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIHNlcnZpY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgc2VydmljZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NTZXJ2aWNlLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJhY2luZ0NvbmZpZzogVGhlIFRyYWNpbmcgQW5hbHlzaXMgY29uZmlndXJhdGlvbi4gQWZ0ZXIgRnVuY3Rpb24gQ29tcHV0ZSBpbnRlZ3JhdGVzIHdpdGggVHJhY2luZyBBbmFseXNpcywgeW91IGNhbiByZWNvcmQgdGhlIHN0YXkgdGltZSBvZiBhIHJlcXVlc3QgaW4gRnVuY3Rpb24gQ29tcHV0ZSwgdmlldyB0aGUgY29sZCBzdGFydCB0aW1lIGZvciBhIGZ1bmN0aW9uLCBhbmQgcmVjb3JkIHRoZSBleGVjdXRpb24gdGltZSBvZiBhIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYWNpbmdDb25maWc/OiBSb3NTZXJ2aWNlLlRyYWNpbmdDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0NvbmZpZzogVlBDIGNvbmZpZ3VyYXRpb24uIEZ1bmN0aW9uIENvbXB1dGUgdXNlcyB0aGUgY29uZmlnIHRvIHNldHVwIEVOSSBpbiB0aGUgc3BlY2lmaWMgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0NvbmZpZz86IFJvc1NlcnZpY2UuVnBjQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkZDOjpTZXJ2aWNlYFxuICovXG5leHBvcnQgY2xhc3MgU2VydmljZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW50ZXJuZXRBY2Nlc3M6IFdoZXRoZXIgZW5hYmxlIEludGVybmV0IGFjY2Vzc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW50ZXJuZXRBY2Nlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMb2dQcm9qZWN0OiBMb2cgcHJvamVjdCBvZiBzZXJ2aWNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2dQcm9qZWN0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTG9nc3RvcmU6IExvZyBzdG9yZSBvZiBzZXJ2aWNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2dzdG9yZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvbGU6IFJvbGUgb2Ygc2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm9sZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VJZDogVGhlIHNlcnZpY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VOYW1lOiBUaGUgc2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRhZ3M6IFRhZ3Mgb2Ygc2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFnczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0lkOiBWUEMgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RkM6OlNlcnZpY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNlcnZpY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NTZXJ2aWNlID0gbmV3IFJvc1NlcnZpY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICByb2xlOiBwcm9wcy5yb2xlLFxuICAgICAgICAgICAgaW50ZXJuZXRBY2Nlc3M6IHByb3BzLmludGVybmV0QWNjZXNzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogcHJvcHMuZGVsZXRpb25Gb3JjZSA/IHByb3BzLmRlbGV0aW9uRm9yY2UgOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYWNpbmdDb25maWc6IHByb3BzLnRyYWNpbmdDb25maWcsXG4gICAgICAgICAgICB2cGNDb25maWc6IHByb3BzLnZwY0NvbmZpZyxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBwcm9wcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICBuYXNDb25maWc6IHByb3BzLm5hc0NvbmZpZyxcbiAgICAgICAgICAgIGxvZ0NvbmZpZzogcHJvcHMubG9nQ29uZmlnLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NlcnZpY2U7XG4gICAgICAgIHRoaXMuYXR0ckludGVybmV0QWNjZXNzID0gcm9zU2VydmljZS5hdHRySW50ZXJuZXRBY2Nlc3M7XG4gICAgICAgIHRoaXMuYXR0ckxvZ1Byb2plY3QgPSByb3NTZXJ2aWNlLmF0dHJMb2dQcm9qZWN0O1xuICAgICAgICB0aGlzLmF0dHJMb2dzdG9yZSA9IHJvc1NlcnZpY2UuYXR0ckxvZ3N0b3JlO1xuICAgICAgICB0aGlzLmF0dHJSb2xlID0gcm9zU2VydmljZS5hdHRyUm9sZTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZUlkID0gcm9zU2VydmljZS5hdHRyU2VydmljZUlkO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHJvc1NlcnZpY2UuYXR0clNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLmF0dHJUYWdzID0gcm9zU2VydmljZS5hdHRyVGFncztcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NTZXJ2aWNlLmF0dHJWcGNJZDtcbiAgICB9XG59XG4iXX0=