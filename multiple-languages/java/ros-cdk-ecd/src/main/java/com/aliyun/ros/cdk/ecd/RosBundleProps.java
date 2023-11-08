package com.aliyun.ros.cdk.ecd;

/**
 * Properties for defining a <code>ALIYUN::ECD::Bundle</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:34.637Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.RosBundleProps")
@software.amazon.jsii.Jsii.Proxy(RosBundleProps.Jsii$Proxy.class)
public interface RosBundleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDesktopType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRootDiskSizeGib();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserDiskSizeGib();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBundleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLanguage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRootDiskPerformanceLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserDiskPerformanceLevel() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBundleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBundleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBundleProps> {
        java.lang.Object desktopType;
        java.lang.Object imageId;
        java.lang.Object rootDiskSizeGib;
        java.lang.Object userDiskSizeGib;
        java.lang.Object bundleName;
        java.lang.Object description;
        java.lang.Object language;
        java.lang.Object rootDiskPerformanceLevel;
        java.lang.Object userDiskPerformanceLevel;

        /**
         * Sets the value of {@link RosBundleProps#getDesktopType}
         * @param desktopType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder desktopType(java.lang.String desktopType) {
            this.desktopType = desktopType;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getDesktopType}
         * @param desktopType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder desktopType(com.aliyun.ros.cdk.core.IResolvable desktopType) {
            this.desktopType = desktopType;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getImageId}
         * @param imageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getImageId}
         * @param imageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getRootDiskSizeGib}
         * @param rootDiskSizeGib the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rootDiskSizeGib(java.lang.Number rootDiskSizeGib) {
            this.rootDiskSizeGib = rootDiskSizeGib;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getRootDiskSizeGib}
         * @param rootDiskSizeGib the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rootDiskSizeGib(com.aliyun.ros.cdk.core.IResolvable rootDiskSizeGib) {
            this.rootDiskSizeGib = rootDiskSizeGib;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getUserDiskSizeGib}
         * @param userDiskSizeGib the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userDiskSizeGib(com.aliyun.ros.cdk.core.IResolvable userDiskSizeGib) {
            this.userDiskSizeGib = userDiskSizeGib;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getUserDiskSizeGib}
         * @param userDiskSizeGib the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userDiskSizeGib(java.util.List<? extends java.lang.Object> userDiskSizeGib) {
            this.userDiskSizeGib = userDiskSizeGib;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getBundleName}
         * @param bundleName the value to be set.
         * @return {@code this}
         */
        public Builder bundleName(java.lang.String bundleName) {
            this.bundleName = bundleName;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getBundleName}
         * @param bundleName the value to be set.
         * @return {@code this}
         */
        public Builder bundleName(com.aliyun.ros.cdk.core.IResolvable bundleName) {
            this.bundleName = bundleName;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getLanguage}
         * @param language the value to be set.
         * @return {@code this}
         */
        public Builder language(java.lang.String language) {
            this.language = language;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getLanguage}
         * @param language the value to be set.
         * @return {@code this}
         */
        public Builder language(com.aliyun.ros.cdk.core.IResolvable language) {
            this.language = language;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getRootDiskPerformanceLevel}
         * @param rootDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder rootDiskPerformanceLevel(java.lang.String rootDiskPerformanceLevel) {
            this.rootDiskPerformanceLevel = rootDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getRootDiskPerformanceLevel}
         * @param rootDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder rootDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable rootDiskPerformanceLevel) {
            this.rootDiskPerformanceLevel = rootDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getUserDiskPerformanceLevel}
         * @param userDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder userDiskPerformanceLevel(java.lang.String userDiskPerformanceLevel) {
            this.userDiskPerformanceLevel = userDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosBundleProps#getUserDiskPerformanceLevel}
         * @param userDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder userDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable userDiskPerformanceLevel) {
            this.userDiskPerformanceLevel = userDiskPerformanceLevel;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBundleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBundleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBundleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBundleProps {
        private final java.lang.Object desktopType;
        private final java.lang.Object imageId;
        private final java.lang.Object rootDiskSizeGib;
        private final java.lang.Object userDiskSizeGib;
        private final java.lang.Object bundleName;
        private final java.lang.Object description;
        private final java.lang.Object language;
        private final java.lang.Object rootDiskPerformanceLevel;
        private final java.lang.Object userDiskPerformanceLevel;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.desktopType = software.amazon.jsii.Kernel.get(this, "desktopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rootDiskSizeGib = software.amazon.jsii.Kernel.get(this, "rootDiskSizeGib", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userDiskSizeGib = software.amazon.jsii.Kernel.get(this, "userDiskSizeGib", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bundleName = software.amazon.jsii.Kernel.get(this, "bundleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.language = software.amazon.jsii.Kernel.get(this, "language", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rootDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "rootDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "userDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.desktopType = java.util.Objects.requireNonNull(builder.desktopType, "desktopType is required");
            this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
            this.rootDiskSizeGib = java.util.Objects.requireNonNull(builder.rootDiskSizeGib, "rootDiskSizeGib is required");
            this.userDiskSizeGib = java.util.Objects.requireNonNull(builder.userDiskSizeGib, "userDiskSizeGib is required");
            this.bundleName = builder.bundleName;
            this.description = builder.description;
            this.language = builder.language;
            this.rootDiskPerformanceLevel = builder.rootDiskPerformanceLevel;
            this.userDiskPerformanceLevel = builder.userDiskPerformanceLevel;
        }

        @Override
        public final java.lang.Object getDesktopType() {
            return this.desktopType;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getRootDiskSizeGib() {
            return this.rootDiskSizeGib;
        }

        @Override
        public final java.lang.Object getUserDiskSizeGib() {
            return this.userDiskSizeGib;
        }

        @Override
        public final java.lang.Object getBundleName() {
            return this.bundleName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getLanguage() {
            return this.language;
        }

        @Override
        public final java.lang.Object getRootDiskPerformanceLevel() {
            return this.rootDiskPerformanceLevel;
        }

        @Override
        public final java.lang.Object getUserDiskPerformanceLevel() {
            return this.userDiskPerformanceLevel;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("desktopType", om.valueToTree(this.getDesktopType()));
            data.set("imageId", om.valueToTree(this.getImageId()));
            data.set("rootDiskSizeGib", om.valueToTree(this.getRootDiskSizeGib()));
            data.set("userDiskSizeGib", om.valueToTree(this.getUserDiskSizeGib()));
            if (this.getBundleName() != null) {
                data.set("bundleName", om.valueToTree(this.getBundleName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getLanguage() != null) {
                data.set("language", om.valueToTree(this.getLanguage()));
            }
            if (this.getRootDiskPerformanceLevel() != null) {
                data.set("rootDiskPerformanceLevel", om.valueToTree(this.getRootDiskPerformanceLevel()));
            }
            if (this.getUserDiskPerformanceLevel() != null) {
                data.set("userDiskPerformanceLevel", om.valueToTree(this.getUserDiskPerformanceLevel()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecd.RosBundleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBundleProps.Jsii$Proxy that = (RosBundleProps.Jsii$Proxy) o;

            if (!desktopType.equals(that.desktopType)) return false;
            if (!imageId.equals(that.imageId)) return false;
            if (!rootDiskSizeGib.equals(that.rootDiskSizeGib)) return false;
            if (!userDiskSizeGib.equals(that.userDiskSizeGib)) return false;
            if (this.bundleName != null ? !this.bundleName.equals(that.bundleName) : that.bundleName != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.language != null ? !this.language.equals(that.language) : that.language != null) return false;
            if (this.rootDiskPerformanceLevel != null ? !this.rootDiskPerformanceLevel.equals(that.rootDiskPerformanceLevel) : that.rootDiskPerformanceLevel != null) return false;
            return this.userDiskPerformanceLevel != null ? this.userDiskPerformanceLevel.equals(that.userDiskPerformanceLevel) : that.userDiskPerformanceLevel == null;
        }

        @Override
        public final int hashCode() {
            int result = this.desktopType.hashCode();
            result = 31 * result + (this.imageId.hashCode());
            result = 31 * result + (this.rootDiskSizeGib.hashCode());
            result = 31 * result + (this.userDiskSizeGib.hashCode());
            result = 31 * result + (this.bundleName != null ? this.bundleName.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.language != null ? this.language.hashCode() : 0);
            result = 31 * result + (this.rootDiskPerformanceLevel != null ? this.rootDiskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.userDiskPerformanceLevel != null ? this.userDiskPerformanceLevel.hashCode() : 0);
            return result;
        }
    }
}
