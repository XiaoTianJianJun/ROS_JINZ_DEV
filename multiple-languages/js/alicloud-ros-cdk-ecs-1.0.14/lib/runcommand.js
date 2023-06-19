"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunCommand = exports.RunCommandProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "RunCommandProperty", { enumerable: true, get: function () { return ecs_generated_1.RosRunCommand; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::RunCommand`
 */
class RunCommand extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::RunCommand`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRunCommand = new ecs_generated_1.RosRunCommand(this, id, {
            parameters: props.parameters,
            description: props.description,
            timeout: props.timeout,
            timed: props.timed,
            contentEncoding: props.contentEncoding,
            name: props.name,
            workingDir: props.workingDir,
            commandContent: props.commandContent,
            type: props.type,
            frequency: props.frequency,
            runAgainOn: props.runAgainOn,
            enableParameter: props.enableParameter,
            sync: props.sync === undefined || props.sync === null ? false : props.sync,
            instanceIds: props.instanceIds,
            keepCommand: props.keepCommand,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRunCommand;
        this.attrCommandId = rosRunCommand.attrCommandId;
        this.attrInvokeId = rosRunCommand.attrInvokeId;
        this.attrInvokeInstances = rosRunCommand.attrInvokeInstances;
        this.attrInvokeResults = rosRunCommand.attrInvokeResults;
    }
}
exports.RunCommand = RunCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFnSDVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEyQnhDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUMxRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQ2pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDL0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUM3RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQzdELENBQUM7Q0FDSjtBQTVERCxnQ0E0REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSdW5Db21tYW5kIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUnVuQ29tbWFuZCBhcyBSdW5Db21tYW5kUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVDUzo6UnVuQ29tbWFuZGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSdW5Db21tYW5kUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29tbWFuZENvbnRlbnQ6IFRoZSBwbGFpbnRleHQgY29udGVudCBvciB0aGUgQmFzZTY0LWVuY29kZWQgY29udGVudCBvZiB0aGUgc2NyaXB0LiBUaGUgQmFzZTY0LWVuY29kZWQgc2NyaXB0IGNvbnRlbnQgY2Fubm90IGV4Y2VlZCAxNiBLQi5cbiAgICAgKiBZb3UgY2FuIGVuYWJsZSB0aGUgY3VzdG9tIHBhcmFtZXRlciBmdW5jdGlvbiBieSBzZXR0aW5nIEVuYWJsZVBhcmFtZXRlcj10cnVlIGluIHRoZSBzY3JpcHQgY29udGVudDpcbiAgICAgKiBEZWZpbmUgY3VzdG9tIHBhcmFtZXRlcnMgaW4gdGhlIHt7fX0gZm9ybWF0LiBXaXRoaW4ge3t9fSwgdGhlIHNwYWNlcyBhbmQgbGluZSBicmVha3MgYmVmb3JlIGFuZCBhZnRlciB0aGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyIGFyZSBpZ25vcmVkLlxuICAgICAqIFRoZSBudW1iZXIgb2YgY3VzdG9tIHBhcmFtZXRlcnMgY2Fubm90IGV4Y2VlZCAyMC5cbiAgICAgKiBBIGN1c3RvbSBwYXJhbWV0ZXIgbmFtZSBjYW4gY29udGFpbiBvbmx5IGxldHRlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IGlzIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAgICogRWFjaCBjdXN0b20gcGFyYW1ldGVyIGtleSBjYW5ub3QgZXhjZWVkIDY0IGJ5dGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW1hbmRDb250ZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkczogVGhlIGluc3RhbmNlIGlkIGxpc3QuIEluc3RhbmNlcyBzdGF0dXMgbXVzdCBiZSBydW5uaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHlwZTogVGhlIGxhbmd1YWdlIHR5cGUgb2YgdGhlIE8mTSBzY3JpcHQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBSdW5CYXRTY3JpcHQ6IGJhdGNoIHNjcmlwdHMgZm9yIFdpbmRvd3MgaW5zdGFuY2VzXG4gICAgICogUnVuUG93ZXJTaGVsbFNjcmlwdDogUG93ZXJTaGVsbCBzY3JpcHRzIGZvciBXaW5kb3dzIGluc3RhbmNlc1xuICAgICAqIFJ1blNoZWxsU2NyaXB0OiBzaGVsbCBzY3JpcHRzIGZvciBMaW51eCBpbnN0YW5jZXNcbiAgICAgKi9cbiAgICByZWFkb25seSB0eXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb250ZW50RW5jb2Rpbmc6IFRoZSBlbmNvZGluZyBtb2RlIG9mIHNjcmlwdCBjb250ZW50IChDb21tYW5kQ29udGVudCkuIFZhbGlkIHZhbHVlcyAoY2FzZSBpbnNlbnNpdGl2ZSk6XG4gICAgICogUGxhaW5UZXh0OiBUaGUgc2NyaXB0IGNvbnRlbnQgaXMgbm90IGVuY29kZWQsIGFuZCB0cmFuc21pdHRlZCBpbiBwbGFpbnRleHQuXG4gICAgICogQmFzZTY0OiBiYXNlNjQtZW5jb2RlZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBQbGFpblRleHQuIElmIHRoZSBzcGVjaWZpZWQgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgaXMgaW52YWxpZCwgUGxhaW5UZXh0IGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb250ZW50RW5jb2Rpbmc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBzY3JpcHQsIHdoaWNoIHN1cHBvcnRzIGFsbCBjaGFyYWN0ZXIgc2V0cy4gSXQgY2FuIGJlIHVwIHRvIDUxMiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuYWJsZVBhcmFtZXRlcjogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHNjcmlwdCBjb250YWlucyBjdXN0b20gcGFyYW1ldGVycy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZVBhcmFtZXRlcj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmcmVxdWVuY3k6IFRoZSBleGVjdXRpb24gcGVyaW9kIG9mIHJlY3VycmluZyB0YXNrcy4gSWYgdGhlIFRpbWVkIHBhcmFtZXRlciBpcyBzZXQgdG8gVHJ1ZSwgeW91IG11c3Qgc3BlY2lmeSB0aGUgRnJlcXVlbmN5IHBhcmFtZXRlci4gVGhlIGludGVydmFsIGJldHdlZW4gdHdvIHJlY3VycmluZyB0YXNrcyBjYW5ub3QgYmUgbGVzcyB0aGFuIDEwIHNlY29uZHMuXG4gICAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSBmb2xsb3dzIHRoZSBjcm9uIGV4cHJlc3Npb24uIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgQ29uZmlndXJlIHNjaGVkdWxlZCBjb21tYW5kcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBmcmVxdWVuY3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrZWVwQ29tbWFuZDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0YWluIHRoZSBzY3JpcHQgYWZ0ZXIgaXQgaXMgcnVuLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogVGhlIHNjcmlwdCBpcyByZXRhaW5lZC4gWW91IGNhbiBjYWxsIHRoZSBJbnZva2VDb21tYW5kIG9wZXJhdGlvbiB0byBydW4gdGhlIHNjcmlwdCBhZ2FpbiwgY2FsbCB0aGUgRGVzY3JpYmVDb21tYW5kcyBvcGVyYXRpb24gdG8gcXVlcnkgdGhlIHNjcmlwdCwgYW5kIGNhbGwgdGhlIERlbGV0ZUNvbW1hbmRzIG9wZXJhdGlvbiB0byBkZWxldGUgdGhlIHNjcmlwdC4gVGhlIHJldGFpbmVkIHNjcmlwdCB0YWtlcyB1cCB0aGUgcXVvdGEgb2YgQ2xvdWQgQXNzaXN0YW50IHNjcmlwdHMuXG4gICAgICogZmFsc2U6IFRoZSBzY3JpcHQgaXMgbm90IHJldGFpbmVkLiBJdCBpcyBhdXRvbWF0aWNhbGx5IGRlbGV0ZWQgYWZ0ZXIgcnVubmluZywgd2l0aG91dCB0YWtpbmcgdXAgdGhlIHF1b3RhIG9mIENsb3VkIEFzc2lzdGFudCBzY3JpcHRzLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHkga2VlcENvbW1hbmQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIHNjcmlwdCwgd2hpY2ggc3VwcG9ydHMgYWxsIGNoYXJhY3RlciBzZXRzLiBJdCBjYW4gYmUgdXAgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXJhbWV0ZXJzOiBUaGUga2V5LXZhbHVlIHBhaXJzIG9mIGN1c3RvbSBwYXJhbWV0ZXJzIHBhc3NlZCBpbiB3aGVuIHRoZSBzY3JpcHQgY29udGFpbnMgY3VzdG9tIHBhcmFtZXRlcnMuXG4gICAgICogTnVtYmVyIG9mIGN1c3RvbSBwYXJhbWV0ZXJzOiAwIHRvIDEwLlxuICAgICAqIFRoZSBrZXkgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZy4gSXQgY2FuIGJlIHVwIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIFRoZSB2YWx1ZSBjYW4gYmUgYW4gZW1wdHkgc3RyaW5nLlxuICAgICAqIEFmdGVyIHRoZSBjdXN0b20gcGFyYW1ldGVycyBhbmQgdGhlIG9yaWdpbmFsIHNjcmlwdCBjb250ZW50IGFyZSBCYXNlNjQgZW5jb2RlZCwgdGhlIHRvdGFsIHNpemUgY2Fubm90IGV4Y2VlZCAxNiBLQi5cbiAgICAgKiBUaGUgc2V0IG9mIGN1c3RvbSBwYXJhbWV0ZXIgbmFtZXMgbXVzdCBiZSBhIHN1YnNldCBvZiB0aGUgcGFyYW1ldGVyIHNldCB0aGF0IGlzIGRlZmluZWQgd2hlbiB5b3UgY3JlYXRlZCB0aGUgc2NyaXB0LiBZb3UgY2FuIHVzZSBhbiBlbXB0eSBzdHJpbmcgdG8gcmVwcmVzZW50IHRoZSBwYXJhbWV0ZXJzIHRoYXQgYXJlIG5vdCBwYXNzZWQgaW4uXG4gICAgICogRGVmYXVsdCB2YWx1ZTogbnVsbCwgaW5kaWNhdGluZyB0aGF0IHRoaXMgcGFyYW1ldGVyIGlzIGNhbmNlbGVkIGFuZCBjdXN0b21lciBwYXJhbWV0ZXJzIGFyZSBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcnVuQWdhaW5PbjogVGhlIHN0YWdlIG9mIGV4ZWN1dGluZyB0aGUgY29tbWFuZCBhZ2Fpbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBydW5BZ2Fpbk9uPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5bmM6IFdoZXRoZXIgdG8gaW52b2tlIHN5bmNocm9ub3VzbHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3luYz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0aW1lZDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcGVyaW9kaWNhbGx5IHJ1biB0aGUgc2NyaXB0LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogcnVucyB0aGUgc2NyaXB0IG9uIGEgcmVndWxhciBiYXNpcyBiYXNlZCBvbiB0aGUgdmFsdWUgc2V0IGZvciB0aGUgRnJlcXVlbmN5IHBhcmFtZXRlci4gVGhlIHJlc3VsdCBvZiB0aGUgcHJldmlvdXMgZXhlY3V0aW9uIHRhc2sgZG9lcyBub3QgYWZmZWN0IHRoZSBuZXh0IGV4ZWN1dGlvbiB0YXNrLlxuICAgICAqIGZhbHNlOiBydW5zIG9uY2Ugb25seS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IHBlcmlvZCBmb3Igc2NyaXB0IGV4ZWN1dGlvbi4gVW5pdDogc2Vjb25kcy4gQSB0aW1lb3V0IGVycm9yIG9jY3VycyB3aGVuIGEgc2NyaXB0IGNhbm5vdCBiZSBydW4gYmVjYXVzZSB0aGUgcHJvY2VzcyBzbG93cyBkb3duLCBhIHNwZWNpZmljIG1vZHVsZSBvciB0aGUgQ2xvdWQgQXNzaXN0YW50IGNsaWVudCBkb2VzIG5vdCBleGlzdC4gV2hlbiB0aGUgc2NyaXB0IHRpbWVzIG91dCwgdGhlIHNjcmlwdCBwcm9jZXNzIGlzIGZvcmNpYmx5IHRlcm1pbmF0ZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogNjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtpbmdEaXI6IFRoZSBydW5uaW5nIGRpcmVjdG9yeSBvZiB0aGUgc2NyaXB0IGluIHRoZSBFQ1MgaW5zdGFuY2UuXG4gICAgICogRGVmYXVsdCB2YWx1ZTpcbiAgICAgKiBMaW51eCBpbnN0YW5jZXM6IHVuZGVyIHRoZSBob21lIGRpcmVjdG9yeSBvZiB0aGUgYWRtaW5pc3RyYXRvciAocm9vdCB1c2VyKTogL3Jvb3QuXG4gICAgICogV2luZG93cyBpbnN0YW5jZXM6IHVuZGVyIHRoZSBkaXJlY3Rvcnkgd2hlcmUgdGhlIHByb2Nlc3Mgb2YgdGhlIENsb3VkIEFzc2lzdGFudCBjbGllbnQgaXMgbG9jYXRlZCwgc3VjaCBhcyBDOlxcUHJvZ3JhbURhdGFcXGFsaXl1blxcYXNzaXN0XFwkKHZlcnNpb24pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtpbmdEaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6UnVuQ29tbWFuZGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJ1bkNvbW1hbmQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbW1hbmRJZDogVGhlIGlkIG9mIGNvbW1hbmQgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbW1hbmRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludm9rZUlkOiBUaGUgaW52b2tlIGlkIG9mIGNvbW1hbmQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnZva2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludm9rZUluc3RhbmNlczogVGhlIEludm9rZUluc3RhbmNlcyBvZiBjb21tYW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW52b2tlSW5zdGFuY2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW52b2tlUmVzdWx0czogVGhlIHJlc3VsdHMgb2YgaW52b2tlIGNvbW1hbmQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnZva2VSZXN1bHRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpSdW5Db21tYW5kYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSdW5Db21tYW5kUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zUnVuQ29tbWFuZCA9IG5ldyBSb3NSdW5Db21tYW5kKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcGFyYW1ldGVyczogcHJvcHMucGFyYW1ldGVycyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRpbWVvdXQ6IHByb3BzLnRpbWVvdXQsXG4gICAgICAgICAgICB0aW1lZDogcHJvcHMudGltZWQsXG4gICAgICAgICAgICBjb250ZW50RW5jb2Rpbmc6IHByb3BzLmNvbnRlbnRFbmNvZGluZyxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICB3b3JraW5nRGlyOiBwcm9wcy53b3JraW5nRGlyLFxuICAgICAgICAgICAgY29tbWFuZENvbnRlbnQ6IHByb3BzLmNvbW1hbmRDb250ZW50LFxuICAgICAgICAgICAgdHlwZTogcHJvcHMudHlwZSxcbiAgICAgICAgICAgIGZyZXF1ZW5jeTogcHJvcHMuZnJlcXVlbmN5LFxuICAgICAgICAgICAgcnVuQWdhaW5PbjogcHJvcHMucnVuQWdhaW5PbixcbiAgICAgICAgICAgIGVuYWJsZVBhcmFtZXRlcjogcHJvcHMuZW5hYmxlUGFyYW1ldGVyLFxuICAgICAgICAgICAgc3luYzogcHJvcHMuc3luYyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnN5bmMgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLnN5bmMsXG4gICAgICAgICAgICBpbnN0YW5jZUlkczogcHJvcHMuaW5zdGFuY2VJZHMsXG4gICAgICAgICAgICBrZWVwQ29tbWFuZDogcHJvcHMua2VlcENvbW1hbmQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUnVuQ29tbWFuZDtcbiAgICAgICAgdGhpcy5hdHRyQ29tbWFuZElkID0gcm9zUnVuQ29tbWFuZC5hdHRyQ29tbWFuZElkO1xuICAgICAgICB0aGlzLmF0dHJJbnZva2VJZCA9IHJvc1J1bkNvbW1hbmQuYXR0ckludm9rZUlkO1xuICAgICAgICB0aGlzLmF0dHJJbnZva2VJbnN0YW5jZXMgPSByb3NSdW5Db21tYW5kLmF0dHJJbnZva2VJbnN0YW5jZXM7XG4gICAgICAgIHRoaXMuYXR0ckludm9rZVJlc3VsdHMgPSByb3NSdW5Db21tYW5kLmF0dHJJbnZva2VSZXN1bHRzO1xuICAgIH1cbn1cbiJdfQ==