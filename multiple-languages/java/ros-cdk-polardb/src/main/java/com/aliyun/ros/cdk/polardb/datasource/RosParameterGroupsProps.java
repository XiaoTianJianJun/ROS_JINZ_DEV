package com.aliyun.ros.cdk.polardb.datasource;

/**
 * Properties for defining a <code>DATASOURCE::POLARDB::ParameterGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.521Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.RosParameterGroupsProps")
@software.amazon.jsii.Jsii.Proxy(RosParameterGroupsProps.Jsii$Proxy.class)
public interface RosParameterGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosParameterGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosParameterGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosParameterGroupsProps> {
        java.lang.Object dbType;
        java.lang.Object dbVersion;

        /**
         * Sets the value of {@link RosParameterGroupsProps#getDbType}
         * @param dbType the value to be set.
         * @return {@code this}
         */
        public Builder dbType(java.lang.String dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupsProps#getDbType}
         * @param dbType the value to be set.
         * @return {@code this}
         */
        public Builder dbType(com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupsProps#getDbVersion}
         * @param dbVersion the value to be set.
         * @return {@code this}
         */
        public Builder dbVersion(java.lang.String dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupsProps#getDbVersion}
         * @param dbVersion the value to be set.
         * @return {@code this}
         */
        public Builder dbVersion(com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosParameterGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosParameterGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosParameterGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosParameterGroupsProps {
        private final java.lang.Object dbType;
        private final java.lang.Object dbVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbType = software.amazon.jsii.Kernel.get(this, "dbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbVersion = software.amazon.jsii.Kernel.get(this, "dbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbType = builder.dbType;
            this.dbVersion = builder.dbVersion;
        }

        @Override
        public final java.lang.Object getDbType() {
            return this.dbType;
        }

        @Override
        public final java.lang.Object getDbVersion() {
            return this.dbVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDbType() != null) {
                data.set("dbType", om.valueToTree(this.getDbType()));
            }
            if (this.getDbVersion() != null) {
                data.set("dbVersion", om.valueToTree(this.getDbVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.datasource.RosParameterGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosParameterGroupsProps.Jsii$Proxy that = (RosParameterGroupsProps.Jsii$Proxy) o;

            if (this.dbType != null ? !this.dbType.equals(that.dbType) : that.dbType != null) return false;
            return this.dbVersion != null ? this.dbVersion.equals(that.dbVersion) : that.dbVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbType != null ? this.dbType.hashCode() : 0;
            result = 31 * result + (this.dbVersion != null ? this.dbVersion.hashCode() : 0);
            return result;
        }
    }
}
