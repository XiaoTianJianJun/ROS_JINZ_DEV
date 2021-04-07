"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zone = exports.ZoneProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const pvtz_generated_1 = require("./pvtz.generated");
Object.defineProperty(exports, "ZoneProperty", { enumerable: true, get: function () { return pvtz_generated_1.RosZone; } });
/**
 * A ROS resource type:  `ALIYUN::PVTZ::Zone`
 */
class Zone extends ros.Resource {
    /**
     * Create a new `ALIYUN::PVTZ::Zone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosZone = new pvtz_generated_1.RosZone(this, id, {
            zoneName: props.zoneName,
            proxyPattern: props.proxyPattern ? props.proxyPattern : 'ZONE',
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZone;
        this.attrZoneId = rosZone.attrZoneId;
        this.attrZoneName = rosZone.attrZoneName;
    }
}
exports.Zone = Zone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUEyQztBQUV2Qiw2RkFGWCx3QkFBTyxPQUVnQjtBQXlCaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCbEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFnQixFQUFFLG1DQUEyQyxJQUFJO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSx3QkFBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDbkMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzlELE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtTQUN2QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQXBDRCxvQkFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3Nab25lIH0gZnJvbSAnLi9wdnR6LmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1pvbmUgYXMgWm9uZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpQVlRaOjpab25lYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFpvbmVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lTmFtZTogWm9uZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb3h5UGF0dGVybjogWk9ORTogY29tcGxldGVseSBoaWphY2sgdGhlIGVudGlyZSB6b25lLlxuICAgICAqIFJFQ09SRDogSW5jb21wbGV0ZSBoaWphY2tpbmcsIHJlY3Vyc2l2ZSByZXNvbHV0aW9uIGFnZW50LlxuICAgICAqIERlZmF1bHQgdG8gWk9ORS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm94eVBhdHRlcm4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZW1hcms6IDUwIGNoYXJhY3RlcnMgYXQgbW9zdC4gSXQgY2FuIG9ubHkgY29udGFpbiBudW1iZXJzLCBDaGluZXNlLCBFbmdsaXNoIGFuZCBzcGVjaWFsIGNoYXJhY3RlcnM6IFwiXy0sLu+8jOOAglwiLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbWFyaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UFZUWjo6Wm9uZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFpvbmUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFpvbmVJZDogWm9uZSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyWm9uZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgWm9uZU5hbWU6IFpvbmUgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyWm9uZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpQVlRaOjpab25lYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBab25lUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zWm9uZSA9IG5ldyBSb3Nab25lKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgem9uZU5hbWU6IHByb3BzLnpvbmVOYW1lLFxuICAgICAgICAgICAgcHJveHlQYXR0ZXJuOiBwcm9wcy5wcm94eVBhdHRlcm4gPyBwcm9wcy5wcm94eVBhdHRlcm4gOiAnWk9ORScsXG4gICAgICAgICAgICByZW1hcms6IHByb3BzLnJlbWFyayxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3Nab25lO1xuICAgICAgICB0aGlzLmF0dHJab25lSWQgPSByb3Nab25lLmF0dHJab25lSWQ7XG4gICAgICAgIHRoaXMuYXR0clpvbmVOYW1lID0gcm9zWm9uZS5hdHRyWm9uZU5hbWU7XG4gICAgfVxufVxuIl19