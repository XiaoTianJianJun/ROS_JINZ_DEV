package com.aliyun.ros.cdk.ram;

/**
 * A ROS resource type:  <code>ALIYUN::RAM::Group</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.607Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.Group")
public class Group extends com.aliyun.ros.cdk.core.Resource {

    protected Group(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Group(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::RAM::Group</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.GroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::RAM::Group</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.GroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupName: Id of ram group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.Group}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.Group> {
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
        private final com.aliyun.ros.cdk.ram.GroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.GroupProps.Builder();
        }

        /**
         * Property groupName: Specifies the group name, containing up to 64 characters.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: Specifies the group name, containing up to 64 characters.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property comments: Remark information, up to 128 characters or Chinese characters.
         * <p>
         * @return {@code this}
         * @param comments Property comments: Remark information, up to 128 characters or Chinese characters. This parameter is required.
         */
        public Builder comments(final java.lang.String comments) {
            this.props.comments(comments);
            return this;
        }
        /**
         * Property comments: Remark information, up to 128 characters or Chinese characters.
         * <p>
         * @return {@code this}
         * @param comments Property comments: Remark information, up to 128 characters or Chinese characters. This parameter is required.
         */
        public Builder comments(final com.aliyun.ros.cdk.core.IResolvable comments) {
            this.props.comments(comments);
            return this;
        }

        /**
         * Property deletionForce: Whether force detach the policies attached to the group.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force detach the policies attached to the group. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether force detach the policies attached to the group.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force detach the policies attached to the group. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final java.lang.Boolean ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }
        /**
         * Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }

        /**
         * Property policies: Describes what actions are allowed on what resources.
         * <p>
         * @return {@code this}
         * @param policies Property policies: Describes what actions are allowed on what resources. This parameter is required.
         */
        public Builder policies(final com.aliyun.ros.cdk.core.IResolvable policies) {
            this.props.policies(policies);
            return this;
        }
        /**
         * Property policies: Describes what actions are allowed on what resources.
         * <p>
         * @return {@code this}
         * @param policies Property policies: Describes what actions are allowed on what resources. This parameter is required.
         */
        public Builder policies(final java.util.List<? extends java.lang.Object> policies) {
            this.props.policies(policies);
            return this;
        }

        /**
         * Property policyAttachments: System and custom policy names to attach.
         * <p>
         * @return {@code this}
         * @param policyAttachments Property policyAttachments: System and custom policy names to attach. This parameter is required.
         */
        public Builder policyAttachments(final com.aliyun.ros.cdk.core.IResolvable policyAttachments) {
            this.props.policyAttachments(policyAttachments);
            return this;
        }
        /**
         * Property policyAttachments: System and custom policy names to attach.
         * <p>
         * @return {@code this}
         * @param policyAttachments Property policyAttachments: System and custom policy names to attach. This parameter is required.
         */
        public Builder policyAttachments(final com.aliyun.ros.cdk.ram.RosGroup.PolicyAttachmentsProperty policyAttachments) {
            this.props.policyAttachments(policyAttachments);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.Group}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.Group build() {
            return new com.aliyun.ros.cdk.ram.Group(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
