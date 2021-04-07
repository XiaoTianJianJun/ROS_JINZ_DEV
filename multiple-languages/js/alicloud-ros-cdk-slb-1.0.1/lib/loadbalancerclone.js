"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBalancerClone = exports.LoadBalancerCloneProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "LoadBalancerCloneProperty", { enumerable: true, get: function () { return slb_generated_1.RosLoadBalancerClone; } });
/**
 * A ROS resource type:  `ALIYUN::SLB::LoadBalancerClone`
 */
class LoadBalancerClone extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosLoadBalancerClone = new slb_generated_1.RosLoadBalancerClone(this, id, {
            loadBalancerName: props.loadBalancerName,
            sourceLoadBalancerId: props.sourceLoadBalancerId,
            resourceGroupId: props.resourceGroupId,
            tagsPolicy: props.tagsPolicy ? props.tagsPolicy : 'empty',
            vSwitchId: props.vSwitchId,
            backendServers: props.backendServers,
            tags: props.tags,
            backendServersPolicy: props.backendServersPolicy ? props.backendServersPolicy : 'clone',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancerClone;
        this.attrLoadBalancerId = rosLoadBalancerClone.attrLoadBalancerId;
    }
}
exports.LoadBalancerClone = LoadBalancerClone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGJhbGFuY2VyY2xvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FkYmFsYW5jZXJjbG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXVEO0FBRXRCLDBHQUZ4QixvQ0FBb0IsT0FFNkI7QUFpRDFEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVkvQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTZCLEVBQUUsbUNBQTJDLElBQUk7UUFDeEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLG9CQUFvQixHQUFHLElBQUksb0NBQW9CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3RCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPO1lBQ3pELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxPQUFPO1NBQzFGLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO0lBQ3RFLENBQUM7Q0FDSjtBQW5DRCw4Q0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NMb2FkQmFsYW5jZXJDbG9uZSB9IGZyb20gJy4vc2xiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0xvYWRCYWxhbmNlckNsb25lIGFzIExvYWRCYWxhbmNlckNsb25lUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMQjo6TG9hZEJhbGFuY2VyQ2xvbmVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZEJhbGFuY2VyQ2xvbmVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzb3VyY2VMb2FkQmFsYW5jZXJJZDogU291cmNlIGxvYWQgYmFsYW5jZXIgaWQgdG8gY2xvbmVcbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VMb2FkQmFsYW5jZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja2VuZFNlcnZlcnM6IFRoZSBsaXN0IG9mIEVDUyBpbnN0YW5jZSwgd2hpY2ggd2lsbCBhdHRhY2hlZCB0byBsb2FkIGJhbGFuY2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJzPzogQXJyYXk8Um9zTG9hZEJhbGFuY2VyQ2xvbmUuQmFja2VuZFNlcnZlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiYWNrZW5kU2VydmVyc1BvbGljeTogU29sdXRpb24gZm9yIGhhbmRsZSB0aGUgYmFja2VuZCBzZXJ2ZXIgYW5kIHdlaWdodHMuIElmIHNlbGVjdCAnY2xvbmUnLCBpdCB3aWxsIGNsb25lIGZyb20gc291cmNlIGxvYWQgYmFsYW5jZXIuIElmIHNlbGVjdCAnZW1wdHknIGl0IHdpbGwgbm90IGF0dGFjaCBhbnkgYmFja2VuZCBzZXJ2ZXJzLiBJZiBzZWxlY3QgJ2FwcGVuZCcgaXQgd2lsbCBhcHBlbmQgdGhlIG5ldyBiYWNrZW5kIHNlcnZlciBsaXN0IHRvIHNvdXJjZSBiYWNrZWQgc2VydmVycy4gSWYgc2VsZWN0ICdyZXBsYWNlJyBpdCB3aWxsIG9ubHkgYXR0YWNoIG5ldyBiYWNrZW5kIHNlcnZlciBsaXN0LiBEZWZhdWx0IGlzICdjbG9uZScuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFja2VuZFNlcnZlcnNQb2xpY3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJOYW1lOiBOYW1lIG9mIGNyZWF0ZWQgbG9hZCBiYWxhbmNlci4gTGVuZ3RoIGlzIGxpbWl0ZWQgdG8gMS04MCBjaGFyYWN0ZXJzLCBhbGxvd2VkIHRvIGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgJy0sIC8sIF8sLicgV2hlbiBub3Qgc3BlY2lmaWVkLCBhIGRlZmF1bHQgbmFtZSB3aWxsIGJlIGFzc2lnbmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlck5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIHNsYi4gTWF4IHN1cHBvcnQgNSB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIHNsYi4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NMb2FkQmFsYW5jZXJDbG9uZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3NQb2xpY3k6IFNvbHV0aW9uIGZvciBoYW5kbGUgdGhlIHRhZ3MuIElmIHNlbGVjdCAnY2xvbmUnLCBpdCB3aWxsIGNsb25lIGZyb20gc291cmNlIGxvYWQgYmFsYW5jZXIuIElmIHNlbGVjdCAnZW1wdHknIGl0IHdpbGwgbm90IGNvcHB5IHRhZ3MuIElmIHNlbGVjdCAnYXBwZW5kJyBpdCB3aWxsIGFwcGVuZCB0aGUgbmV3IHRhZ3MuIElmIHNlbGVjdCAncmVwbGFjZScgaXQgd2lsbCBhZGQgbmV3IHRhZ3MuXG4gICAgICogRGVmYXVsdCBpcyAnZW1wdHknLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3NQb2xpY3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSBuZXcgVlN3aXRjaCBJRCB0byBjcmVhdGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS4gRm9yIFZQQyBuZXR3b3JrIG9ubHkgYW5kIHRoZSBWU3dpdGNoIHNob3VsZCBiZWxvbmcgdG8gdGhlIFZQQyB3aGljaCBzb3VyY2UgbG9hZCBiYWxhbmNlciBpcyBsb2NhdGVkLldoZW4gbm90IHNwZWNpZmllZCwgc291cmNlIGxvYWQgYmFsYW5jZXIgVlN3aXRjaCBJRCB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlckNsb25lYFxuICovXG5leHBvcnQgY2xhc3MgTG9hZEJhbGFuY2VyQ2xvbmUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExvYWRCYWxhbmNlcklkOiBUaGUgaWQgb2YgbG9hZCBiYWxhbmNlIGdlbmVyYXRlZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9hZEJhbGFuY2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlckNsb25lYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBMb2FkQmFsYW5jZXJDbG9uZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0xvYWRCYWxhbmNlckNsb25lID0gbmV3IFJvc0xvYWRCYWxhbmNlckNsb25lKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgbG9hZEJhbGFuY2VyTmFtZTogcHJvcHMubG9hZEJhbGFuY2VyTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZUxvYWRCYWxhbmNlcklkOiBwcm9wcy5zb3VyY2VMb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgdGFnc1BvbGljeTogcHJvcHMudGFnc1BvbGljeSA/IHByb3BzLnRhZ3NQb2xpY3kgOiAnZW1wdHknLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBiYWNrZW5kU2VydmVyczogcHJvcHMuYmFja2VuZFNlcnZlcnMsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgYmFja2VuZFNlcnZlcnNQb2xpY3k6IHByb3BzLmJhY2tlbmRTZXJ2ZXJzUG9saWN5ID8gcHJvcHMuYmFja2VuZFNlcnZlcnNQb2xpY3kgOiAnY2xvbmUnLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0xvYWRCYWxhbmNlckNsb25lO1xuICAgICAgICB0aGlzLmF0dHJMb2FkQmFsYW5jZXJJZCA9IHJvc0xvYWRCYWxhbmNlckNsb25lLmF0dHJMb2FkQmFsYW5jZXJJZDtcbiAgICB9XG59XG4iXX0=