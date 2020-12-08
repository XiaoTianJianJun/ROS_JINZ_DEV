"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = exports.ListenerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "ListenerProperty", { enumerable: true, get: function () { return slb_generated_1.RosListener; } });
/**
 * A ROS resource type:  `ALIYUN::SLB::Listener`
 */
class Listener extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLB::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosListener = new slb_generated_1.RosListener(this, id, {
            requestTimeout: props.requestTimeout,
            listenerPort: props.listenerPort,
            vServerGroupId: props.vServerGroupId,
            caCertificateId: props.caCertificateId,
            scheduler: props.scheduler ? props.scheduler : 'wrr',
            aclId: props.aclId,
            healthCheck: props.healthCheck,
            idleTimeout: props.idleTimeout,
            loadBalancerId: props.loadBalancerId,
            backendServerPort: props.backendServerPort,
            persistence: props.persistence,
            aclStatus: props.aclStatus ? props.aclStatus : 'off',
            bandwidth: props.bandwidth,
            masterSlaveServerGroupId: props.masterSlaveServerGroupId,
            serverCertificateId: props.serverCertificateId,
            httpConfig: props.httpConfig,
            aclType: props.aclType,
            protocol: props.protocol,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerPortsAndProtocol = rosListener.attrListenerPortsAndProtocol;
        this.attrLoadBalancerId = rosListener.attrLoadBalancerId;
    }
}
exports.Listener = Listener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBNEd4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDcEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3BELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQix3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1lBQ3hELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLDRCQUE0QixHQUFHLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQztRQUM3RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0lBQzdELENBQUM7Q0FDSjtBQW5ERCw0QkFtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NMaXN0ZW5lciB9IGZyb20gJy4vc2xiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0xpc3RlbmVyIGFzIExpc3RlbmVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMQjo6TGlzdGVuZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZFNlcnZlclBvcnQ6IEJhY2tlbmQgc2VydmVyIGNhbiBsaXN0ZW4gb24gcG9ydHMgZnJvbSAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJQb3J0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoOiBUaGUgYmFuZHdpZHRoIG9mIG5ldHdvcmssIHVuaXQgaW4gTWJwcyhNaWxsaW9uIGJpdHMgcGVyIHNlY29uZCkuIElmIHRoZSBzcGVjaWZpZWQgbG9hZCBiYWxhbmNlciB3aXRoIFwiTE9BRF9CQUxBTkNFX0lEXCIgaXMgY2hhcmdlZCBieSBcInBheWJ5YmFuZHdpZHRoXCIgYW5kIGlzIGNyZWF0ZWQgaW4gY2xhc3NpYyBuZXR3b3JrLCBlYWNoIExpc3RlbmVyJ3MgYmFuZHdpZHRoIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIHRoZSBzdW0gb2YgYWxsIG9mIGl0cyBMaXN0ZW5lcnMnIGJhbmR3aWR0aCBjYW4ndCBiZSBncmVhdGVyIHRoYW4gdGhlIGJhbmR3aWR0aCBvZiB0aGUgbG9hZCBiYWxhbmNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsaXN0ZW5lclBvcnQ6IFBvcnQgZm9yIGZyb250IGxpc3RlbmVyLiBSYW5nZSBmcm9tIDEgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGlzdGVuZXJQb3J0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9hZEJhbGFuY2VySWQ6IFRoZSBpZCBvZiBsb2FkIGJhbGFuY2VyIHRvIGNyZWF0ZSBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2FkQmFsYW5jZXJJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3RvY29sOiBUaGUgbG9hZCBiYWxhbmNlciB0cmFuc3BvcnQgcHJvdG9jb2wgdG8gdXNlIGZvciByb3V0aW5nOiBodHRwLCBodHRwcywgdGNwLCBvciB1ZHAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvdG9jb2w6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2xJZDogVGhlIElEIG9mIHRoZSBhY2Nlc3MgY29udHJvbCBsaXN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgbGlzdGVuZXIgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBJZiB0aGUgdmFsdWUgb2YgdGhlIEFjbFN0YXR1cyBwYXJhbWV0ZXIgaXMgb24sIHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjbElkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjbFN0YXR1czogSW5kaWNhdGVzIHdoZXRoZXIgdG8gZW5hYmxlIGFjY2VzcyBjb250cm9sLlxuICAgICAqIFZhbGlkIHZhbHVlczogb24gfCBvZmYuIERlZmF1bHQgdmFsdWU6IG9mZlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjbFN0YXR1cz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2xUeXBlOiBUaGUgYWNjZXNzIGNvbnRyb2wgdHlwZTpcbiAgICAgKiAqIHdoaXRlOiBJbmRpY2F0ZXMgYSB3aGl0ZWxpc3QuIE9ubHkgcmVxdWVzdHMgZnJvbSBJUCBhZGRyZXNzZXMgb3IgQ0lEUiBibG9ja3MgaW4gdGhlIHNlbGVjdGVkIGFjY2VzcyBjb250cm9sIGxpc3RzIGFyZSBmb3J3YXJkZWQuIFRoaXMgYXBwbGllcyB0byBzY2VuYXJpb3MgaW4gd2hpY2ggYW4gYXBwbGljYXRpb24gb25seSBhbGxvd3MgYWNjZXNzIGZyb20gc3BlY2lmaWMgSVAgYWRkcmVzc2VzLlxuICAgICAqIEVuYWJsaW5nIGEgd2hpdGVsaXN0IHBvc2VzIHNvbWUgcmlza3MgdG8geW91ciBzZXJ2aWNlcy5cbiAgICAgKiBBZnRlciBhIHdoaXRlbGlzdCBpcyBlbmFibGVkLCBvbmx5IHRoZSBJUCBhZGRyZXNzZXMgaW4gdGhlIGxpc3QgY2FuIGFjY2VzcyB0aGUgbGlzdGVuZXIuXG4gICAgICogSWYgeW91IGVuYWJsZSBhIHdoaXRlbGlzdCB3aXRob3V0IGFkZGluZyBhbnkgSVAgYWRkcmVzc2VzIGluIHRoZSBsaXN0LCBubyByZXF1ZXN0cyBhcmUgZm9yd2FyZGVkLlxuICAgICAqICogYmxhY2s6IEluZGljYXRlcyBhIGJsYWNrbGlzdC4gUmVxdWVzdHMgZnJvbSBJUCBhZGRyZXNzZXMgb3IgQ0lEUiBibG9ja3MgaW4gdGhlIHNlbGVjdGVkIGFjY2VzcyBjb250cm9sIGxpc3RzIGFyZSBub3QgZm9yd2FyZGVkICh0aGF0IGlzLCB0aGV5IGFyZSBibG9ja2VkKS4gVGhpcyBhcHBsaWVzIHRvIHNjZW5hcmlvcyBpbiB3aGljaCBhbiBhcHBsaWNhdGlvbiBvbmx5IGRlbmllcyBhY2Nlc3MgZnJvbSBzcGVjaWZpYyBJUCBhZGRyZXNzZXMuXG4gICAgICogSWYgeW91IGVuYWJsZSBhIGJsYWNrbGlzdCB3aXRob3V0IGFkZGluZyBhbnkgSVAgYWRkcmVzc2VzIGluIHRoZSBsaXN0LCBhbGwgcmVxdWVzdHMgYXJlIGZvcndhcmRlZC5cbiAgICAgKiBcbiAgICAgKiBJZiB0aGUgdmFsdWUgb2YgdGhlIEFjbFN0YXR1cyBwYXJhbWV0ZXIgaXMgb24sIHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjbFR5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2FDZXJ0aWZpY2F0ZUlkOiBDQSBzZXJ2ZXIgY2VydGlmaWNhdGUgaWQsIGZvciBodHRwcyBsaXN0ZW5lciBvbmx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNhQ2VydGlmaWNhdGVJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoZWFsdGhDaGVjazogVGhlIHByb3BlcnRpZXMgb2YgaGVhbHRoIGNoZWNraW5nIHNldHRpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2s/OiBSb3NMaXN0ZW5lci5IZWFsdGhDaGVja1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGh0dHBDb25maWc6IENvbmZpZyBmb3IgaHR0cCBwcm90b2NvbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBodHRwQ29uZmlnPzogUm9zTGlzdGVuZXIuSHR0cENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlkbGVUaW1lb3V0OiBTcGVjaWZ5IHRoZSBpZGxlIGNvbm5lY3Rpb24gdGltZW91dCBpbiBzZWNvbmRzLiBWYWxpZCB2YWx1ZTogMS02MCBJZiBubyByZXF1ZXN0IGlzIHJlY2VpdmVkIGR1cmluZyB0aGUgc3BlY2lmaWVkIHRpbWVvdXQgcGVyaW9kLCBTZXJ2ZXIgTG9hZCBCYWxhbmNlciB3aWxsIHRlbXBvcmFyaWx5IHRlcm1pbmF0ZSB0aGUgY29ubmVjdGlvbiBhbmQgcmVzdGFydCB0aGUgY29ubmVjdGlvbiB3aGVuIHRoZSBuZXh0IHJlcXVlc3QgY29tZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWRsZVRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkOiBUaGUgaWQgb2YgdGhlIE1hc3RlclNsYXZlU2VydmVyR3JvdXAgd2hpY2ggdXNlIGluIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlclNsYXZlU2VydmVyR3JvdXBJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJzaXN0ZW5jZTogVGhlIHByb3BlcnRpZXMgb2YgcGVyc2lzdGVuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2U/OiBSb3NMaXN0ZW5lci5QZXJzaXN0ZW5jZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcXVlc3RUaW1lb3V0OiBTcGVjaWZ5IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gc2Vjb25kcy4gVmFsaWQgdmFsdWU6IDEtMTgwIElmIG5vIHJlc3BvbnNlIGlzIHJlY2VpdmVkIGZyb20gdGhlIGJhY2tlbmQgc2VydmVyIGR1cmluZyB0aGUgc3BlY2lmaWVkIHRpbWVvdXQgcGVyaW9kLCBTZXJ2ZXIgTG9hZCBCYWxhbmNlciB3aWxsIHN0b3Agd2FpdGluZyBhbmQgc2VuZCBhbiBIVFRQIDUwNCBlcnJvciB0byB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcXVlc3RUaW1lb3V0PzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNjaGVkdWxlcjogVGhlIHNjaGVkdWxlciBhbGdvcml0aG0uIFN1cHBvcnQgJ3dycicgb3IgJ3dsYycgb25seSwgZGVmYXVsdCBpcyAnd3JyJ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjaGVkdWxlcj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJDZXJ0aWZpY2F0ZUlkOiBTZXJ2ZXIgY2VydGlmaWNhdGUgaWQsIGZvciBodHRwcyBsaXN0ZW5lciBvbmx5LCB0aGlzIHByb3BlcnRpZXMgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmVyQ2VydGlmaWNhdGVJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U2VydmVyR3JvdXBJZDogVGhlIGlkIG9mIHRoZSBWU2VydmVyR3JvdXAgd2hpY2ggdXNlIGluIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTZXJ2ZXJHcm91cElkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpTTEI6Okxpc3RlbmVyYFxuICovXG5leHBvcnQgY2xhc3MgTGlzdGVuZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMaXN0ZW5lclBvcnRzQW5kUHJvdG9jb2w6IFRoZSBjb2xsZWN0aW9uIG9mIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGlzdGVuZXJQb3J0c0FuZFByb3RvY29sOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExvYWRCYWxhbmNlcklkOiBUaGUgaWQgb2YgbG9hZCBiYWxhbmNlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9hZEJhbGFuY2VySWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTTEI6Okxpc3RlbmVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBMaXN0ZW5lclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0xpc3RlbmVyID0gbmV3IFJvc0xpc3RlbmVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcmVxdWVzdFRpbWVvdXQ6IHByb3BzLnJlcXVlc3RUaW1lb3V0LFxuICAgICAgICAgICAgbGlzdGVuZXJQb3J0OiBwcm9wcy5saXN0ZW5lclBvcnQsXG4gICAgICAgICAgICB2U2VydmVyR3JvdXBJZDogcHJvcHMudlNlcnZlckdyb3VwSWQsXG4gICAgICAgICAgICBjYUNlcnRpZmljYXRlSWQ6IHByb3BzLmNhQ2VydGlmaWNhdGVJZCxcbiAgICAgICAgICAgIHNjaGVkdWxlcjogcHJvcHMuc2NoZWR1bGVyID8gcHJvcHMuc2NoZWR1bGVyIDogJ3dycicsXG4gICAgICAgICAgICBhY2xJZDogcHJvcHMuYWNsSWQsXG4gICAgICAgICAgICBoZWFsdGhDaGVjazogcHJvcHMuaGVhbHRoQ2hlY2ssXG4gICAgICAgICAgICBpZGxlVGltZW91dDogcHJvcHMuaWRsZVRpbWVvdXQsXG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJJZDogcHJvcHMubG9hZEJhbGFuY2VySWQsXG4gICAgICAgICAgICBiYWNrZW5kU2VydmVyUG9ydDogcHJvcHMuYmFja2VuZFNlcnZlclBvcnQsXG4gICAgICAgICAgICBwZXJzaXN0ZW5jZTogcHJvcHMucGVyc2lzdGVuY2UsXG4gICAgICAgICAgICBhY2xTdGF0dXM6IHByb3BzLmFjbFN0YXR1cyA/IHByb3BzLmFjbFN0YXR1cyA6ICdvZmYnLFxuICAgICAgICAgICAgYmFuZHdpZHRoOiBwcm9wcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBtYXN0ZXJTbGF2ZVNlcnZlckdyb3VwSWQ6IHByb3BzLm1hc3RlclNsYXZlU2VydmVyR3JvdXBJZCxcbiAgICAgICAgICAgIHNlcnZlckNlcnRpZmljYXRlSWQ6IHByb3BzLnNlcnZlckNlcnRpZmljYXRlSWQsXG4gICAgICAgICAgICBodHRwQ29uZmlnOiBwcm9wcy5odHRwQ29uZmlnLFxuICAgICAgICAgICAgYWNsVHlwZTogcHJvcHMuYWNsVHlwZSxcbiAgICAgICAgICAgIHByb3RvY29sOiBwcm9wcy5wcm90b2NvbCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5hdHRyTGlzdGVuZXJQb3J0c0FuZFByb3RvY29sID0gcm9zTGlzdGVuZXIuYXR0ckxpc3RlbmVyUG9ydHNBbmRQcm90b2NvbDtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VySWQgPSByb3NMaXN0ZW5lci5hdHRyTG9hZEJhbGFuY2VySWQ7XG4gICAgfVxufVxuIl19