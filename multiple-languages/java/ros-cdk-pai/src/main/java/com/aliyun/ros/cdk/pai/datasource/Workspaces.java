package com.aliyun.ros.cdk.pai.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::PAI::Workspaces</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.394Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.datasource.Workspaces")
public class Workspaces extends com.aliyun.ros.cdk.core.Resource {

    protected Workspaces(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Workspaces(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::PAI::Workspaces</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Workspaces(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.pai.datasource.WorkspacesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::PAI::Workspaces</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Workspaces(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.pai.datasource.WorkspacesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::PAI::Workspaces</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Workspaces(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute WorkspaceIds: The list of workspace IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkspaceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Workspaces: The list of workspaces.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkspaces() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaces", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.datasource.Workspaces}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.datasource.Workspaces> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.pai.datasource.WorkspacesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property workspaceId: The ID of the workspace.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props().workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: The ID of the workspace.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props().workspaceId(workspaceId);
            return this;
        }

        /**
         * Property workspaceName: The workspace name.
         * <p>
         * The format is as follows:
         * <p>
         * <ul>
         * <li>3 to 23 characters in length and can contain letters, underscores, or numbers.</li>
         * <li>Must start with a large or small letter.</li>
         * <li>Unique in the current region.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param workspaceName Property workspaceName: The workspace name. This parameter is required.
         */
        public Builder workspaceName(final java.lang.String workspaceName) {
            this.props().workspaceName(workspaceName);
            return this;
        }
        /**
         * Property workspaceName: The workspace name.
         * <p>
         * The format is as follows:
         * <p>
         * <ul>
         * <li>3 to 23 characters in length and can contain letters, underscores, or numbers.</li>
         * <li>Must start with a large or small letter.</li>
         * <li>Unique in the current region.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param workspaceName Property workspaceName: The workspace name. This parameter is required.
         */
        public Builder workspaceName(final com.aliyun.ros.cdk.core.IResolvable workspaceName) {
            this.props().workspaceName(workspaceName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.datasource.Workspaces}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.datasource.Workspaces build() {
            return new com.aliyun.ros.cdk.pai.datasource.Workspaces(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.pai.datasource.WorkspacesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.pai.datasource.WorkspacesProps.Builder();
            }
            return this.props;
        }
    }
}
