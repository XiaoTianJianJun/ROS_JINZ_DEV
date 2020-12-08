"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedEdgeKubernetesCluster = exports.ManagedEdgeKubernetesClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "ManagedEdgeKubernetesClusterProperty", { enumerable: true, get: function () { return cs_generated_1.RosManagedEdgeKubernetesCluster; } });
/**
 * A ROS resource type:  `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
class ManagedEdgeKubernetesCluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosManagedEdgeKubernetesCluster = new cs_generated_1.RosManagedEdgeKubernetesCluster(this, id, {
            endpointPublicAccess: props.endpointPublicAccess ? props.endpointPublicAccess : true,
            containerCidr: props.containerCidr ? props.containerCidr : '172.16.0.0/16',
            keyPair: props.keyPair,
            vSwitchIds: props.vSwitchIds,
            timeoutMins: props.timeoutMins ? props.timeoutMins : 60,
            workerSystemDiskSize: props.workerSystemDiskSize ? props.workerSystemDiskSize : 120,
            workerSystemDiskCategory: props.workerSystemDiskCategory ? props.workerSystemDiskCategory : 'cloud_efficiency',
            profile: props.profile ? props.profile : 'Edge',
            name: props.name,
            workerDataDisk: props.workerDataDisk ? props.workerDataDisk : false,
            vpcId: props.vpcId,
            workerDataDiskSize: props.workerDataDiskSize,
            numOfNodes: props.numOfNodes,
            cloudMonitorFlags: props.cloudMonitorFlags ? props.cloudMonitorFlags : false,
            serviceCidr: props.serviceCidr ? props.serviceCidr : '172.19.0.0/20',
            workerDataDiskCategory: props.workerDataDiskCategory,
            snatEntry: props.snatEntry ? props.snatEntry : true,
            tags: ros.tagFactory(props.tags),
            proxyMode: props.proxyMode ? props.proxyMode : 'iptables',
            disableRollback: props.disableRollback ? props.disableRollback : true,
            loginPassword: props.loginPassword,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedEdgeKubernetesCluster;
        this.attrClusterId = rosManagedEdgeKubernetesCluster.attrClusterId;
        this.attrTaskId = rosManagedEdgeKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosManagedEdgeKubernetesCluster.attrWorkerRamRoleName;
    }
}
exports.ManagedEdgeKubernetesCluster = ManagedEdgeKubernetesCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlZGVkZ2VrdWJlcm5ldGVzY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hbmFnZWRlZGdla3ViZXJuZXRlc2NsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUFpRTtBQUVyQixxSEFGbkMsOENBQStCLE9BRXdDO0FBb0loRjs7R0FFRztBQUNILE1BQWEsNEJBQTZCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFzQjFEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0MsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sK0JBQStCLEdBQUcsSUFBSSw4Q0FBK0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25GLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3BGLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQzFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkQsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDbkYsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtZQUM5RyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUMvQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDbkUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzVFLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQ3BFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNoQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUN6RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyRSxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDckMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRywrQkFBK0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLCtCQUErQixDQUFDLGFBQWEsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLCtCQUErQixDQUFDLFVBQVUsQ0FBQztRQUM3RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsK0JBQStCLENBQUMscUJBQXFCLENBQUM7SUFDdkYsQ0FBQztDQUNKO0FBNURELG9FQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIgfSBmcm9tICcuL2NzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIgYXMgTWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDUzo6TWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjbHVzdGVyLiBUaGUgY2x1c3RlciBuYW1lIGNhbiB1c2UgdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVycywgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBudW1iZXJzLCBhbmQgZGFzaGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBudW1PZk5vZGVzOiBOdW1iZXIgb2Ygd29ya2VyIG5vZGVzLiBUaGUgcmFuZ2UgaXMgWzAsMzAwXVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG51bU9mTm9kZXM6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbG91ZE1vbml0b3JGbGFnczogV2hldGhlciB0byBpbnN0YWxsIHRoZSBjbG91ZCBtb25pdG9yaW5nIHBsdWdpbjpcbiAgICAgKiB0cnVlOiBpbmRpY2F0ZXMgaW5zdGFsbGF0aW9uXG4gICAgICogZmFsc2U6IERvIG5vdCBpbnN0YWxsXG4gICAgICogRGVmYXVsdCB0byBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsb3VkTW9uaXRvckZsYWdzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWluZXJDaWRyOiBUaGUgY29udGFpbmVyIG5ldHdvcmsgc2VnbWVudCBjYW5ub3QgY29uZmxpY3Qgd2l0aCB0aGUgVlBDIG5ldHdvcmsgc2VnbWVudC4gV2hlbiB0aGUgc3lzdGVtIGlzIHNlbGVjdGVkIHRvIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGEgVlBDLCB0aGUgbmV0d29yayBzZWdtZW50IDE3Mi4xNi4wLjAvMTYgaXMgdXNlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhaW5lckNpZHI/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlzYWJsZVJvbGxiYWNrOiBXaGV0aGVyIHRoZSBmYWlsdXJlIHdhcyByb2xsZWQgYmFjazpcbiAgICAgKiB0cnVlOiBpbmRpY2F0ZXMgdGhhdCBpdCBmYWlscyB0byByb2xsIGJhY2tcbiAgICAgKiBmYWxzZTogcm9sbGJhY2sgZmFpbGVkXG4gICAgICogVGhlIGRlZmF1bHQgaXMgdHJ1ZS4gSWYgcm9sbGJhY2sgZmFpbHMsIHJlc291cmNlcyBwcm9kdWNlZCBkdXJpbmcgdGhlIGNyZWF0aW9uIHByb2Nlc3Mgd2lsbCBiZSByZWxlYXNlZC4gRmFsc2UgaXMgbm90IHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2FibGVSb2xsYmFjaz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5kcG9pbnRQdWJsaWNBY2Nlc3M6IFdoZXRoZXIgdG8gZW5hYmxlIHRoZSBwdWJsaWMgbmV0d29yayBBUEkgU2VydmVyOlxuICAgICAqIHRydWU6IHdoaWNoIG1lYW5zIHRoYXQgdGhlIHB1YmxpYyBuZXR3b3JrIEFQSSBTZXJ2ZXIgaXMgb3Blbi5cbiAgICAgKiBmYWxzZTogSWYgc2V0IHRvIGZhbHNlLCB0aGUgQVBJIHNlcnZlciBvbiB0aGUgcHVibGljIG5ldHdvcmsgd2lsbCBub3QgYmUgY3JlYXRlZCwgb25seSB0aGUgQVBJIHNlcnZlciBvbiB0aGUgcHJpdmF0ZSBuZXR3b3JrIHdpbGwgYmUgY3JlYXRlZC5EZWZhdWx0IHRvIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRQdWJsaWNBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGtleVBhaXI6IEtleSBwYWlyIG5hbWUuIFNwZWNpZnkgb25lIG9mIEtleVBhaXIgb3IgTG9naW5QYXNzd29yZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBrZXlQYWlyPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2luUGFzc3dvcmQ6IFNTSCBsb2dpbiBwYXNzd29yZC4gUGFzc3dvcmQgcnVsZXMgYXJlIDgtMzAgY2hhcmFjdGVycyBhbmQgY29udGFpbiB0aHJlZSBpdGVtcyAodXBwZXIgYW5kIGxvd2VyIGNhc2UgbGV0dGVycywgbnVtYmVycywgYW5kIHNwZWNpYWwgc3ltYm9scykuIFNwZWNpZnkgb25lIG9mIEtleVBhaXIgb3IgTG9naW5QYXNzd29yZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpblBhc3N3b3JkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2ZpbGU6IEVkZ2UgY2x1c3RlciBJRC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgRWRnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9maWxlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3h5TW9kZToga3ViZS1wcm94eSBwcm94eSBtb2RlLCBzdXBwb3J0cyBib3RoIGlwdGFibGVzIGFuZCBpcHZzIG1vZGVzLiBUaGUgZGVmYXVsdCBpcyBpcHRhYmxlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm94eU1vZGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZUNpZHI6IFRoZSBzZXJ2aWNlIG5ldHdvcmsgc2VnbWVudCBjYW5ub3QgY29uZmxpY3Qgd2l0aCB0aGUgVlBDIG5ldHdvcmsgc2VnbWVudCBhbmQgdGhlIGNvbnRhaW5lciBuZXR3b3JrIHNlZ21lbnQuIFdoZW4gdGhlIHN5c3RlbSBpcyBzZWxlY3RlZCB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBhIFZQQywgdGhlIG5ldHdvcmsgc2VnbWVudCAxNzIuMTkuMC4wLzIwIGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlQ2lkcj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzbmF0RW50cnk6IFdoZXRoZXIgdG8gY29uZmlndXJlIFNOQVQgZm9yIHRoZSBuZXR3b3JrLlxuICAgICAqIFdoZW4gYSBWUEMgY2FuIGFjY2VzcyB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQsIHNldCBpdCB0byBmYWxzZS5cbiAgICAgKiBXaGVuIGFuIGV4aXN0aW5nIFZQQyBjYW5ub3QgYWNjZXNzIHRoZSBwdWJsaWMgbmV0d29yayBlbnZpcm9ubWVudDpcbiAgICAgKiBXaGVuIHNldCB0byBUcnVlLCBTTkFUIGlzIGNvbmZpZ3VyZWQgYW5kIHRoZSBwdWJsaWMgbmV0d29yayBlbnZpcm9ubWVudCBjYW4gYmUgYWNjZXNzZWQgYXQgdGhpcyB0aW1lLlxuICAgICAqIElmIHNldCB0byBmYWxzZSwgaXQgbWVhbnMgdGhhdCBTTkFUIGlzIG5vdCBjb25maWd1cmVkIGFuZCB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQgY2Fubm90IGJlIGFjY2Vzc2VkIGF0IHRoaXMgdGltZS5cbiAgICAgKiBEZWZhdWx0IHRvIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc25hdEVudHJ5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWcgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogYW55IH1bXTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0TWluczogQ2x1c3RlciByZXNvdXJjZSBzdGFjayBjcmVhdGlvbiB0aW1lb3V0LCBpbiBtaW51dGVzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA2MC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0TWlucz86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVlBDIElELiBJZiBub3Qgc2V0LCB0aGUgc3lzdGVtIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgYSBWUEMsIGFuZCB0aGUgVlBDIG5ldHdvcmsgc2VnbWVudCBjcmVhdGVkIGJ5IHRoZSBzeXN0ZW0gaXMgMTkyLjE2OC4wLjAvMTYuIFxuICAgICAqIFZwY0lkIGFuZCBWU3dpdGNoSWQgY2FuIG9ubHkgYmUgZW1wdHkgYXQgdGhlIHNhbWUgdGltZSBvciBzZXQgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdlN3aXRjaElkczogVGhlIHZpcnR1YWwgc3dpdGNoIElEIG9mIHRoZSB3b3JrZXIgbm9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWRzPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3JrZXJEYXRhRGlzazogV2hldGhlciB0byBtb3VudCB0aGUgZGF0YSBkaXNrLiBUaGUgb3B0aW9ucyBhcmUgYXMgZm9sbG93czpcbiAgICAgKiB0cnVlOiBpbmRpY2F0ZXMgdGhhdCB0aGUgd29ya2VyIG5vZGUgbW91bnRzIGRhdGEgZGlza3MuXG4gICAgICogZmFsc2U6IGluZGljYXRlcyB0aGF0IHRoZSB3b3JrZXIgbm9kZSBkb2VzIG5vdCBtb3VudCBkYXRhIGRpc2tzLlxuICAgICAqIERlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyRGF0YURpc2s/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtlckRhdGFEaXNrQ2F0ZWdvcnk6IERhdGEgZGlzayB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckRhdGFEaXNrQ2F0ZWdvcnk/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya2VyRGF0YURpc2tTaXplOiBEYXRhIGRpc2sgc2l6ZSBpbiBHaUIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyRGF0YURpc2tTaXplPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtlclN5c3RlbURpc2tDYXRlZ29yeTogV29ya2VyIG5vZGUgc3lzdGVtIGRpc2sgdHlwZS4gXG4gICAgICogRGVmYXVsdCB0byBjbG91ZF9lZmZpY2llbmN5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlclN5c3RlbURpc2tDYXRlZ29yeT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3JrZXJTeXN0ZW1EaXNrU2l6ZTogV29ya2VyIGRpc2sgc3lzdGVtIGRpc2sgc2l6ZSwgdGhlIHVuaXQgaXMgR2lCLlxuICAgICAqIERlZmF1bHQgdG8gMTIwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlclN5c3RlbURpc2tTaXplPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpDUzo6TWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgaW5zdGFuY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGFza0lkOiBUYXNrIElELiBBdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGJ5IHRoZSBzeXN0ZW0sIHRoZSB1c2VyIHF1ZXJpZXMgdGhlIHRhc2sgc3RhdHVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFza0lkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFdvcmtlclJhbVJvbGVOYW1lOiBXb3JrZXIgcmFtIHJvbGUgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cldvcmtlclJhbVJvbGVOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q1M6Ok1hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE1hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyID0gbmV3IFJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBlbmRwb2ludFB1YmxpY0FjY2VzczogcHJvcHMuZW5kcG9pbnRQdWJsaWNBY2Nlc3MgPyBwcm9wcy5lbmRwb2ludFB1YmxpY0FjY2VzcyA6IHRydWUsXG4gICAgICAgICAgICBjb250YWluZXJDaWRyOiBwcm9wcy5jb250YWluZXJDaWRyID8gcHJvcHMuY29udGFpbmVyQ2lkciA6ICcxNzIuMTYuMC4wLzE2JyxcbiAgICAgICAgICAgIGtleVBhaXI6IHByb3BzLmtleVBhaXIsXG4gICAgICAgICAgICB2U3dpdGNoSWRzOiBwcm9wcy52U3dpdGNoSWRzLFxuICAgICAgICAgICAgdGltZW91dE1pbnM6IHByb3BzLnRpbWVvdXRNaW5zID8gcHJvcHMudGltZW91dE1pbnMgOiA2MCxcbiAgICAgICAgICAgIHdvcmtlclN5c3RlbURpc2tTaXplOiBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrU2l6ZSA/IHByb3BzLndvcmtlclN5c3RlbURpc2tTaXplIDogMTIwLFxuICAgICAgICAgICAgd29ya2VyU3lzdGVtRGlza0NhdGVnb3J5OiBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnkgPyBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnkgOiAnY2xvdWRfZWZmaWNpZW5jeScsXG4gICAgICAgICAgICBwcm9maWxlOiBwcm9wcy5wcm9maWxlID8gcHJvcHMucHJvZmlsZSA6ICdFZGdlJyxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICB3b3JrZXJEYXRhRGlzazogcHJvcHMud29ya2VyRGF0YURpc2sgPyBwcm9wcy53b3JrZXJEYXRhRGlzayA6IGZhbHNlLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgd29ya2VyRGF0YURpc2tTaXplOiBwcm9wcy53b3JrZXJEYXRhRGlza1NpemUsXG4gICAgICAgICAgICBudW1PZk5vZGVzOiBwcm9wcy5udW1PZk5vZGVzLFxuICAgICAgICAgICAgY2xvdWRNb25pdG9yRmxhZ3M6IHByb3BzLmNsb3VkTW9uaXRvckZsYWdzID8gcHJvcHMuY2xvdWRNb25pdG9yRmxhZ3MgOiBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZpY2VDaWRyOiBwcm9wcy5zZXJ2aWNlQ2lkciA/IHByb3BzLnNlcnZpY2VDaWRyIDogJzE3Mi4xOS4wLjAvMjAnLFxuICAgICAgICAgICAgd29ya2VyRGF0YURpc2tDYXRlZ29yeTogcHJvcHMud29ya2VyRGF0YURpc2tDYXRlZ29yeSxcbiAgICAgICAgICAgIHNuYXRFbnRyeTogcHJvcHMuc25hdEVudHJ5ID8gcHJvcHMuc25hdEVudHJ5IDogdHJ1ZSxcbiAgICAgICAgICAgIHRhZ3M6IHJvcy50YWdGYWN0b3J5KHByb3BzLnRhZ3MpLFxuICAgICAgICAgICAgcHJveHlNb2RlOiBwcm9wcy5wcm94eU1vZGUgPyBwcm9wcy5wcm94eU1vZGUgOiAnaXB0YWJsZXMnLFxuICAgICAgICAgICAgZGlzYWJsZVJvbGxiYWNrOiBwcm9wcy5kaXNhYmxlUm9sbGJhY2sgPyBwcm9wcy5kaXNhYmxlUm9sbGJhY2sgOiB0cnVlLFxuICAgICAgICAgICAgbG9naW5QYXNzd29yZDogcHJvcHMubG9naW5QYXNzd29yZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0clRhc2tJZCA9IHJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIuYXR0clRhc2tJZDtcbiAgICAgICAgdGhpcy5hdHRyV29ya2VyUmFtUm9sZU5hbWUgPSByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyLmF0dHJXb3JrZXJSYW1Sb2xlTmFtZTtcbiAgICB9XG59XG4iXX0=