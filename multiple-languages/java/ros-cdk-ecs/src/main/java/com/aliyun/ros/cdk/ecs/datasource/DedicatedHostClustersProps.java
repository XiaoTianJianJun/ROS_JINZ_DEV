package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ECS::DedicatedHostClusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:24.995Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DedicatedHostClustersProps")
@software.amazon.jsii.Jsii.Proxy(DedicatedHostClustersProps.Jsii$Proxy.class)
public interface DedicatedHostClustersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dedicatedHostClusterName: The name of the dedicated host cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostClusterName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
     * <p>
     * If this parameter is specified to query resources,
     * up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property zoneId: The zone ID of the dedicated host cluster.
     * <p>
     * You can call the DescribeZones operation to query the most recent zone list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DedicatedHostClustersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DedicatedHostClustersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DedicatedHostClustersProps> {
        java.lang.Object dedicatedHostClusterName;
        java.lang.Object resourceGroupId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link DedicatedHostClustersProps#getDedicatedHostClusterName}
         * @param dedicatedHostClusterName Property dedicatedHostClusterName: The name of the dedicated host cluster.
         * @return {@code this}
         */
        public Builder dedicatedHostClusterName(java.lang.String dedicatedHostClusterName) {
            this.dedicatedHostClusterName = dedicatedHostClusterName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClustersProps#getDedicatedHostClusterName}
         * @param dedicatedHostClusterName Property dedicatedHostClusterName: The name of the dedicated host cluster.
         * @return {@code this}
         */
        public Builder dedicatedHostClusterName(com.aliyun.ros.cdk.core.IResolvable dedicatedHostClusterName) {
            this.dedicatedHostClusterName = dedicatedHostClusterName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClustersProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
         *                        If this parameter is specified to query resources,
         *                        up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClustersProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
         *                        If this parameter is specified to query resources,
         *                        up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClustersProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the dedicated host cluster.
         *               You can call the DescribeZones operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClustersProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the dedicated host cluster.
         *               You can call the DescribeZones operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DedicatedHostClustersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DedicatedHostClustersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DedicatedHostClustersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DedicatedHostClustersProps {
        private final java.lang.Object dedicatedHostClusterName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedHostClusterName = software.amazon.jsii.Kernel.get(this, "dedicatedHostClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedHostClusterName = builder.dedicatedHostClusterName;
            this.resourceGroupId = builder.resourceGroupId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDedicatedHostClusterName() {
            return this.dedicatedHostClusterName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDedicatedHostClusterName() != null) {
                data.set("dedicatedHostClusterName", om.valueToTree(this.getDedicatedHostClusterName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.DedicatedHostClustersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DedicatedHostClustersProps.Jsii$Proxy that = (DedicatedHostClustersProps.Jsii$Proxy) o;

            if (this.dedicatedHostClusterName != null ? !this.dedicatedHostClusterName.equals(that.dedicatedHostClusterName) : that.dedicatedHostClusterName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedHostClusterName != null ? this.dedicatedHostClusterName.hashCode() : 0;
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
