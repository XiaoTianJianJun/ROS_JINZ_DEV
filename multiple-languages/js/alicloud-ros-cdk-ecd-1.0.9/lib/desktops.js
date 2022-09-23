"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desktops = exports.DesktopsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecd_generated_1 = require("./ecd.generated");
Object.defineProperty(exports, "DesktopsProperty", { enumerable: true, get: function () { return ecd_generated_1.RosDesktops; } });
/**
 * A ROS resource type:  `ALIYUN::ECD::Desktops`
 */
class Desktops extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECD::Desktops`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDesktops = new ecd_generated_1.RosDesktops(this, id, {
            userAssignMode: props.userAssignMode,
            userName: props.userName,
            promotionId: props.promotionId,
            policyGroupId: props.policyGroupId,
            autoRenew: props.autoRenew,
            amount: props.amount,
            desktopName: props.desktopName,
            hostname: props.hostname,
            period: props.period,
            volumeEncryptionEnabled: props.volumeEncryptionEnabled,
            autoPay: props.autoPay,
            groupId: props.groupId,
            officeSiteId: props.officeSiteId,
            desktopNameSuffix: props.desktopNameSuffix,
            bundleId: props.bundleId,
            directoryId: props.directoryId,
            endUserId: props.endUserId,
            vpcId: props.vpcId,
            chargeType: props.chargeType,
            volumeEncryptionKey: props.volumeEncryptionKey,
            tags: props.tags,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDesktops;
        this.attrDesktopId = rosDesktops.attrDesktopId;
        this.attrOrderId = rosDesktops.attrOrderId;
    }
}
exports.Desktops = Desktops;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXNrdG9wcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBMEt4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBbUJ0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQix1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUMvQyxDQUFDO0NBQ0o7QUF6REQsNEJBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zRGVza3RvcHMgfSBmcm9tICcuL2VjZC5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEZXNrdG9wcyBhcyBEZXNrdG9wc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ0Q6OkRlc2t0b3BzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlc2t0b3BzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYnVuZGxlSWQ6IFRoZSBJRCBvZiB0aGUgY2xvdWQgZGVza3RvcCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBidW5kbGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb2ZmaWNlU2l0ZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvZmZpY2VTaXRlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBvbGljeUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcG9saWN5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFtb3VudDogVGhlIG51bWJlciBvZiBjbG91ZCBkZXNrdG9wcyB0aGF0IHlvdSB3YW50IHRvIGNyZWF0ZS4gVmFsaWQgdmFsdWVzOiAxIHRvIDMwMC4gRGVmYXVsdFxuICAgICAqIHZhbHVlOiAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFtb3VudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9QYXk6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgcGF5bWVudC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWU6IGVuYWJsZXMgYXV0b21hdGljIHBheW1lbnQuIFlvdSBtdXN0IG1ha2Ugc3VyZSB0aGF0IHlvdXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50XG4gICAgICogaGFzIHN1ZmZpY2llbnQgYmFsYW5jZS4gSWYgeW91ciBBbGliYWJhIENsb3VkIGFjY291bnQgZG9lcyBub3QgaGF2ZSBzdWZmaWNpZW50IGJhbGFuY2UsXG4gICAgICogYWJub3JtYWwgb3JkZXJzIGFyZSBnZW5lcmF0ZWQuXG4gICAgICogZmFsc2U6IGRpc2FibGVzIGF1dG9tYXRpYyBwYXltZW50LiBJbiB0aGlzIGNhc2UsIGFuIG9yZGVyIGlzIGdlbmVyYXRlZCwgYW5kIG5vIHBheW1lbnRcbiAgICAgKiBpcyBhdXRvbWF0aWNhbGx5IG1hZGUuIFlvdSBjYW4gbG9nIG9uIHRvIHRoZSBFRFMgY29uc29sZSBhbmQgY29tcGxldGUgdGhlIHBheW1lbnRcbiAgICAgKiBiYXNlZCBvbiB0aGUgb3JkZXIgSUQgb24gdGhlIE9yZGVycyBwYWdlLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1BheT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvLXJlbmV3YWwgZm9yIHRoZSBjbG91ZCBkZXNrdG9wLiBUaGlzIHBhcmFtZXRlciB0YWtlc1xuICAgICAqIGVmZmVjdCBvbmx5IHdoZW4gdGhlIENoYXJnZVR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBQcmVQYWlkLlxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBlbmFibGVzIGF1dG8tcmVuZXdhbC4gVGhlIHJlbmV3YWwgZHVyYXRpb24gaXMgdGhlIHNhbWUgYXMgdGhlIHN1YnNjcmlwdGlvbiBkdXJhdGlvblxuICAgICAqIHRoYXQgeW91IHNwZWNpZmllZCBmb3IgdGhlIFBlcmlvZCBwYXJhbWV0ZXIgd2hlbiB5b3UgcHVyY2hhc2VkIHRoZSBjbG91ZCBkZXNrdG9wLlxuICAgICAqIGZhbHNlOiBkb2VzIG5vdCBlbmFibGUgYXV0by1yZW5ld2FsLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIGNsb3VkIGRlc2t0b3AuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBQb3N0UGFpZDogcGF5LWFzLXlvdS1nb1xuICAgICAqIFByZVBhaWQ6IHN1YnNjcmlwdGlvblxuICAgICAqIERlZmF1bHQgdmFsdWU6IFBvc3RQYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNrdG9wTmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsb3VkIGRlc2t0b3AuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVza3RvcE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNrdG9wTmFtZVN1ZmZpeDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBhZGQgYSBzdWZmaXggdG8gdGhlIGNsb3VkIGRlc2t0b3AgbmFtZSB3aGVuIHlvdVxuICAgICAqIGNyZWF0ZSBtdWx0aXBsZSBjbG91ZCBkZXNrdG9wcyBhdCBhIHRpbWUuXG4gICAgICogVHJ1ZTogYXV0b21hdGljYWxseSBhZGRzIGEgc3VmZml4LlxuICAgICAqIEZhbHNlOiBkb2VzIG5vdCBhZGQgYSBzdWZmaXguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVza3RvcE5hbWVTdWZmaXg/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBvcGVuIGZvciB1c2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRVc2VySWQ6IFRoZSB1c2VyIElEIHRoYXQgYXV0aG9yaXplcyB0aGUgdXNlIG9mIHRoZSBjbG91ZCBkZXNrdG9wLCAxfjEwMCBjYW4gYmUgc2V0LlxuICAgICAqIER1cmluZyB0aGUgc2FtZSBwZXJpb2QsIG9ubHkgb25lIHVzZXIgY2FuIHVzZSB0aGUgZGVza3RvcC5cbiAgICAgKiBJZiBFbmRVc2VySWQgaXMgbm90IHNldCwgdGhlIGNyZWF0ZWQgY2xvdWQgZGVza3RvcCB3aWxsIG5vdCBiZSBhc3NpZ25lZCB0byBhbnkgdXNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmRVc2VySWQ/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBJZDogZGVza3RvcCBncm91cCBJROOAglxuICAgICAqIE5vdGUgdGhhdCB0aGUgZGVza3RvcCBncm91cCBmdW5jdGlvbiBpcyBjdXJyZW50bHkgaW4gdGhlIGludml0YXRpb24gdGVzdC5cbiAgICAgKiBJZiB5b3Ugd2FudCB0byBleHBlcmllbmNlIGl0LCBwbGVhc2Ugc3VibWl0IGEgd29yayBvcmRlciBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaG9zdG5hbWU6IFRoZSBjdXN0b20gaG9zdG5hbWUgdGhhdCB5b3Ugc3BlY2lmeSBmb3IgdGhlIGNsb3VkIGRlc2t0b3AuIFlvdSBjYW4gb25seSBzcGVjaWZ5IHRoZVxuICAgICAqIGhvc3RuYW1lIG9mIGEgV2luZG93cyBjbG91ZCBkZXNrdG9wIGluIHRoZSB3b3Jrc3BhY2Ugb2YgdGhlIGVudGVycHJpc2UgQUQgYWNjb3VudFxuICAgICAqIHR5cGUuXG4gICAgICogVGhlIGhvc3RuYW1lIG11c3QgbWVldCB0aGUgZm9sbG93aW5nIHJlcXVpcmVtZW50czpcbiAgICAgKiBUaGUgaG9zdG5hbWUgbXVzdCBiZSAyIHRvIDE1IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIFRoZSBob3N0bmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGFuZCBoeXBoZW5zICgtKS4gSXQgY2Fubm90IHN0YXJ0IG9yIGVuZFxuICAgICAqIHdpdGggYSBoeXBoZW4gKC0pLCBjb250YWluIGNvbnNlY3V0aXZlIGh5cGhlbnMgKC0pLCBvciBjb250YWluIG9ubHkgZGlnaXRzLlxuICAgICAqIElmIHlvdSBjcmVhdGUgbXVsdGlwbGUgY2xvdWQgZGVza3RvcHMsIHlvdSBjYW4gc3BlY2lmeSB0aGUgbmFtZXMgb2YgdGhlIGNsb3VkIGRlc2t0b3BzXG4gICAgICogaW4gdGhlIG5hbWVfcHJlZml4W2JlZ2luX251bWJlcixiaXRzXW5hbWVfc3VmZml4IGZvcm1hdC4gRm9yIGV4YW1wbGUsIGlmIHlvdSBzZXQgSG9zdG5hbWUgdG8gZWNkLS0xLDQtdGVzdCwgdGhlIGhvc3RuYW1lIG9mIHRoZSBmaXJzdCBjbG91ZCBkZXNrdG9wIGlzIGVjZC0wMDAxLXRlc3QgYW5kIHRoZSBob3N0bmFtZSBvZlxuICAgICAqIHRoZSBzZWNvbmQgY2xvdWQgZGVza3RvcCBpcyBlY2QtMDAwMi10ZXN0LiBUaGUgcmVzdCBtYXkgYmUgZGVkdWNlZCBieSBhbmFsb2d5LlxuICAgICAqIG5hbWVfcHJlZml4OiB0aGUgcHJlZml4IG9mIHRoZSBob3N0bmFtZS5cbiAgICAgKiBbYmVnaW5fbnVtYmVyLGJpdHNdOiB0aGUgb3JkZXJlZCBudW1iZXJzIGluIHRoZSBob3N0bmFtZS4gYmVnaW5fbnVtYmVyOiB0aGUgc3RhcnQgbnVtYmVyLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogMCB0byA5OTk5OTkuIERlZmF1bHQgdmFsdWU6IDAuIGJpdHM6IHRoZSBkaWdpdC4gVmFsaWQgdmFsdWVzOiAxIHRvIDYuIERlZmF1bHQgdmFsdWU6XG4gICAgICogNi5cbiAgICAgKiBuYW1lX3N1ZmZpeDogdGhlIHN1ZmZpeCBvZiB0aGUgaG9zdG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaG9zdG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBzdWJzY3JpcHRpb24gZHVyYXRpb24uIFRoZSB1bml0IG9mIHRoZSB2YWx1ZSBpcyBzcGVjaWZpZWQgYnkgdGhlIFBlcmlvZFVuaXQgcGFyYW1ldGVyLiBUaGlzIHBhcmFtZXRlciB0YWtlcyBlZmZlY3QgYW5kIGlzIHJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgQ2hhcmdlVHlwZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIFByZVBhaWQuXG4gICAgICogSWYgUGVyaW9kVW5pdCBpcyBtb250aCwgdGhlIHZhbGlkIHJhbmdlIGlzIDEsIDIsIDMsIDYsIDEyLCAyNCwgMzYsIDQ4LDYwXG4gICAgICogSWYgcGVyaW9kVW5pdCBpcyB5ZWFyLCB0aGUgdmFsaWQgcmFuZ2UgaXMgMSB0byA1XG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kVW5pdDogVGhlIHVuaXQgb2YgdGhlIHN1YnNjcmlwdGlvbiBkdXJhdGlvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIE1vbnRoXG4gICAgICogWWVhclxuICAgICAqIERlZmF1bHQgdmFsdWU6IE1vbnRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZFVuaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm9tb3Rpb25JZDogcHJvbW90aW9uIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb21vdGlvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGhlIGxpc3Qgb2YgZGVza3RvcHMgdGFncyBpbiB0aGUgZm9ybSBvZiBrZXkvdmFsdWUgcGFpcnMuXG4gICAgICogWW91IGNhbiBkZWZpbmUgYSBtYXhpbXVtIG9mIDIwIHRhZ3MgZm9yIGVhY2ggZGVza3RvcHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0Rlc2t0b3BzLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlckFzc2lnbk1vZGU6IFRoZSBhc3NpZ25tZW50IG1vZGUgb2YgdGhlIGNsb3VkIGRlc2t0b3AuIERlZmF1bHQgdmFsdWU6IEFMTC5cbiAgICAgKiBBTEw6IElmIHlvdSBzcGVjaWZ5IHRoZSBFbmRVc2VySWQgcGFyYW1ldGVyLCB0aGUgY2xvdWQgZGVza3RvcHMgdGhhdCB5b3UgY3JlYXRlIGFyZVxuICAgICAqIGFzc2lnbmVkIHRvIGVhY2ggcmVndWxhciB1c2VyIHRoYXQgeW91IHNwZWNpZnkuXG4gICAgICogUEVSX1VTRVI6IElmIHlvdSBzcGVjaWZ5IHRoZSBFbmRVc2VySWQgcGFyYW1ldGVyLCB0aGUgY2xvdWQgZGVza3RvcHMgdGhhdCB5b3UgY3JlYXRlXG4gICAgICogYXJlIGV2ZW5seSBhc3NpZ25lZCB0byBhbGwgcmVndWxhciB1c2VycyB0aGF0IHlvdSBzcGVjaWZ5LiBJbiB0aGlzIGNhc2UsIHlvdSBtdXN0XG4gICAgICogbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBBbW91bnQgcGFyYW1ldGVyIGNhbiBiZSBkaXZpZGVkIGJ5IHRoZSBOIHZhbHVlIG9mXG4gICAgICogdGhlIEVuZFVzZXJJZC5OIHBhcmFtZXRlciB0aGF0IHlvdSBzcGVjaWZ5LlxuICAgICAqIE5vdGUgSWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoZSBFbmRVc2VySWQgcGFyYW1ldGVyLCB0aGUgY2xvdWQgZGVza3RvcCB0aGF0IHlvdSBjcmVhdGUgaXNcbiAgICAgKiBub3QgYXNzaWduZWQgdG8gcmVndWxhciB1c2Vycy5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyQXNzaWduTW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJOYW1lOiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgb3BlbiBmb3IgdXNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdm9sdW1lRW5jcnlwdGlvbkVuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGRpc2sgZW5jcnlwdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB2b2x1bWVFbmNyeXB0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2b2x1bWVFbmNyeXB0aW9uS2V5OiBUaGUga2V5IElEIG9mIHRoZSBLTVMgdXNlZCB3aGVuIGRpc2sgZW5jcnlwdGlvbiBpcyBlbmFibGVkLiBJdCBjYW4gYmUgb2J0YWluZWQgdGhyb3VnaCB0aGUgTGlzdEtleXMgaW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZvbHVtZUVuY3J5cHRpb25LZXk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVGhpcyBwYXJhbWV0ZXIgaXMgbm90IG9wZW4gZm9yIHVzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNEOjpEZXNrdG9wc2BcbiAqL1xuZXhwb3J0IGNsYXNzIERlc2t0b3BzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZXNrdG9wSWQ6IFRoZSBJRCBvZiB0aGUgY2xvdWQgZGVza3RvcC4gSWYgbXVsdGlwbGUgY2xvdWQgZGVza3RvcHMgYXJlIGNyZWF0ZWQgaW4gYSBjYWxsLCB0aGVcbklEcyBvZiB0aGUgY2xvdWQgZGVza3RvcHMgYXJlIHJldHVybmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVza3RvcElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3JkZXJJZDogVGhlIElEIG9mIHRoZSBvcmRlci5cbk5vdGUgVGhpcyBwYXJhbWV0ZXIgaXMgcmV0dXJuZWQgb25seSB3aGVuIHRoZSBDaGFyZ2VUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gUHJlUGFpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ0Q6OkRlc2t0b3BzYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEZXNrdG9wc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0Rlc2t0b3BzID0gbmV3IFJvc0Rlc2t0b3BzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdXNlckFzc2lnbk1vZGU6IHByb3BzLnVzZXJBc3NpZ25Nb2RlLFxuICAgICAgICAgICAgdXNlck5hbWU6IHByb3BzLnVzZXJOYW1lLFxuICAgICAgICAgICAgcHJvbW90aW9uSWQ6IHByb3BzLnByb21vdGlvbklkLFxuICAgICAgICAgICAgcG9saWN5R3JvdXBJZDogcHJvcHMucG9saWN5R3JvdXBJZCxcbiAgICAgICAgICAgIGF1dG9SZW5ldzogcHJvcHMuYXV0b1JlbmV3LFxuICAgICAgICAgICAgYW1vdW50OiBwcm9wcy5hbW91bnQsXG4gICAgICAgICAgICBkZXNrdG9wTmFtZTogcHJvcHMuZGVza3RvcE5hbWUsXG4gICAgICAgICAgICBob3N0bmFtZTogcHJvcHMuaG9zdG5hbWUsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIHZvbHVtZUVuY3J5cHRpb25FbmFibGVkOiBwcm9wcy52b2x1bWVFbmNyeXB0aW9uRW5hYmxlZCxcbiAgICAgICAgICAgIGF1dG9QYXk6IHByb3BzLmF1dG9QYXksXG4gICAgICAgICAgICBncm91cElkOiBwcm9wcy5ncm91cElkLFxuICAgICAgICAgICAgb2ZmaWNlU2l0ZUlkOiBwcm9wcy5vZmZpY2VTaXRlSWQsXG4gICAgICAgICAgICBkZXNrdG9wTmFtZVN1ZmZpeDogcHJvcHMuZGVza3RvcE5hbWVTdWZmaXgsXG4gICAgICAgICAgICBidW5kbGVJZDogcHJvcHMuYnVuZGxlSWQsXG4gICAgICAgICAgICBkaXJlY3RvcnlJZDogcHJvcHMuZGlyZWN0b3J5SWQsXG4gICAgICAgICAgICBlbmRVc2VySWQ6IHByb3BzLmVuZFVzZXJJZCxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGNoYXJnZVR5cGU6IHByb3BzLmNoYXJnZVR5cGUsXG4gICAgICAgICAgICB2b2x1bWVFbmNyeXB0aW9uS2V5OiBwcm9wcy52b2x1bWVFbmNyeXB0aW9uS2V5LFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIHBlcmlvZFVuaXQ6IHByb3BzLnBlcmlvZFVuaXQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRGVza3RvcHM7XG4gICAgICAgIHRoaXMuYXR0ckRlc2t0b3BJZCA9IHJvc0Rlc2t0b3BzLmF0dHJEZXNrdG9wSWQ7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWQgPSByb3NEZXNrdG9wcy5hdHRyT3JkZXJJZDtcbiAgICB9XG59XG4iXX0=