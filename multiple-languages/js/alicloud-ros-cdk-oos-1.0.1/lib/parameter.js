"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = exports.ParameterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oos_generated_1 = require("./oos.generated");
Object.defineProperty(exports, "ParameterProperty", { enumerable: true, get: function () { return oos_generated_1.RosParameter; } });
/**
 * A ROS resource type:  `ALIYUN::OOS::Parameter`
 */
class Parameter extends ros.Resource {
    /**
     * Create a new `ALIYUN::OOS::Parameter`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosParameter = new oos_generated_1.RosParameter(this, id, {
            type: props.type,
            constraints: props.constraints,
            description: props.description,
            value: props.value,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosParameter;
        this.attrName = rosParameter.attrName;
        this.attrValue = rosParameter.attrValue;
    }
}
exports.Parameter = Parameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYW1ldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBMkMxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFlBQVksR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7SUFDNUMsQ0FBQztDQUNKO0FBdENELDhCQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1BhcmFtZXRlciB9IGZyb20gJy4vb29zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1BhcmFtZXRlciBhcyBQYXJhbWV0ZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6T09TOjpQYXJhbWV0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1ldGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlci4gXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAxIHRvIDIwMCBjaGFyYWN0ZXJzIGluIGxlbmd0aCxhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBoeXBoZW5zICgtKSwgYW5kIHVuZGVyc2NvcmVzIChfKS4gXG4gICAgICogSXQgY2Fubm90IHN0YXJ0IHdpdGggQUxJWVVOLCBBQ1MsIEFMSUJBQkEsIEFMSUNMT1VELCBvciBPT1MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHlwZTogVGhlIGRhdGEgdHlwZSBvZiB0aGUgY29tbW9uIHBhcmFtZXRlci4gXG4gICAgICogVmFsaWQgdmFsdWVzOiBTdHJpbmcgYW5kIFN0cmluZ0xpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdmFsdWU6IFRoZSB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyLiBcbiAgICAgKiBUaGUgdmFsdWUgbXVzdCBiZSAxIHRvIDQwOTYgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnN0cmFpbnRzOiBUaGUgY29uc3RyYWludHMgb2YgdGhlIHBhcmFtZXRlci4gXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBwYXJhbWV0ZXIgaXMgbnVsbC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEFsbG93ZWRWYWx1ZXM6IFRoZSB2YWx1ZSB0aGF0IGlzIGFsbG93ZWQgZm9yIHRoZSBwYXJhbWV0ZXIuIEl0IG11c3QgYmUgYW4gYXJyYXkgc3RyaW5nLlxuICAgICAqIEFsbG93ZWRQYXR0ZXJuOiBUaGUgcGF0dGVybiB0aGF0IGlzIGFsbG93ZWQgZm9yIHRoZSBwYXJhbWV0ZXIuIEl0IG11c3QgYmUgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gICAgICogTWluTGVuZ3RoOiBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIHBhcmFtZXRlci5cbiAgICAgKiBNYXhMZW5ndGg6IFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnN0cmFpbnRzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcGFyYW1ldGVyLiBcbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAxIHRvIDIwMCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6T09TOjpQYXJhbWV0ZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5hbWU6IFRoZSBOYW1lIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVmFsdWU6IFRoZSBWYWx1ZSBvZiB0aGUgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmFsdWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpPT1M6OlBhcmFtZXRlcmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUGFyYW1ldGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zUGFyYW1ldGVyID0gbmV3IFJvc1BhcmFtZXRlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHR5cGU6IHByb3BzLnR5cGUsXG4gICAgICAgICAgICBjb25zdHJhaW50czogcHJvcHMuY29uc3RyYWludHMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1BhcmFtZXRlcjtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IHJvc1BhcmFtZXRlci5hdHRyTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyVmFsdWUgPSByb3NQYXJhbWV0ZXIuYXR0clZhbHVlO1xuICAgIH1cbn1cbiJdfQ==