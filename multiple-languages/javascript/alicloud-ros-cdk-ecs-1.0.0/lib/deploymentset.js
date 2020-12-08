"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentSet = exports.DeploymentSetProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "DeploymentSetProperty", { enumerable: true, get: function () { return ecs_generated_1.RosDeploymentSet; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::DeploymentSet`
 */
class DeploymentSet extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::DeploymentSet`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDeploymentSet = new ecs_generated_1.RosDeploymentSet(this, id, {
            onUnableToRedeployFailedInstance: props.onUnableToRedeployFailedInstance,
            description: props.description,
            deploymentSetName: props.deploymentSetName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDeploymentSet;
        this.attrDeploymentSetId = rosDeploymentSet.attrDeploymentSetId;
    }
}
exports.DeploymentSet = DeploymentSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95bWVudHNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcGxveW1lbnRzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBOEJsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWTNDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBNEIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ3pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdDQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDckQsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLGdDQUFnQztZQUN4RSxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtTQUM3QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwRSxDQUFDO0NBQ0o7QUE5QkQsc0NBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zRGVwbG95bWVudFNldCB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RlcGxveW1lbnRTZXQgYXMgRGVwbG95bWVudFNldFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ1M6OkRlcGxveW1lbnRTZXRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVwbG95bWVudFNldFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXBsb3ltZW50U2V0TmFtZTogVGhlIG5hbWUgb2YgdGhlIGRlcGxveW1lbnQgc2V0LiBJdCBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBJdCBtdXN0XG4gICAgICogc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy4gSXQgY2FuIGNvbnRhaW4gbGV0dGVycyxcbiAgICAgKiBkaWdpdHMsIGNvbG9ucyAoOiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlcGxveW1lbnRTZXROYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGRlcGxveW1lbnQgc2V0LiBJdCBtdXN0IGJlIDIgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBJdFxuICAgICAqIGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb25VbmFibGVUb1JlZGVwbG95RmFpbGVkSW5zdGFuY2U6IFRoZSBlbWVyZ2VuY3kgc29sdXRpb24gdG8gcmVkZXBsb3kgZmFpbGVkIGluc3RhbmNlcyBpbiB0aGUgZGVwbG95bWVudCBzZXQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDYW5jZWxNZW1iZXJzaGlwQW5kU3RhcnQ6IHJlc3RhcnRzIHRoZSBpbnN0YW5jZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhleSBhcmUgc2h1dCBkb3duXG4gICAgICogYW5kIG1pZ3JhdGVkIHRvIG90aGVyIGRlcGxveW1lbnQgc2V0cy4gVGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKiBLZWVwU3RvcHBlZDoga2VlcHMgdGhlIGluc3RhbmNlcyBzaHV0IGRvd24gYW5kIHJlc3RhcnRzIHRoZW0gYWZ0ZXIgdGhlIGRlcGxveW1lbnRcbiAgICAgKiBzZXQgaXMgcmVwbGVuaXNoZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb25VbmFibGVUb1JlZGVwbG95RmFpbGVkSW5zdGFuY2U/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6RGVwbG95bWVudFNldGBcbiAqL1xuZXhwb3J0IGNsYXNzIERlcGxveW1lbnRTZXQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZXBsb3ltZW50U2V0SWQ6IFRoZSBJRCBvZiB0aGUgZGVwbG95bWVudCBzZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXBsb3ltZW50U2V0SWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ1M6OkRlcGxveW1lbnRTZXRgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERlcGxveW1lbnRTZXRQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0RlcGxveW1lbnRTZXQgPSBuZXcgUm9zRGVwbG95bWVudFNldCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG9uVW5hYmxlVG9SZWRlcGxveUZhaWxlZEluc3RhbmNlOiBwcm9wcy5vblVuYWJsZVRvUmVkZXBsb3lGYWlsZWRJbnN0YW5jZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRlcGxveW1lbnRTZXROYW1lOiBwcm9wcy5kZXBsb3ltZW50U2V0TmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEZXBsb3ltZW50U2V0O1xuICAgICAgICB0aGlzLmF0dHJEZXBsb3ltZW50U2V0SWQgPSByb3NEZXBsb3ltZW50U2V0LmF0dHJEZXBsb3ltZW50U2V0SWQ7XG4gICAgfVxufVxuIl19