"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const edsuser_generated_1 = require("./edsuser.generated");
Object.defineProperty(exports, "UserProperty", { enumerable: true, get: function () { return edsuser_generated_1.RosUser; } });
/**
 * A ROS resource type:  `ALIYUN::EdsUser::User`
 */
class User extends ros.Resource {
    /**
     * Create a new `ALIYUN::EdsUser::User`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosUser = new edsuser_generated_1.RosUser(this, id, {
            orgId: props.orgId,
            ownerType: props.ownerType,
            endUserId: props.endUserId,
            email: props.email,
            phone: props.phone,
            remark: props.remark,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrEndUserId = rosUser.attrEndUserId;
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJEQUE4QztBQUUxQiw2RkFGWCwyQkFBTyxPQUVnQjtBQThDaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlsQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWdCLEVBQUUsbUNBQTJDLElBQUk7UUFDM0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLE9BQU8sR0FBRyxJQUFJLDJCQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQy9DLENBQUM7Q0FDSjtBQWxDRCxvQkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NVc2VyIH0gZnJvbSAnLi9lZHN1c2VyLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1VzZXIgYXMgVXNlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFZHNVc2VyOjpVc2VyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRVc2VySWQ6IFRoZSBuYW1lIG9mIHRoZSBlbmQgdXNlci4gVGhlIG5hbWUgbXVzdCBiZSAzIHRvIDI0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbG93ZXJjYXNlIGxldHRlcnMsIGRpZ2l0cywgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmRVc2VySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVtYWlsOiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgZW5kIHVzZXIuIFRoZSBlbWFpbCBhZGRyZXNzIGlzIHVzZWQgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIGFib3V0IGV2ZW50cyBzdWNoIGFzIGRlc2t0b3AgYXNzaWdubWVudC4gWW91IG11c3Qgc3BlY2lmeSBhbiBlbWFpbCBhZGRyZXNzIG9yIGEgbW9iaWxlIG51bWJlciB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW1haWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvcmdJZDogVGhlIG9yZ2FuaXphdGlvbiB0byB3aGljaCB0aGUgZW5kIHVzZXIgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcmdJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG93bmVyVHlwZTogVGhlIHR5cGUgb2YgdGhlIGFjY291bnQgb3duZXJzaGlwLlxuICAgICAqIEVudW1lcmF0aW9uIFZhbHVlOlxuICAgICAqIENyZWF0ZUZyb21NYW5hZ2VyXG4gICAgICogTm9ybWFsXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3duZXJUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFzc3dvcmQ6IFRoZSBpbml0aWFsIHBhc3N3b3JkLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBsZWZ0IGVtcHR5LCBhbiBlbWFpbCBmb3IgcGFzc3dvcmQgcmVzZXQgaXMgc2VudCB0byB0aGUgc3BlY2lmaWVkIGVtYWlsIGFkZHJlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwaG9uZTogTW9iaWxlIG51bWJlcnMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gdGhlIGludGVybmF0aW9uYWwgc2l0ZSAoYWxpYmFiYWNsb3VkLmNvbSkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGhvbmU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmtzIG9mIHRoZSBlbmQgdXNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1hcms/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVkc1VzZXI6OlVzZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmRVc2VySWQ6IFRoZSBuYW1lIG9mIHRoZSBlbmQgdXNlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZFVzZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVkc1VzZXI6OlVzZXJgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFVzZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NVc2VyID0gbmV3IFJvc1VzZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBvcmdJZDogcHJvcHMub3JnSWQsXG4gICAgICAgICAgICBvd25lclR5cGU6IHByb3BzLm93bmVyVHlwZSxcbiAgICAgICAgICAgIGVuZFVzZXJJZDogcHJvcHMuZW5kVXNlcklkLFxuICAgICAgICAgICAgZW1haWw6IHByb3BzLmVtYWlsLFxuICAgICAgICAgICAgcGhvbmU6IHByb3BzLnBob25lLFxuICAgICAgICAgICAgcmVtYXJrOiBwcm9wcy5yZW1hcmssXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvcHMucGFzc3dvcmQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVXNlcjtcbiAgICAgICAgdGhpcy5hdHRyRW5kVXNlcklkID0gcm9zVXNlci5hdHRyRW5kVXNlcklkO1xuICAgIH1cbn1cbiJdfQ==