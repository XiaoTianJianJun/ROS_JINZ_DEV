"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KubernetesCluster = exports.KubernetesClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "KubernetesClusterProperty", { enumerable: true, get: function () { return cs_generated_1.RosKubernetesCluster; } });
/**
 * A ROS resource type:  `ALIYUN::CS::KubernetesCluster`
 */
class KubernetesCluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::CS::KubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosKubernetesCluster = new cs_generated_1.RosKubernetesCluster(this, id, {
            endpointPublicAccess: props.endpointPublicAccess ? props.endpointPublicAccess : false,
            workerPeriod: props.workerPeriod ? props.workerPeriod : 1,
            workerPeriodUnit: props.workerPeriodUnit ? props.workerPeriodUnit : 'Month',
            masterSystemDiskCategory: props.masterSystemDiskCategory ? props.masterSystemDiskCategory : 'cloud_ssd',
            addons: props.addons,
            masterSystemDiskSize: props.masterSystemDiskSize ? props.masterSystemDiskSize : 120,
            workerSystemDiskCategory: props.workerSystemDiskCategory ? props.workerSystemDiskCategory : 'cloud_efficiency',
            nodePortRange: props.nodePortRange ? props.nodePortRange : '30000-65535',
            masterCount: props.masterCount ? props.masterCount : 3,
            workerSystemDiskSize: props.workerSystemDiskSize ? props.workerSystemDiskSize : 120,
            sshFlags: props.sshFlags,
            masterVSwitchIds: props.masterVSwitchIds,
            name: props.name,
            taint: props.taint,
            masterDataDisks: props.masterDataDisks,
            cloudMonitorFlags: props.cloudMonitorFlags ? props.cloudMonitorFlags : false,
            serviceCidr: props.serviceCidr ? props.serviceCidr : '172.19.0.0/20',
            workerAutoRenew: props.workerAutoRenew ? props.workerAutoRenew : true,
            proxyMode: props.proxyMode ? props.proxyMode : 'iptables',
            tags: ros.tagFactory(props.tags),
            disableRollback: props.disableRollback ? props.disableRollback : true,
            workerInstanceTypes: props.workerInstanceTypes,
            loginPassword: props.loginPassword,
            masterPeriod: props.masterPeriod ? props.masterPeriod : 1,
            kubernetesVersion: props.kubernetesVersion ? props.kubernetesVersion : '1.14.8-aliyun.1',
            masterInstanceChargeType: props.masterInstanceChargeType ? props.masterInstanceChargeType : 'PostPaid',
            containerCidr: props.containerCidr ? props.containerCidr : '172.16.0.0/16',
            cpuPolicy: props.cpuPolicy ? props.cpuPolicy : 'none',
            workerInstanceChargeType: props.workerInstanceChargeType ? props.workerInstanceChargeType : 'PostPaid',
            keyPair: props.keyPair,
            masterInstanceTypes: props.masterInstanceTypes,
            workerDataDisks: props.workerDataDisks,
            securityGroupId: props.securityGroupId,
            timeoutMins: props.timeoutMins ? props.timeoutMins : 60,
            masterPeriodUnit: props.masterPeriodUnit ? props.masterPeriodUnit : 'Month',
            masterAutoRenewPeriod: props.masterAutoRenewPeriod ? props.masterAutoRenewPeriod : 1,
            workerDataDisk: props.workerDataDisk ? props.workerDataDisk : false,
            vpcId: props.vpcId,
            numOfNodes: props.numOfNodes ? props.numOfNodes : 3,
            masterAutoRenew: props.masterAutoRenew ? props.masterAutoRenew : true,
            workerAutoRenewPeriod: props.workerAutoRenewPeriod ? props.workerAutoRenewPeriod : 1,
            workerVSwitchIds: props.workerVSwitchIds,
            snatEntry: props.snatEntry ? props.snatEntry : true,
            masterDataDisk: props.masterDataDisk ? props.masterDataDisk : false,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKubernetesCluster;
        this.attrClusterId = rosKubernetesCluster.attrClusterId;
        this.attrTaskId = rosKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosKubernetesCluster.attrWorkerRamRoleName;
    }
}
exports.KubernetesCluster = KubernetesCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ViZXJuZXRlc2NsdXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrdWJlcm5ldGVzY2x1c3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQXNEO0FBRXJCLDBHQUZ4QixtQ0FBb0IsT0FFNkI7QUFvUzFEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQXNCL0M7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE2QixFQUFFLG1DQUEyQyxJQUFJO1FBQ3hILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLG1DQUFvQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDN0Qsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDckYsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDM0Usd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFdBQVc7WUFDdkcsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ25GLHdCQUF3QixFQUFFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENB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QW1GQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0t1YmVybmV0ZXNDbHVzdGVyIH0gZnJvbSAnLi9jcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NLdWJlcm5ldGVzQ2x1c3RlciBhcyBLdWJlcm5ldGVzQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDUzo6S3ViZXJuZXRlc0NsdXN0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc0NsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWFzdGVySW5zdGFuY2VUeXBlczogTWFzdGVyIG5vZGUgRUNTIHNwZWNpZmljYXRpb24gdHlwZSBjb2RlLiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgSW5zdGFuY2UgVHlwZSBGYW1pbHkuIEVhY2ggaXRlbSBjb3JyZXNwb25kIHRvIE1hc3RlclZTd2l0Y2hJZHMuXG4gICAgICogTGlzdCBzaXplIG11c3QgYmUgMywgSW5zdGFuY2UgVHlwZSBjYW4gYmUgcmVwZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVySW5zdGFuY2VUeXBlczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJWU3dpdGNoSWRzOiBNYXN0ZXIgbm9kZSBzd2l0Y2ggSUQuIFRvIGVuc3VyZSBoaWdoIGF2YWlsYWJpbGl0eSBvZiB0aGUgY2x1c3RlciwgaXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3Ugc2VsZWN0IDMgc3dpdGNoZXMgYW5kIGRpc3RyaWJ1dGUgdGhlbSBpbiBkaWZmZXJlbnQgQXZhaWxhYmlsaXR5IFpvbmVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlclZTd2l0Y2hJZHM6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsdXN0ZXIuIFRoZSBjbHVzdGVyIG5hbWUgY2FuIHVzZSB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLCBDaGluZXNlIGNoYXJhY3RlcnMsIG51bWJlcnMsIGFuZCBkYXNoZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBWUEMgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3JrZXJJbnN0YW5jZVR5cGVzOiBXb3JrZXIgbm9kZSBFQ1Mgc3BlY2lmaWNhdGlvbiB0eXBlIGNvZGUuIEZvciBtb3JlIGRldGFpbHMsIHNlZSBJbnN0YW5jZSBTcGVjaWZpY2F0aW9uIEZhbWlseS5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJJbnN0YW5jZVR5cGVzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtlclZTd2l0Y2hJZHM6IFRoZSB2aXJ0dWFsIHN3aXRjaCBJRCBvZiB0aGUgd29ya2VyIG5vZGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyVlN3aXRjaElkczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRvbnM6IEEgY29tYmluYXRpb24gb2YgYWRkb24gcGx1Z2lucyBmb3IgS3ViZXJuZXRlcyBjbHVzdGVycy5cbiAgICAgKiBOZXR3b3JrIHBsdWctaW46IGluY2x1ZGluZyBGbGFubmVsIGFuZCBUZXJ3YXkgbmV0d29yayBwbHVnLWluc1xuICAgICAqIExvZyBzZXJ2aWNlOiBPcHRpb25hbC4gSWYgdGhlIGxvZyBzZXJ2aWNlIGlzIG5vdCBlbmFibGVkLCB0aGUgY2x1c3RlciBhdWRpdCBmdW5jdGlvbiBjYW5ub3QgYmUgdXNlZC5cbiAgICAgKiBJbmdyZXNzOiBUaGUgaW5zdGFsbGF0aW9uIG9mIHRoZSBJbmdyZXNzIGNvbXBvbmVudCBpcyBlbmFibGVkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkb25zPzogQXJyYXk8Um9zS3ViZXJuZXRlc0NsdXN0ZXIuQWRkb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsb3VkTW9uaXRvckZsYWdzOiBXaGV0aGVyIHRvIGluc3RhbGwgdGhlIGNsb3VkIG1vbml0b3JpbmcgcGx1Z2luOlxuICAgICAqIHRydWU6IGluZGljYXRlcyBpbnN0YWxsYXRpb25cbiAgICAgKiBmYWxzZTogRG8gbm90IGluc3RhbGxcbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xvdWRNb25pdG9yRmxhZ3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhaW5lckNpZHI6IFRoZSBjb250YWluZXIgbmV0d29yayBzZWdtZW50IGNhbm5vdCBjb25mbGljdCB3aXRoIHRoZSBWUEMgbmV0d29yayBzZWdtZW50LiBXaGVuIHRoZSBzeXN0ZW0gaXMgc2VsZWN0ZWQgdG8gYXV0b21hdGljYWxseSBjcmVhdGUgYSBWUEMsIHRoZSBuZXR3b3JrIHNlZ21lbnQgMTcyLjE2LjAuMC8xNiBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFpbmVyQ2lkcj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjcHVQb2xpY3k6IENQVSBwb2xpY3kuIFRoZSBjbHVzdGVyIHZlcnNpb24gaXMgMS4xMi42IGFuZCBhYm92ZSBzdXBwb3J0cyBib3RoIHN0YXRpYyBhbmQgbm9uZSBzdHJhdGVnaWVzLiBUaGUgZGVmYXVsdCBpcyBub25lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNwdVBvbGljeT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNhYmxlUm9sbGJhY2s6IFdoZXRoZXIgdGhlIGZhaWx1cmUgd2FzIHJvbGxlZCBiYWNrOlxuICAgICAqIHRydWU6IGluZGljYXRlcyB0aGF0IGl0IGZhaWxzIHRvIHJvbGwgYmFja1xuICAgICAqIGZhbHNlOiByb2xsYmFjayBmYWlsZWRcbiAgICAgKiBUaGUgZGVmYXVsdCBpcyB0cnVlLiBJZiByb2xsYmFjayBmYWlscywgcmVzb3VyY2VzIHByb2R1Y2VkIGR1cmluZyB0aGUgY3JlYXRpb24gcHJvY2VzcyB3aWxsIGJlIHJlbGVhc2VkLiBGYWxzZSBpcyBub3QgcmVjb21tZW5kZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlzYWJsZVJvbGxiYWNrPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmRwb2ludFB1YmxpY0FjY2VzczogV2hldGhlciB0byBlbmFibGUgdGhlIHB1YmxpYyBuZXR3b3JrIEFQSSBTZXJ2ZXI6XG4gICAgICogdHJ1ZTogd2hpY2ggbWVhbnMgdGhhdCB0aGUgcHVibGljIG5ldHdvcmsgQVBJIFNlcnZlciBpcyBvcGVuLlxuICAgICAqIGZhbHNlOiBJZiBzZXQgdG8gZmFsc2UsIHRoZSBBUEkgc2VydmVyIG9uIHRoZSBwdWJsaWMgbmV0d29yayB3aWxsIG5vdCBiZSBjcmVhdGVkLCBvbmx5IHRoZSBBUEkgc2VydmVyIG9uIHRoZSBwcml2YXRlIG5ldHdvcmsgd2lsbCBiZSBjcmVhdGVkLkRlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRQdWJsaWNBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGtleVBhaXI6IEtleSBwYWlyIG5hbWUuIFNwZWNpZnkgb25lIG9mIEtleVBhaXIgb3IgTG9naW5QYXNzd29yZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBrZXlQYWlyPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGt1YmVybmV0ZXNWZXJzaW9uOiBLdWJlcm5ldGVzIHZlcnNpb24uIERlZmF1bHQgdG8gMS4xNC44LWFsaXl1bi4xLCAxLjE2LjktYWxpeXVuLjEgYW5kIHNvIG9uIC5cbiAgICAgKi9cbiAgICByZWFkb25seSBrdWJlcm5ldGVzVmVyc2lvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpblBhc3N3b3JkOiBTU0ggbG9naW4gcGFzc3dvcmQuIFBhc3N3b3JkIHJ1bGVzIGFyZSA4LTMwIGNoYXJhY3RlcnMgYW5kIGNvbnRhaW4gdGhyZWUgaXRlbXMgKHVwcGVyIGFuZCBsb3dlciBjYXNlIGxldHRlcnMsIG51bWJlcnMsIGFuZCBzcGVjaWFsIHN5bWJvbHMpLiBTcGVjaWZ5IG9uZSBvZiBLZXlQYWlyIG9yIExvZ2luUGFzc3dvcmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9naW5QYXNzd29yZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJBdXRvUmVuZXc6IFdoZXRoZXIgdGhlIG1hc3RlciBub2RlIGF1dG9tYXRpY2FsbHkgcmVuZXdzLiBJdCB0YWtlcyBlZmZlY3Qgd2hlbiB0aGUgdmFsdWUgb2YgTWFzdGVySW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFByZVBhaWQuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIHRydWU6IGF1dG9tYXRpYyByZW5ld2FsXG4gICAgICogZmFsc2U6IGRvIG5vdCByZW5ldyBhdXRvbWF0aWNhbGx5XG4gICAgICogRGVmYXVsdCB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlckF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWFzdGVyQXV0b1JlbmV3UGVyaW9kOiBBdXRvbWF0aWMgcmVuZXdhbCBjeWNsZSwgd2hpY2ggdGFrZXMgZWZmZWN0IHdoZW4gcHJlcGFpZCBhbmQgYXV0b21hdGljIHJlbmV3YWwgYXJlIHNlbGVjdGVkLCBhbmQgaXMgcmVxdWlyZWQ6XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gV2VlaywgdGhlIHZhbHVlcyBhcmU6IHtcIjFcIiwgXCIyXCIsIFwiM1wifVxuICAgICAqIFdoZW4gUGVyaW9kVW5pdCA9IE1vbnRoLCB0aGUgdmFsdWUgaXMge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNlwiLCBcIjEyXCJ9XG4gICAgICogRGVmYXVsdCB0byAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlckF1dG9SZW5ld1BlcmlvZD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJDb3VudDogTnVtYmVyIG9mIG1hc3RlciBpbnN0YW5jZXMuIFRoZSB2YWx1ZSBjYW4gYmUgMyBvciA1LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlckNvdW50PzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hc3RlckRhdGFEaXNrOiBXaGV0aGVyIHRoZSBtYXN0ZXIgbm9kZSBtb3VudHMgZGF0YSBkaXNrcyBjYW4gYmUgc2VsZWN0ZWQgYXM6XG4gICAgICogdHJ1ZTogbW91bnQgdGhlIGRhdGEgZGlza1xuICAgICAqIGZhbHNlOiBubyBkYXRhIGRpc2sgaXMgbW91bnRlZCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlckRhdGFEaXNrPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJEYXRhRGlza3M6IE1hc3RlciBkYXRhIGRpc2sgdHlwZSwgc2l6ZSBhbmQgb3RoZXIgY29uZmlndXJhdGlvbiBjb21iaW5hdGlvbnMuIFRoaXMgcGFyYW1ldGVyIGlzIHZhbGlkIG9ubHkgd2hlbiB0aGUgbWFzdGVyIG5vZGUgZGF0YSBkaXNrIGlzIG1vdW50ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyRGF0YURpc2tzPzogQXJyYXk8Um9zS3ViZXJuZXRlc0NsdXN0ZXIuTWFzdGVyRGF0YURpc2tzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hc3Rlckluc3RhbmNlQ2hhcmdlVHlwZTogTWFzdGVyIG5vZGUgcGF5bWVudCB0eXBlLiBUaGUgb3B0aW9uYWwgdmFsdWVzIGFyZTpcbiAgICAgKiBQcmVQYWlkOiBwcmVwYWlkXG4gICAgICogUG9zdFBhaWQ6IFBheSBhcyB5b3UgZ29cbiAgICAgKiBEZWZhdWx0IHRvIFBvc3RQYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3Rlckluc3RhbmNlQ2hhcmdlVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJQZXJpb2Q6IFRoZSBkdXJhdGlvbiBvZiB0aGUgYW5udWFsIHN1YnNjcmlwdGlvbiBhbmQgbW9udGhseSBzdWJzY3JpcHRpb24uIEl0IHRha2VzIGVmZmVjdCB3aGVuIHRoZSBtYXN0ZXJfaW5zdGFuY2VfY2hhcmdlX3R5cGUgdmFsdWUgaXMgUHJlUGFpZCBhbmQgaXMgYSByZXF1aXJlZCB2YWx1ZS4gVGhlIHZhbHVlIHJhbmdlIGlzOlxuICAgICAqIFdoZW4gUGVyaW9kVW5pdCA9IFdlZWssIFBlcmlvZCB2YWx1ZXMgYXJlOiB7XCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJ9XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gTW9udGgsIFBlcmlvZCB2YWx1ZXMgYXJlOiB7XCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMlwiLCBcIjI0XCIsIFwiMzZcIiwgXCI0OFwiLCBcIjYwXCJ9XG4gICAgICogRGVmYXVsdCB0byAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlclBlcmlvZD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJQZXJpb2RVbml0OiBXaGVuIHlvdSBzcGVjaWZ5IFByZVBhaWQsIHlvdSBuZWVkIHRvIHNwZWNpZnkgdGhlIHBlcmlvZC4gVGhlIG9wdGlvbnMgYXJlOlxuICAgICAqIFdlZWs6IFRpbWUgaXMgbWVhc3VyZWQgaW4gd2Vla3NcbiAgICAgKiBNb250aDogdGltZSBpbiBtb250aHNcbiAgICAgKiBEZWZhdWx0IHRvIE1vbnRoXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyUGVyaW9kVW5pdD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXN0ZXJTeXN0ZW1EaXNrQ2F0ZWdvcnk6IE1hc3RlciBkaXNrIHN5c3RlbSBkaXNrIHR5cGUuIFRoZSB2YWx1ZSByYW5nZSBpczpcbiAgICAgKiBjbG91ZF9lZmZpY2llbmN5OiBlZmZpY2llbnQgY2xvdWQgZGlza1xuICAgICAqIGNsb3VkX3NzZDogU1NEIGNsb3VkIGRpc2tcbiAgICAgKiBEZWZhdWx0IHRvIGNsb3VkX3NzZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJTeXN0ZW1EaXNrQ2F0ZWdvcnk/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWFzdGVyU3lzdGVtRGlza1NpemU6IE1hc3RlciBkaXNrIHN5c3RlbSBkaXNrIHNpemUgaW4gR2lCLlxuICAgICAqIERlZmF1bHQgdG8gMTIwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlclN5c3RlbURpc2tTaXplPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vZGVQb3J0UmFuZ2U6IE5vZGUgc2VydmljZSBwb3J0LiBUaGUgdmFsdWUgcmFuZ2UgaXMgWzMwMDAwLCA2NTUzNV0uXG4gICAgICogRGVmYXVsdCB0byAzMDAwMC02NTUzNS5cbiAgICAgKi9cbiAgICByZWFkb25seSBub2RlUG9ydFJhbmdlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG51bU9mTm9kZXM6IE51bWJlciBvZiB3b3JrZXIgbm9kZXMuIFRoZSByYW5nZSBpcyBbMCwzMDBdLlxuICAgICAqIERlZmF1bHQgdG8gMy5cbiAgICAgKi9cbiAgICByZWFkb25seSBudW1PZk5vZGVzPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3h5TW9kZToga3ViZS1wcm94eSBwcm94eSBtb2RlLCBzdXBwb3J0cyBib3RoIGlwdGFibGVzIGFuZCBpcHZzIG1vZGVzLiBUaGUgZGVmYXVsdCBpcyBpcHRhYmxlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm94eU1vZGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBTcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBzZWN1cml0eSBncm91cCB0byB3aGljaCB0aGUgY2x1c3RlciBFQ1MgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZUNpZHI6IFRoZSBzZXJ2aWNlIG5ldHdvcmsgc2VnbWVudCBjYW5ub3QgY29uZmxpY3Qgd2l0aCB0aGUgVlBDIG5ldHdvcmsgc2VnbWVudCBhbmQgdGhlIGNvbnRhaW5lciBuZXR3b3JrIHNlZ21lbnQuIFdoZW4gdGhlIHN5c3RlbSBpcyBzZWxlY3RlZCB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBhIFZQQywgdGhlIG5ldHdvcmsgc2VnbWVudCAxNzIuMTkuMC4wLzIwIGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlQ2lkcj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzbmF0RW50cnk6IFdoZXRoZXIgdG8gY29uZmlndXJlIFNOQVQgZm9yIHRoZSBuZXR3b3JrLlxuICAgICAqIFdoZW4gYSBWUEMgY2FuIGFjY2VzcyB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQsIHNldCBpdCB0byBmYWxzZS5cbiAgICAgKiBXaGVuIGFuIGV4aXN0aW5nIFZQQyBjYW5ub3QgYWNjZXNzIHRoZSBwdWJsaWMgbmV0d29yayBlbnZpcm9ubWVudDpcbiAgICAgKiBXaGVuIHNldCB0byBUcnVlLCBTTkFUIGlzIGNvbmZpZ3VyZWQgYW5kIHRoZSBwdWJsaWMgbmV0d29yayBlbnZpcm9ubWVudCBjYW4gYmUgYWNjZXNzZWQgYXQgdGhpcyB0aW1lLlxuICAgICAqIElmIHNldCB0byBmYWxzZSwgaXQgbWVhbnMgdGhhdCBTTkFUIGlzIG5vdCBjb25maWd1cmVkIGFuZCB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQgY2Fubm90IGJlIGFjY2Vzc2VkIGF0IHRoaXMgdGltZS5cbiAgICAgKiBEZWZhdWx0IHRvIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc25hdEVudHJ5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzc2hGbGFnczogV2hldGhlciB0byBlbmFibGUgcHVibGljIG5ldHdvcmsgU1NIIGxvZ2luOlxuICAgICAqIHRydWU6IG9wZW5cbiAgICAgKiBmYWxzZTogbm90IG9wZW5cbiAgICAgKi9cbiAgICByZWFkb25seSBzc2hGbGFncz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFnIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFpbnQ6IEl0IGlzIHVzZWQgdG8gbWFyayBub2RlcyB3aXRoIHRhaW50cy4gSXQgaXMgdXN1YWxseSB1c2VkIGZvciB0aGUgc2NoZWR1bGluZyBzdHJhdGVneSBvZiBQb2RzLiBUaGUgY29ycmVzcG9uZGluZyBjb25jZXB0IGlzOiB0b2xlcmFuY2UuIElmIHRoZXJlIGlzIGEgY29ycmVzcG9uZGluZyB0b2xlcmFuY2UgbWFyayBvbiB0aGUgUG9kcywgdGhlIHN0YWluIG9uIHRoZSBub2RlIGNhbiBiZSB0b2xlcmF0ZWQgYW5kIHNjaGVkdWxlZCB0byB0aGUgbm9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWludD86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dE1pbnM6IENsdXN0ZXIgcmVzb3VyY2Ugc3RhY2sgY3JlYXRpb24gdGltZW91dCwgaW4gbWludXRlcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgNjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dE1pbnM/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya2VyQXV0b1JlbmV3OiBXaGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgcmVuZXdhbCBvZiBXb3JrZXIgbm9kZXMuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIHRydWU6IGF1dG9tYXRpYyByZW5ld2FsXG4gICAgICogZmFsc2U6IGRvIG5vdCByZW5ldyBhdXRvbWF0aWNhbGx5XG4gICAgICogRGVmYXVsdCB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya2VyQXV0b1JlbmV3UGVyaW9kOiBBdXRvbWF0aWMgcmVuZXdhbCBjeWNsZSwgd2hpY2ggdGFrZXMgZWZmZWN0IHdoZW4gcHJlcGFpZCBhbmQgYXV0b21hdGljIHJlbmV3YWwgYXJlIHNlbGVjdGVkLCBhbmQgaXMgcmVxdWlyZWQ6XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gV2VlaywgdGhlIHZhbHVlcyBhcmU6IHtcIjFcIiwgXCIyXCIsIFwiM1wifVxuICAgICAqIFdoZW4gUGVyaW9kVW5pdCA9IE1vbnRoLCB0aGUgdmFsdWUgaXMge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNlwiLCBcIjEyXCJ9XG4gICAgICogRGVmYXVsdCB0byAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckF1dG9SZW5ld1BlcmlvZD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3JrZXJEYXRhRGlzazogV2hldGhlciB0byBtb3VudCB0aGUgZGF0YSBkaXNrLiBUaGUgb3B0aW9ucyBhcmUgYXMgZm9sbG93czpcbiAgICAgKiB0cnVlOiBpbmRpY2F0ZXMgdGhhdCB0aGUgd29ya2VyIG5vZGUgbW91bnRzIGRhdGEgZGlza3MuXG4gICAgICogZmFsc2U6IGluZGljYXRlcyB0aGF0IHRoZSB3b3JrZXIgbm9kZSBkb2VzIG5vdCBtb3VudCBkYXRhIGRpc2tzLlxuICAgICAqIERlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyRGF0YURpc2s/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtlckRhdGFEaXNrczogQSBjb21iaW5hdGlvbiBvZiBjb25maWd1cmF0aW9ucyBzdWNoIGFzIHdvcmtlciBkYXRhIGRpc2sgdHlwZSBhbmQgc2l6ZS4gVGhpcyBwYXJhbWV0ZXIgaXMgdmFsaWQgb25seSB3aGVuIHRoZSB3b3JrZXIgbm9kZSBkYXRhIGRpc2sgaXMgbW91bnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJEYXRhRGlza3M/OiBBcnJheTxSb3NLdWJlcm5ldGVzQ2x1c3Rlci5Xb3JrZXJEYXRhRGlza3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlOiBXb3JrZXIgbm9kZSBwYXltZW50IHR5cGUuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIFByZVBhaWQ6IHByZXBhaWRcbiAgICAgKiBQb3N0UGFpZDogUGF5IGFzIHlvdSBnb1xuICAgICAqIERlZmF1bHQgdG8gUG9zdFBhaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtlclBlcmlvZDogVGhlIGR1cmF0aW9uIG9mIHRoZSBhbm51YWwgYW5kIG1vbnRobHkgc3Vic2NyaXB0aW9uLiBJdCB0YWtlcyBlZmZlY3Qgd2hlbiB0aGUgd29ya2VyX2luc3RhbmNlX2NoYXJnZV90eXBlIHZhbHVlIGlzIFByZVBhaWQgYW5kIGlzIHJlcXVpcmVkLiBUaGUgdmFsdWUgcmFuZ2UgaXM6XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gV2VlaywgUGVyaW9kIHZhbHVlcyBhcmU6IHtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIn1cbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBNb250aCwgUGVyaW9kIHZhbHVlcyBhcmU6IHtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEyXCIsIFwiMjRcIiwgXCIzNlwiLCBcIjQ4XCIsIFwiNjBcIn1cbiAgICAgKiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyUGVyaW9kPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtlclBlcmlvZFVuaXQ6IFdoZW4geW91IHNwZWNpZnkgUHJlUGFpZCwgeW91IG5lZWQgdG8gc3BlY2lmeSB0aGUgcGVyaW9kLiBUaGUgb3B0aW9ucyBhcmU6XG4gICAgICogV2VlazogVGltZSBpcyBtZWFzdXJlZCBpbiB3ZWVrc1xuICAgICAqIE1vbnRoOiB0aW1lIGluIG1vbnRoc1xuICAgICAqIERlZmF1bHQgdG8gTW9udGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyUGVyaW9kVW5pdD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnk6IFdvcmtlciBub2RlIHN5c3RlbSBkaXNrIHR5cGUuIFRoZSB2YWx1ZSBpbmNsdWRlczpcbiAgICAgKiBjbG91ZF9lZmZpY2llbmN5OiBlZmZpY2llbnQgY2xvdWQgZGlza1xuICAgICAqIGNsb3VkX3NzZDogU1NEIGNsb3VkIGRpc2tcbiAgICAgKiBEZWZhdWx0IHRvIGNsb3VkX2VmZmljaWVuY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyU3lzdGVtRGlza0NhdGVnb3J5Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtlclN5c3RlbURpc2tTaXplOiBXb3JrZXIgZGlzayBzeXN0ZW0gZGlzayBzaXplLCB0aGUgdW5pdCBpcyBHaUIuXG4gICAgICogRGVmYXVsdCB0byAxMjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyU3lzdGVtRGlza1NpemU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkNTOjpLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIEt1YmVybmV0ZXNDbHVzdGVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhc2tJZDogVGFzayBJRC4gQXV0b21hdGljYWxseSBhc3NpZ25lZCBieSB0aGUgc3lzdGVtLCB0aGUgdXNlciBxdWVyaWVzIHRoZSB0YXNrIHN0YXR1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhc2tJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBXb3JrZXJSYW1Sb2xlTmFtZTogV29ya2VyIHJhbSByb2xlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXb3JrZXJSYW1Sb2xlTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNTOjpLdWJlcm5ldGVzQ2x1c3RlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogS3ViZXJuZXRlc0NsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NLdWJlcm5ldGVzQ2x1c3RlciA9IG5ldyBSb3NLdWJlcm5ldGVzQ2x1c3Rlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGVuZHBvaW50UHVibGljQWNjZXNzOiBwcm9wcy5lbmRwb2ludFB1YmxpY0FjY2VzcyA/IHByb3BzLmVuZHBvaW50UHVibGljQWNjZXNzIDogZmFsc2UsXG4gICAgICAgICAgICB3b3JrZXJQZXJpb2Q6IHByb3BzLndvcmtlclBlcmlvZCA/IHByb3BzLndvcmtlclBlcmlvZCA6IDEsXG4gICAgICAgICAgICB3b3JrZXJQZXJpb2RVbml0OiBwcm9wcy53b3JrZXJQZXJpb2RVbml0ID8gcHJvcHMud29ya2VyUGVyaW9kVW5pdCA6ICdNb250aCcsXG4gICAgICAgICAgICBtYXN0ZXJTeXN0ZW1EaXNrQ2F0ZWdvcnk6IHByb3BzLm1hc3RlclN5c3RlbURpc2tDYXRlZ29yeSA/IHByb3BzLm1hc3RlclN5c3RlbURpc2tDYXRlZ29yeSA6ICdjbG91ZF9zc2QnLFxuICAgICAgICAgICAgYWRkb25zOiBwcm9wcy5hZGRvbnMsXG4gICAgICAgICAgICBtYXN0ZXJTeXN0ZW1EaXNrU2l6ZTogcHJvcHMubWFzdGVyU3lzdGVtRGlza1NpemUgPyBwcm9wcy5tYXN0ZXJTeXN0ZW1EaXNrU2l6ZSA6IDEyMCxcbiAgICAgICAgICAgIHdvcmtlclN5c3RlbURpc2tDYXRlZ29yeTogcHJvcHMud29ya2VyU3lzdGVtRGlza0NhdGVnb3J5ID8gcHJvcHMud29ya2VyU3lzdGVtRGlza0NhdGVnb3J5IDogJ2Nsb3VkX2VmZmljaWVuY3knLFxuICAgICAgICAgICAgbm9kZVBvcnRSYW5nZTogcHJvcHMubm9kZVBvcnRSYW5nZSA/IHByb3BzLm5vZGVQb3J0UmFuZ2UgOiAnMzAwMDAtNjU1MzUnLFxuICAgICAgICAgICAgbWFzdGVyQ291bnQ6IHByb3BzLm1hc3RlckNvdW50ID8gcHJvcHMubWFzdGVyQ291bnQgOiAzLFxuICAgICAgICAgICAgd29ya2VyU3lzdGVtRGlza1NpemU6IHByb3BzLndvcmtlclN5c3RlbURpc2tTaXplID8gcHJvcHMud29ya2VyU3lzdGVtRGlza1NpemUgOiAxMjAsXG4gICAgICAgICAgICBzc2hGbGFnczogcHJvcHMuc3NoRmxhZ3MsXG4gICAgICAgICAgICBtYXN0ZXJWU3dpdGNoSWRzOiBwcm9wcy5tYXN0ZXJWU3dpdGNoSWRzLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIHRhaW50OiBwcm9wcy50YWludCxcbiAgICAgICAgICAgIG1hc3RlckRhdGFEaXNrczogcHJvcHMubWFzdGVyRGF0YURpc2tzLFxuICAgICAgICAgICAgY2xvdWRNb25pdG9yRmxhZ3M6IHByb3BzLmNsb3VkTW9uaXRvckZsYWdzID8gcHJvcHMuY2xvdWRNb25pdG9yRmxhZ3MgOiBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZpY2VDaWRyOiBwcm9wcy5zZXJ2aWNlQ2lkciA/IHByb3BzLnNlcnZpY2VDaWRyIDogJzE3Mi4xOS4wLjAvMjAnLFxuICAgICAgICAgICAgd29ya2VyQXV0b1JlbmV3OiBwcm9wcy53b3JrZXJBdXRvUmVuZXcgPyBwcm9wcy53b3JrZXJBdXRvUmVuZXcgOiB0cnVlLFxuICAgICAgICAgICAgcHJveHlNb2RlOiBwcm9wcy5wcm94eU1vZGUgPyBwcm9wcy5wcm94eU1vZGUgOiAnaXB0YWJsZXMnLFxuICAgICAgICAgICAgdGFnczogcm9zLnRhZ0ZhY3RvcnkocHJvcHMudGFncyksXG4gICAgICAgICAgICBkaXNhYmxlUm9sbGJhY2s6IHByb3BzLmRpc2FibGVSb2xsYmFjayA/IHByb3BzLmRpc2FibGVSb2xsYmFjayA6IHRydWUsXG4gICAgICAgICAgICB3b3JrZXJJbnN0YW5jZVR5cGVzOiBwcm9wcy53b3JrZXJJbnN0YW5jZVR5cGVzLFxuICAgICAgICAgICAgbG9naW5QYXNzd29yZDogcHJvcHMubG9naW5QYXNzd29yZCxcbiAgICAgICAgICAgIG1hc3RlclBlcmlvZDogcHJvcHMubWFzdGVyUGVyaW9kID8gcHJvcHMubWFzdGVyUGVyaW9kIDogMSxcbiAgICAgICAgICAgIGt1YmVybmV0ZXNWZXJzaW9uOiBwcm9wcy5rdWJlcm5ldGVzVmVyc2lvbiA/IHByb3BzLmt1YmVybmV0ZXNWZXJzaW9uIDogJzEuMTQuOC1hbGl5dW4uMScsXG4gICAgICAgICAgICBtYXN0ZXJJbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLm1hc3Rlckluc3RhbmNlQ2hhcmdlVHlwZSA/IHByb3BzLm1hc3Rlckluc3RhbmNlQ2hhcmdlVHlwZSA6ICdQb3N0UGFpZCcsXG4gICAgICAgICAgICBjb250YWluZXJDaWRyOiBwcm9wcy5jb250YWluZXJDaWRyID8gcHJvcHMuY29udGFpbmVyQ2lkciA6ICcxNzIuMTYuMC4wLzE2JyxcbiAgICAgICAgICAgIGNwdVBvbGljeTogcHJvcHMuY3B1UG9saWN5ID8gcHJvcHMuY3B1UG9saWN5IDogJ25vbmUnLFxuICAgICAgICAgICAgd29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlOiBwcm9wcy53b3JrZXJJbnN0YW5jZUNoYXJnZVR5cGUgPyBwcm9wcy53b3JrZXJJbnN0YW5jZUNoYXJnZVR5cGUgOiAnUG9zdFBhaWQnLFxuICAgICAgICAgICAga2V5UGFpcjogcHJvcHMua2V5UGFpcixcbiAgICAgICAgICAgIG1hc3Rlckluc3RhbmNlVHlwZXM6IHByb3BzLm1hc3Rlckluc3RhbmNlVHlwZXMsXG4gICAgICAgICAgICB3b3JrZXJEYXRhRGlza3M6IHByb3BzLndvcmtlckRhdGFEaXNrcyxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgdGltZW91dE1pbnM6IHByb3BzLnRpbWVvdXRNaW5zID8gcHJvcHMudGltZW91dE1pbnMgOiA2MCxcbiAgICAgICAgICAgIG1hc3RlclBlcmlvZFVuaXQ6IHByb3BzLm1hc3RlclBlcmlvZFVuaXQgPyBwcm9wcy5tYXN0ZXJQZXJpb2RVbml0IDogJ01vbnRoJyxcbiAgICAgICAgICAgIG1hc3RlckF1dG9SZW5ld1BlcmlvZDogcHJvcHMubWFzdGVyQXV0b1JlbmV3UGVyaW9kID8gcHJvcHMubWFzdGVyQXV0b1JlbmV3UGVyaW9kIDogMSxcbiAgICAgICAgICAgIHdvcmtlckRhdGFEaXNrOiBwcm9wcy53b3JrZXJEYXRhRGlzayA/IHByb3BzLndvcmtlckRhdGFEaXNrIDogZmFsc2UsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBudW1PZk5vZGVzOiBwcm9wcy5udW1PZk5vZGVzID8gcHJvcHMubnVtT2ZOb2RlcyA6IDMsXG4gICAgICAgICAgICBtYXN0ZXJBdXRvUmVuZXc6IHByb3BzLm1hc3RlckF1dG9SZW5ldyA/IHByb3BzLm1hc3RlckF1dG9SZW5ldyA6IHRydWUsXG4gICAgICAgICAgICB3b3JrZXJBdXRvUmVuZXdQZXJpb2Q6IHByb3BzLndvcmtlckF1dG9SZW5ld1BlcmlvZCA/IHByb3BzLndvcmtlckF1dG9SZW5ld1BlcmlvZCA6IDEsXG4gICAgICAgICAgICB3b3JrZXJWU3dpdGNoSWRzOiBwcm9wcy53b3JrZXJWU3dpdGNoSWRzLFxuICAgICAgICAgICAgc25hdEVudHJ5OiBwcm9wcy5zbmF0RW50cnkgPyBwcm9wcy5zbmF0RW50cnkgOiB0cnVlLFxuICAgICAgICAgICAgbWFzdGVyRGF0YURpc2s6IHByb3BzLm1hc3RlckRhdGFEaXNrID8gcHJvcHMubWFzdGVyRGF0YURpc2sgOiBmYWxzZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NLdWJlcm5ldGVzQ2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zS3ViZXJuZXRlc0NsdXN0ZXIuYXR0ckNsdXN0ZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyVGFza0lkID0gcm9zS3ViZXJuZXRlc0NsdXN0ZXIuYXR0clRhc2tJZDtcbiAgICAgICAgdGhpcy5hdHRyV29ya2VyUmFtUm9sZU5hbWUgPSByb3NLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyV29ya2VyUmFtUm9sZU5hbWU7XG4gICAgfVxufVxuIl19