package com.aliyun.ros.cdk.polardb;

/**
 * A ROS resource type:  `ALIYUN::POLARDB::AccountPrivilege`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.067Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.AccountPrivilege")
public class AccountPrivilege extends com.aliyun.ros.cdk.core.Resource {

    protected AccountPrivilege(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AccountPrivilege(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::POLARDB::AccountPrivilege`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public AccountPrivilege(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.AccountPrivilegeProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::POLARDB::AccountPrivilege`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AccountPrivilege(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.AccountPrivilegeProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.AccountPrivilege}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.AccountPrivilege> {
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
        private final com.aliyun.ros.cdk.polardb.AccountPrivilegeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.AccountPrivilegeProps.Builder();
        }

        /**
         * Property accountName: The name of the database account to be granted access permissions.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the database account to be granted access permissions. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: The name of the database account to be granted access permissions.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the database account to be granted access permissions. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * Property accountPrivilege: The permissions of the database account on the database.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ReadWrite: has read and write permissions on the database.</li>
         * <li>ReadOnly: has the read-only permission on the database.</li>
         * <li>DMLOnly: runs only data manipulation language (DML) statements.</li>
         * <li>DDLOnly: runs only data definition language (DDL) statements.
         * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
         * Separate multiple permissions with a comma (,).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database. This parameter is required.
         */
        public Builder accountPrivilege(final java.lang.String accountPrivilege) {
            this.props.accountPrivilege(accountPrivilege);
            return this;
        }
        /**
         * Property accountPrivilege: The permissions of the database account on the database.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ReadWrite: has read and write permissions on the database.</li>
         * <li>ReadOnly: has the read-only permission on the database.</li>
         * <li>DMLOnly: runs only data manipulation language (DML) statements.</li>
         * <li>DDLOnly: runs only data definition language (DDL) statements.
         * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
         * Separate multiple permissions with a comma (,).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database. This parameter is required.
         */
        public Builder accountPrivilege(final com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.props.accountPrivilege(accountPrivilege);
            return this;
        }

        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property dbName: The name of the database whose access permissions are to be granted to the database account.
         * <p>
         * You can grant access permissions on one or more databases to the database account.
         * Separate multiple databases with a comma (,).
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database whose access permissions are to be granted to the database account. This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }
        /**
         * Property dbName: The name of the database whose access permissions are to be granted to the database account.
         * <p>
         * You can grant access permissions on one or more databases to the database account.
         * Separate multiple databases with a comma (,).
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database whose access permissions are to be granted to the database account. This parameter is required.
         */
        public Builder dbName(final com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.polardb.AccountPrivilege}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.AccountPrivilege build() {
            return new com.aliyun.ros.cdk.polardb.AccountPrivilege(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
