"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.GroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vs_generated_1 = require("./vs.generated");
Object.defineProperty(exports, "GroupProperty", { enumerable: true, get: function () { return vs_generated_1.RosGroup; } });
/**
 * A ROS resource type:  `ALIYUN::VS::Group`
 */
class Group extends ros.Resource {
    /**
     * Create a new `ALIYUN::VS::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosGroup = new vs_generated_1.RosGroup(this, id, {
            app: props.app,
            inProtocol: props.inProtocol,
            callback: props.callback,
            description: props.description,
            playDomain: props.playDomain,
            enabled: props.enabled,
            region: props.region,
            pushDomain: props.pushDomain,
            lazyPull: props.lazyPull,
            outProtocol: props.outProtocol,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGbId = rosGroup.attrGbId;
        this.attrGbIp = rosGroup.attrGbIp;
        this.attrGbPort = rosGroup.attrGbPort;
        this.attrId = rosGroup.attrId;
    }
}
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQTBDO0FBRXJCLDhGQUZaLHVCQUFRLE9BRWlCO0FBaUVsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBMkJuQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7Q0FDSjtBQXhERCxzQkF3REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NHcm91cCB9IGZyb20gJy4vdnMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zR3JvdXAgYXMgR3JvdXBQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlM6Okdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluUHJvdG9jb2w6IEFjY2VzcyBwcm90b2NvbCB1c2VkIGJ5IHRoZSBzcGFjZS5cbiAgICAgKiBWYWx1ZTogZ2IyODE4MSwgcnRtcFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluUHJvdG9jb2w6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBTcGFjZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvdXRQcm90b2NvbDogUGxheSBwcm90b2NvbCB1c2VkIGJ5IHRoZSBzcGFjZSwgbXVsdGl2YWx1ZWQgc2VwYXJhdGVkIGJ5IGNvbW1hcy5cbiAgICAgKiBWYWx1ZTogZmx2LCBobHMsIHJ0bXBcbiAgICAgKi9cbiAgICByZWFkb25seSBvdXRQcm90b2NvbDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBsYXlEb21haW46IFVzZSBvZiB0aGUgZG9tYWluIG5hbWUgc3BhY2UgYnJvYWRjYXN0IHN0cmVhbS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwbGF5RG9tYWluOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHVzaERvbWFpbjogUGx1ZyBmbG93IGRvbWFpbiBuYW1lIHNwYWNlIHRvIHVzZS4gKE9ubHkgYWNjZXNzIHRvIHRoZSBzcGFjZSBydG1wKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHB1c2hEb21haW46IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWdpb246IFNwYWNlIGJlbG9uZ3MgdG8gdGhlIHJlZ2lvbiwgYXMgYSBzZXJ2aWNlIGNlbnRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHA6IEFwcGxpY2F0aW9uIG5hbWUgc3BhY2UgdXNlZCwgdGhlIGRlZmF1bHQgbGl2ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHA/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2FsbGJhY2s6IFVwZGF0aW5nIHRoZSBzcGFjZSBjYWxsYmFjayBkZXZpY2UgLyBmbG93IHN0YXRlXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FsbGJhY2s/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFNwYWNlIGRlc2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZWQ6IFNwYWNlIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGF6eVB1bGw6IFdoZXRoZXIgdG8gZW5hYmxlIG9uLWRlbWFuZCBwdWxsIGZsb3csIGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBsYXp5UHVsbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlZTOjpHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR2JJZDogR0IgSUQgc3BhY2UgcHJvdmlkZWQuIChBcHBsaWVzIG9ubHkgdG8gYWNjZXNzIHRoZSBzcGFjZSBtYXJrZWQgU3RhdGVzKVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR2JJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHYklwOiBHQiBzaWduYWxpbmcgc2VydmVyIGFkZHJlc3Mgc3BhY2UgcHJvdmlkZWQuIChBcHBsaWVzIG9ubHkgdG8gYWNjZXNzIHRoZSBzcGFjZSBtYXJrZWQgU3RhdGVzKVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR2JJcDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHYlBvcnQ6IEdCIFBvcnQgc3BhY2UgcHJvdmlkZWQuIChBcHBsaWVzIG9ubHkgdG8gYWNjZXNzIHRoZSBzcGFjZSBtYXJrZWQgU3RhdGVzKVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR2JQb3J0OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElkOiBTcGFjZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlM6Okdyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0dyb3VwID0gbmV3IFJvc0dyb3VwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYXBwOiBwcm9wcy5hcHAsXG4gICAgICAgICAgICBpblByb3RvY29sOiBwcm9wcy5pblByb3RvY29sLFxuICAgICAgICAgICAgY2FsbGJhY2s6IHByb3BzLmNhbGxiYWNrLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcGxheURvbWFpbjogcHJvcHMucGxheURvbWFpbixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHByb3BzLmVuYWJsZWQsXG4gICAgICAgICAgICByZWdpb246IHByb3BzLnJlZ2lvbixcbiAgICAgICAgICAgIHB1c2hEb21haW46IHByb3BzLnB1c2hEb21haW4sXG4gICAgICAgICAgICBsYXp5UHVsbDogcHJvcHMubGF6eVB1bGwsXG4gICAgICAgICAgICBvdXRQcm90b2NvbDogcHJvcHMub3V0UHJvdG9jb2wsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0dyb3VwO1xuICAgICAgICB0aGlzLmF0dHJHYklkID0gcm9zR3JvdXAuYXR0ckdiSWQ7XG4gICAgICAgIHRoaXMuYXR0ckdiSXAgPSByb3NHcm91cC5hdHRyR2JJcDtcbiAgICAgICAgdGhpcy5hdHRyR2JQb3J0ID0gcm9zR3JvdXAuYXR0ckdiUG9ydDtcbiAgICAgICAgdGhpcy5hdHRySWQgPSByb3NHcm91cC5hdHRySWQ7XG4gICAgfVxufVxuIl19