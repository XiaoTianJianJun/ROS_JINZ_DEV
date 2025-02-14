package com.aliyun.ros.cdk.vpc.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::VPC::FlowLogs</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.766Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.FlowLogs")
public class FlowLogs extends com.aliyun.ros.cdk.core.Resource {

    protected FlowLogs(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FlowLogs(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::VPC::FlowLogs</code>.
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
    public FlowLogs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.FlowLogsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::VPC::FlowLogs</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public FlowLogs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.FlowLogsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::VPC::FlowLogs</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public FlowLogs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute FlowLogIds: The list of flow log IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowLogIds() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FlowLogs: The list of flow logs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowLogs() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.FlowLogs}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.FlowLogs> {
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
        private com.aliyun.ros.cdk.vpc.datasource.FlowLogsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property description: The description of the flow log.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the flow log. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of the flow log.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the flow log. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property flowLogId: The ID of a flow log.
         * <p>
         * @return {@code this}
         * @param flowLogId Property flowLogId: The ID of a flow log. This parameter is required.
         */
        public Builder flowLogId(final java.lang.String flowLogId) {
            this.props().flowLogId(flowLogId);
            return this;
        }
        /**
         * Property flowLogId: The ID of a flow log.
         * <p>
         * @return {@code this}
         * @param flowLogId Property flowLogId: The ID of a flow log. This parameter is required.
         */
        public Builder flowLogId(final com.aliyun.ros.cdk.core.IResolvable flowLogId) {
            this.props().flowLogId(flowLogId);
            return this;
        }

        /**
         * Property flowLogName: The name of the flow log.
         * <p>
         * @return {@code this}
         * @param flowLogName Property flowLogName: The name of the flow log. This parameter is required.
         */
        public Builder flowLogName(final java.lang.String flowLogName) {
            this.props().flowLogName(flowLogName);
            return this;
        }
        /**
         * Property flowLogName: The name of the flow log.
         * <p>
         * @return {@code this}
         * @param flowLogName Property flowLogName: The name of the flow log. This parameter is required.
         */
        public Builder flowLogName(final com.aliyun.ros.cdk.core.IResolvable flowLogName) {
            this.props().flowLogName(flowLogName);
            return this;
        }

        /**
         * Property logStoreName: A LogStore that stores captured traffic.
         * <p>
         * @return {@code this}
         * @param logStoreName Property logStoreName: A LogStore that stores captured traffic. This parameter is required.
         */
        public Builder logStoreName(final java.lang.String logStoreName) {
            this.props().logStoreName(logStoreName);
            return this;
        }
        /**
         * Property logStoreName: A LogStore that stores captured traffic.
         * <p>
         * @return {@code this}
         * @param logStoreName Property logStoreName: A LogStore that stores captured traffic. This parameter is required.
         */
        public Builder logStoreName(final com.aliyun.ros.cdk.core.IResolvable logStoreName) {
            this.props().logStoreName(logStoreName);
            return this;
        }

        /**
         * Property projectName: Manage the captured traffic of the Project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: Manage the captured traffic of the Project. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props().projectName(projectName);
            return this;
        }
        /**
         * Property projectName: Manage the captured traffic of the Project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: Manage the captured traffic of the Project. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props().projectName(projectName);
            return this;
        }

        /**
         * Property resourceId: The ID of the resource group to which the flow log belongs.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: The ID of the resource group to which the flow log belongs. This parameter is required.
         */
        public Builder resourceId(final java.lang.String resourceId) {
            this.props().resourceId(resourceId);
            return this;
        }
        /**
         * Property resourceId: The ID of the resource group to which the flow log belongs.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: The ID of the resource group to which the flow log belongs. This parameter is required.
         */
        public Builder resourceId(final com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.props().resourceId(resourceId);
            return this;
        }

        /**
         * Property resourceType: The resource type of traffic to capture.
         * <p>
         * Value:
         * NetworkInterface: Elastic NIC.
         * VSwitch: All ENIs within the VSwitch.
         * VPC: All ENIs in a VPC.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource type of traffic to capture. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props().resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The resource type of traffic to capture.
         * <p>
         * Value:
         * NetworkInterface: Elastic NIC.
         * VSwitch: All ENIs within the VSwitch.
         * VPC: All ENIs in a VPC.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource type of traffic to capture. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props().resourceType(resourceType);
            return this;
        }

        /**
         * Property trafficType: The type of traffic collected.
         * <p>
         * Value:
         * All: All traffic.
         * Allow: Traffic allowed by access control.
         * Drop: Traffic denied by access control.
         * <p>
         * @return {@code this}
         * @param trafficType Property trafficType: The type of traffic collected. This parameter is required.
         */
        public Builder trafficType(final java.lang.String trafficType) {
            this.props().trafficType(trafficType);
            return this;
        }
        /**
         * Property trafficType: The type of traffic collected.
         * <p>
         * Value:
         * All: All traffic.
         * Allow: Traffic allowed by access control.
         * Drop: Traffic denied by access control.
         * <p>
         * @return {@code this}
         * @param trafficType Property trafficType: The type of traffic collected. This parameter is required.
         */
        public Builder trafficType(final com.aliyun.ros.cdk.core.IResolvable trafficType) {
            this.props().trafficType(trafficType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.FlowLogs}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.FlowLogs build() {
            return new com.aliyun.ros.cdk.vpc.datasource.FlowLogs(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.FlowLogsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.FlowLogsProps.Builder();
            }
            return this.props;
        }
    }
}
