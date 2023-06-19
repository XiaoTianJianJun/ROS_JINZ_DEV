"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepayInstance = exports.PrepayInstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const redis_generated_1 = require("./redis.generated");
Object.defineProperty(exports, "PrepayInstanceProperty", { enumerable: true, get: function () { return redis_generated_1.RosPrepayInstance; } });
/**
 * A ROS resource type:  `ALIYUN::REDIS::PrepayInstance`
 */
class PrepayInstance extends ros.Resource {
    /**
     * Create a new `ALIYUN::REDIS::PrepayInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosPrepayInstance = new redis_generated_1.RosPrepayInstance(this, id, {
            connections: props.connections,
            engineVersion: props.engineVersion,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            evictionPolicy: props.evictionPolicy,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            productType: props.productType,
            instanceMaintainTime: props.instanceMaintainTime,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            instanceClass: props.instanceClass,
            vpcPasswordFree: props.vpcPasswordFree,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            secondaryZoneId: props.secondaryZoneId,
            autoRenewDuration: props.autoRenewDuration,
            instanceName: props.instanceName,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            sslEnabled: props.sslEnabled,
            vpcId: props.vpcId,
            tairConfig: props.tairConfig,
            tags: props.tags,
            periodUnit: props.periodUnit,
            backupPolicy: props.backupPolicy,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrepayInstance;
        this.attrArchitectureType = rosPrepayInstance.attrArchitectureType;
        this.attrBandwidth = rosPrepayInstance.attrBandwidth;
        this.attrCapacity = rosPrepayInstance.attrCapacity;
        this.attrChargeType = rosPrepayInstance.attrChargeType;
        this.attrClassicInnerConnectionPort = rosPrepayInstance.attrClassicInnerConnectionPort;
        this.attrClassicInnerConnectionString = rosPrepayInstance.attrClassicInnerConnectionString;
        this.attrConnectionDomain = rosPrepayInstance.attrConnectionDomain;
        this.attrConnections = rosPrepayInstance.attrConnections;
        this.attrDirectConnectionPort = rosPrepayInstance.attrDirectConnectionPort;
        this.attrDirectConnectionString = rosPrepayInstance.attrDirectConnectionString;
        this.attrEngineVersion = rosPrepayInstance.attrEngineVersion;
        this.attrHasRenewChangeOrder = rosPrepayInstance.attrHasRenewChangeOrder;
        this.attrInstanceClass = rosPrepayInstance.attrInstanceClass;
        this.attrInstanceId = rosPrepayInstance.attrInstanceId;
        this.attrInstanceName = rosPrepayInstance.attrInstanceName;
        this.attrInstanceType = rosPrepayInstance.attrInstanceType;
        this.attrNetworkType = rosPrepayInstance.attrNetworkType;
        this.attrNodeType = rosPrepayInstance.attrNodeType;
        this.attrOrderId = rosPrepayInstance.attrOrderId;
        this.attrPackageType = rosPrepayInstance.attrPackageType;
        this.attrPort = rosPrepayInstance.attrPort;
        this.attrPrivateIp = rosPrepayInstance.attrPrivateIp;
        this.attrPublicConnectionPort = rosPrepayInstance.attrPublicConnectionPort;
        this.attrPublicConnectionString = rosPrepayInstance.attrPublicConnectionString;
        this.attrQps = rosPrepayInstance.attrQps;
        this.attrResourceGroupId = rosPrepayInstance.attrResourceGroupId;
        this.attrVSwitchId = rosPrepayInstance.attrVSwitchId;
        this.attrVpcId = rosPrepayInstance.attrVpcId;
        this.attrVpcPrivateConnectionPort = rosPrepayInstance.attrVpcPrivateConnectionPort;
        this.attrVpcPrivateConnectionString = rosPrepayInstance.attrVpcPrivateConnectionString;
        this.attrZoneId = rosPrepayInstance.attrZoneId;
    }
}
exports.PrepayInstance = PrepayInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGF5aW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmVwYXlpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsdURBQXNEO0FBRXhCLHVHQUZyQixtQ0FBaUIsT0FFMEI7QUE4SXBEOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFrSzVDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBNkIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQzFILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLG1DQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUM5RSxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFB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QywwQkFBMEIsQ0FBQztRQUMvRSxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxDQUFDLDRCQUE0QixHQUFHLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDO1FBQ25GLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxpQkFBaUIsQ0FBQyw4QkFBOEIsQ0FBQztRQUN2RixJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQUNuRCxDQUFDO0NBQ0o7QUF2T0Qsd0NBdU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUHJlcGF5SW5zdGFuY2UgfSBmcm9tICcuL3JlZGlzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1ByZXBheUluc3RhbmNlIGFzIFByZXBheUluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJFRElTOjpQcmVwYXlJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcmVwYXlJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9QYXk6IEluZGljYXRlcyB3aGV0aGVyIGF1dG9tYXRpYyBwYXltZW50IGlzIGVuYWJsZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBmYWxzZTogQXV0b21hdGljIHBheW1lbnQgaXMgZGlzYWJsZWQuIFlvdSBuZWVkIHRvIGdvIHRvIE9yZGVycyB0byBtYWtlIHRoZSBwYXltZW50IG9uY2UgYW4gb3JkZXIgaXMgZ2VuZXJhdGVkLiBcbiAgICAgKiB0cnVlOiBBdXRvbWF0aWMgcGF5bWVudCBpcyBlbmFibGVkLiBUaGUgcGF5bWVudCBpcyBhdXRvbWF0aWNhbGx5IG1hZGUuXG4gICAgICogRGVmYXVsdCBpcyBGYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9QYXk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1JlbmV3RHVyYXRpb246IFRoZSBhdXRvLXJlbmV3YWwgcGVyaW9kLiBWYWxpZCB2YWx1ZXM6IDEgdG8gMTIuIFxuICAgICAqICBXaGVuIHRoZSBpbnN0YW5jZSBpcyBhYm91dCB0byBleHBpcmUsIHRoZSBpbnN0YW5jZSBpcyBhdXRvbWF0aWNhbGx5IHJlbmV3ZWQgXG4gICAgICogYmFzZWQgb24gdGhlIG51bWJlciBvZiBtb250aHMgc3BlY2lmaWVkIGJ5IHRoaXMgcGFyYW1ldGVyLiBcbiAgICAgKiBOb3RlIFRoaXMgcGFyYW1ldGVyIGlzIHZhbGlkIG9ubHkgd2hlbiBDaGFyZ2VUeXBlIGlzIHNldCB0byBQcmVQYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ld0R1cmF0aW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja3VwUG9saWN5OiBCYWNrdXAgcG9saWN5XG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFja3VwUG9saWN5PzogUm9zUHJlcGF5SW5zdGFuY2UuQmFja3VwUG9saWN5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb25uZWN0aW9uczogQ29ubmVjdGlvbiBhZGRyZXNzXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29ubmVjdGlvbnM/OiBSb3NQcmVwYXlJbnN0YW5jZS5Db25uZWN0aW9uc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVsZXRpb25Gb3JjZTogV2hldGhlciBkZXN0cm95IGluc3RhbmNlIHdoZW4gaXQgaXMgaW4gcmVjeWNsZS4gRGVmYXVsdCBpcyBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5naW5lVmVyc2lvbjogRW5naW5lIHZlcnNpb24uIFN1cHBvcnRlZCB2YWx1ZXM6IDIuOCwgNC4wLCA1LjAsIDYuMCBhbmQgNy4wXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5naW5lVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGV2aWN0aW9uUG9saWN5OiBUaGUgZXZpY3Rpb24gcG9saWN5IG9mIGNhY2hlIGRhdGEgc3RvcmFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBldmljdGlvblBvbGljeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlQ2xhc3M6IFJlZGlzIGluc3RhbmNlIHR5cGUuIFJlZmVyIHRoZSBSZWRpcyBpbnN0YW5jZSB0eXBlIHJlZmVyZW5jZSwgc3VjaCBhcyAncmVkaXMubWFzdGVyLnNtYWxsLmRlZmF1bHQnLCAncmVkaXMubWFzdGVyLjR4bGFyZ2UuZGVmYXVsdCcsICdyZWRpcy5zaGFyZGluZy5taWQuZGVmYXVsdCcgZXRjXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDbGFzcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTWFpbnRhaW5UaW1lOiBJbnN0YW5jZSBtYWludGFpbiB0aW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTWFpbnRhaW5UaW1lPzogUm9zUHJlcGF5SW5zdGFuY2UuSW5zdGFuY2VNYWludGFpblRpbWVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSBpbnN0YW5jZSwgWzIsIDEyOF0gRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMsIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlIGluIHNpemUsIGNhbiBjb250YWluIG51bWJlcnMsICdfJyBvciAnLicsICctJ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhc3N3b3JkOiBUaGUgcGFzc3dvcmQgb2YgcmVkaXMgaW5zdGFuY2UubGVuZ3RoIDggdG8gMzAgY2hhcmFjdGVycywgbmVlZCB0byBjb250YWluIGJvdGggdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVycyBhbmQgbnVtYmVyc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBUaGUgcGVyaW9kIG9mIG9yZGVyLCB3aGVuIGNob29zZSBQcmVwYWlkIHJlcXVpcmVkLm9wdGlvbmFsIHZhbHVlIDEtOSwgMTIsIDI0LCAzNiwgNjAgVW5pdCBpbiBtb250aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2RVbml0OiBUaGUgdW5pdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGR1cmF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogTW9udGhcbiAgICAgKiBZZWFyXG4gICAgICogRGVmYXVsdCB2YWx1ZTogTW9udGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kVW5pdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb2R1Y3RUeXBlOiBQcm9kdWN0IHR5cGUuIFZhbGlkIHZhbHVlczpMb2NhbDogQ29tbXVuaXR5IEVkaXRpb24oTG9jYWwpIG9yIEVuaGFuY2VkIEVkaXRpb24oTG9jYWwpVGFpcl9yZGI6IFBlcmZvcm1hbmNlIEVuaGFuY2VkKENsb3VkIERpc2spVGFpcl9zY206IFBlcnNpc3RlbnQgTWVtb3J5KENsb3VkIERpc2spVGFpcl9lc3NkOiBDYXBhY2l0eSBTdG9yYWdlKENsb3VkIERpc2spT25FQ1M6IENvbW11bml0eSBFZGl0aW9uKENsb3VkIERpc2spXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvZHVjdFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY29uZGFyeVpvbmVJZDogVGhlIHNlY29uZGFyeSB6b25lIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWNvbmRhcnlab25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFRoZSBJRHMgb2Ygc2VjdXJpdHkgZ3JvdXBzLiBTZXBhcmF0ZSBtdWx0aXBsZSBzZWN1cml0eSBncm91cCBJRHMgd2l0aCBjb21tYXMgKCwpIGFuZCB1cCB0byAxMCBjYW4gYmUgc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNzbEVuYWJsZWQ6IE1vZGlmaWVzIHRoZSBTU0wgc3RhdHVzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogRGlzYWJsZTogZGlzYWJsZXMgU1NMIGVuY3J5cHRpb24uXG4gICAgICogRW5hYmxlOiBlbmFibGVzIFNTTCBlbmNyeXB0aW9uLlxuICAgICAqIFVwZGF0ZTogdXBkYXRlcyB0aGUgU1NMIGNlcnRpZmljYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNzbEVuYWJsZWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byByZWRpcy4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSByZWRpcy4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NQcmVwYXlJbnN0YW5jZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhaXJDb25maWc6IFRhaXIgY29uZmlnLiBUaGlzIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgb25seSBpZiB0aGUgSW5zdGFuY2VDbGFzcyBwYXJhbWV0ZXIgaXMgc3RhcnQgd2l0aCB0YWlyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhaXJDb25maWc/OiBSb3NQcmVwYXlJbnN0YW5jZS5UYWlyQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVGhlIFZQQyBpZCB0byBjcmVhdGUgZWNzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjUGFzc3dvcmRGcmVlOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgcGFzc3dvcmQgZnJlZSBmb3IgYWNjZXNzIHdpdGhpbiB0aGUgVlBDLiBJZiBzZXQgdG86XG4gICAgICogLSB0cnVlOiBlbmFibGVzIHBhc3N3b3JkIGZyZWUuXG4gICAgICogLSBmYWxzZTogZGlzYWJsZXMgcGFzc3dvcmQgZnJlZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNQYXNzd29yZEZyZWU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgdlN3aXRjaCBJZCB0byBjcmVhdGUgZWNzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVJZDogVGhlIHpvbmUgaWQgb2YgaW5wdXQgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UkVESVM6OlByZXBheUluc3RhbmNlYFxuICovXG5leHBvcnQgY2xhc3MgUHJlcGF5SW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFyY2hpdGVjdHVyZVR5cGU6IFRoZSBhcmNoaXRlY3R1cmUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcmNoaXRlY3R1cmVUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQmFuZHdpZHRoOiBUaGUgYmFuZHdpZHRoIG9mIHRoZSBpbnN0YW5jZS4gVW5pdDogTWJpdC9zLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmFuZHdpZHRoOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2FwYWNpdHk6IFRoZSBzdG9yYWdlIGNhcGFjaXR5IG9mIHRoZSBpbnN0YW5jZS4gVW5pdDogTUIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDYXBhY2l0eTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDaGFyZ2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2xhc3NpY0lubmVyQ29ubmVjdGlvblBvcnQ6IFRoZSBjbGFzc2ljIGlubmVyIGNvbm5lY3Rpb24gcG9ydCBvZiB0aGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsYXNzaWNJbm5lckNvbm5lY3Rpb25Qb3J0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2xhc3NpY0lubmVyQ29ubmVjdGlvblN0cmluZzogVGhlIGNsYXNzaWMgaW5uZXIgY29ubmVjdGlvbiBzdHJpbmcgb2YgdGhlIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbGFzc2ljSW5uZXJDb25uZWN0aW9uU3RyaW5nOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29ubmVjdGlvbkRvbWFpbjogQ29ubmVjdGlvbiBkb21haW4gb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbm5lY3Rpb25Eb21haW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDb25uZWN0aW9uczogVGhlIG1heGltdW0gbnVtYmVyIG9mIGNvbm5lY3Rpb25zIHN1cHBvcnRlZCBieSB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb25uZWN0aW9uczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERpcmVjdENvbm5lY3Rpb25Qb3J0OiBUaGUgZGlyZWN0IGNvbm5lY3Rpb24gcG9ydCBvZiB0aGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRpcmVjdENvbm5lY3Rpb25Qb3J0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGlyZWN0Q29ubmVjdGlvblN0cmluZzogVGhlIGRpcmVjdCBjb25uZWN0aW9uIHN0cmluZyBvZiB0aGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRpcmVjdENvbm5lY3Rpb25TdHJpbmc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmdpbmVWZXJzaW9uOiBUaGUgZW5naW5lIHZlcnNpb24gb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRW5naW5lVmVyc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhhc1JlbmV3Q2hhbmdlT3JkZXI6IEluZGljYXRlcyB3aGV0aGVyIHRoZSBBbGliYWJhIENsb3VkIGFjY291bnQgaGFzIHBlbmRpbmcgcmVuZXdhbCBvciBzY2FsaW5nIG9yZGVyc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySGFzUmVuZXdDaGFuZ2VPcmRlcjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlQ2xhc3M6IFJlZGlzIGluc3RhbmNlIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUNsYXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogSW5zdGFuY2UgaWQgb2YgY3JlYXRlZCByZWRpcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZU5hbWU6IE5hbWUgb2YgY3JlYXRlZCByZWRpcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlVHlwZTogVGhlIGVuZ2luZSB0eXBlIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5ldHdvcmtUeXBlOiBUaGUgbmV0d29yayB0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmV0d29ya1R5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOb2RlVHlwZTogVGhlIHR5cGUgb2Ygbm9kZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vZGVUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3JkZXJJZDogT3JkZXIgSWQgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQYWNrYWdlVHlwZTogVGhlIHBsYW4gdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBhY2thZ2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUG9ydDogUG9ydCBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByaXZhdGVJcDogVGhlIGludGVybmFsIElQIGFkZHJlc3Mgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJpdmF0ZUlwOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljQ29ubmVjdGlvblBvcnQ6IFRoZSBwdWJsaWMgY29ubmVjdGlvbiBwb3J0IG9mIHRoZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVibGljQ29ubmVjdGlvblBvcnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQdWJsaWNDb25uZWN0aW9uU3RyaW5nOiBUaGUgcHVibGljIGNvbm5lY3Rpb24gc3RyaW5nIG9mIHRoZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVibGljQ29ubmVjdGlvblN0cmluZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFFQUzogVGhlIHF1ZXJpZXMgcGVyIHNlY29uZCAoUVBTKSBzdXBwb3J0ZWQgYnkgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBpbnN0YW5jZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVlN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIHZTd2l0Y2guXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU3dpdGNoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNJZDogVGhlIElEIG9mIHRoZSBWUEMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY1ByaXZhdGVDb25uZWN0aW9uUG9ydDogVGhlIHZwYyBwcml2YXRlIGNvbm5lY3Rpb24gcG9ydCBvZiB0aGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY1ByaXZhdGVDb25uZWN0aW9uUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY1ByaXZhdGVDb25uZWN0aW9uU3RyaW5nOiBUaGUgdnBjIHByaXZhdGUgY29ubmVjdGlvbiBzdHJpbmcgb2YgdGhlIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNQcml2YXRlQ29ubmVjdGlvblN0cmluZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFpvbmVJZDogVGhlIElEIG9mIHRoZSB6b25lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyWm9uZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UkVESVM6OlByZXBheUluc3RhbmNlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBQcmVwYXlJbnN0YW5jZVByb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zUHJlcGF5SW5zdGFuY2UgPSBuZXcgUm9zUHJlcGF5SW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjb25uZWN0aW9uczogcHJvcHMuY29ubmVjdGlvbnMsXG4gICAgICAgICAgICBlbmdpbmVWZXJzaW9uOiBwcm9wcy5lbmdpbmVWZXJzaW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIGV2aWN0aW9uUG9saWN5OiBwcm9wcy5ldmljdGlvblBvbGljeSxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiBwcm9wcy5zZWN1cml0eUdyb3VwSWQsXG4gICAgICAgICAgICBwcm9kdWN0VHlwZTogcHJvcHMucHJvZHVjdFR5cGUsXG4gICAgICAgICAgICBpbnN0YW5jZU1haW50YWluVGltZTogcHJvcHMuaW5zdGFuY2VNYWludGFpblRpbWUsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBlcmlvZCA9PT0gbnVsbCA/IDEgOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICBpbnN0YW5jZUNsYXNzOiBwcm9wcy5pbnN0YW5jZUNsYXNzLFxuICAgICAgICAgICAgdnBjUGFzc3dvcmRGcmVlOiBwcm9wcy52cGNQYXNzd29yZEZyZWUsXG4gICAgICAgICAgICBhdXRvUGF5OiBwcm9wcy5hdXRvUGF5ID09PSB1bmRlZmluZWQgfHwgcHJvcHMuYXV0b1BheSA9PT0gbnVsbCA/IHRydWUgOiBwcm9wcy5hdXRvUGF5LFxuICAgICAgICAgICAgc2Vjb25kYXJ5Wm9uZUlkOiBwcm9wcy5zZWNvbmRhcnlab25lSWQsXG4gICAgICAgICAgICBhdXRvUmVuZXdEdXJhdGlvbjogcHJvcHMuYXV0b1JlbmV3RHVyYXRpb24sXG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHByb3BzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIGRlbGV0aW9uRm9yY2U6IHByb3BzLmRlbGV0aW9uRm9yY2UgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5kZWxldGlvbkZvcmNlID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgc3NsRW5hYmxlZDogcHJvcHMuc3NsRW5hYmxlZCxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIHRhaXJDb25maWc6IHByb3BzLnRhaXJDb25maWcsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgcGVyaW9kVW5pdDogcHJvcHMucGVyaW9kVW5pdCxcbiAgICAgICAgICAgIGJhY2t1cFBvbGljeTogcHJvcHMuYmFja3VwUG9saWN5LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1ByZXBheUluc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJBcmNoaXRlY3R1cmVUeXBlID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckFyY2hpdGVjdHVyZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckJhbmR3aWR0aCA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJCYW5kd2lkdGg7XG4gICAgICAgIHRoaXMuYXR0ckNhcGFjaXR5ID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckNhcGFjaXR5O1xuICAgICAgICB0aGlzLmF0dHJDaGFyZ2VUeXBlID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckNoYXJnZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckNsYXNzaWNJbm5lckNvbm5lY3Rpb25Qb3J0ID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckNsYXNzaWNJbm5lckNvbm5lY3Rpb25Qb3J0O1xuICAgICAgICB0aGlzLmF0dHJDbGFzc2ljSW5uZXJDb25uZWN0aW9uU3RyaW5nID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckNsYXNzaWNJbm5lckNvbm5lY3Rpb25TdHJpbmc7XG4gICAgICAgIHRoaXMuYXR0ckNvbm5lY3Rpb25Eb21haW4gPSByb3NQcmVwYXlJbnN0YW5jZS5hdHRyQ29ubmVjdGlvbkRvbWFpbjtcbiAgICAgICAgdGhpcy5hdHRyQ29ubmVjdGlvbnMgPSByb3NQcmVwYXlJbnN0YW5jZS5hdHRyQ29ubmVjdGlvbnM7XG4gICAgICAgIHRoaXMuYXR0ckRpcmVjdENvbm5lY3Rpb25Qb3J0ID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckRpcmVjdENvbm5lY3Rpb25Qb3J0O1xuICAgICAgICB0aGlzLmF0dHJEaXJlY3RDb25uZWN0aW9uU3RyaW5nID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckRpcmVjdENvbm5lY3Rpb25TdHJpbmc7XG4gICAgICAgIHRoaXMuYXR0ckVuZ2luZVZlcnNpb24gPSByb3NQcmVwYXlJbnN0YW5jZS5hdHRyRW5naW5lVmVyc2lvbjtcbiAgICAgICAgdGhpcy5hdHRySGFzUmVuZXdDaGFuZ2VPcmRlciA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJIYXNSZW5ld0NoYW5nZU9yZGVyO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUNsYXNzID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckluc3RhbmNlQ2xhc3M7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSByb3NQcmVwYXlJbnN0YW5jZS5hdHRySW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VOYW1lID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckluc3RhbmNlTmFtZTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VUeXBlID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ckluc3RhbmNlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyTmV0d29ya1R5cGUgPSByb3NQcmVwYXlJbnN0YW5jZS5hdHRyTmV0d29ya1R5cGU7XG4gICAgICAgIHRoaXMuYXR0ck5vZGVUeXBlID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ck5vZGVUeXBlO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0ck9yZGVySWQ7XG4gICAgICAgIHRoaXMuYXR0clBhY2thZ2VUeXBlID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0clBhY2thZ2VUeXBlO1xuICAgICAgICB0aGlzLmF0dHJQb3J0ID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0clBvcnQ7XG4gICAgICAgIHRoaXMuYXR0clByaXZhdGVJcCA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJQcml2YXRlSXA7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0Nvbm5lY3Rpb25Qb3J0ID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0clB1YmxpY0Nvbm5lY3Rpb25Qb3J0O1xuICAgICAgICB0aGlzLmF0dHJQdWJsaWNDb25uZWN0aW9uU3RyaW5nID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0clB1YmxpY0Nvbm5lY3Rpb25TdHJpbmc7XG4gICAgICAgIHRoaXMuYXR0clFwcyA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJRcHM7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlR3JvdXBJZCA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJSZXNvdXJjZUdyb3VwSWQ7XG4gICAgICAgIHRoaXMuYXR0clZTd2l0Y2hJZCA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJWU3dpdGNoSWQ7XG4gICAgICAgIHRoaXMuYXR0clZwY0lkID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0clZwY0lkO1xuICAgICAgICB0aGlzLmF0dHJWcGNQcml2YXRlQ29ubmVjdGlvblBvcnQgPSByb3NQcmVwYXlJbnN0YW5jZS5hdHRyVnBjUHJpdmF0ZUNvbm5lY3Rpb25Qb3J0O1xuICAgICAgICB0aGlzLmF0dHJWcGNQcml2YXRlQ29ubmVjdGlvblN0cmluZyA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJWcGNQcml2YXRlQ29ubmVjdGlvblN0cmluZztcbiAgICAgICAgdGhpcy5hdHRyWm9uZUlkID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0clpvbmVJZDtcbiAgICB9XG59XG4iXX0=