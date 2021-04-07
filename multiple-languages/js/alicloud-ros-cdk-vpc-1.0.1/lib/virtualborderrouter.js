"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualBorderRouter = exports.VirtualBorderRouterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "VirtualBorderRouterProperty", { enumerable: true, get: function () { return vpc_generated_1.RosVirtualBorderRouter; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::VirtualBorderRouter`
 */
class VirtualBorderRouter extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::VirtualBorderRouter`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVirtualBorderRouter = new vpc_generated_1.RosVirtualBorderRouter(this, id, {
            peerGatewayIp: props.peerGatewayIp,
            localGatewayIp: props.localGatewayIp,
            description: props.description,
            circuitCode: props.circuitCode,
            physicalConnectionId: props.physicalConnectionId,
            peeringSubnetMask: props.peeringSubnetMask,
            vlanId: props.vlanId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVirtualBorderRouter;
        this.attrName = rosVirtualBorderRouter.attrName;
        this.attrVbrId = rosVirtualBorderRouter.attrVbrId;
    }
}
exports.VirtualBorderRouter = VirtualBorderRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbGJvcmRlcnJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpcnR1YWxib3JkZXJyb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBNkQ5RDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQmpEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBK0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMxSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxzQ0FBc0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ2pFLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDO0lBQ3RELENBQUM7Q0FDSjtBQXpDRCxrREF5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NWaXJ0dWFsQm9yZGVyUm91dGVyIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zVmlydHVhbEJvcmRlclJvdXRlciBhcyBWaXJ0dWFsQm9yZGVyUm91dGVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6VmlydHVhbEJvcmRlclJvdXRlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaXJ0dWFsQm9yZGVyUm91dGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9jYWxHYXRld2F5SXA6IFRoZSBJUCBhZGRyZXNzIG9mIHRoZSBWQlIgb24gdGhlIEFsaWJhYmEgQ2xvdWQgc2lkZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2NhbEdhdGV3YXlJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVlckdhdGV3YXlJcDogVGhlIElQIGFkZHJlc3Mgb2YgdGhlIHBlZXIgcm91dGVyIGludGVyZmFjZSBvZiB0aGUgVkJSLlxuICAgICAqIE9ubHkgdGhlIG93bmVyIG9mIHRoZSBWQlIgY2FuIHNldCBvciBtb2RpZnkgdGhlIHZhbHVlLlxuICAgICAqIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIHdoZW4geW91IGNyZWF0ZSBhIFZCUiBmb3IgdGhlIG93bmVyIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uLlxuICAgICAqIFlvdSBjYW4gaWdub3JlIHRoaXMgcGFyYW1ldGVyIHdoZW4geW91IGNyZWF0ZSBhIFZCUiBmb3IgYW5vdGhlciBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVlckdhdGV3YXlJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVlcmluZ1N1Ym5ldE1hc2s6IFRoZSBzdWJuZXQgbWFzayBmb3IgdGhlIElQIGFkZHJlc3NlcyBvZiB0aGUgVkJSIG9uIHRoZSBBbGliYWJhIENsb3VkIHNpZGUgYW5kIG9uIHRoZVxuICAgICAqIHVzZXIgc2lkZS5cbiAgICAgKiBUaGUgdHdvIElQIGFkZHJlc3NlcyBtdXN0IGZhbGwgd2l0aGluIHRoZSBzYW1lIHN1Ym5ldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZWVyaW5nU3VibmV0TWFzazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGh5c2ljYWxDb25uZWN0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgcGh5c2ljYWwgY29ubmVjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBwaHlzaWNhbENvbm5lY3Rpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdmxhbklkOiBUaGUgVkxBTiBJRCBvZiB0aGUgVkJSLiBWYWxpZCB2YWx1ZXM6IDEgdG8gMjk5OS5cbiAgICAgKiBOb3RlIE9ubHkgdGhlIG93bmVyIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uIGNhbiBzZXQgdGhpcyBwYXJhbWV0ZXIuIFRoZSBWTEFOIElEcyBvZlxuICAgICAqIHR3byBWQlJzIG9mIHRoZSBzYW1lIHBoeXNpY2FsIGNvbm5lY3Rpb24gbXVzdCBiZSBkaWZmZXJlbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmxhbklkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaXJjdWl0Q29kZTogVGhlIGNpcmN1aXQgY29kZSBwcm92aWRlZCBieSB0aGUgSW50ZXJuZXQgc2VydmljZSBwcm92aWRlciAoSVNQKSBmb3IgdGhlIHBoeXNpY2FsXG4gICAgICogY29ubmVjdGlvbi5cbiAgICAgKiBOb3RlIE9ubHkgdGhlIG93bmVyIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uIGNhbiBzZXQgdGhpcyBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2lyY3VpdENvZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBWQlIuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlclxuICAgICAqIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIFZCUi5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4sIGRpZ2l0cywgcGVyaW9kcyAoLiksXG4gICAgICogdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpWaXJ0dWFsQm9yZGVyUm91dGVyYFxuICovXG5leHBvcnQgY2xhc3MgVmlydHVhbEJvcmRlclJvdXRlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmFtZTogVGhlIG5hbWUgb2YgdGhlIFZCUi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWYnJJZDogVGhlIElEIG9mIHRoZSBWQlIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWYnJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6VmlydHVhbEJvcmRlclJvdXRlcmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVmlydHVhbEJvcmRlclJvdXRlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXIgPSBuZXcgUm9zVmlydHVhbEJvcmRlclJvdXRlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHBlZXJHYXRld2F5SXA6IHByb3BzLnBlZXJHYXRld2F5SXAsXG4gICAgICAgICAgICBsb2NhbEdhdGV3YXlJcDogcHJvcHMubG9jYWxHYXRld2F5SXAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjaXJjdWl0Q29kZTogcHJvcHMuY2lyY3VpdENvZGUsXG4gICAgICAgICAgICBwaHlzaWNhbENvbm5lY3Rpb25JZDogcHJvcHMucGh5c2ljYWxDb25uZWN0aW9uSWQsXG4gICAgICAgICAgICBwZWVyaW5nU3VibmV0TWFzazogcHJvcHMucGVlcmluZ1N1Ym5ldE1hc2ssXG4gICAgICAgICAgICB2bGFuSWQ6IHByb3BzLnZsYW5JZCxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVmlydHVhbEJvcmRlclJvdXRlcjtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IHJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXIuYXR0ck5hbWU7XG4gICAgICAgIHRoaXMuYXR0clZicklkID0gcm9zVmlydHVhbEJvcmRlclJvdXRlci5hdHRyVmJySWQ7XG4gICAgfVxufVxuIl19