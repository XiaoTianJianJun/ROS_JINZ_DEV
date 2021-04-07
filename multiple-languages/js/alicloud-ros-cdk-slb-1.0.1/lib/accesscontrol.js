"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControl = exports.AccessControlProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "AccessControlProperty", { enumerable: true, get: function () { return slb_generated_1.RosAccessControl; } });
/**
 * A ROS resource type:  `ALIYUN::SLB::AccessControl`
 */
class AccessControl extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLB::AccessControl`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAccessControl = new slb_generated_1.RosAccessControl(this, id, {
            aclEntrys: props.aclEntrys,
            addressIpVersion: props.addressIpVersion,
            aclName: props.aclName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessControl;
        this.attrAclId = rosAccessControl.attrAclId;
    }
}
exports.AccessControl = AccessControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY2Vzc2NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBNEJsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWTNDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBeUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztJQUNoRCxDQUFDO0NBQ0o7QUEvQkQsc0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQWNjZXNzQ29udHJvbCB9IGZyb20gJy4vc2xiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FjY2Vzc0NvbnRyb2wgYXMgQWNjZXNzQ29udHJvbFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTEI6OkFjY2Vzc0NvbnRyb2xgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNjZXNzQ29udHJvbFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhY2Nlc3MgY29udHJvbCBsaXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjbE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjbEVudHJ5czogQSBsaXN0IG9mIGFjbCBlbnRyeXMuIEVhY2ggZW50cnkgY2FuIGJlIElQIGFkZHJlc3NlcyBvciBDSURSIGJsb2Nrcy4gTWF4IGxlbmd0aDogNTAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNsRW50cnlzPzogQXJyYXk8Um9zQWNjZXNzQ29udHJvbC5BY2xFbnRyeXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhZGRyZXNzSXBWZXJzaW9uOiBJUCB2ZXJzaW9uLiBDb3VsZCBiZSBcImlwdjRcIiBvciBcImlwdjZcIi5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRyZXNzSXBWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zQWNjZXNzQ29udHJvbC5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6U0xCOjpBY2Nlc3NDb250cm9sYFxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzQ29udHJvbCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWNsSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbnRyb2wgbGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjbElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xCOjpBY2Nlc3NDb250cm9sYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBY2Nlc3NDb250cm9sUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQWNjZXNzQ29udHJvbCA9IG5ldyBSb3NBY2Nlc3NDb250cm9sKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYWNsRW50cnlzOiBwcm9wcy5hY2xFbnRyeXMsXG4gICAgICAgICAgICBhZGRyZXNzSXBWZXJzaW9uOiBwcm9wcy5hZGRyZXNzSXBWZXJzaW9uLFxuICAgICAgICAgICAgYWNsTmFtZTogcHJvcHMuYWNsTmFtZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNjZXNzQ29udHJvbDtcbiAgICAgICAgdGhpcy5hdHRyQWNsSWQgPSByb3NBY2Nlc3NDb250cm9sLmF0dHJBY2xJZDtcbiAgICB9XG59XG4iXX0=