using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::Project`.</summary>
    [JsiiInterface(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.ProjectProps")]
    public interface IProjectProps
    {
        /// <summary>Property name: Project name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property description: Project description: &lt;&gt;'"\ is not supported, up to 64 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to project.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-sls.RosProject.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Sls.RosProject.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLS::Project`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.ProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: Project name: 1.</summary>
            /// <remarks>
            /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Project description: &lt;&gt;'"\ is not supported, up to 64 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to project.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-sls.RosProject.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Sls.RosProject.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Sls.RosProject.ITagsProperty[]?>();
            }
        }
    }
}
