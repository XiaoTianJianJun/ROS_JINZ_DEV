package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:08.764Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnCalculate")
public class FnCalculate extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnCalculate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnCalculate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Calculate`` function.
     * <p>
     * @param value This parameter is required.
     */
    public FnCalculate(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }
}
