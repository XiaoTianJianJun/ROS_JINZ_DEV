"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityGroupEgress = exports.SecurityGroupEgressProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "SecurityGroupEgressProperty", { enumerable: true, get: function () { return ecs_generated_1.RosSecurityGroupEgress; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroupEgress`
 */
class SecurityGroupEgress extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupEgress`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSecurityGroupEgress = new ecs_generated_1.RosSecurityGroupEgress(this, id, {
            policy: props.policy,
            portRange: props.portRange,
            description: props.description,
            priority: props.priority ? props.priority : 1,
            securityGroupId: props.securityGroupId,
            destGroupOwnerId: props.destGroupOwnerId,
            ipProtocol: props.ipProtocol,
            destCidrIp: props.destCidrIp,
            nicType: props.nicType,
            ipv6DestCidrIp: props.ipv6DestCidrIp,
            destGroupId: props.destGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupEgress;
    }
}
exports.SecurityGroupEgress = SecurityGroupEgress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHlncm91cGVncmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyaXR5Z3JvdXBlZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBZ0U5RDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFFakQ7OztPQUdHO0lBRUg7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUErQixFQUFFLG1DQUEyQyxJQUFJO1FBQzFILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQWhDRCxrREFnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTZWN1cml0eUdyb3VwRWdyZXNzIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2VjdXJpdHlHcm91cEVncmVzcyBhcyBTZWN1cml0eUdyb3VwRWdyZXNzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVDUzo6U2VjdXJpdHlHcm91cEVncmVzc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eUdyb3VwRWdyZXNzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwUHJvdG9jb2w6IElwIHByb3RvY29sIGZvciBpbiBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwUHJvdG9jb2w6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb3J0UmFuZ2U6IElwIHByb3RvY29sIHJlbGF0aXZlIHBvcnQgcmFuZ2UuIEZvciB0Y3AgYW5kIHVkcCwgdGhlIHBvcnQgcmFuZyBpcyBbMSw2NTUzNV0sIHVzaW5nIGZvcm1hdCAnMS8yMDAnRm9yIGljbXB8Z3JlfGFsbCBwcm90b2NlbCwgdGhlIHBvcnQgcmFuZ2Ugc2hvdWxkIGJlICctMS8tMSdcbiAgICAgKi9cbiAgICByZWFkb25seSBwb3J0UmFuZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIHNlY3VyaXR5IGdyb3VwIHJ1bGUsIFsxLCA1MTJdIGNoYXJhY3RlcnMuIFRoZSBkZWZhdWx0IGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc3RDaWRySXA6IERlc3QgQ0lEUiBJcCBBZGRyZXNzIHJhbmdlLiBPbmx5IElQVjQgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RDaWRySXA/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzdEdyb3VwSWQ6IERlc3QgR3JvdXAgSWRcbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0R3JvdXBJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXN0R3JvdXBPd25lcklkOiBEZXN0IEdyb3VwIE93bmVyIEFjY291bnQgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0R3JvdXBPd25lcklkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwdjZEZXN0Q2lkcklwOiBEZXN0aW5hdGlvbiBJUHY2IENJRFIgYWRkcmVzcyBzZWdtZW50LiBTdXBwb3J0cyBJUCBhZGRyZXNzIHJhbmdlcyBpbiBDSURSIGZvcm1hdCBhbmQgSVB2NiBmb3JtYXQuXG4gICAgICogTm90ZSBPbmx5IFZQQyB0eXBlIElQIGFkZHJlc3NlcyBhcmUgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwdjZEZXN0Q2lkcklwPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5pY1R5cGU6IE5ldHdvcmsgdHlwZSwgY291bGQgYmUgJ2ludGVybmV0JyBvciAnaW50cmFuZXQnLiBEZWZhdWx0IHZhbHVlIGlzIGludGVybmV0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5pY1R5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5OiBBdXRob3JpemF0aW9uIHBvbGljaWVzLCBwYXJhbWV0ZXIgdmFsdWVzIGNhbiBiZTogYWNjZXB0IChhY2NlcHRlZCBhY2Nlc3MpLCBkcm9wIChkZW5pZWQgYWNjZXNzKS4gRGVmYXVsdCB2YWx1ZSBpcyBhY2NlcHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaW9yaXR5OiBBdXRob3JpemF0aW9uIHBvbGljaWVzIHByaW9yaXR5IHJhbmdlWzEsIDEwMF1cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmlvcml0eT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IElkIG9mIHRoZSBzZWN1cml0eSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6U2VjdXJpdHlHcm91cEVncmVzc2BcbiAqL1xuZXhwb3J0IGNsYXNzIFNlY3VyaXR5R3JvdXBFZ3Jlc3MgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVDUzo6U2VjdXJpdHlHcm91cEVncmVzc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU2VjdXJpdHlHcm91cEVncmVzc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1NlY3VyaXR5R3JvdXBFZ3Jlc3MgPSBuZXcgUm9zU2VjdXJpdHlHcm91cEVncmVzcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHBvbGljeTogcHJvcHMucG9saWN5LFxuICAgICAgICAgICAgcG9ydFJhbmdlOiBwcm9wcy5wb3J0UmFuZ2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmlvcml0eTogcHJvcHMucHJpb3JpdHkgPyBwcm9wcy5wcmlvcml0eSA6IDEsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIGRlc3RHcm91cE93bmVySWQ6IHByb3BzLmRlc3RHcm91cE93bmVySWQsXG4gICAgICAgICAgICBpcFByb3RvY29sOiBwcm9wcy5pcFByb3RvY29sLFxuICAgICAgICAgICAgZGVzdENpZHJJcDogcHJvcHMuZGVzdENpZHJJcCxcbiAgICAgICAgICAgIG5pY1R5cGU6IHByb3BzLm5pY1R5cGUsXG4gICAgICAgICAgICBpcHY2RGVzdENpZHJJcDogcHJvcHMuaXB2NkRlc3RDaWRySXAsXG4gICAgICAgICAgICBkZXN0R3JvdXBJZDogcHJvcHMuZGVzdEdyb3VwSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2VjdXJpdHlHcm91cEVncmVzcztcbiAgICB9XG59XG4iXX0=