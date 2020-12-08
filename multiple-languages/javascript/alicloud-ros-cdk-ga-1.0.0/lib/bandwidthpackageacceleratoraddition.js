"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandwidthPackageAcceleratorAddition = exports.BandwidthPackageAcceleratorAdditionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ga_generated_1 = require("./ga.generated");
Object.defineProperty(exports, "BandwidthPackageAcceleratorAdditionProperty", { enumerable: true, get: function () { return ga_generated_1.RosBandwidthPackageAcceleratorAddition; } });
/**
 * A ROS resource type:  `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
class BandwidthPackageAcceleratorAddition extends ros.Resource {
    /**
     * Create a new `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosBandwidthPackageAcceleratorAddition = new ga_generated_1.RosBandwidthPackageAcceleratorAddition(this, id, {
            bandwidthPackageId: props.bandwidthPackageId,
            acceleratorId: props.acceleratorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBandwidthPackageAcceleratorAddition;
        this.attrAcceleratorId = rosBandwidthPackageAcceleratorAddition.attrAcceleratorId;
        this.attrBandwidthPackageId = rosBandwidthPackageAcceleratorAddition.attrBandwidthPackageId;
    }
}
exports.BandwidthPackageAcceleratorAddition = BandwidthPackageAcceleratorAddition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuZHdpZHRocGFja2FnZWFjY2VsZXJhdG9yYWRkaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYW5kd2lkdGhwYWNrYWdlYWNjZWxlcmF0b3JhZGRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQXdFO0FBRXJCLDRIQUYxQyxxREFBc0MsT0FFK0M7QUFtQjlGOztHQUVHO0FBQ0gsTUFBYSxtQ0FBb0MsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCakU7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUErQyxFQUFFLG1DQUEyQyxJQUFJO1FBQzFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxzQ0FBc0MsR0FBRyxJQUFJLHFEQUFzQyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakcsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDckMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQ0FBc0MsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsc0NBQXNDLENBQUMsaUJBQWlCLENBQUM7UUFDbEYsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNDQUFzQyxDQUFDLHNCQUFzQixDQUFDO0lBQ2hHLENBQUM7Q0FDSjtBQW5DRCxrRkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NCYW5kd2lkdGhQYWNrYWdlQWNjZWxlcmF0b3JBZGRpdGlvbiB9IGZyb20gJy4vZ2EuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQmFuZHdpZHRoUGFja2FnZUFjY2VsZXJhdG9yQWRkaXRpb24gYXMgQmFuZHdpZHRoUGFja2FnZUFjY2VsZXJhdG9yQWRkaXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6R0E6OkJhbmR3aWR0aFBhY2thZ2VBY2NlbGVyYXRvckFkZGl0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhbmR3aWR0aFBhY2thZ2VBY2NlbGVyYXRvckFkZGl0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2VsZXJhdG9ySWQ6IFRoZSBJRCBvZiB0aGUgR2xvYmFsIEFjY2VsZXJhdG9yIGluc3RhbmNlIHdpdGggd2hpY2ggeW91IHdhbnQgdG8gYXNzb2NpYXRlIHRoZSBiYW5kd2lkdGhcbiAgICAgKiBwbGFuLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2VsZXJhdG9ySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYW5kd2lkdGhQYWNrYWdlSWQ6IFRoZSBJRCBvZiB0aGUgYmFuZHdpZHRoIHBhY2thZ2UgdG8gYXNzb2NpYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aFBhY2thZ2VJZDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpHQTo6QmFuZHdpZHRoUGFja2FnZUFjY2VsZXJhdG9yQWRkaXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBCYW5kd2lkdGhQYWNrYWdlQWNjZWxlcmF0b3JBZGRpdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFjY2VsZXJhdG9ySWQ6IFRoZSBJRCBvZiB0aGUgR2xvYmFsIEFjY2VsZXJhdG9yIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2NlbGVyYXRvcklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJhbmR3aWR0aFBhY2thZ2VJZDogVGhlIElEIG9mIHRoZSBiYW5kd2lkdGggcGFja2FnZSB3aGljaCBpcyBhc3NvY2lhdGVkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCYW5kd2lkdGhQYWNrYWdlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpHQTo6QmFuZHdpZHRoUGFja2FnZUFjY2VsZXJhdG9yQWRkaXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEJhbmR3aWR0aFBhY2thZ2VBY2NlbGVyYXRvckFkZGl0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQmFuZHdpZHRoUGFja2FnZUFjY2VsZXJhdG9yQWRkaXRpb24gPSBuZXcgUm9zQmFuZHdpZHRoUGFja2FnZUFjY2VsZXJhdG9yQWRkaXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBiYW5kd2lkdGhQYWNrYWdlSWQ6IHByb3BzLmJhbmR3aWR0aFBhY2thZ2VJZCxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9ySWQ6IHByb3BzLmFjY2VsZXJhdG9ySWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQmFuZHdpZHRoUGFja2FnZUFjY2VsZXJhdG9yQWRkaXRpb247XG4gICAgICAgIHRoaXMuYXR0ckFjY2VsZXJhdG9ySWQgPSByb3NCYW5kd2lkdGhQYWNrYWdlQWNjZWxlcmF0b3JBZGRpdGlvbi5hdHRyQWNjZWxlcmF0b3JJZDtcbiAgICAgICAgdGhpcy5hdHRyQmFuZHdpZHRoUGFja2FnZUlkID0gcm9zQmFuZHdpZHRoUGFja2FnZUFjY2VsZXJhdG9yQWRkaXRpb24uYXR0ckJhbmR3aWR0aFBhY2thZ2VJZDtcbiAgICB9XG59XG4iXX0=