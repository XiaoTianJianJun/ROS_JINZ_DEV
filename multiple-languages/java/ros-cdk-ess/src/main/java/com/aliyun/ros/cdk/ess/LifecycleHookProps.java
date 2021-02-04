package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::LifecycleHook`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.808Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.LifecycleHookProps")
@software.amazon.jsii.Jsii.Proxy(LifecycleHookProps.Jsii$Proxy.class)
public interface LifecycleHookProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLifecycleTransition();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getScalingGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDefaultResult() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getHeartbeatTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLifecycleHookName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNotificationArn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNotificationMetadata() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LifecycleHookProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LifecycleHookProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LifecycleHookProps> {
        private java.lang.String lifecycleTransition;
        private java.lang.String scalingGroupId;
        private java.lang.String defaultResult;
        private java.lang.Number heartbeatTimeout;
        private java.lang.String lifecycleHookName;
        private java.lang.String notificationArn;
        private java.lang.String notificationMetadata;

        /**
         * Sets the value of {@link LifecycleHookProps#getLifecycleTransition}
         * @param lifecycleTransition the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder lifecycleTransition(java.lang.String lifecycleTransition) {
            this.lifecycleTransition = lifecycleTransition;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getDefaultResult}
         * @param defaultResult the value to be set.
         * @return {@code this}
         */
        public Builder defaultResult(java.lang.String defaultResult) {
            this.defaultResult = defaultResult;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getHeartbeatTimeout}
         * @param heartbeatTimeout the value to be set.
         * @return {@code this}
         */
        public Builder heartbeatTimeout(java.lang.Number heartbeatTimeout) {
            this.heartbeatTimeout = heartbeatTimeout;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getLifecycleHookName}
         * @param lifecycleHookName the value to be set.
         * @return {@code this}
         */
        public Builder lifecycleHookName(java.lang.String lifecycleHookName) {
            this.lifecycleHookName = lifecycleHookName;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getNotificationArn}
         * @param notificationArn the value to be set.
         * @return {@code this}
         */
        public Builder notificationArn(java.lang.String notificationArn) {
            this.notificationArn = notificationArn;
            return this;
        }

        /**
         * Sets the value of {@link LifecycleHookProps#getNotificationMetadata}
         * @param notificationMetadata the value to be set.
         * @return {@code this}
         */
        public Builder notificationMetadata(java.lang.String notificationMetadata) {
            this.notificationMetadata = notificationMetadata;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LifecycleHookProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LifecycleHookProps build() {
            return new Jsii$Proxy(lifecycleTransition, scalingGroupId, defaultResult, heartbeatTimeout, lifecycleHookName, notificationArn, notificationMetadata);
        }
    }

    /**
     * An implementation for {@link LifecycleHookProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LifecycleHookProps {
        private final java.lang.String lifecycleTransition;
        private final java.lang.String scalingGroupId;
        private final java.lang.String defaultResult;
        private final java.lang.Number heartbeatTimeout;
        private final java.lang.String lifecycleHookName;
        private final java.lang.String notificationArn;
        private final java.lang.String notificationMetadata;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.lifecycleTransition = software.amazon.jsii.Kernel.get(this, "lifecycleTransition", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.defaultResult = software.amazon.jsii.Kernel.get(this, "defaultResult", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.heartbeatTimeout = software.amazon.jsii.Kernel.get(this, "heartbeatTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.lifecycleHookName = software.amazon.jsii.Kernel.get(this, "lifecycleHookName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.notificationArn = software.amazon.jsii.Kernel.get(this, "notificationArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.notificationMetadata = software.amazon.jsii.Kernel.get(this, "notificationMetadata", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String lifecycleTransition, final java.lang.String scalingGroupId, final java.lang.String defaultResult, final java.lang.Number heartbeatTimeout, final java.lang.String lifecycleHookName, final java.lang.String notificationArn, final java.lang.String notificationMetadata) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.lifecycleTransition = java.util.Objects.requireNonNull(lifecycleTransition, "lifecycleTransition is required");
            this.scalingGroupId = java.util.Objects.requireNonNull(scalingGroupId, "scalingGroupId is required");
            this.defaultResult = defaultResult;
            this.heartbeatTimeout = heartbeatTimeout;
            this.lifecycleHookName = lifecycleHookName;
            this.notificationArn = notificationArn;
            this.notificationMetadata = notificationMetadata;
        }

        @Override
        public final java.lang.String getLifecycleTransition() {
            return this.lifecycleTransition;
        }

        @Override
        public final java.lang.String getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.String getDefaultResult() {
            return this.defaultResult;
        }

        @Override
        public final java.lang.Number getHeartbeatTimeout() {
            return this.heartbeatTimeout;
        }

        @Override
        public final java.lang.String getLifecycleHookName() {
            return this.lifecycleHookName;
        }

        @Override
        public final java.lang.String getNotificationArn() {
            return this.notificationArn;
        }

        @Override
        public final java.lang.String getNotificationMetadata() {
            return this.notificationMetadata;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("lifecycleTransition", om.valueToTree(this.getLifecycleTransition()));
            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            if (this.getDefaultResult() != null) {
                data.set("defaultResult", om.valueToTree(this.getDefaultResult()));
            }
            if (this.getHeartbeatTimeout() != null) {
                data.set("heartbeatTimeout", om.valueToTree(this.getHeartbeatTimeout()));
            }
            if (this.getLifecycleHookName() != null) {
                data.set("lifecycleHookName", om.valueToTree(this.getLifecycleHookName()));
            }
            if (this.getNotificationArn() != null) {
                data.set("notificationArn", om.valueToTree(this.getNotificationArn()));
            }
            if (this.getNotificationMetadata() != null) {
                data.set("notificationMetadata", om.valueToTree(this.getNotificationMetadata()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.LifecycleHookProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LifecycleHookProps.Jsii$Proxy that = (LifecycleHookProps.Jsii$Proxy) o;

            if (!lifecycleTransition.equals(that.lifecycleTransition)) return false;
            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (this.defaultResult != null ? !this.defaultResult.equals(that.defaultResult) : that.defaultResult != null) return false;
            if (this.heartbeatTimeout != null ? !this.heartbeatTimeout.equals(that.heartbeatTimeout) : that.heartbeatTimeout != null) return false;
            if (this.lifecycleHookName != null ? !this.lifecycleHookName.equals(that.lifecycleHookName) : that.lifecycleHookName != null) return false;
            if (this.notificationArn != null ? !this.notificationArn.equals(that.notificationArn) : that.notificationArn != null) return false;
            return this.notificationMetadata != null ? this.notificationMetadata.equals(that.notificationMetadata) : that.notificationMetadata == null;
        }

        @Override
        public final int hashCode() {
            int result = this.lifecycleTransition.hashCode();
            result = 31 * result + (this.scalingGroupId.hashCode());
            result = 31 * result + (this.defaultResult != null ? this.defaultResult.hashCode() : 0);
            result = 31 * result + (this.heartbeatTimeout != null ? this.heartbeatTimeout.hashCode() : 0);
            result = 31 * result + (this.lifecycleHookName != null ? this.lifecycleHookName.hashCode() : 0);
            result = 31 * result + (this.notificationArn != null ? this.notificationArn.hashCode() : 0);
            result = 31 * result + (this.notificationMetadata != null ? this.notificationMetadata.hashCode() : 0);
            return result;
        }
    }
}
