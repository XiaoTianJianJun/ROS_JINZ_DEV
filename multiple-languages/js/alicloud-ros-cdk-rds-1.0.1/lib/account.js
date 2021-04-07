"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.AccountProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rds_generated_1 = require("./rds.generated");
Object.defineProperty(exports, "AccountProperty", { enumerable: true, get: function () { return rds_generated_1.RosAccount; } });
/**
 * A ROS resource type:  `ALIYUN::RDS::Account`
 */
class Account extends ros.Resource {
    /**
     * Create a new `ALIYUN::RDS::Account`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAccount = new rds_generated_1.RosAccount(this, id, {
            accountDescription: props.accountDescription,
            dbInstanceId: props.dbInstanceId,
            accountType: props.accountType ? props.accountType : 'Normal',
            accountPassword: props.accountPassword,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountName = rosAccount.attrAccountName;
    }
}
exports.Account = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQTZDdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlyQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1CLEVBQUUsbUNBQTJDLElBQUk7UUFDOUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFVBQVUsR0FBRyxJQUFJLDBCQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN6QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUTtZQUM3RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQ2pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUN0RCxDQUFDO0NBQ0o7QUFoQ0QsMEJBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQWNjb3VudCB9IGZyb20gJy4vcmRzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FjY291bnQgYXMgQWNjb3VudFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpSRFM6OkFjY291bnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY291bnROYW1lOiBBY2NvdW50IG5hbWUsIHdoaWNoIG11c3QgYmUgdW5pcXVlIGFuZCBtZWV0IHRoZSBmb2xsb3dpbmcgcmVxdWlyZW1lbnRzOlxuICAgICAqIFN0YXJ0IHdpdGggYSBsZXR0ZXI7XG4gICAgICogQ29uc2lzdCBvZiBsb3dlci1jYXNlIGxldHRlcnMsIGRpZ2l0cywgYW5kIHVuZGVyc2NvcmVzIChfKTtcbiAgICAgKiBDb250YWluIG5vIG1vcmUgdGhhbiAxNiBjaGFyYWN0ZXJzLlxuICAgICAqIEZvciBvdGhlciBpbnZhbGlkIGNoYXJhY3RlcnMsIHNlZSBGb3JiaWRkZW4ga2V5d29yZHMgdGFibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY291bnRQYXNzd29yZDogVGhlIGFjY291bnQgcGFzc3dvcmQgZm9yIHRoZSBkYXRhYmFzZSBpbnN0YW5jZS4gSXQgbWF5IGNvbnNpc3Qgb2YgbGV0dGVycywgZGlnaXRzLCBvciB1bmRlcmxpbmVzLCB3aXRoIGEgbGVuZ3RoIG9mIDggdG8gMzIgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NvdW50UGFzc3dvcmQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VJZDogUkRTIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjb3VudERlc2NyaXB0aW9uOiBBY2NvdW50IHJlbWFya3MuXG4gICAgICogSXQgY2Fubm90IGJlZ2luIHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBDaGluZXNlIGNoYXJhY3RlciBvciBFbmdsaXNoIGxldHRlci5cbiAgICAgKiBJdCBjYW4gaW5jbHVkZSBDaGluZXNlIGFuZCBFbmdsaXNoIGNoYXJhY3RlcnMvbGV0dGVycywgdW5kZXJzY29yZXMgKF8pLCBoeXBoZW5zICgtKSwgYW5kIGRpZ2l0cy5cbiAgICAgKiBUaGUgbGVuZ3RoIG1heSBiZSAyLTI1NiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY291bnREZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY291bnRUeXBlOiBQcml2aWxlZ2UgdHlwZSBvZiBhY2NvdW50LlxuICAgICAqIE5vcm1hbDogQ29tbW9uIHByaXZpbGVnZS5cbiAgICAgKiBTdXBlcjogSGlnaCBwcml2aWxlZ2UuIEFuZCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBOb3JtYWwuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgaXMgdmFsaWQgZm9yIE15U1FMIDUuNS81LjYgb25seS5cbiAgICAgKiBNeVNRTCA1LjcsIFNRTCBTZXJ2ZXIgMjAxMi8yMDE2LCBQb3N0Z3JlU1FMLCBhbmQgUFBBUyBlYWNoIGNhbiBoYXZlIG9ubHkgb25lIGluaXRpYWwgYWNjb3VudC4gT3RoZXIgYWNjb3VudHMgYXJlIGNyZWF0ZWQgYnkgdGhlIGluaXRpYWwgYWNjb3VudCB0aGF0IGhhcyBsb2dnZWQgb24gdG8gdGhlIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY291bnRUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpSRFM6OkFjY291bnRgXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY2NvdW50TmFtZTogQWNjb3VudCBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2NvdW50TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJEUzo6QWNjb3VudGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQWNjb3VudFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FjY291bnQgPSBuZXcgUm9zQWNjb3VudCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGFjY291bnREZXNjcmlwdGlvbjogcHJvcHMuYWNjb3VudERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGJJbnN0YW5jZUlkOiBwcm9wcy5kYkluc3RhbmNlSWQsXG4gICAgICAgICAgICBhY2NvdW50VHlwZTogcHJvcHMuYWNjb3VudFR5cGUgPyBwcm9wcy5hY2NvdW50VHlwZSA6ICdOb3JtYWwnLFxuICAgICAgICAgICAgYWNjb3VudFBhc3N3b3JkOiBwcm9wcy5hY2NvdW50UGFzc3dvcmQsXG4gICAgICAgICAgICBhY2NvdW50TmFtZTogcHJvcHMuYWNjb3VudE5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNjb3VudDtcbiAgICAgICAgdGhpcy5hdHRyQWNjb3VudE5hbWUgPSByb3NBY2NvdW50LmF0dHJBY2NvdW50TmFtZTtcbiAgICB9XG59XG4iXX0=