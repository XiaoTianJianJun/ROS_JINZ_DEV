#!/usr/bin/env python3

import ros_cdk_core as core

from iac_ros_cdk.iac_ros_cdk_stack import IacRosCdkStack


app = core.App()

IacRosCdkStack(app, "iac-ros-cdk")

app.synth()
