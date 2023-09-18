package com.aliyun.ros.cdk.pai.datasource;

/**
 * Properties for defining a <code>DATASOURCE::PAI::Services</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:27.285Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.datasource.ServicesProps")
@software.amazon.jsii.Jsii.Proxy(ServicesProps.Jsii$Proxy.class)
public interface ServicesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property labels: Service Tag.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
        return null;
    }

    /**
     * Property serviceName: Service Name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ServicesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServicesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServicesProps> {
        java.lang.Object labels;
        java.lang.Object serviceName;

        /**
         * Sets the value of {@link ServicesProps#getLabels}
         * @param labels Property labels: Service Tag.
         * @return {@code this}
         */
        public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link ServicesProps#getLabels}
         * @param labels Property labels: Service Tag.
         * @return {@code this}
         */
        public Builder labels(java.util.Map<java.lang.String, ? extends java.lang.Object> labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link ServicesProps#getServiceName}
         * @param serviceName Property serviceName: Service Name.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link ServicesProps#getServiceName}
         * @param serviceName Property serviceName: Service Name.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServicesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServicesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServicesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServicesProps {
        private final java.lang.Object labels;
        private final java.lang.Object serviceName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.labels = builder.labels;
            this.serviceName = builder.serviceName;
        }

        @Override
        public final java.lang.Object getLabels() {
            return this.labels;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getLabels() != null) {
                data.set("labels", om.valueToTree(this.getLabels()));
            }
            if (this.getServiceName() != null) {
                data.set("serviceName", om.valueToTree(this.getServiceName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.datasource.ServicesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServicesProps.Jsii$Proxy that = (ServicesProps.Jsii$Proxy) o;

            if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
            return this.serviceName != null ? this.serviceName.equals(that.serviceName) : that.serviceName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.labels != null ? this.labels.hashCode() : 0;
            result = 31 * result + (this.serviceName != null ? this.serviceName.hashCode() : 0);
            return result;
        }
    }
}
