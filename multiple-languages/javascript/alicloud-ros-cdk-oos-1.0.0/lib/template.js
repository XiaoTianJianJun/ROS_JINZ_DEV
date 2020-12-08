"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = exports.TemplateProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oos_generated_1 = require("./oos.generated");
Object.defineProperty(exports, "TemplateProperty", { enumerable: true, get: function () { return oos_generated_1.RosTemplate; } });
/**
 * A ROS resource type:  `ALIYUN::OOS::Template`
 */
class Template extends ros.Resource {
    /**
     * Create a new `ALIYUN::OOS::Template`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosTemplate = new oos_generated_1.RosTemplate(this, id, {
            content: props.content,
            templateName: props.templateName,
            tags: ros.tagFactory(props.tags),
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTemplate;
        this.attrExecutionPolicy = rosTemplate.attrExecutionPolicy;
        this.attrTemplateId = rosTemplate.attrTemplateId;
        this.attrTemplateName = rosTemplate.attrTemplateName;
    }
}
exports.Template = Template;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBdUJ4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0J0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDbkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6RCxDQUFDO0NBQ0o7QUExQ0QsNEJBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zVGVtcGxhdGUgfSBmcm9tICcuL29vcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NUZW1wbGF0ZSBhcyBUZW1wbGF0ZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpPT1M6OlRlbXBsYXRlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRlbnQ6IFRoZSBjb250ZW50IG9mIHRoZSB0ZW1wbGF0ZS4gVGhlIHRlbXBsYXRlIG11c3QgYmUgaW4gdGhlIEpTT04gb3IgWUFNTCBmb3JtYXQuIE1heGltdW0gc2l6ZTogNjQgS0IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHRlbXBsYXRlLiBUaGUgdGVtcGxhdGUgbmFtZSBjYW4gYmUgdXAgdG8gMjAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGh5cGhlbnMgKC0pLCBhbmQgdW5kZXJzY29yZXMgKF8pLiBJdCBjYW5ub3Qgc3RhcnQgd2l0aCBBTElZVU4sIEFDUywgQUxJQkFCQSwgb3IgQUxJQ0xPVUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFnIHZhbHVlIGFuZCB0aGUga2V5IG1hcHBpbmcsIHRoZSBsYWJlbCBvZiB0aGUga2V5IG51bWJlciBjYW4gYmUgdXAgdG8gMjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogYW55IH1bXTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6T09TOjpUZW1wbGF0ZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRXhlY3V0aW9uUG9saWN5OiBFeGVjdXRpb24gUG9saWN5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFeGVjdXRpb25Qb2xpY3k6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGVtcGxhdGVJZDogVGVtcGxhdGUgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRlbXBsYXRlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGVtcGxhdGVOYW1lOiBUZW1wbGF0ZSBOYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUZW1wbGF0ZU5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpPT1M6OlRlbXBsYXRlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUZW1wbGF0ZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1RlbXBsYXRlID0gbmV3IFJvc1RlbXBsYXRlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY29udGVudDogcHJvcHMuY29udGVudCxcbiAgICAgICAgICAgIHRlbXBsYXRlTmFtZTogcHJvcHMudGVtcGxhdGVOYW1lLFxuICAgICAgICAgICAgdGFnczogcm9zLnRhZ0ZhY3RvcnkocHJvcHMudGFncyksXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuYXR0ckV4ZWN1dGlvblBvbGljeSA9IHJvc1RlbXBsYXRlLmF0dHJFeGVjdXRpb25Qb2xpY3k7XG4gICAgICAgIHRoaXMuYXR0clRlbXBsYXRlSWQgPSByb3NUZW1wbGF0ZS5hdHRyVGVtcGxhdGVJZDtcbiAgICAgICAgdGhpcy5hdHRyVGVtcGxhdGVOYW1lID0gcm9zVGVtcGxhdGUuYXR0clRlbXBsYXRlTmFtZTtcbiAgICB9XG59XG4iXX0=