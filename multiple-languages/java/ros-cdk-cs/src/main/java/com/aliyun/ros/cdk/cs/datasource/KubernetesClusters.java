package com.aliyun.ros.cdk.cs.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::CS::KubernetesClusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:34.338Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.datasource.KubernetesClusters")
public class KubernetesClusters extends com.aliyun.ros.cdk.core.Resource {

    protected KubernetesClusters(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected KubernetesClusters(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::CS::KubernetesClusters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public KubernetesClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.datasource.KubernetesClustersProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::CS::KubernetesClusters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public KubernetesClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.datasource.KubernetesClustersProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::CS::KubernetesClusters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public KubernetesClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ClusterIds: The list of cluster IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterIds() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Clusters: The list of clusters.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusters() {
        return software.amazon.jsii.Kernel.get(this, "attrClusters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.datasource.KubernetesClusters}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.datasource.KubernetesClusters> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.cs.datasource.KubernetesClustersProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property clusterSpec: The specification of the cluster.
         * <p>
         * If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
         * ack.pro.small: professional managed Kubernetes cluster
         * ack.standard: standard managed Kubernetes cluster
         * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The specification of the cluster. This parameter is required.
         */
        public Builder clusterSpec(final java.lang.String clusterSpec) {
            this.props().clusterSpec(clusterSpec);
            return this;
        }
        /**
         * Property clusterSpec: The specification of the cluster.
         * <p>
         * If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
         * ack.pro.small: professional managed Kubernetes cluster
         * ack.standard: standard managed Kubernetes cluster
         * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The specification of the cluster. This parameter is required.
         */
        public Builder clusterSpec(final com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.props().clusterSpec(clusterSpec);
            return this;
        }

        /**
         * Property clusterType: The type of the cluster.
         * <p>
         * Valid values:
         * Kubernetes: dedicated Kubernetes cluster
         * ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
         * Ask: ASK cluster
         * ExternalKubernetes: registered external cluster
         * When you query an ASK cluster, the value specified when the cluster was created is returned.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props().clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: The type of the cluster.
         * <p>
         * Valid values:
         * Kubernetes: dedicated Kubernetes cluster
         * ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
         * Ask: ASK cluster
         * ExternalKubernetes: registered external cluster
         * When you query an ASK cluster, the value specified when the cluster was created is returned.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props().clusterType(clusterType);
            return this;
        }

        /**
         * Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-). This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props().name(name);
            return this;
        }
        /**
         * Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-). This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props().name(name);
            return this;
        }

        /**
         * Property profile: The identifier of the cluster.
         * <p>
         * If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
         * Default: managed Kubernetes cluster
         * Serverless: ASK cluster
         * Edge: edge Kubernetes cluster
         * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
         * <p>
         * @return {@code this}
         * @param profile Property profile: The identifier of the cluster. This parameter is required.
         */
        public Builder profile(final java.lang.String profile) {
            this.props().profile(profile);
            return this;
        }
        /**
         * Property profile: The identifier of the cluster.
         * <p>
         * If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
         * Default: managed Kubernetes cluster
         * Serverless: ASK cluster
         * Edge: edge Kubernetes cluster
         * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
         * <p>
         * @return {@code this}
         * @param profile Property profile: The identifier of the cluster. This parameter is required.
         */
        public Builder profile(final com.aliyun.ros.cdk.core.IResolvable profile) {
            this.props().profile(profile);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.datasource.KubernetesClusters}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.datasource.KubernetesClusters build() {
            return new com.aliyun.ros.cdk.cs.datasource.KubernetesClusters(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.cs.datasource.KubernetesClustersProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.cs.datasource.KubernetesClustersProps.Builder();
            }
            return this.props;
        }
    }
}
