"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterSlaveServerGroup = exports.MasterSlaveServerGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "MasterSlaveServerGroupProperty", { enumerable: true, get: function () { return slb_generated_1.RosMasterSlaveServerGroup; } });
/**
 * A ROS resource type:  `ALIYUN::SLB::MasterSlaveServerGroup`
 */
class MasterSlaveServerGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosMasterSlaveServerGroup = new slb_generated_1.RosMasterSlaveServerGroup(this, id, {
            loadBalancerId: props.loadBalancerId,
            masterSlaveServerGroupName: props.masterSlaveServerGroupName,
            masterSlaveBackendServers: props.masterSlaveBackendServers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMasterSlaveServerGroup;
        this.attrMasterSlaveServerGroupId = rosMasterSlaveServerGroup.attrMasterSlaveServerGroupId;
    }
}
exports.MasterSlaveServerGroup = MasterSlaveServerGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyc2xhdmVzZXJ2ZXJncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hc3RlcnNsYXZlc2VydmVyZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE0RDtBQUV0QiwrR0FGN0IseUNBQXlCLE9BRWtDO0FBd0JwRTs7R0FFRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZcEQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFrQyxFQUFFLG1DQUEyQyxJQUFJO1FBQzdILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLHlDQUF5QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkUsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLDBCQUEwQixFQUFFLEtBQUssQ0FBQywwQkFBMEI7WUFDNUQseUJBQXlCLEVBQUUsS0FBSyxDQUFDLHlCQUF5QjtTQUM3RCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHlCQUF5QixDQUFDO1FBQzFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyx5QkFBeUIsQ0FBQyw0QkFBNEIsQ0FBQztJQUMvRixDQUFDO0NBQ0o7QUE5QkQsd0RBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cCB9IGZyb20gJy4vc2xiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc01hc3RlclNsYXZlU2VydmVyR3JvdXAgYXMgTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTEI6Ok1hc3RlclNsYXZlU2VydmVyR3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIHRoZSBTZXJ2ZXIgTG9hZCBCYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2FkQmFsYW5jZXJJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnM6IEEgbGlzdCBvZiBhY3RpdmUvc3RhbmRieSBzZXJ2ZXIgZ3JvdXAuXG4gICAgICogQW4gYWN0aXZlL3N0YW5kYnkgc2VydmVyIGdyb3VwIGNhbiBvbmx5IGNvbnRhaW4gdHdvIGJhY2tlbmQgc2VydmVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJTbGF2ZUJhY2tlbmRTZXJ2ZXJzOiBBcnJheTxSb3NNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwLk1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWFzdGVyU2xhdmVTZXJ2ZXJHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhY3RpdmUvc3RhbmRieSBzZXJ2ZXIgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyU2xhdmVTZXJ2ZXJHcm91cE5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlNMQjo6TWFzdGVyU2xhdmVTZXJ2ZXJHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hc3RlclNsYXZlU2VydmVyR3JvdXAgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNYXN0ZXJTbGF2ZVNlcnZlckdyb3VwSWQ6IEFjdGl2ZS9zdGFuZGJ5IHNlcnZlciBncm91cCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1hc3RlclNsYXZlU2VydmVyR3JvdXBJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMQjo6TWFzdGVyU2xhdmVTZXJ2ZXJHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc01hc3RlclNsYXZlU2VydmVyR3JvdXAgPSBuZXcgUm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlcklkOiBwcm9wcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIG1hc3RlclNsYXZlU2VydmVyR3JvdXBOYW1lOiBwcm9wcy5tYXN0ZXJTbGF2ZVNlcnZlckdyb3VwTmFtZSxcbiAgICAgICAgICAgIG1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnM6IHByb3BzLm1hc3RlclNsYXZlQmFja2VuZFNlcnZlcnMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cDtcbiAgICAgICAgdGhpcy5hdHRyTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkID0gcm9zTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cC5hdHRyTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkO1xuICAgIH1cbn1cbiJdfQ==