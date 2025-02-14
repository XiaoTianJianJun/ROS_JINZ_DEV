"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystems = exports.FileSystemsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nas_generated_1 = require("./nas.generated");
Object.defineProperty(exports, "FileSystemsProperty", { enumerable: true, get: function () { return nas_generated_1.RosFileSystems; } });
/**
 * A ROS resource type:  `DATASOURCE::NAS::FileSystems`
 */
class FileSystems extends ros.Resource {
    /**
     * Create a new `DATASOURCE::NAS::FileSystems`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosFileSystems = new nas_generated_1.RosFileSystems(this, id, {
            fileSystemType: props.fileSystemType,
            fileSystemId: props.fileSystemId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFileSystems;
        this.attrFileSystemIds = rosFileSystems.attrFileSystemIds;
        this.attrFileSystems = rosFileSystems.attrFileSystems;
    }
}
exports.FileSystems = FileSystems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXN5c3RlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlc3lzdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQXNCOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCekM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUEwQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDdkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1NBQ25DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzFELENBQUM7Q0FDSjtBQW5DRCxrQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NGaWxlU3lzdGVtcyB9IGZyb20gJy4vbmFzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0ZpbGVTeXN0ZW1zIGFzIEZpbGVTeXN0ZW1zUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEQVRBU09VUkNFOjpOQVM6OkZpbGVTeXN0ZW1zYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTeXN0ZW1zUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZmlsZVN5c3RlbUlkOiBUaGUgSUQgb2YgdGhlIGZpbGUgc3lzdGVtIHRvIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmlsZVN5c3RlbUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZmlsZVN5c3RlbVR5cGU6IEZpbGUgc3lzdGVtIHR5cGUuXG4gICAgICogVmFsdWU6XG4gICAgICogLXN0YW5kYXJkIChkZWZhdWx0KTogVW5pdmVyc2FsIE5BU1xuICAgICAqIC1leHRyZW1lOiBleHRyZW1lIE5BU1xuICAgICAqIC1jcGZzOiBmaWxlIHN0b3JhZ2UgQ1BGU1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGZpbGVTeXN0ZW1UeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6TkFTOjpGaWxlU3lzdGVtc2BcbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVTeXN0ZW1zIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBGaWxlU3lzdGVtSWRzOiBUaGUgbGlzdCBvZiBmaWxlIHN5c3RlbSBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGaWxlU3lzdGVtSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRmlsZVN5c3RlbXM6IFRoZSBsaXN0IG9mIGZpbGUgc3lzdGVtcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZpbGVTeXN0ZW1zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6Ok5BUzo6RmlsZVN5c3RlbXNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEZpbGVTeXN0ZW1zUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NGaWxlU3lzdGVtcyA9IG5ldyBSb3NGaWxlU3lzdGVtcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGZpbGVTeXN0ZW1UeXBlOiBwcm9wcy5maWxlU3lzdGVtVHlwZSxcbiAgICAgICAgICAgIGZpbGVTeXN0ZW1JZDogcHJvcHMuZmlsZVN5c3RlbUlkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0ZpbGVTeXN0ZW1zO1xuICAgICAgICB0aGlzLmF0dHJGaWxlU3lzdGVtSWRzID0gcm9zRmlsZVN5c3RlbXMuYXR0ckZpbGVTeXN0ZW1JZHM7XG4gICAgICAgIHRoaXMuYXR0ckZpbGVTeXN0ZW1zID0gcm9zRmlsZVN5c3RlbXMuYXR0ckZpbGVTeXN0ZW1zO1xuICAgIH1cbn1cbiJdfQ==