package com.aliyun.ros.cdk.devops;

/**
 * Properties for defining a <code>ALIYUN::DEVOPS::PipelineRun</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:34.402Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.RosPipelineRunProps")
@software.amazon.jsii.Jsii.Proxy(RosPipelineRunProps.Jsii$Proxy.class)
public interface RosPipelineRunProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPipelineId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParams() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSync() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPipelineRunProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPipelineRunProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPipelineRunProps> {
        java.lang.Object organizationId;
        java.lang.Object pipelineId;
        java.lang.Object params;
        java.lang.Object sync;
        java.lang.Object timeout;

        /**
         * Sets the value of {@link RosPipelineRunProps#getOrganizationId}
         * @param organizationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(java.lang.String organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Sets the value of {@link RosPipelineRunProps#getOrganizationId}
         * @param organizationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Sets the value of {@link RosPipelineRunProps#getPipelineId}
         * @param pipelineId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pipelineId(java.lang.Number pipelineId) {
            this.pipelineId = pipelineId;
            return this;
        }

        /**
         * Sets the value of {@link RosPipelineRunProps#getPipelineId}
         * @param pipelineId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pipelineId(com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.pipelineId = pipelineId;
            return this;
        }

        /**
         * Sets the value of {@link RosPipelineRunProps#getParams}
         * @param params the value to be set.
         * @return {@code this}
         */
        public Builder params(com.aliyun.ros.cdk.core.IResolvable params) {
            this.params = params;
            return this;
        }

        /**
         * Sets the value of {@link RosPipelineRunProps#getParams}
         * @param params the value to be set.
         * @return {@code this}
         */
        public Builder params(java.util.Map<java.lang.String, ? extends java.lang.Object> params) {
            this.params = params;
            return this;
        }

        /**
         * Sets the value of {@link RosPipelineRunProps#getSync}
         * @param sync the value to be set.
         * @return {@code this}
         */
        public Builder sync(java.lang.Boolean sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RosPipelineRunProps#getSync}
         * @param sync the value to be set.
         * @return {@code this}
         */
        public Builder sync(com.aliyun.ros.cdk.core.IResolvable sync) {
            this.sync = sync;
            return this;
        }

        /**
         * Sets the value of {@link RosPipelineRunProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosPipelineRunProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPipelineRunProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPipelineRunProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPipelineRunProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPipelineRunProps {
        private final java.lang.Object organizationId;
        private final java.lang.Object pipelineId;
        private final java.lang.Object params;
        private final java.lang.Object sync;
        private final java.lang.Object timeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.organizationId = software.amazon.jsii.Kernel.get(this, "organizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pipelineId = software.amazon.jsii.Kernel.get(this, "pipelineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.params = software.amazon.jsii.Kernel.get(this, "params", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sync = software.amazon.jsii.Kernel.get(this, "sync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.organizationId = java.util.Objects.requireNonNull(builder.organizationId, "organizationId is required");
            this.pipelineId = java.util.Objects.requireNonNull(builder.pipelineId, "pipelineId is required");
            this.params = builder.params;
            this.sync = builder.sync;
            this.timeout = builder.timeout;
        }

        @Override
        public final java.lang.Object getOrganizationId() {
            return this.organizationId;
        }

        @Override
        public final java.lang.Object getPipelineId() {
            return this.pipelineId;
        }

        @Override
        public final java.lang.Object getParams() {
            return this.params;
        }

        @Override
        public final java.lang.Object getSync() {
            return this.sync;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("organizationId", om.valueToTree(this.getOrganizationId()));
            data.set("pipelineId", om.valueToTree(this.getPipelineId()));
            if (this.getParams() != null) {
                data.set("params", om.valueToTree(this.getParams()));
            }
            if (this.getSync() != null) {
                data.set("sync", om.valueToTree(this.getSync()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-devops.RosPipelineRunProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPipelineRunProps.Jsii$Proxy that = (RosPipelineRunProps.Jsii$Proxy) o;

            if (!organizationId.equals(that.organizationId)) return false;
            if (!pipelineId.equals(that.pipelineId)) return false;
            if (this.params != null ? !this.params.equals(that.params) : that.params != null) return false;
            if (this.sync != null ? !this.sync.equals(that.sync) : that.sync != null) return false;
            return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
        }

        @Override
        public final int hashCode() {
            int result = this.organizationId.hashCode();
            result = 31 * result + (this.pipelineId.hashCode());
            result = 31 * result + (this.params != null ? this.params.hashCode() : 0);
            result = 31 * result + (this.sync != null ? this.sync.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            return result;
        }
    }
}
