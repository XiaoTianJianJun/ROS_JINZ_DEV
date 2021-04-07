"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mongodb_generated_1 = require("./mongodb.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return mongodb_generated_1.RosInstance; } });
/**
 * A ROS resource type:  `ALIYUN::MONGODB::Instance`
 */
class Instance extends ros.Resource {
    /**
     * Create a new `ALIYUN::MONGODB::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstance = new mongodb_generated_1.RosInstance(this, id, {
            businessInfo: props.businessInfo,
            resourceGroupId: props.resourceGroupId,
            autoRenew: props.autoRenew,
            securityIpArray: props.securityIpArray,
            backupId: props.backupId,
            storageEngine: props.storageEngine ? props.storageEngine : 'WiredTiger',
            restoreTime: props.restoreTime,
            networkType: props.networkType,
            dbInstanceStorage: props.dbInstanceStorage,
            tags: props.tags,
            dbInstanceDescription: props.dbInstanceDescription,
            couponNo: props.couponNo,
            engineVersion: props.engineVersion ? props.engineVersion : '3.4',
            readonlyReplicas: props.readonlyReplicas,
            replicationFactor: props.replicationFactor,
            zoneId: props.zoneId,
            dbInstanceClass: props.dbInstanceClass,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            period: props.period ? props.period : 1,
            vpcPasswordFree: props.vpcPasswordFree,
            accountPassword: props.accountPassword,
            vpcId: props.vpcId,
            chargeType: props.chargeType ? props.chargeType : 'PostPaid',
            databaseNames: props.databaseNames,
            srcDbInstanceId: props.srcDbInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrConnectionUri = rosInstance.attrConnectionUri;
        this.attrDbInstanceId = rosInstance.attrDbInstanceId;
        this.attrDbInstanceStatus = rosInstance.attrDbInstanceStatus;
        this.attrOrderId = rosInstance.attrOrderId;
        this.attrReplicaSetName = rosInstance.attrReplicaSetName;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsMkRBQWtEO0FBRTFCLGlHQUZmLCtCQUFXLE9BRW9CO0FBOEl4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0N0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLCtCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZO1lBQ3ZFLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUM1RCxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1NBQ3pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsaUJBQWlCLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0lBQzdELENBQUM7Q0FDSjtBQTdFRCw0QkE2RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbnN0YW5jZSB9IGZyb20gJy4vbW9uZ29kYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbnN0YW5jZSBhcyBJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpNT05HT0RCOjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VDbGFzczogTW9uZ29EQiBpbnN0YW5jZSBzdXBwb3J0ZWQgaW5zdGFuY2UgdHlwZSwgbWFrZSBzdXJlIGl0IHNob3VsZCBiZSBjb3JyZWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VDbGFzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZVN0b3JhZ2U6IERhdGFiYXNlIGluc3RhbmNlIHN0b3JhZ2Ugc2l6ZS4gTW9uZ29EQiBpcyBbNSwzMDAwXSwgaW5jcmVhc2VkIGV2ZXJ5IDEwIEdCLCBVbml0IGluIEdCXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZVN0b3JhZ2U6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY291bnRQYXNzd29yZDogUm9vdCBhY2NvdW50IHBhc3N3b3JkLCBjYW4gY29udGFpbiB0aGUgbGV0dGVycywgbnVtYmVycyBvciB1bmRlcnNjb3JlcyB0aGUgY29tcG9zaXRpb24sIGxlbmd0aCBvZiA2fjMyIGJpdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NvdW50UGFzc3dvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IEluZGljYXRlcyB3aGV0aGVyIGF1dG9tYXRpYyByZW5ld2FsIGlzIGVuYWJsZWQgZm9yIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOnRydWU6IEF1dG9tYXRpYyByZW5ld2FsIGlzIGVuYWJsZWQuZmFsc2U6IEF1dG9tYXRpYyByZW5ld2FsIGlzIG5vdCBlbmFibGVkLiBZb3UgbXVzdCByZW5ldyB0aGUgaW5zdGFuY2UgbWFudWFsbHkuRGVmYXVsdCB2YWx1ZTogZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhY2t1cElkOiBTcGVjaWZpYyBiYWNrdXAgc2V0IElkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2t1cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYnVzaW5lc3NJbmZvOiBUaGUgYnVzaW5lc3MgaW5mb3JtYXRpb24uIEl0IGlzIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1c2luZXNzSW5mbz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgaW5zdGFuY2UudmFsdWVzOlBvc3RQYWlkOiBQYXktQXMtWW91LUdvLlByZVBhaWQ6IFN1YnNjcmlwdGlvbi5EZWZhdWx0IHZhbHVlOiBQb3N0UGFpZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb3Vwb25ObzogVGhlIGNvdXBvbiBjb2RlLiBEZWZhdWx0IHZhbHVlOnlvdWh1aXF1YW5fcHJvbW90aW9uX29wdGlvbl9pZF9mb3JfYmxhbmsuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY291cG9uTm8/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYXRhYmFzZU5hbWVzOiBUaGUgbmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YWJhc2VOYW1lcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VEZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgY3JlYXRlZCBkYXRhYmFzZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlRGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmdpbmVWZXJzaW9uOiBEYXRhYmFzZSBpbnN0YW5jZSB2ZXJzaW9uLlN1cHBvcnQgMy40LCA0LjAsIDQuMlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZ2luZVZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXR3b3JrVHlwZTogVGhlIGluc3RhbmNlIG5ldHdvcmsgdHlwZS4gU3VwcG9ydCAnQ0xBU1NJQycgYW5kICdWUEMnIG9ubHksIGRlZmF1bHQgaXMgJ0NMQVNTSUMnLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBUaGUgc3Vic2NyaXB0aW9uIHBlcmlvZCBvZiB0aGUgaW5zdGFuY2UuRGVmYXVsdCBVbml0OiBNb250aC5WYWxpZCB2YWx1ZXM6IFsxfjldLCAxMiwgMjQsIDM2LiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVhZG9ubHlSZXBsaWNhczogTnVtYmVyIG9mIHJlYWQtb25seSBub2RlcywgaW4gdGhlIHJhbmdlIG9mIDEtNS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWFkb25seVJlcGxpY2FzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVwbGljYXRpb25GYWN0b3I6IFRoZSBudW1iZXIgb2Ygbm9kZXMgaW4gdGhlIHJlcGxpY2Egc2V0LiBBbGxvd2VkIHZhbHVlczogWzMsIDUsIDddLCBkZWZhdWx0IHRvIDMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVwbGljYXRpb25GYWN0b3I/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzdG9yZVRpbWU6IFRoZSB0aW1lIHRvIHJlc3RvcmUgdGhlIGNsb25lZCBpbnN0YW5jZSB0by4gVGhlIGZvcm1hdCBpcyB5eXl5LU1NLWRkVEhIOm1tOnNzWi5UaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSBzcGVjaWZpZWQgd2hlbiB0aGlzIG9wZXJhdGlvbiBpcyBjYWxsZWQgdG8gY2xvbmUgaW5zdGFuY2VzLllvdSBtdXN0IGFsc28gc3BlY2lmeSB0aGVTcmNEQkluc3RhbmNlSWRwYXJhbWV0ZXIgYW5kIHRoZUJhY2t1cElkcGFyYW1ldGVyLllvdSBjYW4gY2xvbmUgaW5zdGFuY2VzIHRvIGFueSByZXN0b3JlIHRpbWUgaW4gdGhlIHBhc3Qgc2V2ZW4gZGF5cy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXN0b3JlVGltZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogVGhlIElEIG9mIHRoZSBFQ1Mgc2VjdXJpdHkgZ3JvdXAuXG4gICAgICogRWFjaCBBcHNhcmFEQiBmb3IgTW9uZ29EQiBpbnN0YW5jZSBjYW4gYmUgYWRkZWQgaW4gdXAgdG8gMTAgc2VjdXJpdHkgZ3JvdXAuIFxuICAgICAqIFlvdSBjYW4gY2FsbCB0aGUgRUNTIERlc2NyaWJlU2VjdXJpdHlHcm91cCB0byBkZXNjcmliZSB0aGUgSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwIGluIHRoZSB0YXJnZXQgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5SXBBcnJheTogU2VjdXJpdHkgaXBzIHRvIGFkZCBvciByZW1vdmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlJcEFycmF5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3JjRGJJbnN0YW5jZUlkOiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIGJhY2t1cCBzZXQgYmFzZWQgb24gYW4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3JjRGJJbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RvcmFnZUVuZ2luZTogRGF0YWJhc2Ugc3RvcmFnZSBlbmdpbmUuU3VwcG9ydCBXaXJlZFRpZ2VyLCBSb2Nrc0RCLCBUZXJhcmtEQlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0b3JhZ2VFbmdpbmU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NJbnN0YW5jZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgVlBDIGlkIHRvIGNyZWF0ZSBtb25nb2RiIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjUGFzc3dvcmRGcmVlOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgcGFzc3dvcmQgZnJlZSBmb3IgYWNjZXNzIHdpdGhpbiB0aGUgVlBDLiBJZiBzZXQgdG86XG4gICAgICogLSB0cnVlOiBlbmFibGVzIHBhc3N3b3JkIGZyZWUuXG4gICAgICogLSBmYWxzZTogZGlzYWJsZXMgcGFzc3dvcmQgZnJlZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNQYXNzd29yZEZyZWU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgdlN3aXRjaCBJZCB0byBjcmVhdGUgbW9uZ29kYiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IE9uIHdoaWNoIHpvbmUgdG8gY3JlYXRlIHRoZSBpbnN0YW5jZS4gSWYgVnBjSWQgYW5kIFZTd2l0Y2hJZCBpcyBzcGVjaWZpZWQsIFpvbmVJZCBpcyByZXF1aXJlZCBhbmQgVlN3aXRjaCBzaG91bGQgYmUgaW4gc2FtZSB6b25lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6TU9OR09EQjo6SW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29ubmVjdGlvblVSSTogQ29ubmVjdGlvbiB1cmkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb25uZWN0aW9uVXJpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZUlkOiBUaGUgaW5zdGFuY2UgaWQgb2YgY3JlYXRlZCBtb25nb2RiIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZVN0YXR1czogU3RhdHVzIG9mIG1vbmdvZGIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlU3RhdHVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3JkZXJJZDogT3JkZXIgSWQgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZXBsaWNhU2V0TmFtZTogTmFtZSBvZiByZXBsaWNhIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVwbGljYVNldE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpNT05HT0RCOjpJbnN0YW5jZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZSA9IG5ldyBSb3NJbnN0YW5jZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGJ1c2luZXNzSW5mbzogcHJvcHMuYnVzaW5lc3NJbmZvLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIHNlY3VyaXR5SXBBcnJheTogcHJvcHMuc2VjdXJpdHlJcEFycmF5LFxuICAgICAgICAgICAgYmFja3VwSWQ6IHByb3BzLmJhY2t1cElkLFxuICAgICAgICAgICAgc3RvcmFnZUVuZ2luZTogcHJvcHMuc3RvcmFnZUVuZ2luZSA/IHByb3BzLnN0b3JhZ2VFbmdpbmUgOiAnV2lyZWRUaWdlcicsXG4gICAgICAgICAgICByZXN0b3JlVGltZTogcHJvcHMucmVzdG9yZVRpbWUsXG4gICAgICAgICAgICBuZXR3b3JrVHlwZTogcHJvcHMubmV0d29ya1R5cGUsXG4gICAgICAgICAgICBkYkluc3RhbmNlU3RvcmFnZTogcHJvcHMuZGJJbnN0YW5jZVN0b3JhZ2UsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgZGJJbnN0YW5jZURlc2NyaXB0aW9uOiBwcm9wcy5kYkluc3RhbmNlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjb3Vwb25ObzogcHJvcHMuY291cG9uTm8sXG4gICAgICAgICAgICBlbmdpbmVWZXJzaW9uOiBwcm9wcy5lbmdpbmVWZXJzaW9uID8gcHJvcHMuZW5naW5lVmVyc2lvbiA6ICczLjQnLFxuICAgICAgICAgICAgcmVhZG9ubHlSZXBsaWNhczogcHJvcHMucmVhZG9ubHlSZXBsaWNhcyxcbiAgICAgICAgICAgIHJlcGxpY2F0aW9uRmFjdG9yOiBwcm9wcy5yZXBsaWNhdGlvbkZhY3RvcixcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgZGJJbnN0YW5jZUNsYXNzOiBwcm9wcy5kYkluc3RhbmNlQ2xhc3MsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgcGVyaW9kOiBwcm9wcy5wZXJpb2QgPyBwcm9wcy5wZXJpb2QgOiAxLFxuICAgICAgICAgICAgdnBjUGFzc3dvcmRGcmVlOiBwcm9wcy52cGNQYXNzd29yZEZyZWUsXG4gICAgICAgICAgICBhY2NvdW50UGFzc3dvcmQ6IHByb3BzLmFjY291bnRQYXNzd29yZCxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGNoYXJnZVR5cGU6IHByb3BzLmNoYXJnZVR5cGUgPyBwcm9wcy5jaGFyZ2VUeXBlIDogJ1Bvc3RQYWlkJyxcbiAgICAgICAgICAgIGRhdGFiYXNlTmFtZXM6IHByb3BzLmRhdGFiYXNlTmFtZXMsXG4gICAgICAgICAgICBzcmNEYkluc3RhbmNlSWQ6IHByb3BzLnNyY0RiSW5zdGFuY2VJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRyQ29ubmVjdGlvblVyaSA9IHJvc0luc3RhbmNlLmF0dHJDb25uZWN0aW9uVXJpO1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlSWQgPSByb3NJbnN0YW5jZS5hdHRyRGJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlU3RhdHVzID0gcm9zSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VTdGF0dXM7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWQgPSByb3NJbnN0YW5jZS5hdHRyT3JkZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyUmVwbGljYVNldE5hbWUgPSByb3NJbnN0YW5jZS5hdHRyUmVwbGljYVNldE5hbWU7XG4gICAgfVxufVxuIl19