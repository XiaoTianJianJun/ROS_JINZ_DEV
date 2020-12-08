"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactType = void 0;
/**
 * Type of cloud artifact.
 */
var ArtifactType;
(function (ArtifactType) {
    /**
     * Stub required because of JSII.
     */
    ArtifactType["NONE"] = "none";
    /**
     * The artifact is an ROS stack.
     */
    ArtifactType["ALIYUN_ROS_STACK"] = "aliyun:ros:stack";
    /**
     * The artifact contains the CDK application's construct tree.
     */
    ArtifactType["CDK_TREE"] = "cdk:tree";
    /**
     * Manifest for all assets in the Cloud Assembly
     */
    ArtifactType["ASSET_MANIFEST"] = "cdk:asset-manifest";
    /**
     * Nested Cloud Assembly
     */
    ArtifactType["NESTED_CLOUD_ASSEMBLY"] = "cdk:cloud-assembly";
})(ArtifactType = exports.ArtifactType || (exports.ArtifactType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBOztHQUVHO0FBQ0gsSUFBWSxZQXlCWDtBQXpCRCxXQUFZLFlBQVk7SUFDdEI7O09BRUc7SUFDSCw2QkFBYSxDQUFBO0lBRWI7O09BRUc7SUFDSCxxREFBcUMsQ0FBQTtJQUVyQzs7T0FFRztJQUNILHFDQUFxQixDQUFBO0lBRXJCOztPQUVHO0lBQ0gscURBQXFDLENBQUE7SUFFckM7O09BRUc7SUFDSCw0REFBNEMsQ0FBQTtBQUM5QyxDQUFDLEVBekJXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBeUJ2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFydGlmYWN0UHJvcGVydGllcyB9IGZyb20gXCIuL2FydGlmYWN0LXNjaGVtYVwiO1xuaW1wb3J0IHsgQ29udGV4dFByb3ZpZGVyLCBDb250ZXh0UXVlcnlQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vY29udGV4dC1xdWVyaWVzXCI7XG5pbXBvcnQgeyBNZXRhZGF0YUVudHJ5IH0gZnJvbSBcIi4vbWV0YWRhdGEtc2NoZW1hXCI7XG5cbi8qKlxuICogVHlwZSBvZiBjbG91ZCBhcnRpZmFjdC5cbiAqL1xuZXhwb3J0IGVudW0gQXJ0aWZhY3RUeXBlIHtcbiAgLyoqXG4gICAqIFN0dWIgcmVxdWlyZWQgYmVjYXVzZSBvZiBKU0lJLlxuICAgKi9cbiAgTk9ORSA9IFwibm9uZVwiLCAvLyByZXF1aXJlZCBkdWUgdG8gYSBqc2lpIGJ1Z1xuXG4gIC8qKlxuICAgKiBUaGUgYXJ0aWZhY3QgaXMgYW4gUk9TIHN0YWNrLlxuICAgKi9cbiAgQUxJWVVOX1JPU19TVEFDSyA9IFwiYWxpeXVuOnJvczpzdGFja1wiLFxuXG4gIC8qKlxuICAgKiBUaGUgYXJ0aWZhY3QgY29udGFpbnMgdGhlIENESyBhcHBsaWNhdGlvbidzIGNvbnN0cnVjdCB0cmVlLlxuICAgKi9cbiAgQ0RLX1RSRUUgPSBcImNkazp0cmVlXCIsXG5cbiAgLyoqXG4gICAqIE1hbmlmZXN0IGZvciBhbGwgYXNzZXRzIGluIHRoZSBDbG91ZCBBc3NlbWJseVxuICAgKi9cbiAgQVNTRVRfTUFOSUZFU1QgPSBcImNkazphc3NldC1tYW5pZmVzdFwiLFxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgQ2xvdWQgQXNzZW1ibHlcbiAgICovXG4gIE5FU1RFRF9DTE9VRF9BU1NFTUJMWSA9IFwiY2RrOmNsb3VkLWFzc2VtYmx5XCIsXG59XG5cbi8qKlxuICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIGFwcGxpY2F0aW9uJ3MgcnVudGltZSBjb21wb25lbnRzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJ1bnRpbWVJbmZvIHtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIGxpYnJhcmllcyBsb2FkZWQgaW4gdGhlIGFwcGxpY2F0aW9uLCBhc3NvY2lhdGVkIHdpdGggdGhlaXIgdmVyc2lvbnMuXG4gICAqL1xuICByZWFkb25seSBsaWJyYXJpZXM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBtaXNzaW5nIHBpZWNlIG9mIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWlzc2luZ0NvbnRleHQge1xuICAvKipcbiAgICogVGhlIG1pc3NpbmcgY29udGV4dCBrZXkuXG4gICAqL1xuICByZWFkb25seSBrZXk6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHByb3ZpZGVyIGZyb20gd2hpY2ggd2UgZXhwZWN0IHRoaXMgY29udGV4dCBrZXkgdG8gYmUgb2J0YWluZWQuXG4gICAqL1xuICByZWFkb25seSBwcm92aWRlcjogQ29udGV4dFByb3ZpZGVyO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBwcm92aWRlci1zcGVjaWZpYyBvcHRpb25zLlxuICAgKi9cbiAgcmVhZG9ubHkgcHJvcHM6IENvbnRleHRRdWVyeVByb3BlcnRpZXM7XG59XG5cbi8qKlxuICogQSBtYW5pZmVzdCBmb3IgYSBzaW5nbGUgYXJ0aWZhY3Qgd2l0aGluIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcnRpZmFjdE1hbmlmZXN0IHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIGFydGlmYWN0LlxuICAgKi9cbiAgcmVhZG9ubHkgdHlwZTogQXJ0aWZhY3RUeXBlO1xuXG4gIC8qKlxuICAgKiBBc3NvY2lhdGVkIG1ldGFkYXRhLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIG1ldGFkYXRhLlxuICAgKi9cbiAgcmVhZG9ubHkgbWV0YWRhdGE/OiB7IFtwYXRoOiBzdHJpbmddOiBNZXRhZGF0YUVudHJ5W10gfTtcblxuICAvKipcbiAgICogSURzIG9mIGFydGlmYWN0cyB0aGF0IG11c3QgYmUgZGVwbG95ZWQgYmVmb3JlIHRoaXMgYXJ0aWZhY3QuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gZGVwZW5kZW5jaWVzLlxuICAgKi9cbiAgcmVhZG9ubHkgZGVwZW5kZW5jaWVzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgcHJvcGVydGllcyBmb3IgdGhpcyBhcnRpZmFjdCAoZGVwZW5kcyBvbiB0eXBlKVxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIHByb3BlcnRpZXMuXG4gICAqL1xuICByZWFkb25seSBwcm9wZXJ0aWVzPzogQXJ0aWZhY3RQcm9wZXJ0aWVzO1xufVxuXG4vKipcbiAqIEEgbWFuaWZlc3Qgd2hpY2ggZGVzY3JpYmVzIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBc3NlbWJseU1hbmlmZXN0IHtcbiAgLyoqXG4gICAqIFByb3RvY29sIHZlcnNpb25cbiAgICovXG4gIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBhcnRpZmFjdHMgaW4gdGhpcyBhc3NlbWJseS5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBhcnRpZmFjdHMuXG4gICAqL1xuICByZWFkb25seSBhcnRpZmFjdHM/OiB7IFtpZDogc3RyaW5nXTogQXJ0aWZhY3RNYW5pZmVzdCB9O1xuXG4gIC8qKlxuICAgKiBNaXNzaW5nIGNvbnRleHQgaW5mb3JtYXRpb24uIElmIHRoaXMgZmllbGQgaGFzIHZhbHVlcywgaXQgbWVhbnMgdGhhdCB0aGVcbiAgICogY2xvdWQgYXNzZW1ibHkgaXMgbm90IGNvbXBsZXRlIGFuZCBzaG91bGQgbm90IGJlIGRlcGxveWVkLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIG1pc3NpbmcgY29udGV4dC5cbiAgICovXG4gIHJlYWRvbmx5IG1pc3Npbmc/OiBNaXNzaW5nQ29udGV4dFtdO1xuXG4gIC8qKlxuICAgKiBSdW50aW1lIGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIGluZm8uXG4gICAqL1xuICByZWFkb25seSBydW50aW1lPzogUnVudGltZUluZm87XG59XG4iXX0=