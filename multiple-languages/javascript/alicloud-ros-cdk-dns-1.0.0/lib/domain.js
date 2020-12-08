"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = exports.DomainProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dns_generated_1 = require("./dns.generated");
Object.defineProperty(exports, "DomainProperty", { enumerable: true, get: function () { return dns_generated_1.RosDomain; } });
/**
 * A ROS resource type:  `ALIYUN::DNS::Domain`
 */
class Domain extends ros.Resource {
    /**
     * Create a new `ALIYUN::DNS::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDomain = new dns_generated_1.RosDomain(this, id, {
            domainName: props.domainName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrDnsServers = rosDomain.attrDnsServers;
        this.attrDomainId = rosDomain.attrDomainId;
        this.attrDomainName = rosDomain.attrDomainName;
        this.attrGroupId = rosDomain.attrGroupId;
        this.attrGroupName = rosDomain.attrGroupName;
        this.attrPunyCode = rosDomain.attrPunyCode;
    }
}
exports.Domain = Domain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUFrQnBDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQ3BDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBa0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUM3RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDekIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBM0RELHdCQTJEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RvbWFpbiB9IGZyb20gJy4vZG5zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RvbWFpbiBhcyBEb21haW5Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RE5TOjpEb21haW5gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRG9tYWluUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbk5hbWU6IERvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IERvbWFpbiBuYW1lIGdyb3VwaW5nLCB0aGUgZGVmYXVsdCBpcyB0aGUgXCJkZWZhdWx0IGdyb3VwaW5nXCIgR3JvdXBJZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkROUzo6RG9tYWluYFxuICovXG5leHBvcnQgY2xhc3MgRG9tYWluIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG5zU2VydmVyczogVGhlIEROUyBsaXN0IGZvciB0aGUgZG9tYWluIG5hbWUgdW5kZXIgcmVzb2x1dGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG5zU2VydmVyczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5JZDogRG9tYWluIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW5JZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5OYW1lOiBEb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG9tYWluTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cElkOiBEb21haW4gbmFtZSBncm91cCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkb21haW4gbmFtZSBncm91cFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFB1bnlDb2RlOiBwdW55Y29kZSByZXR1cm5lZCBvbmx5IGZvciBhIENoaW5lc2UgZG9tYWluIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clB1bnlDb2RlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RE5TOjpEb21haW5gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERvbWFpblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0RvbWFpbiA9IG5ldyBSb3NEb21haW4odGhpcywgaWQsICB7XG4gICAgICAgICAgICBkb21haW5OYW1lOiBwcm9wcy5kb21haW5OYW1lLFxuICAgICAgICAgICAgZ3JvdXBJZDogcHJvcHMuZ3JvdXBJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEb21haW47XG4gICAgICAgIHRoaXMuYXR0ckRuc1NlcnZlcnMgPSByb3NEb21haW4uYXR0ckRuc1NlcnZlcnM7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbklkID0gcm9zRG9tYWluLmF0dHJEb21haW5JZDtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluTmFtZSA9IHJvc0RvbWFpbi5hdHRyRG9tYWluTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBJZCA9IHJvc0RvbWFpbi5hdHRyR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBOYW1lID0gcm9zRG9tYWluLmF0dHJHcm91cE5hbWU7XG4gICAgICAgIHRoaXMuYXR0clB1bnlDb2RlID0gcm9zRG9tYWluLmF0dHJQdW55Q29kZTtcbiAgICB9XG59XG4iXX0=