"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedules = exports.SchedulesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const fnf_generated_1 = require("./fnf.generated");
Object.defineProperty(exports, "SchedulesProperty", { enumerable: true, get: function () { return fnf_generated_1.RosSchedules; } });
/**
 * A ROS resource type:  `DATASOURCE::FNF::Schedules`
 */
class Schedules extends ros.Resource {
    /**
     * Create a new `DATASOURCE::FNF::Schedules`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSchedules = new fnf_generated_1.RosSchedules(this, id, {
            flowName: props.flowName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSchedules;
        this.attrScheduleNames = rosSchedules.attrScheduleNames;
        this.attrSchedules = rosSchedules.attrSchedules;
    }
}
exports.Schedules = Schedules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBa0IxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFlBQVksR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUM7SUFDcEQsQ0FBQztDQUNKO0FBbENELDhCQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NjaGVkdWxlcyB9IGZyb20gJy4vZm5mLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NjaGVkdWxlcyBhcyBTY2hlZHVsZXNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6OkZORjo6U2NoZWR1bGVzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGZsb3dOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZmxvdyB0aGF0IGlzIGJvdW5kIHRvIHRoZSB0aW1lLWJhc2VkIHNjaGVkdWxlLiBcbiAgICAgKiBUaGUgbmFtZSBpcyB1bmlxdWUgd2l0aGluIHRoZSByZWdpb24gYW5kIGNhbm5vdCBiZSBtb2RpZmllZCBhZnRlciB0aGUgdGltZS1iYXNlZCBzY2hlZHVsZSBpcyBjcmVhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgYW4gdW5kZXJzY29yZSAoXykuXG4gICAgICogVGhlIG5hbWUgaXMgY2FzZS1zZW5zaXRpdmUuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAxIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBmbG93TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6Rk5GOjpTY2hlZHVsZXNgXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZXMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNjaGVkdWxlTmFtZXM6IFRoZSBsaXN0IG9mIHNjaGVkdWxlIG5hbWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2NoZWR1bGVOYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNjaGVkdWxlczogVGhlIHF1ZXJpZWQgdGltZS1iYXNlZCBzY2hlZHVsZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2hlZHVsZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgREFUQVNPVVJDRTo6Rk5GOjpTY2hlZHVsZXNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNjaGVkdWxlc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1NjaGVkdWxlcyA9IG5ldyBSb3NTY2hlZHVsZXModGhpcywgaWQsICB7XG4gICAgICAgICAgICBmbG93TmFtZTogcHJvcHMuZmxvd05hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2NoZWR1bGVzO1xuICAgICAgICB0aGlzLmF0dHJTY2hlZHVsZU5hbWVzID0gcm9zU2NoZWR1bGVzLmF0dHJTY2hlZHVsZU5hbWVzO1xuICAgICAgICB0aGlzLmF0dHJTY2hlZHVsZXMgPSByb3NTY2hlZHVsZXMuYXR0clNjaGVkdWxlcztcbiAgICB9XG59XG4iXX0=