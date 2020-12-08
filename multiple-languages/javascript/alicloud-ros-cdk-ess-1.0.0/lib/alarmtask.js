"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmTask = exports.AlarmTaskProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ess_generated_1 = require("./ess.generated");
Object.defineProperty(exports, "AlarmTaskProperty", { enumerable: true, get: function () { return ess_generated_1.RosAlarmTask; } });
/**
 * A ROS resource type:  `ALIYUN::ESS::AlarmTask`
 */
class AlarmTask extends ros.Resource {
    /**
     * Create a new `ALIYUN::ESS::AlarmTask`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAlarmTask = new ess_generated_1.RosAlarmTask(this, id, {
            comparisonOperator: props.comparisonOperator,
            description: props.description,
            scalingGroupId: props.scalingGroupId,
            metricType: props.metricType,
            evaluationCount: props.evaluationCount,
            period: props.period,
            dimensions: props.dimensions,
            statistics: props.statistics,
            name: props.name,
            groupId: props.groupId,
            metricName: props.metricName,
            alarmAction: props.alarmAction,
            threshold: props.threshold,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlarmTask;
        this.attrAlarmTaskId = rosAlarmTask.attrAlarmTaskId;
    }
}
exports.AlarmTask = AlarmTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxhcm10YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxhcm10YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBeUUxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWXZDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDN0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO0lBQ3hELENBQUM7Q0FDSjtBQXhDRCw4QkF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBbGFybVRhc2sgfSBmcm9tICcuL2Vzcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBbGFybVRhc2sgYXMgQWxhcm1UYXNrUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVTUzo6QWxhcm1UYXNrYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFsYXJtVGFza1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGFybUFjdGlvbjogQWxhcm0gQWN0aW9uc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsYXJtQWN0aW9uOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZXRyaWNOYW1lOiBNZXRyaWMgTmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1ldHJpY05hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nR3JvdXBJZDogVGhlIElEIG9mIHRoZSBzY2FsaW5nIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjYWxpbmdHcm91cElkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGhyZXNob2xkOiBUaHJlc2hvbGRcbiAgICAgKi9cbiAgICByZWFkb25seSB0aHJlc2hvbGQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21wYXJpc29uT3BlcmF0b3I6IENvbXBhcmlzb24gT3BlcmF0b3JcbiAgICAgKi9cbiAgICByZWFkb25seSBjb21wYXJpc29uT3BlcmF0b3I/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGltZW5zaW9uczogRGltZW5zaW9uc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpbWVuc2lvbnM/OiBBcnJheTxSb3NBbGFybVRhc2suRGltZW5zaW9uc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBldmFsdWF0aW9uQ291bnQ6IEV2YWx1YXRpb24gQ291bnRcbiAgICAgKi9cbiAgICByZWFkb25seSBldmFsdWF0aW9uQ291bnQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogR3JvdXAgSWRcbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1ldHJpY1R5cGU6IE1ldHJpYyBUeXBlXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWV0cmljVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBOYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFBlcmlvZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGF0aXN0aWNzOiBTdGF0aXN0aWNzXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhdGlzdGljcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RVNTOjpBbGFybVRhc2tgXG4gKi9cbmV4cG9ydCBjbGFzcyBBbGFybVRhc2sgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbGFybVRhc2tJZDogVGhlIGFsYXJtIHRhc2sgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsYXJtVGFza0lkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RVNTOjpBbGFybVRhc2tgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFsYXJtVGFza1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FsYXJtVGFzayA9IG5ldyBSb3NBbGFybVRhc2sodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjb21wYXJpc29uT3BlcmF0b3I6IHByb3BzLmNvbXBhcmlzb25PcGVyYXRvcixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHNjYWxpbmdHcm91cElkOiBwcm9wcy5zY2FsaW5nR3JvdXBJZCxcbiAgICAgICAgICAgIG1ldHJpY1R5cGU6IHByb3BzLm1ldHJpY1R5cGUsXG4gICAgICAgICAgICBldmFsdWF0aW9uQ291bnQ6IHByb3BzLmV2YWx1YXRpb25Db3VudCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgZGltZW5zaW9uczogcHJvcHMuZGltZW5zaW9ucyxcbiAgICAgICAgICAgIHN0YXRpc3RpY3M6IHByb3BzLnN0YXRpc3RpY3MsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICAgICAgZ3JvdXBJZDogcHJvcHMuZ3JvdXBJZCxcbiAgICAgICAgICAgIG1ldHJpY05hbWU6IHByb3BzLm1ldHJpY05hbWUsXG4gICAgICAgICAgICBhbGFybUFjdGlvbjogcHJvcHMuYWxhcm1BY3Rpb24sXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IHByb3BzLnRocmVzaG9sZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBbGFybVRhc2s7XG4gICAgICAgIHRoaXMuYXR0ckFsYXJtVGFza0lkID0gcm9zQWxhcm1UYXNrLmF0dHJBbGFybVRhc2tJZDtcbiAgICB9XG59XG4iXX0=