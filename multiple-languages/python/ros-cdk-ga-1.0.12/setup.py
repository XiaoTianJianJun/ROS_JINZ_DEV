import json
import setuptools

kwargs = json.loads(
    """
{
    "name": "ros-cdk-ga",
    "version": "1.0.12",
    "description": "Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com",
    "license": "Apache-2.0",
    "url": "https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit.git",
    "long_description_content_type": "text/markdown",
    "author": "ROS Development Team",
    "bdist_wheel": {
        "universal": true
    },
    "project_urls": {
        "Source": "https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit.git"
    },
    "package_dir": {
        "": "src"
    },
    "packages": [
        "ros_cdk_ga",
        "ros_cdk_ga._jsii"
    ],
    "package_data": {
        "ros_cdk_ga._jsii": [
            "ros-cdk-ga@1.0.12.jsii.tgz"
        ],
        "ros_cdk_ga": [
            "py.typed"
        ]
    },
    "python_requires": "~=3.7",
    "install_requires": [
        "constructs>=3.0.4, <4.0.0",
        "jsii>=1.74.0, <2.0.0",
        "publication>=0.0.3",
        "ros-cdk-core>=1.0.6, <2.0.0",
        "typeguard~=2.13.3"
    ],
    "classifiers": [
        "Intended Audience :: Developers",
        "Operating System :: OS Independent",
        "Programming Language :: JavaScript",
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Typing :: Typed",
        "License :: OSI Approved",
        "Programming Language :: Python :: 3"
    ],
    "scripts": []
}
"""
)

with open("README.md", encoding="utf8") as fp:
    kwargs["long_description"] = fp.read()


setuptools.setup(**kwargs)
