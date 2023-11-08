"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accelerator = exports.AcceleratorProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ga_generated_1 = require("./ga.generated");
Object.defineProperty(exports, "AcceleratorProperty", { enumerable: true, get: function () { return ga_generated_1.RosAccelerator; } });
/**
 * A ROS resource type:  `ALIYUN::GA::Accelerator`
 */
class Accelerator extends ros.Resource {
    /**
     * Create a new `ALIYUN::GA::Accelerator`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAccelerator = new ga_generated_1.RosAccelerator(this, id, {
            bandwidthBillingType: props.bandwidthBillingType,
            acceleratorName: props.acceleratorName,
            resourceGroupId: props.resourceGroupId,
            autoUseCoupon: props.autoUseCoupon,
            instanceChargeType: props.instanceChargeType,
            pricingCycle: props.pricingCycle,
            enableCrossBorder: props.enableCrossBorder === undefined || props.enableCrossBorder === null ? false : props.enableCrossBorder,
            duration: props.duration,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            ipSetConfig: props.ipSetConfig,
            spec: props.spec,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccelerator;
        this.attrAcceleratorId = rosAccelerator.attrAcceleratorId;
        this.attrAcceleratorName = rosAccelerator.attrAcceleratorName;
        this.attrAutoPay = rosAccelerator.attrAutoPay;
        this.attrAutoUseCoupon = rosAccelerator.attrAutoUseCoupon;
        this.attrDuration = rosAccelerator.attrDuration;
        this.attrOrderId = rosAccelerator.attrOrderId;
        this.attrPaymentType = rosAccelerator.attrPaymentType;
        this.attrPricingCycle = rosAccelerator.attrPricingCycle;
        this.attrSpec = rosAccelerator.attrSpec;
    }
}
exports.Accelerator = Accelerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZWxlcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NlbGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQWdEO0FBRXJCLG9HQUZsQiw2QkFBYyxPQUV1QjtBQStEOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQW9EekM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUEwQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDdkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDZCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCO1lBQzlILFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDckYsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQzFELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFjLENBQUMsbUJBQW1CLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFDNUMsQ0FBQztDQUNKO0FBdEZELGtDQXNGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FjY2VsZXJhdG9yIH0gZnJvbSAnLi9nYS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBY2NlbGVyYXRvciBhcyBBY2NlbGVyYXRvclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpHQTo6QWNjZWxlcmF0b3JgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNjZWxlcmF0b3JQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2NlbGVyYXRvck5hbWU6IFRoZSBOYW1lIG9mIHRoZSBHQSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2VsZXJhdG9yTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9QYXk6IFdoZXRoZXIgdG8gcGF5IGF1dG9tYXRpY2FsbHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1BheT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvVXNlQ291cG9uOiBUaGUgQXV0b1VzZUNvdXBvbiBvZiB0aGUgR0EgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1VzZUNvdXBvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhbmR3aWR0aEJpbGxpbmdUeXBlOiBCYW5kd2lkdGggYmlsbGluZyBtZXRob2QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoQmlsbGluZ1R5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkdXJhdGlvbjogTGVuZ3RoIG9mIHB1cmNoYXNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGR1cmF0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5hYmxlQ3Jvc3NCb3JkZXI6IFdoZXRoZXIgdGhlIGdsb2JhbCBhY2NlbGVyYXRpb24gaW5zdGFuY2UgZW5hYmxlcyB0aGUgY3Jvc3MtYm9yZGVyIGxpbmUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlQ3Jvc3NCb3JkZXI/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBHbG9iYWwgYWNjZWxlcmF0aW9uIGluc3RhbmNlIHBheW1lbnQgdHlwZSwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgUFJFUEFZIChwcmVwYWlkKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpcFNldENvbmZpZzogQWNjZWxlcmF0ZSB6b25lIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXBTZXRDb25maWc/OiBSb3NBY2NlbGVyYXRvci5JcFNldENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpY2luZ0N5Y2xlOiBCaWxsaW5nIGN5Y2xlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaWNpbmdDeWNsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIFJlc291cmNlR3JvdXAgSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BlYzogU3BlY2lmaWNhdGlvbnMgb2YgR2xvYmFsIEFjY2VsZXJhdGlvbiBJbnN0YW5jZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BlYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6R0E6OkFjY2VsZXJhdG9yYFxuICovXG5leHBvcnQgY2xhc3MgQWNjZWxlcmF0b3IgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFjY2VsZXJhdG9ySWQ6IFRoZSBJRCBvZiB0aGUgR0EgaW5zdGFuY2UgdG8gcXVlcnkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2NlbGVyYXRvcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWNjZWxlcmF0b3JOYW1lOiBUaGUgTmFtZSBvZiB0aGUgR0EgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY2VsZXJhdG9yTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEF1dG9QYXk6IFRoZSBBdXRvUGF5IG9mIHRoZSBHQSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckF1dG9QYXk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBdXRvVXNlQ291cG9uOiBUaGUgQXV0b1VzZUNvdXBvbiBvZiB0aGUgR0EgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBdXRvVXNlQ291cG9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRHVyYXRpb246IFRoZSBEdXJhdGlvbiBvZiB0aGUgR0EgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckR1cmF0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3JkZXJJZDogVGhlIE9yZGVySWQgb2YgdGhlIEdBIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGF5bWVudFR5cGU6IFRoZSBQYXltZW50IFR5cGV0aGUgR0EgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBheW1lbnRUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJpY2luZ0N5Y2xlOiBUaGUgUHJpY2luZ0N5Y2xlIG9mIHRoZSBHQSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaWNpbmdDeWNsZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNwZWM6IFRoZSBpbnN0YW5jZSB0eXBlIG9mIHRoZSBHQSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3BlYzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkdBOjpBY2NlbGVyYXRvcmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQWNjZWxlcmF0b3JQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FjY2VsZXJhdG9yID0gbmV3IFJvc0FjY2VsZXJhdG9yKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYmFuZHdpZHRoQmlsbGluZ1R5cGU6IHByb3BzLmJhbmR3aWR0aEJpbGxpbmdUeXBlLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3JOYW1lOiBwcm9wcy5hY2NlbGVyYXRvck5hbWUsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGF1dG9Vc2VDb3Vwb246IHByb3BzLmF1dG9Vc2VDb3Vwb24sXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSxcbiAgICAgICAgICAgIHByaWNpbmdDeWNsZTogcHJvcHMucHJpY2luZ0N5Y2xlLFxuICAgICAgICAgICAgZW5hYmxlQ3Jvc3NCb3JkZXI6IHByb3BzLmVuYWJsZUNyb3NzQm9yZGVyID09PSB1bmRlZmluZWQgfHwgcHJvcHMuZW5hYmxlQ3Jvc3NCb3JkZXIgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmVuYWJsZUNyb3NzQm9yZGVyLFxuICAgICAgICAgICAgZHVyYXRpb246IHByb3BzLmR1cmF0aW9uLFxuICAgICAgICAgICAgYXV0b1BheTogcHJvcHMuYXV0b1BheSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmF1dG9QYXkgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuYXV0b1BheSxcbiAgICAgICAgICAgIGlwU2V0Q29uZmlnOiBwcm9wcy5pcFNldENvbmZpZyxcbiAgICAgICAgICAgIHNwZWM6IHByb3BzLnNwZWMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNjZWxlcmF0b3I7XG4gICAgICAgIHRoaXMuYXR0ckFjY2VsZXJhdG9ySWQgPSByb3NBY2NlbGVyYXRvci5hdHRyQWNjZWxlcmF0b3JJZDtcbiAgICAgICAgdGhpcy5hdHRyQWNjZWxlcmF0b3JOYW1lID0gcm9zQWNjZWxlcmF0b3IuYXR0ckFjY2VsZXJhdG9yTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyQXV0b1BheSA9IHJvc0FjY2VsZXJhdG9yLmF0dHJBdXRvUGF5O1xuICAgICAgICB0aGlzLmF0dHJBdXRvVXNlQ291cG9uID0gcm9zQWNjZWxlcmF0b3IuYXR0ckF1dG9Vc2VDb3Vwb247XG4gICAgICAgIHRoaXMuYXR0ckR1cmF0aW9uID0gcm9zQWNjZWxlcmF0b3IuYXR0ckR1cmF0aW9uO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zQWNjZWxlcmF0b3IuYXR0ck9yZGVySWQ7XG4gICAgICAgIHRoaXMuYXR0clBheW1lbnRUeXBlID0gcm9zQWNjZWxlcmF0b3IuYXR0clBheW1lbnRUeXBlO1xuICAgICAgICB0aGlzLmF0dHJQcmljaW5nQ3ljbGUgPSByb3NBY2NlbGVyYXRvci5hdHRyUHJpY2luZ0N5Y2xlO1xuICAgICAgICB0aGlzLmF0dHJTcGVjID0gcm9zQWNjZWxlcmF0b3IuYXR0clNwZWM7XG4gICAgfVxufVxuIl19