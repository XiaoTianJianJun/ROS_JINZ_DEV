"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartAccessGatewayBinding = exports.SmartAccessGatewayBindingProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sag_generated_1 = require("./sag.generated");
Object.defineProperty(exports, "SmartAccessGatewayBindingProperty", { enumerable: true, get: function () { return sag_generated_1.RosSmartAccessGatewayBinding; } });
/**
 * A ROS resource type:  `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
class SmartAccessGatewayBinding extends ros.Resource {
    /**
     * Create a new `ALIYUN::SAG::SmartAccessGatewayBinding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSmartAccessGatewayBinding = new sag_generated_1.RosSmartAccessGatewayBinding(this, id, {
            ccnId: props.ccnId,
            smartAgId: props.smartAgId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSmartAccessGatewayBinding;
        this.attrSmartAgId = rosSmartAccessGatewayBinding.attrSmartAgId;
    }
}
exports.SmartAccessGatewayBinding = SmartAccessGatewayBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhY2Nlc3NnYXRld2F5YmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNtYXJ0YWNjZXNzZ2F0ZXdheWJpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUErRDtBQUV0QixrSEFGaEMsNENBQTRCLE9BRXFDO0FBa0IxRTs7R0FFRztBQUNILE1BQWEseUJBQTBCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZdkQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFxQyxFQUFFLG1DQUEyQyxJQUFJO1FBQ2hJLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLDRDQUE0QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDN0UsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUM3QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLDRCQUE0QixDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsNEJBQTRCLENBQUMsYUFBYSxDQUFDO0lBQ3BFLENBQUM7Q0FDSjtBQTdCRCw4REE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nIH0gZnJvbSAnLi9zYWcuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZyBhcyBTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNBRzo6U21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2NuSWQ6IFRoZSBJRCBvZiB0aGUgQ0NOIGluc3RhbmNlIHRvIGJpbmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2NuSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNtYXJ0QWdJZDogVGhlIElEIG9mIHRoZSBTbWFydCBBY2Nlc3MgR2F0ZXdheSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbWFydEFnSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6U0FHOjpTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nYFxuICovXG5leHBvcnQgY2xhc3MgU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU21hcnRBR0lkOiBUaGUgSUQgb2YgdGhlIFNtYXJ0IEFjY2VzcyBHYXRld2F5IGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU21hcnRBZ0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0FHOjpTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZyA9IG5ldyBSb3NTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY2NuSWQ6IHByb3BzLmNjbklkLFxuICAgICAgICAgICAgc21hcnRBZ0lkOiBwcm9wcy5zbWFydEFnSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZztcbiAgICAgICAgdGhpcy5hdHRyU21hcnRBZ0lkID0gcm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZy5hdHRyU21hcnRBZ0lkO1xuICAgIH1cbn1cbiJdfQ==