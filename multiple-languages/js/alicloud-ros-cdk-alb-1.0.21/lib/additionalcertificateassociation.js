"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalCertificateAssociation = exports.AdditionalCertificateAssociationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "AdditionalCertificateAssociationProperty", { enumerable: true, get: function () { return alb_generated_1.RosAdditionalCertificateAssociation; } });
/**
 * A ROS resource type:  `ALIYUN::ALB::AdditionalCertificateAssociation`
 */
class AdditionalCertificateAssociation extends ros.Resource {
    /**
     * Create a new `ALIYUN::ALB::AdditionalCertificateAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAdditionalCertificateAssociation = new alb_generated_1.RosAdditionalCertificateAssociation(this, id, {
            certificates: props.certificates,
            listenerId: props.listenerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAdditionalCertificateAssociation;
        this.attrListenerId = rosAdditionalCertificateAssociation.attrListenerId;
    }
}
exports.AdditionalCertificateAssociation = AdditionalCertificateAssociation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaXRpb25hbGNlcnRpZmljYXRlYXNzb2NpYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRpdGlvbmFsY2VydGlmaWNhdGVhc3NvY2lhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXNFO0FBRXRCLHlIQUZ2QyxtREFBbUMsT0FFNEM7QUFrQnhGOztHQUVHO0FBQ0gsTUFBYSxnQ0FBaUMsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVk5RDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTRDLEVBQUUsbUNBQTJDLElBQUk7UUFDdkksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLG1DQUFtQyxHQUFHLElBQUksbURBQW1DLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQy9CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsbUNBQW1DLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQ0FBbUMsQ0FBQyxjQUFjLENBQUM7SUFDN0UsQ0FBQztDQUNKO0FBN0JELDRFQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uIH0gZnJvbSAnLi9hbGIuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb24gYXMgQWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6QUxCOjpBZGRpdGlvbmFsQ2VydGlmaWNhdGVBc3NvY2lhdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZGRpdGlvbmFsQ2VydGlmaWNhdGVBc3NvY2lhdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNlcnRpZmljYXRlczogVGhlIGxpc3Qgb2YgdGhlIGFkZGl0aW9uYWwgY2VydGlmaWNhdGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlczogQXJyYXk8Um9zQWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb24uQ2VydGlmaWNhdGVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGlzdGVuZXJJZDogVGhlIElEIG9mIHRoZSBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaXN0ZW5lcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkFMQjo6QWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBBZGRpdGlvbmFsQ2VydGlmaWNhdGVBc3NvY2lhdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTGlzdGVuZXJJZDogVGhlIElEIG9mIHRoZSBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxpc3RlbmVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpBTEI6OkFkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBZGRpdGlvbmFsQ2VydGlmaWNhdGVBc3NvY2lhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uID0gbmV3IFJvc0FkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY2VydGlmaWNhdGVzOiBwcm9wcy5jZXJ0aWZpY2F0ZXMsXG4gICAgICAgICAgICBsaXN0ZW5lcklkOiBwcm9wcy5saXN0ZW5lcklkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0FkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uO1xuICAgICAgICB0aGlzLmF0dHJMaXN0ZW5lcklkID0gcm9zQWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb24uYXR0ckxpc3RlbmVySWQ7XG4gICAgfVxufVxuIl19