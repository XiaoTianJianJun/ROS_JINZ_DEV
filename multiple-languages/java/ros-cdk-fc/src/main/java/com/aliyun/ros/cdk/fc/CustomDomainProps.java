package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a `ALIYUN::FC::CustomDomain`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.940Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.CustomDomainProps")
@software.amazon.jsii.Jsii.Proxy(CustomDomainProps.Jsii$Proxy.class)
public interface CustomDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDomainName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProtocol();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getApiVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CustomDomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomDomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomDomainProps> {
        private java.lang.String domainName;
        private java.lang.String protocol;
        private java.lang.String apiVersion;
        private java.lang.Object certConfig;
        private java.lang.Object routeConfig;

        /**
         * Sets the value of {@link CustomDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getApiVersion}
         * @param apiVersion the value to be set.
         * @return {@code this}
         */
        public Builder apiVersion(java.lang.String apiVersion) {
            this.apiVersion = apiVersion;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertConfig}
         * @param certConfig the value to be set.
         * @return {@code this}
         */
        public Builder certConfig(com.aliyun.ros.cdk.core.IResolvable certConfig) {
            this.certConfig = certConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertConfig}
         * @param certConfig the value to be set.
         * @return {@code this}
         */
        public Builder certConfig(com.aliyun.ros.cdk.fc.RosCustomDomain.CertConfigProperty certConfig) {
            this.certConfig = certConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getRouteConfig}
         * @param routeConfig the value to be set.
         * @return {@code this}
         */
        public Builder routeConfig(com.aliyun.ros.cdk.core.IResolvable routeConfig) {
            this.routeConfig = routeConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getRouteConfig}
         * @param routeConfig the value to be set.
         * @return {@code this}
         */
        public Builder routeConfig(com.aliyun.ros.cdk.fc.RosCustomDomain.RouteConfigProperty routeConfig) {
            this.routeConfig = routeConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomDomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomDomainProps build() {
            return new Jsii$Proxy(domainName, protocol, apiVersion, certConfig, routeConfig);
        }
    }

    /**
     * An implementation for {@link CustomDomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomDomainProps {
        private final java.lang.String domainName;
        private final java.lang.String protocol;
        private final java.lang.String apiVersion;
        private final java.lang.Object certConfig;
        private final java.lang.Object routeConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.apiVersion = software.amazon.jsii.Kernel.get(this, "apiVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.certConfig = software.amazon.jsii.Kernel.get(this, "certConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeConfig = software.amazon.jsii.Kernel.get(this, "routeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String domainName, final java.lang.String protocol, final java.lang.String apiVersion, final java.lang.Object certConfig, final java.lang.Object routeConfig) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(domainName, "domainName is required");
            this.protocol = java.util.Objects.requireNonNull(protocol, "protocol is required");
            this.apiVersion = apiVersion;
            this.certConfig = certConfig;
            this.routeConfig = routeConfig;
        }

        @Override
        public final java.lang.String getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.String getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.String getApiVersion() {
            return this.apiVersion;
        }

        @Override
        public final java.lang.Object getCertConfig() {
            return this.certConfig;
        }

        @Override
        public final java.lang.Object getRouteConfig() {
            return this.routeConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            if (this.getApiVersion() != null) {
                data.set("apiVersion", om.valueToTree(this.getApiVersion()));
            }
            if (this.getCertConfig() != null) {
                data.set("certConfig", om.valueToTree(this.getCertConfig()));
            }
            if (this.getRouteConfig() != null) {
                data.set("routeConfig", om.valueToTree(this.getRouteConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.CustomDomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomDomainProps.Jsii$Proxy that = (CustomDomainProps.Jsii$Proxy) o;

            if (!domainName.equals(that.domainName)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (this.apiVersion != null ? !this.apiVersion.equals(that.apiVersion) : that.apiVersion != null) return false;
            if (this.certConfig != null ? !this.certConfig.equals(that.certConfig) : that.certConfig != null) return false;
            return this.routeConfig != null ? this.routeConfig.equals(that.routeConfig) : that.routeConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.apiVersion != null ? this.apiVersion.hashCode() : 0);
            result = 31 * result + (this.certConfig != null ? this.certConfig.hashCode() : 0);
            result = 31 * result + (this.routeConfig != null ? this.routeConfig.hashCode() : 0);
            return result;
        }
    }
}
