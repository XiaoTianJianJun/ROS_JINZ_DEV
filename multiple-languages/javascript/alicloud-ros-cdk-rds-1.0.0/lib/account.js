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
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQTZDdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlyQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1CLEVBQUUsbUNBQTJDLElBQUk7UUFDOUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFVBQVUsR0FBRyxJQUFJLDBCQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN6QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUTtZQUM3RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQ2pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUN0RCxDQUFDO0NBQ0o7QUFoQ0QsMEJBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQWNjb3VudCB9IGZyb20gJy4vcmRzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FjY291bnQgYXMgQWNjb3VudFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpSRFM6OkFjY291bnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2NvdW50TmFtZTogQWNjb3VudCBuYW1lLCB3aGljaCBtdXN0IGJlIHVuaXF1ZSBhbmQgbWVldCB0aGUgZm9sbG93aW5nIHJlcXVpcmVtZW50czpcbiAgICAgKiBTdGFydCB3aXRoIGEgbGV0dGVyO1xuICAgICAqIENvbnNpc3Qgb2YgbG93ZXItY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGFuZCB1bmRlcnNjb3JlcyAoXyk7XG4gICAgICogQ29udGFpbiBubyBtb3JlIHRoYW4gMTYgY2hhcmFjdGVycy5cbiAgICAgKiBGb3Igb3RoZXIgaW52YWxpZCBjaGFyYWN0ZXJzLCBzZWUgRm9yYmlkZGVuIGtleXdvcmRzIHRhYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY291bnROYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjb3VudFBhc3N3b3JkOiBUaGUgYWNjb3VudCBwYXNzd29yZCBmb3IgdGhlIGRhdGFiYXNlIGluc3RhbmNlLiBJdCBtYXkgY29uc2lzdCBvZiBsZXR0ZXJzLCBkaWdpdHMsIG9yIHVuZGVybGluZXMsIHdpdGggYSBsZW5ndGggb2YgOCB0byAzMiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY291bnRQYXNzd29yZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiSW5zdGFuY2VJZDogUkRTIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY291bnREZXNjcmlwdGlvbjogQWNjb3VudCByZW1hcmtzLlxuICAgICAqIEl0IGNhbm5vdCBiZWdpbiB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICogSXQgbXVzdCBzdGFydCB3aXRoIGEgQ2hpbmVzZSBjaGFyYWN0ZXIgb3IgRW5nbGlzaCBsZXR0ZXIuXG4gICAgICogSXQgY2FuIGluY2x1ZGUgQ2hpbmVzZSBhbmQgRW5nbGlzaCBjaGFyYWN0ZXJzL2xldHRlcnMsIHVuZGVyc2NvcmVzIChfKSwgaHlwaGVucyAoLSksIGFuZCBkaWdpdHMuXG4gICAgICogVGhlIGxlbmd0aCBtYXkgYmUgMi0yNTYgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NvdW50RGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjb3VudFR5cGU6IFByaXZpbGVnZSB0eXBlIG9mIGFjY291bnQuXG4gICAgICogTm9ybWFsOiBDb21tb24gcHJpdmlsZWdlLlxuICAgICAqIFN1cGVyOiBIaWdoIHByaXZpbGVnZS4gQW5kIHRoZSBkZWZhdWx0IHZhbHVlIGlzIE5vcm1hbC5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciBpcyB2YWxpZCBmb3IgTXlTUUwgNS41LzUuNiBvbmx5LlxuICAgICAqIE15U1FMIDUuNywgU1FMIFNlcnZlciAyMDEyLzIwMTYsIFBvc3RncmVTUUwsIGFuZCBQUEFTIGVhY2ggY2FuIGhhdmUgb25seSBvbmUgaW5pdGlhbCBhY2NvdW50LiBPdGhlciBhY2NvdW50cyBhcmUgY3JlYXRlZCBieSB0aGUgaW5pdGlhbCBhY2NvdW50IHRoYXQgaGFzIGxvZ2dlZCBvbiB0byB0aGUgZGF0YWJhc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudFR5cGU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJEUzo6QWNjb3VudGBcbiAqL1xuZXhwb3J0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2NvdW50TmFtZTogQWNjb3VudCBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2NvdW50TmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJEUzo6QWNjb3VudGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQWNjb3VudFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FjY291bnQgPSBuZXcgUm9zQWNjb3VudCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGFjY291bnREZXNjcmlwdGlvbjogcHJvcHMuYWNjb3VudERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGJJbnN0YW5jZUlkOiBwcm9wcy5kYkluc3RhbmNlSWQsXG4gICAgICAgICAgICBhY2NvdW50VHlwZTogcHJvcHMuYWNjb3VudFR5cGUgPyBwcm9wcy5hY2NvdW50VHlwZSA6ICdOb3JtYWwnLFxuICAgICAgICAgICAgYWNjb3VudFBhc3N3b3JkOiBwcm9wcy5hY2NvdW50UGFzc3dvcmQsXG4gICAgICAgICAgICBhY2NvdW50TmFtZTogcHJvcHMuYWNjb3VudE5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNjb3VudDtcbiAgICAgICAgdGhpcy5hdHRyQWNjb3VudE5hbWUgPSByb3NBY2NvdW50LmF0dHJBY2NvdW50TmFtZTtcbiAgICB9XG59XG4iXX0=