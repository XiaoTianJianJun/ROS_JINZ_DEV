package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::DBClusterAccessWhiteList`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.166Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBClusterAccessWhiteListProps")
@software.amazon.jsii.Jsii.Proxy(DBClusterAccessWhiteListProps.Jsii$Proxy.class)
public interface DBClusterAccessWhiteListProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSecurityIps();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbClusterIpArrayName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBClusterAccessWhiteListProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBClusterAccessWhiteListProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBClusterAccessWhiteListProps> {
        private java.lang.String dbClusterId;
        private java.lang.String securityIps;
        private java.lang.String dbClusterIpArrayName;

        /**
         * Sets the value of {@link DBClusterAccessWhiteListProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterAccessWhiteListProps#getSecurityIps}
         * @param securityIps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIps(java.lang.String securityIps) {
            this.securityIps = securityIps;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterAccessWhiteListProps#getDbClusterIpArrayName}
         * @param dbClusterIpArrayName the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterIpArrayName(java.lang.String dbClusterIpArrayName) {
            this.dbClusterIpArrayName = dbClusterIpArrayName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBClusterAccessWhiteListProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBClusterAccessWhiteListProps build() {
            return new Jsii$Proxy(dbClusterId, securityIps, dbClusterIpArrayName);
        }
    }

    /**
     * An implementation for {@link DBClusterAccessWhiteListProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBClusterAccessWhiteListProps {
        private final java.lang.String dbClusterId;
        private final java.lang.String securityIps;
        private final java.lang.String dbClusterIpArrayName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityIps = software.amazon.jsii.Kernel.get(this, "securityIps", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbClusterIpArrayName = software.amazon.jsii.Kernel.get(this, "dbClusterIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String dbClusterId, final java.lang.String securityIps, final java.lang.String dbClusterIpArrayName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = java.util.Objects.requireNonNull(dbClusterId, "dbClusterId is required");
            this.securityIps = java.util.Objects.requireNonNull(securityIps, "securityIps is required");
            this.dbClusterIpArrayName = dbClusterIpArrayName;
        }

        @Override
        public final java.lang.String getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.String getSecurityIps() {
            return this.securityIps;
        }

        @Override
        public final java.lang.String getDbClusterIpArrayName() {
            return this.dbClusterIpArrayName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("securityIps", om.valueToTree(this.getSecurityIps()));
            if (this.getDbClusterIpArrayName() != null) {
                data.set("dbClusterIpArrayName", om.valueToTree(this.getDbClusterIpArrayName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.DBClusterAccessWhiteListProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBClusterAccessWhiteListProps.Jsii$Proxy that = (DBClusterAccessWhiteListProps.Jsii$Proxy) o;

            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!securityIps.equals(that.securityIps)) return false;
            return this.dbClusterIpArrayName != null ? this.dbClusterIpArrayName.equals(that.dbClusterIpArrayName) : that.dbClusterIpArrayName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId.hashCode();
            result = 31 * result + (this.securityIps.hashCode());
            result = 31 * result + (this.dbClusterIpArrayName != null ? this.dbClusterIpArrayName.hashCode() : 0);
            return result;
        }
    }
}
