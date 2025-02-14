package com.aliyun.ros.cdk.pvtz;

/**
 * A ROS resource type:  <code>ALIYUN::PVTZ::Zone</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.592Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.Zone")
public class Zone extends com.aliyun.ros.cdk.core.Resource {

    protected Zone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Zone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::PVTZ::Zone</code>.
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
    public Zone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.ZoneProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::PVTZ::Zone</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Zone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.ZoneProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ZoneId: Zone ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneName: Zone name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneName() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneTag: Zone label.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneTag() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneTag", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneType: Zone type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneType() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pvtz.Zone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pvtz.Zone> {
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
        private final com.aliyun.ros.cdk.pvtz.ZoneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pvtz.ZoneProps.Builder();
        }

        /**
         * Property zoneName: Zone name.
         * <p>
         * @return {@code this}
         * @param zoneName Property zoneName: Zone name. This parameter is required.
         */
        public Builder zoneName(final java.lang.String zoneName) {
            this.props.zoneName(zoneName);
            return this;
        }
        /**
         * Property zoneName: Zone name.
         * <p>
         * @return {@code this}
         * @param zoneName Property zoneName: Zone name. This parameter is required.
         */
        public Builder zoneName(final com.aliyun.ros.cdk.core.IResolvable zoneName) {
            this.props.zoneName(zoneName);
            return this;
        }

        /**
         * Property ignoredStackTagKeys: Stack tag keys to ignore.
         * <p>
         * @return {@code this}
         * @param ignoredStackTagKeys Property ignoredStackTagKeys: Stack tag keys to ignore. This parameter is required.
         */
        public Builder ignoredStackTagKeys(final com.aliyun.ros.cdk.core.IResolvable ignoredStackTagKeys) {
            this.props.ignoredStackTagKeys(ignoredStackTagKeys);
            return this;
        }
        /**
         * Property ignoredStackTagKeys: Stack tag keys to ignore.
         * <p>
         * @return {@code this}
         * @param ignoredStackTagKeys Property ignoredStackTagKeys: Stack tag keys to ignore. This parameter is required.
         */
        public Builder ignoredStackTagKeys(final java.util.List<? extends java.lang.Object> ignoredStackTagKeys) {
            this.props.ignoredStackTagKeys(ignoredStackTagKeys);
            return this;
        }

        /**
         * Property proxyPattern: ZONE: completely hijack the entire zone.
         * <p>
         * RECORD: Incomplete hijacking, recursive resolution agent.
         * Default to ZONE.
         * <p>
         * @return {@code this}
         * @param proxyPattern Property proxyPattern: ZONE: completely hijack the entire zone. This parameter is required.
         */
        public Builder proxyPattern(final java.lang.String proxyPattern) {
            this.props.proxyPattern(proxyPattern);
            return this;
        }
        /**
         * Property proxyPattern: ZONE: completely hijack the entire zone.
         * <p>
         * RECORD: Incomplete hijacking, recursive resolution agent.
         * Default to ZONE.
         * <p>
         * @return {@code this}
         * @param proxyPattern Property proxyPattern: ZONE: completely hijack the entire zone. This parameter is required.
         */
        public Builder proxyPattern(final com.aliyun.ros.cdk.core.IResolvable proxyPattern) {
            this.props.proxyPattern(proxyPattern);
            return this;
        }

        /**
         * Property remark: 50 characters at most.
         * <p>
         * It can only contain numbers, Chinese, English and special characters: "_-,.，。".
         * <p>
         * @return {@code this}
         * @param remark Property remark: 50 characters at most. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: 50 characters at most.
         * <p>
         * It can only contain numbers, Chinese, English and special characters: "_-,.，。".
         * <p>
         * @return {@code this}
         * @param remark Property remark: 50 characters at most. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property zoneTag: Zone label.
         * <p>
         * It will be ignored when ZoneType is AUTH_ZONE.
         * <p>
         * @return {@code this}
         * @param zoneTag Property zoneTag: Zone label. This parameter is required.
         */
        public Builder zoneTag(final java.lang.String zoneTag) {
            this.props.zoneTag(zoneTag);
            return this;
        }
        /**
         * Property zoneTag: Zone label.
         * <p>
         * It will be ignored when ZoneType is AUTH_ZONE.
         * <p>
         * @return {@code this}
         * @param zoneTag Property zoneTag: Zone label. This parameter is required.
         */
        public Builder zoneTag(final com.aliyun.ros.cdk.core.IResolvable zoneTag) {
            this.props.zoneTag(zoneTag);
            return this;
        }

        /**
         * Property zoneType: Zone type.
         * <p>
         * For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
         * <p>
         * @return {@code this}
         * @param zoneType Property zoneType: Zone type. This parameter is required.
         */
        public Builder zoneType(final java.lang.String zoneType) {
            this.props.zoneType(zoneType);
            return this;
        }
        /**
         * Property zoneType: Zone type.
         * <p>
         * For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
         * <p>
         * @return {@code this}
         * @param zoneType Property zoneType: Zone type. This parameter is required.
         */
        public Builder zoneType(final com.aliyun.ros.cdk.core.IResolvable zoneType) {
            this.props.zoneType(zoneType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pvtz.Zone}.
         */
        @Override
        public com.aliyun.ros.cdk.pvtz.Zone build() {
            return new com.aliyun.ros.cdk.pvtz.Zone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
