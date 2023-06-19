package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>ALIYUN::ApiGateway::VpcAccessConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:08.278Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.VpcAccessConfigProps")
@software.amazon.jsii.Jsii.Proxy(VpcAccessConfigProps.Jsii$Proxy.class)
public interface VpcAccessConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The id of the instance (ECS/SLB).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property name: The name of one VPC access configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property port: The port of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPort();

    /**
     * Property vpcId: The id of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * @return a {@link Builder} of {@link VpcAccessConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcAccessConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcAccessConfigProps> {
        java.lang.Object instanceId;
        java.lang.Object name;
        java.lang.Object port;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link VpcAccessConfigProps#getInstanceId}
         * @param instanceId Property instanceId: The id of the instance (ECS/SLB). This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcAccessConfigProps#getInstanceId}
         * @param instanceId Property instanceId: The id of the instance (ECS/SLB). This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcAccessConfigProps#getName}
         * @param name Property name: The name of one VPC access configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VpcAccessConfigProps#getName}
         * @param name Property name: The name of one VPC access configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VpcAccessConfigProps#getPort}
         * @param port Property port: The port of the VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link VpcAccessConfigProps#getPort}
         * @param port Property port: The port of the VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link VpcAccessConfigProps#getVpcId}
         * @param vpcId Property vpcId: The id of the VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcAccessConfigProps#getVpcId}
         * @param vpcId Property vpcId: The id of the VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcAccessConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcAccessConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcAccessConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcAccessConfigProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object name;
        private final java.lang.Object port;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("port", om.valueToTree(this.getPort()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.VpcAccessConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcAccessConfigProps.Jsii$Proxy that = (VpcAccessConfigProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!name.equals(that.name)) return false;
            if (!port.equals(that.port)) return false;
            return this.vpcId.equals(that.vpcId);
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.port.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            return result;
        }
    }
}
