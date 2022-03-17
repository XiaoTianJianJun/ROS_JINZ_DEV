package com.aliyun.ros.cdk.ehpc;

/**
 * Properties for defining a `ALIYUN::EHPC::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:15.421Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderComputeCount();

    /**
     * Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderComputeInstanceType();

    /**
     * Property ecsOrderLoginCount: Login node number can only be 1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderLoginCount();

    /**
     * Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderLoginInstanceType();

    /**
     * Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderManagerInstanceType();

    /**
     * Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEhpcVersion();

    /**
     * Property name: Cluster name.
     * <p>
     * 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property osTag: Operating system image tag.
     * <p>
     * You can call ListImages API to query.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOsTag();

    /**
     * Property volumeId: Ali cloud NAS instance Id.
     * <p>
     * Currently it does not support automatic creation Ali cloud NAS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVolumeId();

    /**
     * Property volumeMountpoint: NAS vpc mount point.
     * <p>
     * Currently it does not support automatic creation Ali cloud NAS mount point.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVolumeMountpoint();

    /**
     * Property vSwitchId: VPC in switch ID.
     * <p>
     * Products currently only supports VPC network.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property accountType: Domain service account types, currently supports nis.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountType() {
        return null;
    }

    /**
     * Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApplication() {
        return null;
    }

    /**
     * Property autoRenew: true: automatic renewals;
     * <p>
     * false: no automatic renewals.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputeSpotPriceLimit() {
        return null;
    }

    /**
     * Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputeSpotStrategy() {
        return null;
    }

    /**
     * Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node.
     * <p>
     * Advanced: HA mode.
     * Simple: (account + schedule) node + login node + compute node.
     * Tiny: (account + scheduling + login) node + compute node.
     * OneBox: (account + scheduling + login + compute) node + more compute nodes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployMode() {
        return null;
    }

    /**
     * Property description: Cluster description, 2 to 128 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsChargeType() {
        return null;
    }

    /**
     * Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsOrderManagerCount() {
        return null;
    }

    /**
     * Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHaEnable() {
        return null;
    }

    /**
     * Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;
     * <p>
     * if self, others, or marketplace, ImageId is mandatory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     * Property imageOwnerAlias: Mirror type: system, self, others or marketplace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageOwnerAlias() {
        return null;
    }

    /**
     * Property jobQueue: Computing node added queue.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJobQueue() {
        return null;
    }

    /**
     * Property keyPairName: Key pair name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     * Property password: Root password of jump server (login node).
     * <p>
     * 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ &#64; # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property period: The purchase of long resources, units: week / month / year.
     * <p>
     * When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The purchase of long-resources unit.
     * <p>
     * Alternatively value Week / Month / year.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property postInstallScript:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPostInstallScript() {
        return null;
    }

    /**
     * Property remoteDirectory: Mount shared storage remote directory.
     * <p>
     * The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteDirectory() {
        return null;
    }

    /**
     * Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSccClusterId() {
        return null;
    }

    /**
     * Property schedulerType: The scheduler type, currently support pbs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSchedulerType() {
        return null;
    }

    /**
     * Property securityGroupId: Security group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.
     * <p>
     * Format Requirements Reference ECS security group name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupName() {
        return null;
    }

    /**
     * Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeProtocol() {
        return null;
    }

    /**
     * Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeType() {
        return null;
    }

    /**
     * Property zoneId: Available area ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterProps> {
        java.lang.Object ecsOrderComputeCount;
        java.lang.Object ecsOrderComputeInstanceType;
        java.lang.Object ecsOrderLoginCount;
        java.lang.Object ecsOrderLoginInstanceType;
        java.lang.Object ecsOrderManagerInstanceType;
        java.lang.Object ehpcVersion;
        java.lang.Object name;
        java.lang.Object osTag;
        java.lang.Object volumeId;
        java.lang.Object volumeMountpoint;
        java.lang.Object vSwitchId;
        java.lang.Object accountType;
        java.lang.Object application;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object computeSpotPriceLimit;
        java.lang.Object computeSpotStrategy;
        java.lang.Object deployMode;
        java.lang.Object description;
        java.lang.Object ecsChargeType;
        java.lang.Object ecsOrderManagerCount;
        java.lang.Object haEnable;
        java.lang.Object imageId;
        java.lang.Object imageOwnerAlias;
        java.lang.Object jobQueue;
        java.lang.Object keyPairName;
        java.lang.Object password;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object postInstallScript;
        java.lang.Object remoteDirectory;
        java.lang.Object sccClusterId;
        java.lang.Object schedulerType;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupName;
        java.lang.Object volumeProtocol;
        java.lang.Object volumeType;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderComputeCount}
         * @param ecsOrderComputeCount Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderComputeCount(java.lang.Number ecsOrderComputeCount) {
            this.ecsOrderComputeCount = ecsOrderComputeCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderComputeCount}
         * @param ecsOrderComputeCount Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderComputeCount(com.aliyun.ros.cdk.core.IResolvable ecsOrderComputeCount) {
            this.ecsOrderComputeCount = ecsOrderComputeCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderComputeInstanceType}
         * @param ecsOrderComputeInstanceType Property ecsOrderComputeInstanceType: Cluster computing node instance specifications. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderComputeInstanceType(java.lang.String ecsOrderComputeInstanceType) {
            this.ecsOrderComputeInstanceType = ecsOrderComputeInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderComputeInstanceType}
         * @param ecsOrderComputeInstanceType Property ecsOrderComputeInstanceType: Cluster computing node instance specifications. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderComputeInstanceType(com.aliyun.ros.cdk.core.IResolvable ecsOrderComputeInstanceType) {
            this.ecsOrderComputeInstanceType = ecsOrderComputeInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderLoginCount}
         * @param ecsOrderLoginCount Property ecsOrderLoginCount: Login node number can only be 1. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderLoginCount(java.lang.Number ecsOrderLoginCount) {
            this.ecsOrderLoginCount = ecsOrderLoginCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderLoginCount}
         * @param ecsOrderLoginCount Property ecsOrderLoginCount: Login node number can only be 1. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderLoginCount(com.aliyun.ros.cdk.core.IResolvable ecsOrderLoginCount) {
            this.ecsOrderLoginCount = ecsOrderLoginCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderLoginInstanceType}
         * @param ecsOrderLoginInstanceType Property ecsOrderLoginInstanceType: Log cluster node instance specifications. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderLoginInstanceType(java.lang.String ecsOrderLoginInstanceType) {
            this.ecsOrderLoginInstanceType = ecsOrderLoginInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderLoginInstanceType}
         * @param ecsOrderLoginInstanceType Property ecsOrderLoginInstanceType: Log cluster node instance specifications. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderLoginInstanceType(com.aliyun.ros.cdk.core.IResolvable ecsOrderLoginInstanceType) {
            this.ecsOrderLoginInstanceType = ecsOrderLoginInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderManagerInstanceType}
         * @param ecsOrderManagerInstanceType Property ecsOrderManagerInstanceType: Cluster control node instance specifications. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderManagerInstanceType(java.lang.String ecsOrderManagerInstanceType) {
            this.ecsOrderManagerInstanceType = ecsOrderManagerInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderManagerInstanceType}
         * @param ecsOrderManagerInstanceType Property ecsOrderManagerInstanceType: Cluster control node instance specifications. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderManagerInstanceType(com.aliyun.ros.cdk.core.IResolvable ecsOrderManagerInstanceType) {
            this.ecsOrderManagerInstanceType = ecsOrderManagerInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEhpcVersion}
         * @param ehpcVersion Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0. This parameter is required.
         * @return {@code this}
         */
        public Builder ehpcVersion(java.lang.String ehpcVersion) {
            this.ehpcVersion = ehpcVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEhpcVersion}
         * @param ehpcVersion Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0. This parameter is required.
         * @return {@code this}
         */
        public Builder ehpcVersion(com.aliyun.ros.cdk.core.IResolvable ehpcVersion) {
            this.ehpcVersion = ehpcVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getName}
         * @param name Property name: Cluster name. This parameter is required.
         *             2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getName}
         * @param name Property name: Cluster name. This parameter is required.
         *             2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOsTag}
         * @param osTag Property osTag: Operating system image tag. This parameter is required.
         *              You can call ListImages API to query.
         * @return {@code this}
         */
        public Builder osTag(java.lang.String osTag) {
            this.osTag = osTag;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOsTag}
         * @param osTag Property osTag: Operating system image tag. This parameter is required.
         *              You can call ListImages API to query.
         * @return {@code this}
         */
        public Builder osTag(com.aliyun.ros.cdk.core.IResolvable osTag) {
            this.osTag = osTag;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVolumeId}
         * @param volumeId Property volumeId: Ali cloud NAS instance Id. This parameter is required.
         *                 Currently it does not support automatic creation Ali cloud NAS instance.
         * @return {@code this}
         */
        public Builder volumeId(java.lang.String volumeId) {
            this.volumeId = volumeId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVolumeId}
         * @param volumeId Property volumeId: Ali cloud NAS instance Id. This parameter is required.
         *                 Currently it does not support automatic creation Ali cloud NAS instance.
         * @return {@code this}
         */
        public Builder volumeId(com.aliyun.ros.cdk.core.IResolvable volumeId) {
            this.volumeId = volumeId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVolumeMountpoint}
         * @param volumeMountpoint Property volumeMountpoint: NAS vpc mount point. This parameter is required.
         *                         Currently it does not support automatic creation Ali cloud NAS mount point.
         * @return {@code this}
         */
        public Builder volumeMountpoint(java.lang.String volumeMountpoint) {
            this.volumeMountpoint = volumeMountpoint;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVolumeMountpoint}
         * @param volumeMountpoint Property volumeMountpoint: NAS vpc mount point. This parameter is required.
         *                         Currently it does not support automatic creation Ali cloud NAS mount point.
         * @return {@code this}
         */
        public Builder volumeMountpoint(com.aliyun.ros.cdk.core.IResolvable volumeMountpoint) {
            this.volumeMountpoint = volumeMountpoint;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VPC in switch ID. This parameter is required.
         *                  Products currently only supports VPC network.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VPC in switch ID. This parameter is required.
         *                  Products currently only supports VPC network.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAccountType}
         * @param accountType Property accountType: Domain service account types, currently supports nis.
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAccountType}
         * @param accountType Property accountType: Domain service account types, currently supports nis.
         * @return {@code this}
         */
        public Builder accountType(com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getApplication}
         * @param application Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
         * @return {@code this}
         */
        public Builder application(com.aliyun.ros.cdk.core.IResolvable application) {
            this.application = application;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getApplication}
         * @param application Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
         * @return {@code this}
         */
        public Builder application(java.util.List<? extends java.lang.Object> application) {
            this.application = application;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAutoRenew}
         * @param autoRenew Property autoRenew: true: automatic renewals;.
         *                  false: no automatic renewals.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAutoRenew}
         * @param autoRenew Property autoRenew: true: automatic renewals;.
         *                  false: no automatic renewals.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getComputeSpotPriceLimit}
         * @param computeSpotPriceLimit Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
         * @return {@code this}
         */
        public Builder computeSpotPriceLimit(java.lang.String computeSpotPriceLimit) {
            this.computeSpotPriceLimit = computeSpotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getComputeSpotPriceLimit}
         * @param computeSpotPriceLimit Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
         * @return {@code this}
         */
        public Builder computeSpotPriceLimit(com.aliyun.ros.cdk.core.IResolvable computeSpotPriceLimit) {
            this.computeSpotPriceLimit = computeSpotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getComputeSpotStrategy}
         * @param computeSpotStrategy Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.
         * @return {@code this}
         */
        public Builder computeSpotStrategy(java.lang.String computeSpotStrategy) {
            this.computeSpotStrategy = computeSpotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getComputeSpotStrategy}
         * @param computeSpotStrategy Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.
         * @return {@code this}
         */
        public Builder computeSpotStrategy(com.aliyun.ros.cdk.core.IResolvable computeSpotStrategy) {
            this.computeSpotStrategy = computeSpotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDeployMode}
         * @param deployMode Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node.
         *                   Advanced: HA mode.
         *                   Simple: (account + schedule) node + login node + compute node.
         *                   Tiny: (account + scheduling + login) node + compute node.
         *                   OneBox: (account + scheduling + login + compute) node + more compute nodes.
         * @return {@code this}
         */
        public Builder deployMode(java.lang.String deployMode) {
            this.deployMode = deployMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDeployMode}
         * @param deployMode Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node.
         *                   Advanced: HA mode.
         *                   Simple: (account + schedule) node + login node + compute node.
         *                   Tiny: (account + scheduling + login) node + compute node.
         *                   OneBox: (account + scheduling + login + compute) node + more compute nodes.
         * @return {@code this}
         */
        public Builder deployMode(com.aliyun.ros.cdk.core.IResolvable deployMode) {
            this.deployMode = deployMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDescription}
         * @param description Property description: Cluster description, 2 to 128 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDescription}
         * @param description Property description: Cluster description, 2 to 128 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsChargeType}
         * @param ecsChargeType Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
         * @return {@code this}
         */
        public Builder ecsChargeType(java.lang.String ecsChargeType) {
            this.ecsChargeType = ecsChargeType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsChargeType}
         * @param ecsChargeType Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
         * @return {@code this}
         */
        public Builder ecsChargeType(com.aliyun.ros.cdk.core.IResolvable ecsChargeType) {
            this.ecsChargeType = ecsChargeType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderManagerCount}
         * @param ecsOrderManagerCount Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).
         * @return {@code this}
         */
        public Builder ecsOrderManagerCount(java.lang.Number ecsOrderManagerCount) {
            this.ecsOrderManagerCount = ecsOrderManagerCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEcsOrderManagerCount}
         * @param ecsOrderManagerCount Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).
         * @return {@code this}
         */
        public Builder ecsOrderManagerCount(com.aliyun.ros.cdk.core.IResolvable ecsOrderManagerCount) {
            this.ecsOrderManagerCount = ecsOrderManagerCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getHaEnable}
         * @param haEnable Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
         * @return {@code this}
         */
        public Builder haEnable(java.lang.Boolean haEnable) {
            this.haEnable = haEnable;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getHaEnable}
         * @param haEnable Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
         * @return {@code this}
         */
        public Builder haEnable(com.aliyun.ros.cdk.core.IResolvable haEnable) {
            this.haEnable = haEnable;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getImageId}
         * @param imageId Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;.
         *                if self, others, or marketplace, ImageId is mandatory.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getImageId}
         * @param imageId Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;.
         *                if self, others, or marketplace, ImageId is mandatory.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getImageOwnerAlias}
         * @param imageOwnerAlias Property imageOwnerAlias: Mirror type: system, self, others or marketplace.
         * @return {@code this}
         */
        public Builder imageOwnerAlias(java.lang.String imageOwnerAlias) {
            this.imageOwnerAlias = imageOwnerAlias;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getImageOwnerAlias}
         * @param imageOwnerAlias Property imageOwnerAlias: Mirror type: system, self, others or marketplace.
         * @return {@code this}
         */
        public Builder imageOwnerAlias(com.aliyun.ros.cdk.core.IResolvable imageOwnerAlias) {
            this.imageOwnerAlias = imageOwnerAlias;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getJobQueue}
         * @param jobQueue Property jobQueue: Computing node added queue.
         * @return {@code this}
         */
        public Builder jobQueue(java.lang.String jobQueue) {
            this.jobQueue = jobQueue;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getJobQueue}
         * @param jobQueue Property jobQueue: Computing node added queue.
         * @return {@code this}
         */
        public Builder jobQueue(com.aliyun.ros.cdk.core.IResolvable jobQueue) {
            this.jobQueue = jobQueue;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getKeyPairName}
         * @param keyPairName Property keyPairName: Key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getKeyPairName}
         * @param keyPairName Property keyPairName: Key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPassword}
         * @param password Property password: Root password of jump server (login node).
         *                 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ &#64; # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPassword}
         * @param password Property password: Root password of jump server (login node).
         *                 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ &#64; # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPeriod}
         * @param period Property period: The purchase of long resources, units: week / month / year.
         *               When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPeriod}
         * @param period Property period: The purchase of long resources, units: week / month / year.
         *               When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The purchase of long-resources unit.
         *                   Alternatively value Week / Month / year.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The purchase of long-resources unit.
         *                   Alternatively value Week / Month / year.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPostInstallScript}
         * @param postInstallScript Property postInstallScript:.
         * @return {@code this}
         */
        public Builder postInstallScript(com.aliyun.ros.cdk.core.IResolvable postInstallScript) {
            this.postInstallScript = postInstallScript;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPostInstallScript}
         * @param postInstallScript Property postInstallScript:.
         * @return {@code this}
         */
        public Builder postInstallScript(java.util.List<? extends java.lang.Object> postInstallScript) {
            this.postInstallScript = postInstallScript;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getRemoteDirectory}
         * @param remoteDirectory Property remoteDirectory: Mount shared storage remote directory.
         *                        The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
         * @return {@code this}
         */
        public Builder remoteDirectory(java.lang.String remoteDirectory) {
            this.remoteDirectory = remoteDirectory;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getRemoteDirectory}
         * @param remoteDirectory Property remoteDirectory: Mount shared storage remote directory.
         *                        The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
         * @return {@code this}
         */
        public Builder remoteDirectory(com.aliyun.ros.cdk.core.IResolvable remoteDirectory) {
            this.remoteDirectory = remoteDirectory;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSccClusterId}
         * @param sccClusterId Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
         * @return {@code this}
         */
        public Builder sccClusterId(java.lang.String sccClusterId) {
            this.sccClusterId = sccClusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSccClusterId}
         * @param sccClusterId Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
         * @return {@code this}
         */
        public Builder sccClusterId(com.aliyun.ros.cdk.core.IResolvable sccClusterId) {
            this.sccClusterId = sccClusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSchedulerType}
         * @param schedulerType Property schedulerType: The scheduler type, currently support pbs.
         * @return {@code this}
         */
        public Builder schedulerType(java.lang.String schedulerType) {
            this.schedulerType = schedulerType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSchedulerType}
         * @param schedulerType Property schedulerType: The scheduler type, currently support pbs.
         * @return {@code this}
         */
        public Builder schedulerType(com.aliyun.ros.cdk.core.IResolvable schedulerType) {
            this.schedulerType = schedulerType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group ID.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group ID.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.
         *                          Format Requirements Reference ECS security group name.
         * @return {@code this}
         */
        public Builder securityGroupName(java.lang.String securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.
         *                          Format Requirements Reference ECS security group name.
         * @return {@code this}
         */
        public Builder securityGroupName(com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVolumeProtocol}
         * @param volumeProtocol Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
         * @return {@code this}
         */
        public Builder volumeProtocol(java.lang.String volumeProtocol) {
            this.volumeProtocol = volumeProtocol;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVolumeProtocol}
         * @param volumeProtocol Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
         * @return {@code this}
         */
        public Builder volumeProtocol(com.aliyun.ros.cdk.core.IResolvable volumeProtocol) {
            this.volumeProtocol = volumeProtocol;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVolumeType}
         * @param volumeType Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
         * @return {@code this}
         */
        public Builder volumeType(java.lang.String volumeType) {
            this.volumeType = volumeType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVolumeType}
         * @param volumeType Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
         * @return {@code this}
         */
        public Builder volumeType(com.aliyun.ros.cdk.core.IResolvable volumeType) {
            this.volumeType = volumeType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getZoneId}
         * @param zoneId Property zoneId: Available area ID.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getZoneId}
         * @param zoneId Property zoneId: Available area ID.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterProps {
        private final java.lang.Object ecsOrderComputeCount;
        private final java.lang.Object ecsOrderComputeInstanceType;
        private final java.lang.Object ecsOrderLoginCount;
        private final java.lang.Object ecsOrderLoginInstanceType;
        private final java.lang.Object ecsOrderManagerInstanceType;
        private final java.lang.Object ehpcVersion;
        private final java.lang.Object name;
        private final java.lang.Object osTag;
        private final java.lang.Object volumeId;
        private final java.lang.Object volumeMountpoint;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object accountType;
        private final java.lang.Object application;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object computeSpotPriceLimit;
        private final java.lang.Object computeSpotStrategy;
        private final java.lang.Object deployMode;
        private final java.lang.Object description;
        private final java.lang.Object ecsChargeType;
        private final java.lang.Object ecsOrderManagerCount;
        private final java.lang.Object haEnable;
        private final java.lang.Object imageId;
        private final java.lang.Object imageOwnerAlias;
        private final java.lang.Object jobQueue;
        private final java.lang.Object keyPairName;
        private final java.lang.Object password;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object postInstallScript;
        private final java.lang.Object remoteDirectory;
        private final java.lang.Object sccClusterId;
        private final java.lang.Object schedulerType;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupName;
        private final java.lang.Object volumeProtocol;
        private final java.lang.Object volumeType;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ecsOrderComputeCount = software.amazon.jsii.Kernel.get(this, "ecsOrderComputeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderComputeInstanceType = software.amazon.jsii.Kernel.get(this, "ecsOrderComputeInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderLoginCount = software.amazon.jsii.Kernel.get(this, "ecsOrderLoginCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderLoginInstanceType = software.amazon.jsii.Kernel.get(this, "ecsOrderLoginInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderManagerInstanceType = software.amazon.jsii.Kernel.get(this, "ecsOrderManagerInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ehpcVersion = software.amazon.jsii.Kernel.get(this, "ehpcVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.osTag = software.amazon.jsii.Kernel.get(this, "osTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeId = software.amazon.jsii.Kernel.get(this, "volumeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeMountpoint = software.amazon.jsii.Kernel.get(this, "volumeMountpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.application = software.amazon.jsii.Kernel.get(this, "application", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeSpotPriceLimit = software.amazon.jsii.Kernel.get(this, "computeSpotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeSpotStrategy = software.amazon.jsii.Kernel.get(this, "computeSpotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployMode = software.amazon.jsii.Kernel.get(this, "deployMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsChargeType = software.amazon.jsii.Kernel.get(this, "ecsChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderManagerCount = software.amazon.jsii.Kernel.get(this, "ecsOrderManagerCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.haEnable = software.amazon.jsii.Kernel.get(this, "haEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageOwnerAlias = software.amazon.jsii.Kernel.get(this, "imageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jobQueue = software.amazon.jsii.Kernel.get(this, "jobQueue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.postInstallScript = software.amazon.jsii.Kernel.get(this, "postInstallScript", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remoteDirectory = software.amazon.jsii.Kernel.get(this, "remoteDirectory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sccClusterId = software.amazon.jsii.Kernel.get(this, "sccClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.schedulerType = software.amazon.jsii.Kernel.get(this, "schedulerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeProtocol = software.amazon.jsii.Kernel.get(this, "volumeProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeType = software.amazon.jsii.Kernel.get(this, "volumeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ecsOrderComputeCount = java.util.Objects.requireNonNull(builder.ecsOrderComputeCount, "ecsOrderComputeCount is required");
            this.ecsOrderComputeInstanceType = java.util.Objects.requireNonNull(builder.ecsOrderComputeInstanceType, "ecsOrderComputeInstanceType is required");
            this.ecsOrderLoginCount = java.util.Objects.requireNonNull(builder.ecsOrderLoginCount, "ecsOrderLoginCount is required");
            this.ecsOrderLoginInstanceType = java.util.Objects.requireNonNull(builder.ecsOrderLoginInstanceType, "ecsOrderLoginInstanceType is required");
            this.ecsOrderManagerInstanceType = java.util.Objects.requireNonNull(builder.ecsOrderManagerInstanceType, "ecsOrderManagerInstanceType is required");
            this.ehpcVersion = java.util.Objects.requireNonNull(builder.ehpcVersion, "ehpcVersion is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.osTag = java.util.Objects.requireNonNull(builder.osTag, "osTag is required");
            this.volumeId = java.util.Objects.requireNonNull(builder.volumeId, "volumeId is required");
            this.volumeMountpoint = java.util.Objects.requireNonNull(builder.volumeMountpoint, "volumeMountpoint is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.accountType = builder.accountType;
            this.application = builder.application;
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.computeSpotPriceLimit = builder.computeSpotPriceLimit;
            this.computeSpotStrategy = builder.computeSpotStrategy;
            this.deployMode = builder.deployMode;
            this.description = builder.description;
            this.ecsChargeType = builder.ecsChargeType;
            this.ecsOrderManagerCount = builder.ecsOrderManagerCount;
            this.haEnable = builder.haEnable;
            this.imageId = builder.imageId;
            this.imageOwnerAlias = builder.imageOwnerAlias;
            this.jobQueue = builder.jobQueue;
            this.keyPairName = builder.keyPairName;
            this.password = builder.password;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.postInstallScript = builder.postInstallScript;
            this.remoteDirectory = builder.remoteDirectory;
            this.sccClusterId = builder.sccClusterId;
            this.schedulerType = builder.schedulerType;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupName = builder.securityGroupName;
            this.volumeProtocol = builder.volumeProtocol;
            this.volumeType = builder.volumeType;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getEcsOrderComputeCount() {
            return this.ecsOrderComputeCount;
        }

        @Override
        public final java.lang.Object getEcsOrderComputeInstanceType() {
            return this.ecsOrderComputeInstanceType;
        }

        @Override
        public final java.lang.Object getEcsOrderLoginCount() {
            return this.ecsOrderLoginCount;
        }

        @Override
        public final java.lang.Object getEcsOrderLoginInstanceType() {
            return this.ecsOrderLoginInstanceType;
        }

        @Override
        public final java.lang.Object getEcsOrderManagerInstanceType() {
            return this.ecsOrderManagerInstanceType;
        }

        @Override
        public final java.lang.Object getEhpcVersion() {
            return this.ehpcVersion;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOsTag() {
            return this.osTag;
        }

        @Override
        public final java.lang.Object getVolumeId() {
            return this.volumeId;
        }

        @Override
        public final java.lang.Object getVolumeMountpoint() {
            return this.volumeMountpoint;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getAccountType() {
            return this.accountType;
        }

        @Override
        public final java.lang.Object getApplication() {
            return this.application;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getComputeSpotPriceLimit() {
            return this.computeSpotPriceLimit;
        }

        @Override
        public final java.lang.Object getComputeSpotStrategy() {
            return this.computeSpotStrategy;
        }

        @Override
        public final java.lang.Object getDeployMode() {
            return this.deployMode;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEcsChargeType() {
            return this.ecsChargeType;
        }

        @Override
        public final java.lang.Object getEcsOrderManagerCount() {
            return this.ecsOrderManagerCount;
        }

        @Override
        public final java.lang.Object getHaEnable() {
            return this.haEnable;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getImageOwnerAlias() {
            return this.imageOwnerAlias;
        }

        @Override
        public final java.lang.Object getJobQueue() {
            return this.jobQueue;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getPostInstallScript() {
            return this.postInstallScript;
        }

        @Override
        public final java.lang.Object getRemoteDirectory() {
            return this.remoteDirectory;
        }

        @Override
        public final java.lang.Object getSccClusterId() {
            return this.sccClusterId;
        }

        @Override
        public final java.lang.Object getSchedulerType() {
            return this.schedulerType;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupName() {
            return this.securityGroupName;
        }

        @Override
        public final java.lang.Object getVolumeProtocol() {
            return this.volumeProtocol;
        }

        @Override
        public final java.lang.Object getVolumeType() {
            return this.volumeType;
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

            data.set("ecsOrderComputeCount", om.valueToTree(this.getEcsOrderComputeCount()));
            data.set("ecsOrderComputeInstanceType", om.valueToTree(this.getEcsOrderComputeInstanceType()));
            data.set("ecsOrderLoginCount", om.valueToTree(this.getEcsOrderLoginCount()));
            data.set("ecsOrderLoginInstanceType", om.valueToTree(this.getEcsOrderLoginInstanceType()));
            data.set("ecsOrderManagerInstanceType", om.valueToTree(this.getEcsOrderManagerInstanceType()));
            data.set("ehpcVersion", om.valueToTree(this.getEhpcVersion()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("osTag", om.valueToTree(this.getOsTag()));
            data.set("volumeId", om.valueToTree(this.getVolumeId()));
            data.set("volumeMountpoint", om.valueToTree(this.getVolumeMountpoint()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAccountType() != null) {
                data.set("accountType", om.valueToTree(this.getAccountType()));
            }
            if (this.getApplication() != null) {
                data.set("application", om.valueToTree(this.getApplication()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getComputeSpotPriceLimit() != null) {
                data.set("computeSpotPriceLimit", om.valueToTree(this.getComputeSpotPriceLimit()));
            }
            if (this.getComputeSpotStrategy() != null) {
                data.set("computeSpotStrategy", om.valueToTree(this.getComputeSpotStrategy()));
            }
            if (this.getDeployMode() != null) {
                data.set("deployMode", om.valueToTree(this.getDeployMode()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEcsChargeType() != null) {
                data.set("ecsChargeType", om.valueToTree(this.getEcsChargeType()));
            }
            if (this.getEcsOrderManagerCount() != null) {
                data.set("ecsOrderManagerCount", om.valueToTree(this.getEcsOrderManagerCount()));
            }
            if (this.getHaEnable() != null) {
                data.set("haEnable", om.valueToTree(this.getHaEnable()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getImageOwnerAlias() != null) {
                data.set("imageOwnerAlias", om.valueToTree(this.getImageOwnerAlias()));
            }
            if (this.getJobQueue() != null) {
                data.set("jobQueue", om.valueToTree(this.getJobQueue()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPostInstallScript() != null) {
                data.set("postInstallScript", om.valueToTree(this.getPostInstallScript()));
            }
            if (this.getRemoteDirectory() != null) {
                data.set("remoteDirectory", om.valueToTree(this.getRemoteDirectory()));
            }
            if (this.getSccClusterId() != null) {
                data.set("sccClusterId", om.valueToTree(this.getSccClusterId()));
            }
            if (this.getSchedulerType() != null) {
                data.set("schedulerType", om.valueToTree(this.getSchedulerType()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupName() != null) {
                data.set("securityGroupName", om.valueToTree(this.getSecurityGroupName()));
            }
            if (this.getVolumeProtocol() != null) {
                data.set("volumeProtocol", om.valueToTree(this.getVolumeProtocol()));
            }
            if (this.getVolumeType() != null) {
                data.set("volumeType", om.valueToTree(this.getVolumeType()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.ClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterProps.Jsii$Proxy that = (ClusterProps.Jsii$Proxy) o;

            if (!ecsOrderComputeCount.equals(that.ecsOrderComputeCount)) return false;
            if (!ecsOrderComputeInstanceType.equals(that.ecsOrderComputeInstanceType)) return false;
            if (!ecsOrderLoginCount.equals(that.ecsOrderLoginCount)) return false;
            if (!ecsOrderLoginInstanceType.equals(that.ecsOrderLoginInstanceType)) return false;
            if (!ecsOrderManagerInstanceType.equals(that.ecsOrderManagerInstanceType)) return false;
            if (!ehpcVersion.equals(that.ehpcVersion)) return false;
            if (!name.equals(that.name)) return false;
            if (!osTag.equals(that.osTag)) return false;
            if (!volumeId.equals(that.volumeId)) return false;
            if (!volumeMountpoint.equals(that.volumeMountpoint)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.accountType != null ? !this.accountType.equals(that.accountType) : that.accountType != null) return false;
            if (this.application != null ? !this.application.equals(that.application) : that.application != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.computeSpotPriceLimit != null ? !this.computeSpotPriceLimit.equals(that.computeSpotPriceLimit) : that.computeSpotPriceLimit != null) return false;
            if (this.computeSpotStrategy != null ? !this.computeSpotStrategy.equals(that.computeSpotStrategy) : that.computeSpotStrategy != null) return false;
            if (this.deployMode != null ? !this.deployMode.equals(that.deployMode) : that.deployMode != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ecsChargeType != null ? !this.ecsChargeType.equals(that.ecsChargeType) : that.ecsChargeType != null) return false;
            if (this.ecsOrderManagerCount != null ? !this.ecsOrderManagerCount.equals(that.ecsOrderManagerCount) : that.ecsOrderManagerCount != null) return false;
            if (this.haEnable != null ? !this.haEnable.equals(that.haEnable) : that.haEnable != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.imageOwnerAlias != null ? !this.imageOwnerAlias.equals(that.imageOwnerAlias) : that.imageOwnerAlias != null) return false;
            if (this.jobQueue != null ? !this.jobQueue.equals(that.jobQueue) : that.jobQueue != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.postInstallScript != null ? !this.postInstallScript.equals(that.postInstallScript) : that.postInstallScript != null) return false;
            if (this.remoteDirectory != null ? !this.remoteDirectory.equals(that.remoteDirectory) : that.remoteDirectory != null) return false;
            if (this.sccClusterId != null ? !this.sccClusterId.equals(that.sccClusterId) : that.sccClusterId != null) return false;
            if (this.schedulerType != null ? !this.schedulerType.equals(that.schedulerType) : that.schedulerType != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupName != null ? !this.securityGroupName.equals(that.securityGroupName) : that.securityGroupName != null) return false;
            if (this.volumeProtocol != null ? !this.volumeProtocol.equals(that.volumeProtocol) : that.volumeProtocol != null) return false;
            if (this.volumeType != null ? !this.volumeType.equals(that.volumeType) : that.volumeType != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ecsOrderComputeCount.hashCode();
            result = 31 * result + (this.ecsOrderComputeInstanceType.hashCode());
            result = 31 * result + (this.ecsOrderLoginCount.hashCode());
            result = 31 * result + (this.ecsOrderLoginInstanceType.hashCode());
            result = 31 * result + (this.ecsOrderManagerInstanceType.hashCode());
            result = 31 * result + (this.ehpcVersion.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.osTag.hashCode());
            result = 31 * result + (this.volumeId.hashCode());
            result = 31 * result + (this.volumeMountpoint.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.accountType != null ? this.accountType.hashCode() : 0);
            result = 31 * result + (this.application != null ? this.application.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.computeSpotPriceLimit != null ? this.computeSpotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.computeSpotStrategy != null ? this.computeSpotStrategy.hashCode() : 0);
            result = 31 * result + (this.deployMode != null ? this.deployMode.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.ecsChargeType != null ? this.ecsChargeType.hashCode() : 0);
            result = 31 * result + (this.ecsOrderManagerCount != null ? this.ecsOrderManagerCount.hashCode() : 0);
            result = 31 * result + (this.haEnable != null ? this.haEnable.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.imageOwnerAlias != null ? this.imageOwnerAlias.hashCode() : 0);
            result = 31 * result + (this.jobQueue != null ? this.jobQueue.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.postInstallScript != null ? this.postInstallScript.hashCode() : 0);
            result = 31 * result + (this.remoteDirectory != null ? this.remoteDirectory.hashCode() : 0);
            result = 31 * result + (this.sccClusterId != null ? this.sccClusterId.hashCode() : 0);
            result = 31 * result + (this.schedulerType != null ? this.schedulerType.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupName != null ? this.securityGroupName.hashCode() : 0);
            result = 31 * result + (this.volumeProtocol != null ? this.volumeProtocol.hashCode() : 0);
            result = 31 * result + (this.volumeType != null ? this.volumeType.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
