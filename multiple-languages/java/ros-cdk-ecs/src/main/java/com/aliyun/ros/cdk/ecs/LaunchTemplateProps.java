package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::LaunchTemplate`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.242Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.LaunchTemplateProps")
@software.amazon.jsii.Jsii.Proxy(LaunchTemplateProps.Jsii$Proxy.class)
public interface LaunchTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property launchTemplateName: The name of launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLaunchTemplateName();

    /**
     * Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
     * <p>
     * format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoReleaseTime() {
        return null;
    }

    /**
     * Property description: Description of the instance, [2, 256] characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property diskMappings: Disk mappings to attach to instance.
     * <p>
     * Max support 16 disks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskMappings() {
        return null;
    }

    /**
     * Property hostName: Host name of created ecs instance.
     * <p>
     * at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     * Property imageId: Image ID to create ecs instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property internetMaxBandwidthIn: Max internet in bandwidth in Mbps(Mega bit per second).
     * <p>
     * The range is [1,200].
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthIn() {
        return null;
    }

    /**
     * Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second).
     * <p>
     * Range is [0,200].While the property is not 0, public ip will be assigned for instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     * Property ioOptimized: The 'optimized' instance can provide better IO performance.
     * <p>
     * Support 'none' and 'optimized' only.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     * Property keyPairName: SSH key pair name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     * Property networkInterfaces: Elastic network interfaces to be attached to instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaces() {
        return null;
    }

    /**
     * Property networkType: Instance network type.
     * <p>
     * Support 'vpc' and 'classic'
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property ramRoleName: Instance RAM role name.
     * <p>
     * The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
        return null;
    }

    /**
     * Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityEnhancementStrategy() {
        return null;
    }

    /**
     * Property securityGroupId: Security group to create ecs instance.
     * <p>
     * For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
     * <p>
     * Three decimals is allowed at most.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
     * <p>
     * Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     * Property systemDiskCategory: Category of system disk.
     * <p>
     * support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     * Property systemDiskDescription: Description of created system disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDescription() {
        return null;
    }

    /**
     * Property systemDiskDiskName: Name of created system disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDiskName() {
        return null;
    }

    /**
     * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
     * <p>
     * If you specify with your own image, make sure the system disk size bigger than image size.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance, security group, disk and network interface.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property templateTags: Template tags to attach to launch template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateTags() {
        return null;
    }

    /**
     * Property userData: User data to pass to instance.
     * <p>
     * [1, 16KB] characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     * Property versionDescription: Description for version 1 of launch template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionDescription() {
        return null;
    }

    /**
     * Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: Current zone to create the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LaunchTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LaunchTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LaunchTemplateProps> {
        private java.lang.Object launchTemplateName;
        private java.lang.Object autoReleaseTime;
        private java.lang.Object description;
        private java.lang.Object diskMappings;
        private java.lang.Object hostName;
        private java.lang.Object imageId;
        private java.lang.Object instanceName;
        private java.lang.Object instanceType;
        private java.lang.Object internetChargeType;
        private java.lang.Object internetMaxBandwidthIn;
        private java.lang.Object internetMaxBandwidthOut;
        private java.lang.Object ioOptimized;
        private java.lang.Object keyPairName;
        private java.lang.Object networkInterfaces;
        private java.lang.Object networkType;
        private java.lang.Object ramRoleName;
        private java.lang.Object securityEnhancementStrategy;
        private java.lang.Object securityGroupId;
        private java.lang.Object spotPriceLimit;
        private java.lang.Object spotStrategy;
        private java.lang.Object systemDiskCategory;
        private java.lang.Object systemDiskDescription;
        private java.lang.Object systemDiskDiskName;
        private java.lang.Object systemDiskSize;
        private java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> tags;
        private java.lang.Object templateTags;
        private java.lang.Object userData;
        private java.lang.Object versionDescription;
        private java.lang.Object vSwitchId;
        private java.lang.Object zoneId;

        /**
         * Sets the value of {@link LaunchTemplateProps#getLaunchTemplateName}
         * @param launchTemplateName Property launchTemplateName: The name of launch template. This parameter is required.
         * @return {@code this}
         */
        public Builder launchTemplateName(java.lang.String launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getLaunchTemplateName}
         * @param launchTemplateName Property launchTemplateName: The name of launch template. This parameter is required.
         * @return {@code this}
         */
        public Builder launchTemplateName(com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getAutoReleaseTime}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
         *                        format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * @return {@code this}
         */
        public Builder autoReleaseTime(java.lang.String autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getAutoReleaseTime}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
         *                        format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * @return {@code this}
         */
        public Builder autoReleaseTime(com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getDiskMappings}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance.
         *                     Max support 16 disks.
         * @return {@code this}
         */
        public Builder diskMappings(com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getDiskMappings}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance.
         *                     Max support 16 disks.
         * @return {@code this}
         */
        public Builder diskMappings(java.util.List<? extends java.lang.Object> diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getHostName}
         * @param hostName Property hostName: Host name of created ecs instance.
         *                 at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getHostName}
         * @param hostName Property hostName: Host name of created ecs instance.
         *                 at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInstanceType}
         * @param instanceType Property instanceType: Ecs instance supported instance type, make sure it should be correct.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInstanceType}
         * @param instanceType Property instanceType: Ecs instance supported instance type, make sure it should be correct.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet in bandwidth in Mbps(Mega bit per second).
         *                               The range is [1,200].
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet in bandwidth in Mbps(Mega bit per second).
         *                               The range is [1,200].
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second).
         *                                Range is [0,200].While the property is not 0, public ip will be assigned for instance.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second).
         *                                Range is [0,200].While the property is not 0, public ip will be assigned for instance.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance.
         *                    Support 'none' and 'optimized' only.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.String ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance.
         *                    Support 'none' and 'optimized' only.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getNetworkInterfaces}
         * @param networkInterfaces Property networkInterfaces: Elastic network interfaces to be attached to instance.
         * @return {@code this}
         */
        public Builder networkInterfaces(com.aliyun.ros.cdk.core.IResolvable networkInterfaces) {
            this.networkInterfaces = networkInterfaces;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getNetworkInterfaces}
         * @param networkInterfaces Property networkInterfaces: Elastic network interfaces to be attached to instance.
         * @return {@code this}
         */
        public Builder networkInterfaces(java.util.List<? extends java.lang.Object> networkInterfaces) {
            this.networkInterfaces = networkInterfaces;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getNetworkType}
         * @param networkType Property networkType: Instance network type.
         *                    Support 'vpc' and 'classic'
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getNetworkType}
         * @param networkType Property networkType: Instance network type.
         *                    Support 'vpc' and 'classic'
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive".
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(java.lang.String securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive".
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                       Three decimals is allowed at most.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.String spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                       Three decimals is allowed at most.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                     Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                     Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.
         * @return {@code this}
         */
        public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.
         * @return {@code this}
         */
        public Builder systemDiskDescription(com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(java.lang.String systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         *                       If you specify with your own image, make sure the system disk size bigger than image size.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         *                       If you specify with your own image, make sure the system disk size bigger than image size.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getTags}
         * @param tags Property tags: Tags to attach to instance, security group, disk and network interface.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getTemplateTags}
         * @param templateTags Property templateTags: Template tags to attach to launch template.
         * @return {@code this}
         */
        public Builder templateTags(com.aliyun.ros.cdk.core.IResolvable templateTags) {
            this.templateTags = templateTags;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getTemplateTags}
         * @param templateTags Property templateTags: Template tags to attach to launch template.
         * @return {@code this}
         */
        public Builder templateTags(java.util.List<? extends java.lang.Object> templateTags) {
            this.templateTags = templateTags;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getUserData}
         * @param userData Property userData: User data to pass to instance.
         *                 [1, 16KB] characters.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getUserData}
         * @param userData Property userData: User data to pass to instance.
         *                 [1, 16KB] characters.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getVersionDescription}
         * @param versionDescription Property versionDescription: Description for version 1 of launch template.
         * @return {@code this}
         */
        public Builder versionDescription(java.lang.String versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getVersionDescription}
         * @param versionDescription Property versionDescription: Description for version 1 of launch template.
         * @return {@code this}
         */
        public Builder versionDescription(com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getZoneId}
         * @param zoneId Property zoneId: Current zone to create the instance.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getZoneId}
         * @param zoneId Property zoneId: Current zone to create the instance.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LaunchTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LaunchTemplateProps build() {
            return new Jsii$Proxy(launchTemplateName, autoReleaseTime, description, diskMappings, hostName, imageId, instanceName, instanceType, internetChargeType, internetMaxBandwidthIn, internetMaxBandwidthOut, ioOptimized, keyPairName, networkInterfaces, networkType, ramRoleName, securityEnhancementStrategy, securityGroupId, spotPriceLimit, spotStrategy, systemDiskCategory, systemDiskDescription, systemDiskDiskName, systemDiskSize, tags, templateTags, userData, versionDescription, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link LaunchTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LaunchTemplateProps {
        private final java.lang.Object launchTemplateName;
        private final java.lang.Object autoReleaseTime;
        private final java.lang.Object description;
        private final java.lang.Object diskMappings;
        private final java.lang.Object hostName;
        private final java.lang.Object imageId;
        private final java.lang.Object instanceName;
        private final java.lang.Object instanceType;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object internetMaxBandwidthIn;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object keyPairName;
        private final java.lang.Object networkInterfaces;
        private final java.lang.Object networkType;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object securityEnhancementStrategy;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object systemDiskDescription;
        private final java.lang.Object systemDiskDiskName;
        private final java.lang.Object systemDiskSize;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> tags;
        private final java.lang.Object templateTags;
        private final java.lang.Object userData;
        private final java.lang.Object versionDescription;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.launchTemplateName = software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoReleaseTime = software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaces = software.amazon.jsii.Kernel.get(this, "networkInterfaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityEnhancementStrategy = software.amazon.jsii.Kernel.get(this, "securityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty.class)));
            this.templateTags = software.amazon.jsii.Kernel.get(this, "templateTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionDescription = software.amazon.jsii.Kernel.get(this, "versionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object launchTemplateName, final java.lang.Object autoReleaseTime, final java.lang.Object description, final java.lang.Object diskMappings, final java.lang.Object hostName, final java.lang.Object imageId, final java.lang.Object instanceName, final java.lang.Object instanceType, final java.lang.Object internetChargeType, final java.lang.Object internetMaxBandwidthIn, final java.lang.Object internetMaxBandwidthOut, final java.lang.Object ioOptimized, final java.lang.Object keyPairName, final java.lang.Object networkInterfaces, final java.lang.Object networkType, final java.lang.Object ramRoleName, final java.lang.Object securityEnhancementStrategy, final java.lang.Object securityGroupId, final java.lang.Object spotPriceLimit, final java.lang.Object spotStrategy, final java.lang.Object systemDiskCategory, final java.lang.Object systemDiskDescription, final java.lang.Object systemDiskDiskName, final java.lang.Object systemDiskSize, final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> tags, final java.lang.Object templateTags, final java.lang.Object userData, final java.lang.Object versionDescription, final java.lang.Object vSwitchId, final java.lang.Object zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.launchTemplateName = java.util.Objects.requireNonNull(launchTemplateName, "launchTemplateName is required");
            this.autoReleaseTime = autoReleaseTime;
            this.description = description;
            this.diskMappings = diskMappings;
            this.hostName = hostName;
            this.imageId = imageId;
            this.instanceName = instanceName;
            this.instanceType = instanceType;
            this.internetChargeType = internetChargeType;
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            this.ioOptimized = ioOptimized;
            this.keyPairName = keyPairName;
            this.networkInterfaces = networkInterfaces;
            this.networkType = networkType;
            this.ramRoleName = ramRoleName;
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            this.securityGroupId = securityGroupId;
            this.spotPriceLimit = spotPriceLimit;
            this.spotStrategy = spotStrategy;
            this.systemDiskCategory = systemDiskCategory;
            this.systemDiskDescription = systemDiskDescription;
            this.systemDiskDiskName = systemDiskDiskName;
            this.systemDiskSize = systemDiskSize;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty>)tags;
            this.templateTags = templateTags;
            this.userData = userData;
            this.versionDescription = versionDescription;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.Object getLaunchTemplateName() {
            return this.launchTemplateName;
        }

        @Override
        public final java.lang.Object getAutoReleaseTime() {
            return this.autoReleaseTime;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskMappings() {
            return this.diskMappings;
        }

        @Override
        public final java.lang.Object getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getInternetMaxBandwidthIn() {
            return this.internetMaxBandwidthIn;
        }

        @Override
        public final java.lang.Object getInternetMaxBandwidthOut() {
            return this.internetMaxBandwidthOut;
        }

        @Override
        public final java.lang.Object getIoOptimized() {
            return this.ioOptimized;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getNetworkInterfaces() {
            return this.networkInterfaces;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getRamRoleName() {
            return this.ramRoleName;
        }

        @Override
        public final java.lang.Object getSecurityEnhancementStrategy() {
            return this.securityEnhancementStrategy;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSpotPriceLimit() {
            return this.spotPriceLimit;
        }

        @Override
        public final java.lang.Object getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.lang.Object getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        public final java.lang.Object getSystemDiskDescription() {
            return this.systemDiskDescription;
        }

        @Override
        public final java.lang.Object getSystemDiskDiskName() {
            return this.systemDiskDiskName;
        }

        @Override
        public final java.lang.Object getSystemDiskSize() {
            return this.systemDiskSize;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTemplateTags() {
            return this.templateTags;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getVersionDescription() {
            return this.versionDescription;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
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

            data.set("launchTemplateName", om.valueToTree(this.getLaunchTemplateName()));
            if (this.getAutoReleaseTime() != null) {
                data.set("autoReleaseTime", om.valueToTree(this.getAutoReleaseTime()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskMappings() != null) {
                data.set("diskMappings", om.valueToTree(this.getDiskMappings()));
            }
            if (this.getHostName() != null) {
                data.set("hostName", om.valueToTree(this.getHostName()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getInternetMaxBandwidthIn() != null) {
                data.set("internetMaxBandwidthIn", om.valueToTree(this.getInternetMaxBandwidthIn()));
            }
            if (this.getInternetMaxBandwidthOut() != null) {
                data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getNetworkInterfaces() != null) {
                data.set("networkInterfaces", om.valueToTree(this.getNetworkInterfaces()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getSecurityEnhancementStrategy() != null) {
                data.set("securityEnhancementStrategy", om.valueToTree(this.getSecurityEnhancementStrategy()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getSystemDiskCategory() != null) {
                data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            }
            if (this.getSystemDiskDescription() != null) {
                data.set("systemDiskDescription", om.valueToTree(this.getSystemDiskDescription()));
            }
            if (this.getSystemDiskDiskName() != null) {
                data.set("systemDiskDiskName", om.valueToTree(this.getSystemDiskDiskName()));
            }
            if (this.getSystemDiskSize() != null) {
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTemplateTags() != null) {
                data.set("templateTags", om.valueToTree(this.getTemplateTags()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getVersionDescription() != null) {
                data.set("versionDescription", om.valueToTree(this.getVersionDescription()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.LaunchTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LaunchTemplateProps.Jsii$Proxy that = (LaunchTemplateProps.Jsii$Proxy) o;

            if (!launchTemplateName.equals(that.launchTemplateName)) return false;
            if (this.autoReleaseTime != null ? !this.autoReleaseTime.equals(that.autoReleaseTime) : that.autoReleaseTime != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.networkInterfaces != null ? !this.networkInterfaces.equals(that.networkInterfaces) : that.networkInterfaces != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.securityEnhancementStrategy != null ? !this.securityEnhancementStrategy.equals(that.securityEnhancementStrategy) : that.securityEnhancementStrategy != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
            if (this.systemDiskDiskName != null ? !this.systemDiskDiskName.equals(that.systemDiskDiskName) : that.systemDiskDiskName != null) return false;
            if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.templateTags != null ? !this.templateTags.equals(that.templateTags) : that.templateTags != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            if (this.versionDescription != null ? !this.versionDescription.equals(that.versionDescription) : that.versionDescription != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.launchTemplateName.hashCode();
            result = 31 * result + (this.autoReleaseTime != null ? this.autoReleaseTime.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.networkInterfaces != null ? this.networkInterfaces.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.securityEnhancementStrategy != null ? this.securityEnhancementStrategy.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
            result = 31 * result + (this.systemDiskDiskName != null ? this.systemDiskDiskName.hashCode() : 0);
            result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.templateTags != null ? this.templateTags.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.versionDescription != null ? this.versionDescription.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
