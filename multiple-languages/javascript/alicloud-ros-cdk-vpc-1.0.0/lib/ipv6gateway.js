"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ipv6Gateway = exports.Ipv6GatewayProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "Ipv6GatewayProperty", { enumerable: true, get: function () { return vpc_generated_1.RosIpv6Gateway; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::Ipv6Gateway`
 */
class Ipv6Gateway extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::Ipv6Gateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosIpv6Gateway = new vpc_generated_1.RosIpv6Gateway(this, id, {
            description: props.description,
            vpcId: props.vpcId,
            spec: props.spec,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv6Gateway;
        this.attrIpv6GatewayId = rosIpv6Gateway.attrIpv6GatewayId;
    }
}
exports.Ipv6Gateway = Ipv6Gateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXB2NmdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpcHY2Z2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQWtDOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQVl6Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5RCxDQUFDO0NBQ0o7QUEvQkQsa0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSXB2NkdhdGV3YXkgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJcHY2R2F0ZXdheSBhcyBJcHY2R2F0ZXdheVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OklwdjZHYXRld2F5YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElwdjZHYXRld2F5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUbyBvcGVuIFZQQyBJRCBJUHY2IGdhdGV3YXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgSVB2NiBnYXRld2F5LlxuICAgICAqIExlbmd0aCBvZiAyIHRvIDI1NiBjaGFyYWN0ZXJzLCBtdXN0IGJlZ2luIHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSwgbWF5IGNvbnRhaW4gbnVtYmVycywgbnVtYmVycywgdW5kZXJzY29yZSAoXykgYW5kIGRvdCBkYXNoICgtKSwgYnV0IG5vdCBhdCB0aGUgaHR0cCAoLik6IC8vIG9yIGh0dHBzOiAvLyBhdCB0aGUgYmVnaW5uaW5nIC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBOYW1lIG9mIHRoZSBJUHY2IGdhdGV3YXkuXG4gICAgICogTGVuZ3RoIG9mIDIgdG8gMTI4IGNoYXJhY3RlcnMsIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UsIGNhbiBjb250YWluIG51bWJlcnMsIGRvdCwgdW5kZXJzY29yZSAoXykgYW5kIGRhc2ggKC0pLCBidXQgbm90IGF0IGh0dHAgKC4pOiAvLyBvciB3aXRoIGh0dHBzOiAvLyAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcGVjOiBTcGVjaWZpY2F0aW9ucyBJUHY2IGdhdGV3YXksIHRoZSB2YWx1ZTpcbiAgICAgKiBTbWFsbCAoZGVmYXVsdCk6IEZyZWUuXG4gICAgICogTWVkaXVtOiBFbnRlcnByaXNlIEVkaXRpb24uXG4gICAgICogTGFyZ2U6IEVudGVycHJpc2UgRW5oYW5jZWQgRWRpdGlvbi5cbiAgICAgKiBEaWZmZXJlbnQgc3BlY2lmaWNhdGlvbnMgb2YgdGhlIElQdjYgZm9yd2FyZGluZyBjYXBhYmlsaXR5IG9mIHRoZSBnYXRld2F5IGlzIGRpZmZlcmVudC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBJUHY2IGdhdGV3YXkgc3BlY2lmaWNhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVjPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OklwdjZHYXRld2F5YFxuICovXG5leHBvcnQgY2xhc3MgSXB2NkdhdGV3YXkgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJcHY2R2F0ZXdheUlkOiBJRCBJUHY2IGdhdGV3YXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcHY2R2F0ZXdheUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpJcHY2R2F0ZXdheWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSXB2NkdhdGV3YXlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJcHY2R2F0ZXdheSA9IG5ldyBSb3NJcHY2R2F0ZXdheSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIHNwZWM6IHByb3BzLnNwZWMsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0lwdjZHYXRld2F5O1xuICAgICAgICB0aGlzLmF0dHJJcHY2R2F0ZXdheUlkID0gcm9zSXB2NkdhdGV3YXkuYXR0cklwdjZHYXRld2F5SWQ7XG4gICAgfVxufVxuIl19