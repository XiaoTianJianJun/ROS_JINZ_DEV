"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalingConfiguration = exports.ScalingConfigurationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ess_generated_1 = require("./ess.generated");
Object.defineProperty(exports, "ScalingConfigurationProperty", { enumerable: true, get: function () { return ess_generated_1.RosScalingConfiguration; } });
/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingConfiguration`
 */
class ScalingConfiguration extends ros.Resource {
    /**
     * Create a new `ALIYUN::ESS::ScalingConfiguration`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosScalingConfiguration = new ess_generated_1.RosScalingConfiguration(this, id, {
            scalingConfigurationName: props.scalingConfigurationName,
            diskMappings: props.diskMappings,
            resourceGroupId: props.resourceGroupId,
            systemDiskSize: props.systemDiskSize,
            userData: props.userData,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            spotPriceLimitForInstanceType: props.spotPriceLimitForInstanceType,
            imageId: props.imageId,
            spotPriceLimit: props.spotPriceLimit,
            tagList: props.tagList,
            instanceTypes: props.instanceTypes,
            instanceType: props.instanceType,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized,
            instanceId: props.instanceId,
            hpcClusterId: props.hpcClusterId,
            scalingGroupId: props.scalingGroupId,
            securityGroupId: props.securityGroupId,
            internetChargeType: props.internetChargeType,
            systemDiskCategory: props.systemDiskCategory,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingConfiguration;
        this.attrScalingConfigurationId = rosScalingConfiguration.attrScalingConfigurationId;
    }
}
exports.ScalingConfiguration = ScalingConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGluZ2NvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FsaW5nY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTBEO0FBRXRCLDZHQUYzQix1Q0FBdUIsT0FFZ0M7QUE4S2hFOztHQUVHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlsRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWdDLEVBQUUsbUNBQTJDLElBQUk7UUFDM0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHVCQUF1QixHQUFHLElBQUksdUNBQXVCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1lBQ3hELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4Qiw4QkFBOEIsRUFBRSxLQUFLLENBQUMsOEJBQThCO1lBQ3BFLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QiwwQkFBMEIsRUFBRSxLQUFLLENBQUMsMEJBQTBCO1lBQzVELDZCQUE2QixFQUFFLEtBQUssQ0FBQyw2QkFBNkI7WUFDbEUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyx1QkFBdUI7WUFDdEQsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtTQUN2RCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3hDLElBQUksQ0FBQywwQkFBMEIsR0FBRyx1QkFBdUIsQ0FBQywwQkFBMEIsQ0FBQztJQUN6RixDQUFDO0NBQ0o7QUF2REQsb0RBdURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2Vzcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTY2FsaW5nQ29uZmlndXJhdGlvbiBhcyBTY2FsaW5nQ29uZmlndXJhdGlvblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFU1M6OlNjYWxpbmdDb25maWd1cmF0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNjYWxpbmdDb25maWd1cmF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2NhbGluZ0dyb3VwSWQ6IFNjYWxpbmcgZ3JvdXAgaWQgdG8gY3JlYXRlIHRoZSBzY2FsaW5nIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NhbGluZ0dyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlcGxveW1lbnRTZXRJZDogRGVwbG95bWVudCBzZXQgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwbG95bWVudFNldElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlza01hcHBpbmdzOiBEaXNrIG1hcHBpbmdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNrTWFwcGluZ3M/OiBBcnJheTxSb3NTY2FsaW5nQ29uZmlndXJhdGlvbi5EaXNrTWFwcGluZ3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBocGNDbHVzdGVySWQ6IFRoZSBIUEMgY2x1c3RlciBJRCB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBocGNDbHVzdGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbWFnZUlkOiBJbWFnZSBJRCB0byBjcmVhdGUgZWNzIGluc3RhbmNlIC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogU291cmNlIEVDUyBpbnN0YW5jZSB0byBjb3B5IGNvbmZpZ3VyYXRpb24sIGlmIHRoZSBwcm9wZXJ0aWVzIGlzIHNldHRpbmcsIFdoaWNoIHdpbGwgY29weSB0aGUgSW5zdGFuY2VUeXBlLCBJbWFnZUlkLCBJbnRlcm5ldENoYXJnZVR5cGUsIElvT3B0aW1pemVkLFVzZXJEYXRhLCBLZXlQYWlyTmFtZSwgUmFtUm9sZU5hbWUsIEludGVybmV0TWF4QmFuZHdpZHRoSW4sSW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQsIGFuZCBmaXJzdCBzZWN1cml0eSBncm91cCBpZCBmcm9tIHNvdXJjZSBpbnN0YW5jZSwgeW91IGNhbiBhbHNvIHNwZWNpZnkgdGhlIHJlbGF0aXZlIHByb3BlcnRpZXMgdG8gb3ZlcndyaXRlIHRoZSBwcm9wZXJ0aWVzIGNvcHkgZnJvbSBzb3VyY2UgaW5zdGFuY2UgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGluc3RhbmNlIGxhdW5jaGVkIGZyb20gdGhlIGN1cnJlbnQgc2NhbGluZyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlVHlwZTogZWNzIHN1cHBvcnRlZCBpbnN0YW5jZSB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlVHlwZXM6IGVjcyBzdXBwb3J0ZWQgaW5zdGFuY2UgdHlwZXMuIExlbmd0aCBbMSwxMF0uIElmIEluc3RhbmNlVHlwZXMgaXMgc3BlY2lmaWVkLHRoZSBJbnN0YW5jZVR5cGUgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZXM/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBJbnN0YW5jZSBpbnRlcm5ldCBhY2Nlc3MgY2hhcmdlIHR5cGUuU3VwcG9ydCAnUGF5QnlCYW5kd2lkdGgnIGFuZCAnUGF5QnlUcmFmZmljJyBvbmx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0Q2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludGVybmV0TWF4QmFuZHdpZHRoSW46IE1heGltdW0gaW5jb21pbmcgYmFuZHdpZHRoIGZyb20gdGhlIHB1YmxpYyBuZXR3b3JrLCBtZWFzdXJlZCBpbiBNYnBzIChNZWdhIGJpdCBwZXIgc2Vjb25kKS4gVGhlIHZhbHVlIHJhbmdlIGlzIFsxLDIwMF0uIElmIHRoaXMgcGFyYW1ldGVyIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQsIEFsaXl1bkFQSSBhdXRvbWF0aWNhbGx5IHNldHMgdGhlIHZhbHVlIHRvIDIwMCBNYnBzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0TWF4QmFuZHdpZHRoSW4/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRlcm5ldE1heEJhbmR3aWR0aE91dDogTWF4aW11bSBvdXRnb2luZyBiYW5kd2lkdGggZnJvbSB0aGUgcHVibGljIG5ldHdvcmssIG1lYXN1cmVkIGluIE1icHMgKE1lZ2EgYml0IHBlciBzZWNvbmQpLlxuICAgICAqIFRoZSB2YWx1ZSByYW5nZSBmb3IgUGF5QnlCYW5kd2lkdGggaXMgWzAsMTAwXS4gSWYgdGhpcyBwYXJhbWV0ZXIgdmFsdWUgaXMgbm90IHNwZWNpZmllZCwgQWxpeXVuQVBJIGF1dG9tYXRpY2FsbHkgc2V0cyB0aGUgdmFsdWUgdG8gMCBNYnBzLlxuICAgICAqIFRoZSB2YWx1ZSByYW5nZSBmb3IgUGF5QnlUcmFmZmljIGlzIFswLDEwMF0uIElmIHRoaXMgcGFyYW1ldGVyIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQsIGFuIGVycm9yIGlzIHJlcG9ydGVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpb09wdGltaXplZDogVGhlICdvcHRpbWl6ZWQnIGluc3RhbmNlIGNhbiBwcm92aWRlIGJldHRlciBJTyBwZXJmb3JtYW5jZS4gU3VwcG9ydCAnbm9uZScgYW5kICdvcHRpbWl6ZWQnIG9ubHksIGRlZmF1bHQgaXMgJ25vbmUnLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlvT3B0aW1pemVkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2V5UGFpck5hbWU6IFNTSCBrZXkgcGFpciBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFzc3dvcmRJbmhlcml0OiBXaGV0aGVyIHRvIHVzZSB0aGUgcGFzc3dvcmQgcHJlLWNvbmZpZ3VyZWQgaW4gdGhlIGltYWdlIHlvdSBzZWxlY3Qgb3Igbm90LiBXaGVuIFBhc3N3b3JkSW5oZXJpdCBpcyBzcGVjaWZpZWQsIHRoZSBQYXNzd29yZCBtdXN0IGJlIG51bGwuIEZvciBhIHNlY3VyZSBhY2Nlc3MsIG1ha2Ugc3VyZSB0aGF0IHRoZSBzZWxlY3RlZCBpbWFnZSBoYXMgcGFzc3dvcmQgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXNzd29yZEluaGVyaXQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmFtUm9sZU5hbWU6IEluc3RhbmNlIFJBTSByb2xlIG5hbWUuIFRoZSBuYW1lIGlzIHByb3ZpZGVkIGFuZCBtYWludGFpbmVkIGJ5IFJlc291cmNlIEFjY2VzcyBNYW5hZ2VtZW50IChSQU0pIGFuZCBjYW4gYmUgcXVlcmllZCB1c2luZyBMaXN0Um9sZXMuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgUkFNIEFQSSBDcmVhdGVSb2xlIGFuZCBMaXN0Um9sZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmFtUm9sZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNjYWxpbmdDb25maWd1cmF0aW9uTmFtZTogTmFtZSBvZiBjcmVhdGVkIHNjYWxpbmcgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFNlY3VyaXR5IEdyb3VwIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BvdFByaWNlTGltaXQ6IFNldCB0aGUgaG91cmx5IG1heGltdW0gcHJpY2UgZm9yIHRoZSBpbnN0YW5jZS4gU3VwcG9ydHMgYSBtYXhpbXVtIG9mIDMgZGVjaW1hbCBwbGFjZXMsIGFuZCB0aGUgcGFyYW1ldGVyIHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gdGhlIHZhbHVlIG9mIFNwb3RTdHJhdGVneSBpcyBTcG90V2l0aFByaWNlTGltaXQuSXQgaXMgYSBkZWZhdWx0IHZhbHVlIGZvciBhbGwgaW5zdGFuY2UgdHlwZXMsIGFuZCBjYW4gYmUgb3ZlcndyaXRlIGJ5IFNwb3RQcmljZUxpbWl0Rm9ySW5zdGFuY2VUeXBlXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BvdFByaWNlTGltaXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcG90UHJpY2VMaW1pdEZvckluc3RhbmNlVHlwZTogU2V0IHRoZSBob3VybHkgbWF4aW11bSBwcmljZSBmb3IgdGhlIGluc3RhbmNlIG9mIHNwZWNpZmllZCBpbnN0YW5jZSB0eXBlLlxuICAgICAqIFRoZSBwYXJhbWV0ZXIgdGFrZXMgZWZmZWN0IG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgU3BvdFN0cmF0ZWd5IGlzIFNwb3RXaXRoUHJpY2VMaW1pdC5cbiAgICAgKiBZb3Ugc2hvdWxkIGlucHV0IHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgdGFnIHdpdGggdGhlIGZvcm1hdCBvZiB0aGUgS2V5LVZhbHVlLCBzdWNoIGFzIHtcImtleTFcIjpcInZhbHVlMVwiLFwia2V5MlwiOlwidmFsdWUyXCIsIC4uLiBcImtleTVcIjpcInZhbHVlNVwifS5cbiAgICAgKiBBdCBtb3N0IDUwIGl0ZW1zIGNhbiBiZSBzcGVjaWZpZWQuXG4gICAgICogS2V5XG4gICAgICogXHRlY3MgaW5zdGFuY2UgdHlwZVxuICAgICAqIFZhbHVlXG4gICAgICogXHRTdXBwb3J0cyBhIG1heGltdW0gb2YgMyBkZWNpbWFsIHBsYWNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcG90UHJpY2VMaW1pdEZvckluc3RhbmNlVHlwZT86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwb3RTdHJhdGVneTogUHJlZW1wdGlvbiBzdHJhdGVneSBmb3IgcG9zdC1wYWlkIGluc3RhbmNlcy4gSXQgdGFrZXMgZWZmZWN0IHdoZW4gdGhlIHBhcmFtZXRlciBJbnN0YW5jZUNoYXJnZVR5cGUgdGFrZXMgdGhlIHZhbHVlIG9mIFBvc3RQYWlkLiBSYW5nZXM6XG4gICAgICogTm9TcG90OiBOb3JtYWwgcGF5LXBlci11c2UgaW5zdGFuY2VcbiAgICAgKiBTcG90V2l0aFByaWNlTGltaXQ6IFNldCBhIHByZWVtcHRpdmUgaW5zdGFuY2Ugb2YgdGhlIGNhcCBwcmljZVxuICAgICAqIFNwb3RBc1ByaWNlR286IFN5c3RlbSBhdXRvbWF0aWMgYmlkZGluZywgZm9sbG93aW5nIHRoZSBjdXJyZW50IG1hcmtldCBhY3R1YWwgcHJpY2VcbiAgICAgKiBEZWZhdWx0OiBOb1Nwb3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BvdFN0cmF0ZWd5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza0F1dG9TbmFwc2hvdFBvbGljeUlkOiBBdXRvIHNuYXBzaG90IHBvbGljeSBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzeXN0ZW1EaXNrQXV0b1NuYXBzaG90UG9saWN5SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeXN0ZW1EaXNrQ2F0ZWdvcnk6IENhdGVnb3J5IG9mIHN5c3RlbSBkaXNrLiBEZWZhdWx0IGlzIGNsb3VkLnN1cHBvcnQgY2xvdWR8Y2xvdWRfZWZmaWNpZW5jeXxjbG91ZF9zc2R8Y2xvdWRfZXNzZHxlcGhlbWVyYWxfc3NkXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0NhdGVnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWw6IFRoZSBwZXJmb3JtYW5jZSBsZXZlbCBvZiBhbiBFU1NELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tQZXJmb3JtYW5jZUxldmVsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza1NpemU6IFNpemUgb2Ygc3lzdGVtIGRpc2suIFVuaXQgaXMgR0IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza1NpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdMaXN0OiBUaGUgdGFncyBvZiBhbiBpbnN0YW5jZSBpbiBsaXN0IGZvcm1hdC5cbiAgICAgKiBEbyBub3QgdXNlIHdpdGggVGFncyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqIFlvdSBzaG91bGQgaW5wdXQgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSB0YWcgd2l0aCB0aGUgZm9ybWF0IG9mIEtleS1WYWx1ZSBsaXN0LCBzdWNoIGFzIFt7XCJLZXlcIjpcImtleTFcIixcIlZhbHVlXCI6XCJ2YWx1ZTFcIn0sIC4uLl0uXG4gICAgICogQXQgbW9zdCAyMCB0YWdzIGNhbiBiZSBzcGVjaWZpZWQuXG4gICAgICogS2V5XG4gICAgICogSXQgY2FuIGJlIHVwIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIENhbm5vdCBiZWdpbiB3aXRoIGFsaXl1bi5cbiAgICAgKiBDYW5ub3QgYmVnaW4gd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqIENhbm5vdCBiZSBhIG51bGwgc3RyaW5nLlxuICAgICAqIFZhbHVlXG4gICAgICogSXQgY2FuIGJlIHVwIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBDYW5ub3QgYmVnaW4gd2l0aCBhbGl5dW4uXG4gICAgICogQ2Fubm90IGJlZ2luIHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKiBDYW4gYmUgYSBudWxsIHN0cmluZy5JZiBsZXNzIHRoZW4gMjAgdGFncyBhcmUgc3BlY2lmaWVkLCByb3Mgd2lsbCBhZGQgYSB0YWcoS2V5OiBcInJvcy1hbGl5dW4tY3JlYXRlZFwiLCBWYWx1ZTpcIjxyZXNvdXJjZV9uYW1lPl9zdGFja188c3RhY2tfaWQ+XCIpIGlmIHBvc3NpYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ0xpc3Q/OiBBcnJheTxSb3NTY2FsaW5nQ29uZmlndXJhdGlvbi5UYWdMaXN0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlckRhdGE6IFVzZXIgZGF0YSB0byBwYXNzIHRvIGluc3RhbmNlLiBbMSwgMTZLQl0gY2hhcmFjdGVycy5Vc2VyIGRhdGEgc2hvdWxkIG5vdCBiZSBiYXNlNjQgZW5jb2RlZC4gSWYgeW91IHdhbnQgdG8gcGFzcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdG8gdGhlIHByb3BlcnR5LCB1c2UgZnVuY3Rpb24gRm46OkJhc2U2NERlY29kZSB0byBkZWNvZGUgdGhlIGJhc2U2NCBzdHJpbmcgZmlyc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckRhdGE/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVTUzo6U2NhbGluZ0NvbmZpZ3VyYXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2FsaW5nQ29uZmlndXJhdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2NhbGluZ0NvbmZpZ3VyYXRpb25JZDogVGhlIHNjYWxpbmcgY29uZmlndXJhdGlvbiBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2NhbGluZ0NvbmZpZ3VyYXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVTUzo6U2NhbGluZ0NvbmZpZ3VyYXRpb25gLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNjYWxpbmdDb25maWd1cmF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU2NhbGluZ0NvbmZpZ3VyYXRpb24gPSBuZXcgUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWU6IHByb3BzLnNjYWxpbmdDb25maWd1cmF0aW9uTmFtZSxcbiAgICAgICAgICAgIGRpc2tNYXBwaW5nczogcHJvcHMuZGlza01hcHBpbmdzLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrU2l6ZTogcHJvcHMuc3lzdGVtRGlza1NpemUsXG4gICAgICAgICAgICB1c2VyRGF0YTogcHJvcHMudXNlckRhdGEsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrQXV0b1NuYXBzaG90UG9saWN5SWQ6IHByb3BzLnN5c3RlbURpc2tBdXRvU25hcHNob3RQb2xpY3lJZCxcbiAgICAgICAgICAgIHJhbVJvbGVOYW1lOiBwcm9wcy5yYW1Sb2xlTmFtZSxcbiAgICAgICAgICAgIHN5c3RlbURpc2tQZXJmb3JtYW5jZUxldmVsOiBwcm9wcy5zeXN0ZW1EaXNrUGVyZm9ybWFuY2VMZXZlbCxcbiAgICAgICAgICAgIHNwb3RQcmljZUxpbWl0Rm9ySW5zdGFuY2VUeXBlOiBwcm9wcy5zcG90UHJpY2VMaW1pdEZvckluc3RhbmNlVHlwZSxcbiAgICAgICAgICAgIGltYWdlSWQ6IHByb3BzLmltYWdlSWQsXG4gICAgICAgICAgICBzcG90UHJpY2VMaW1pdDogcHJvcHMuc3BvdFByaWNlTGltaXQsXG4gICAgICAgICAgICB0YWdMaXN0OiBwcm9wcy50YWdMaXN0LFxuICAgICAgICAgICAgaW5zdGFuY2VUeXBlczogcHJvcHMuaW5zdGFuY2VUeXBlcyxcbiAgICAgICAgICAgIGluc3RhbmNlVHlwZTogcHJvcHMuaW5zdGFuY2VUeXBlLFxuICAgICAgICAgICAgc3BvdFN0cmF0ZWd5OiBwcm9wcy5zcG90U3RyYXRlZ3ksXG4gICAgICAgICAgICBwYXNzd29yZEluaGVyaXQ6IHByb3BzLnBhc3N3b3JkSW5oZXJpdCxcbiAgICAgICAgICAgIGtleVBhaXJOYW1lOiBwcm9wcy5rZXlQYWlyTmFtZSxcbiAgICAgICAgICAgIGlvT3B0aW1pemVkOiBwcm9wcy5pb09wdGltaXplZCxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBocGNDbHVzdGVySWQ6IHByb3BzLmhwY0NsdXN0ZXJJZCxcbiAgICAgICAgICAgIHNjYWxpbmdHcm91cElkOiBwcm9wcy5zY2FsaW5nR3JvdXBJZCxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgaW50ZXJuZXRDaGFyZ2VUeXBlOiBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrQ2F0ZWdvcnk6IHByb3BzLnN5c3RlbURpc2tDYXRlZ29yeSxcbiAgICAgICAgICAgIGluc3RhbmNlTmFtZTogcHJvcHMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgZGVwbG95bWVudFNldElkOiBwcm9wcy5kZXBsb3ltZW50U2V0SWQsXG4gICAgICAgICAgICBpbnRlcm5ldE1heEJhbmR3aWR0aE91dDogcHJvcHMuaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQsXG4gICAgICAgICAgICBpbnRlcm5ldE1heEJhbmR3aWR0aEluOiBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aEluLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NjYWxpbmdDb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmF0dHJTY2FsaW5nQ29uZmlndXJhdGlvbklkID0gcm9zU2NhbGluZ0NvbmZpZ3VyYXRpb24uYXR0clNjYWxpbmdDb25maWd1cmF0aW9uSWQ7XG4gICAgfVxufVxuIl19