"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dms_generated_1 = require("./dms.generated");
Object.defineProperty(exports, "UserProperty", { enumerable: true, get: function () { return dms_generated_1.RosUser; } });
/**
 * A ROS resource type:  `ALIYUN::DMS::User`
 */
class User extends ros.Resource {
    /**
     * Create a new `ALIYUN::DMS::User`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosUser = new dms_generated_1.RosUser(this, id, {
            status: props.status,
            uid: props.uid,
            userName: props.userName,
            roleNames: props.roleNames,
            mobile: props.mobile,
            tid: props.tid,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrMobile = rosUser.attrMobile;
        this.attrParentUid = rosUser.attrParentUid;
        this.attrRoleIds = rosUser.attrRoleIds;
        this.attrRoleNames = rosUser.attrRoleNames;
        this.attrUid = rosUser.attrUid;
        this.attrUserId = rosUser.attrUserId;
        this.attrUserName = rosUser.attrUserName;
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUEwQztBQUV0Qiw2RkFGWCx1QkFBTyxPQUVnQjtBQXNDaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQTBDbEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFnQixFQUFFLG1DQUEyQyxJQUFJO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDbkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztZQUNkLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNqQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDN0MsQ0FBQztDQUNKO0FBckVELG9CQXFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1VzZXIgfSBmcm9tICcuL2Rtcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NVc2VyIGFzIFVzZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RE1TOjpVc2VyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdWlkOiBVc2VyQWxpWXVuVWlkXG4gICAgICovXG4gICAgcmVhZG9ubHkgdWlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9iaWxlOiBVc2VyTW9iaWxlXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9iaWxlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvbGVOYW1lczogVXNlclJvbGVcbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlTmFtZXM/OiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGF0dXM6IFVzZXJTdGF0dXNcbiAgICAgKi9cbiAgICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGlkOlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyTmFtZTogVXNlck5pY2tOYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlck5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkRNUzo6VXNlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNb2JpbGU6IFVzZXJNb2JpbGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1vYmlsZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQYXJlbnRVaWQ6IFBhcmVudEFsaVl1blVpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGFyZW50VWlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvbGVJZHM6IFVzZXJSb2xlSWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvbGVJZHM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUm9sZU5hbWVzOiBVc2VyUm9sZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm9sZU5hbWVzOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVpZDogVXNlckFsaVl1blVpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVWlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVzZXJJZDogVXNlcklkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VySWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXNlck5hbWU6IFVzZXJOaWNrTmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXNlck5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpETVM6OlVzZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFVzZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NVc2VyID0gbmV3IFJvc1VzZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBzdGF0dXM6IHByb3BzLnN0YXR1cyxcbiAgICAgICAgICAgIHVpZDogcHJvcHMudWlkLFxuICAgICAgICAgICAgdXNlck5hbWU6IHByb3BzLnVzZXJOYW1lLFxuICAgICAgICAgICAgcm9sZU5hbWVzOiBwcm9wcy5yb2xlTmFtZXMsXG4gICAgICAgICAgICBtb2JpbGU6IHByb3BzLm1vYmlsZSxcbiAgICAgICAgICAgIHRpZDogcHJvcHMudGlkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1VzZXI7XG4gICAgICAgIHRoaXMuYXR0ck1vYmlsZSA9IHJvc1VzZXIuYXR0ck1vYmlsZTtcbiAgICAgICAgdGhpcy5hdHRyUGFyZW50VWlkID0gcm9zVXNlci5hdHRyUGFyZW50VWlkO1xuICAgICAgICB0aGlzLmF0dHJSb2xlSWRzID0gcm9zVXNlci5hdHRyUm9sZUlkcztcbiAgICAgICAgdGhpcy5hdHRyUm9sZU5hbWVzID0gcm9zVXNlci5hdHRyUm9sZU5hbWVzO1xuICAgICAgICB0aGlzLmF0dHJVaWQgPSByb3NVc2VyLmF0dHJVaWQ7XG4gICAgICAgIHRoaXMuYXR0clVzZXJJZCA9IHJvc1VzZXIuYXR0clVzZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyVXNlck5hbWUgPSByb3NVc2VyLmF0dHJVc2VyTmFtZTtcbiAgICB9XG59XG4iXX0=