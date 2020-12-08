"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMetricRule = exports.GroupMetricRuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "GroupMetricRuleProperty", { enumerable: true, get: function () { return cms_generated_1.RosGroupMetricRule; } });
/**
 * A ROS resource type:  `ALIYUN::CMS::GroupMetricRule`
 */
class GroupMetricRule extends ros.Resource {
    /**
     * Create a new `ALIYUN::CMS::GroupMetricRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosGroupMetricRule = new cms_generated_1.RosGroupMetricRule(this, id, {
            noEffectiveInterval: props.noEffectiveInterval,
            silenceTime: props.silenceTime,
            category: props.category,
            ruleId: props.ruleId,
            dimensions: props.dimensions,
            period: props.period,
            effectiveInterval: props.effectiveInterval,
            namespace: props.namespace,
            groupId: props.groupId,
            metricName: props.metricName,
            escalations: props.escalations,
            emailSubject: props.emailSubject,
            webhook: props.webhook,
            ruleName: props.ruleName,
            interval: props.interval,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroupMetricRule;
        this.attrRuleId = rosGroupMetricRule.attrRuleId;
    }
}
exports.GroupMetricRule = GroupMetricRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBtZXRyaWNydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvdXBtZXRyaWNydWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQXlIdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZN0M7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEyQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3RILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtDQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUMzQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDO0lBQ3BELENBQUM7Q0FDSjtBQTFDRCwwQ0EwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NHcm91cE1ldHJpY1J1bGUgfSBmcm9tICcuL2Ntcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NHcm91cE1ldHJpY1J1bGUgYXMgR3JvdXBNZXRyaWNSdWxlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwTWV0cmljUnVsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjYXRlZ29yeTogVGhlIGFiYnJldmlhdGlvbiBvZiB0aGUgc2VydmljZSBuYW1lLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogRUNTIChpbmNsdWRpbmcgQWxpYmFiYSBDbG91ZCBhbmQgbm9uLUFsaWJhYmEgQ2xvdWQgaG9zdHMpXG4gICAgICogUkRTIChBcHNhcmFEQiBmb3IgUkRTKVxuICAgICAqIEFEUyAoQW5hbHl0aWNEQilcbiAgICAgKiBTTEIgKFNlcnZlciBMb2FkIEJhbGFuY2VyKVxuICAgICAqIFZQQyAoVmlydHVhbCBQcml2YXRlIENsb3VkKVxuICAgICAqIEFQSUdBVEVXQVkgKEFQSSBHYXRld2F5KVxuICAgICAqIENETlxuICAgICAqIENTIChDb250YWluZXIgU2VydmljZSBmb3IgU3dhcm0pXG4gICAgICogRENETiAoRHluYW1pYyBSb3V0ZSBmb3IgQ0ROKVxuICAgICAqIEREb1MgKGRpc3RyaWJ1dGVkIGRlbmlhbCBvZiBzZXJ2aWNlKVxuICAgICAqIEVJUCAoRWxhc3RpYyBJUClcbiAgICAgKiBFTEFTVElDU0VBUkNIIChFbGFzdGljc2VhcmNoKVxuICAgICAqIEVNUiAoRS1NYXBSZWR1Y2UpXG4gICAgICogRVNTIChBdXRvIFNjYWxpbmcpXG4gICAgICogSEJBU0UgKEFwc2FyYURCIGZvciBIQmFzZSlcbiAgICAgKiBJT1RfRURHRSAoSW9UIEVkZ2UpXG4gICAgICogSzhTX1BPRCAoazhzIHBvZClcbiAgICAgKiBLVlNUT1JFX1NIQVJESU5HIChBcHNhcmFEQiBmb3IgUmVkaXMgY2x1c3RlciB2ZXJzaW9uKVxuICAgICAqIEtWU1RPUkVfU1BMSVRSVyAoQXBzYXJhREIgZm9yIFJlZGlzIHJlYWQvd3JpdGUgc3BsaXR0aW5nIHZlcnNpb24pXG4gICAgICogS1ZTVE9SRV9TVEFOREFSRCAoQXBzYXJhREIgZm9yIFJlZGlzIHN0YW5kYXJkIHZlcnNpb24pXG4gICAgICogTUVNQ0FDSEUgKEFwc2FyYURCIGZvciBNZW1jYWNoZSlcbiAgICAgKiBNTlMgKE1lc3NhZ2UgU2VydmljZSlcbiAgICAgKiBNT05HT0RCIChBcHNhcmFEQiBmb3IgTW9uZ29EQiByZXBsaWNhIHNldCBpbnN0YW5jZXMpXG4gICAgICogTU9OR09EQl9DTFVTVEVSIChBcHNhcmFEQiBmb3IgTW9uZ29EQiBjbHVzdGVyIHZlcnNpb24pXG4gICAgICogTU9OR09EQl9TSEFSRElORyAoQXBzYXJhREIgZm9yIE1vbmdvREIgc2hhcmRlZCBjbHVzdGVycylcbiAgICAgKiBNUV9UT1BJQyAoTWVzc2FnZSBTZXJ2aWNlIHRvcGljKVxuICAgICAqIE9DUyAob3JpZ2luYWwgdmVyc2lvbiBvZiBBcHNhcmFEQiBmb3IgTWVtY2FjaGUpXG4gICAgICogT1BFTlNFQVJDSCAoT3BlbiBTZWFyY2gpXG4gICAgICogT1NTIChPYmplY3QgU3RvcmFnZSBTZXJ2aWNlKVxuICAgICAqIFBPTEFSREIgKEFwc2FyYURCIGZvciBQT0xBUkRCKVxuICAgICAqIFBFVEFEQVRBIChIeWJyaWREQiBmb3IgTXlTUUwpXG4gICAgICogU0NETiAoU2VjdXJlIENvbnRlbnQgRGVsaXZlcnkgTmV0d29yaylcbiAgICAgKiBTSEFSRUJBTkRXSURUSFBBQ0tBR0VTIChzaGFyZWQgYmFuZHdpZHRoIHBhY2thZ2UpXG4gICAgICogU0xTIChMb2cgU2VydmljZSlcbiAgICAgKiBWUE4gKFZQTiBHYXRld2F5KVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNhdGVnb3J5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXNjYWxhdGlvbnM6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVzY2FsYXRpb25zOiBSb3NHcm91cE1ldHJpY1J1bGUuRXNjYWxhdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSUQgb2YgYXBwbGljYXRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1ldHJpY05hbWU6IFRoZSBuYW1lIG9mIHRoZSBtZXRyaWMuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBjYWxsIERlc2NyaWJlTWV0cmljTWV0YUxpc3Qgb3Igc2VlIFByZXNldCBtZXRyaWNzIHJlZmVyZW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtZXRyaWNOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZXNwYWNlOiBUaGUgZGF0YSBuYW1lc3BhY2Ugb2YgdGhlIHNlcnZpY2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBjYWxsIERlc2NyaWJlTWV0cmljTWV0YUxpc3RcbiAgICAgKiBvciBzZWUgUHJlc2V0IG1ldHJpY3MgcmVmZXJlbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bGVJZDogVGhlIElEIG9mIHRoZSBhbGVydCBydWxlLiBUaGUgSURzIG9mIGFsZXJ0IHJ1bGVzIGFyZSBnZW5lcmF0ZWQgYnkgY2FsbGVycyB0byBlbnN1cmVcbiAgICAgKiB1bmlxdWVuZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bGVJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWxlcnQgcnVsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBydWxlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpbWVuc2lvbnM6IFRoZSBleHBlbmRlZCByZXNvdXJjZSBkaW1lbnNpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpbWVuc2lvbnM/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWZmZWN0aXZlSW50ZXJ2YWw6IFRoZSBwZXJpb2Qgd2hlbiB0aGUgYWxlcnQgcnVsZSBpcyBlZmZlY3RpdmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWZmZWN0aXZlSW50ZXJ2YWw/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW1haWxTdWJqZWN0OiBUaGUgc3ViamVjdCBvZiB0aGUgYWxlcnQgbm90aWZpY2F0aW9uIGVtYWlsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVtYWlsU3ViamVjdD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcnZhbDogVGhlIGRldGVjdGlvbiBwZXJpb2Qgb2YgYWxlcnRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVydmFsPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vRWZmZWN0aXZlSW50ZXJ2YWw6IFRoZSBwZXJpb2Qgd2hlbiB0aGUgYWxlcnQgcnVsZSBpcyBpbmVmZmVjdGl2ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBub0VmZmVjdGl2ZUludGVydmFsPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZDogVGhlIGFnZ3JlZ2F0aW9uIHBlcmlvZC4gVW5pdGU6IHNlY29uZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2lsZW5jZVRpbWU6IFRoZSBkdXJhdGlvbiBvZiB0aGUgbXV0ZSBwZXJpb2QgZHVyaW5nIHdoaWNoIG5ldyBhbGVydHMgYXJlIG5vdCBzZW50IGV2ZW4gaWYgdGhlIHRyaWdnZXJcbiAgICAgKiBjb25kaXRpb25zIGFyZSBtZXQuIFVuaXQ6IHNlY29uZC4gRGVmYXVsdCB2YWx1ZTogODY0MDAuIE1pbmltdW0gdmFsdWU6IDYwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNpbGVuY2VUaW1lPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYmhvb2s6IFRoZSBVUkwgb2YgdGhlIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIGFuIGFsZXJ0IG9jY3Vycy5cbiAgICAgKi9cbiAgICByZWFkb25seSB3ZWJob29rPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpDTVM6Okdyb3VwTWV0cmljUnVsZWBcbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VwTWV0cmljUnVsZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJ1bGVJZDogUnVsZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJ1bGVJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBHcm91cE1ldHJpY1J1bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NHcm91cE1ldHJpY1J1bGUgPSBuZXcgUm9zR3JvdXBNZXRyaWNSdWxlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgbm9FZmZlY3RpdmVJbnRlcnZhbDogcHJvcHMubm9FZmZlY3RpdmVJbnRlcnZhbCxcbiAgICAgICAgICAgIHNpbGVuY2VUaW1lOiBwcm9wcy5zaWxlbmNlVGltZSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBwcm9wcy5jYXRlZ29yeSxcbiAgICAgICAgICAgIHJ1bGVJZDogcHJvcHMucnVsZUlkLFxuICAgICAgICAgICAgZGltZW5zaW9uczogcHJvcHMuZGltZW5zaW9ucyxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgZWZmZWN0aXZlSW50ZXJ2YWw6IHByb3BzLmVmZmVjdGl2ZUludGVydmFsLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiBwcm9wcy5uYW1lc3BhY2UsXG4gICAgICAgICAgICBncm91cElkOiBwcm9wcy5ncm91cElkLFxuICAgICAgICAgICAgbWV0cmljTmFtZTogcHJvcHMubWV0cmljTmFtZSxcbiAgICAgICAgICAgIGVzY2FsYXRpb25zOiBwcm9wcy5lc2NhbGF0aW9ucyxcbiAgICAgICAgICAgIGVtYWlsU3ViamVjdDogcHJvcHMuZW1haWxTdWJqZWN0LFxuICAgICAgICAgICAgd2ViaG9vazogcHJvcHMud2ViaG9vayxcbiAgICAgICAgICAgIHJ1bGVOYW1lOiBwcm9wcy5ydWxlTmFtZSxcbiAgICAgICAgICAgIGludGVydmFsOiBwcm9wcy5pbnRlcnZhbCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NHcm91cE1ldHJpY1J1bGU7XG4gICAgICAgIHRoaXMuYXR0clJ1bGVJZCA9IHJvc0dyb3VwTWV0cmljUnVsZS5hdHRyUnVsZUlkO1xuICAgIH1cbn1cbiJdfQ==