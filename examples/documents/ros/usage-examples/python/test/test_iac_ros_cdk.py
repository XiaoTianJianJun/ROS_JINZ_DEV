#!/usr/bin/env python3
import unittest
import ros_cdk_core as core
from iac_ros_cdk.iac_ros_cdk_stack import IacRosCdkStack


class TestStack(unittest.TestCase):
    def setUp(self):
        pass

    def test_stack(self):
        app = core.App()
        stack = IacRosCdkStack(app, "testiac-ros-cdk")
        artifact = app.synth().get_stack_artifact(stack.artifact_id).template
        expect = {
                   "Metadata": {
                     "ALIYUN::ROS::Interface": {
                       "TemplateTags": [
                         "Create by ROS CDK"
                       ]
                     }
                   },
                   "ROSTemplateFormatVersion": "2015-09-01"
                 }
        self.assertDictContainsSubset(artifact, expect)

    def tearDown(self):
        pass


if __name__ == '__main__':
    unittest.main()