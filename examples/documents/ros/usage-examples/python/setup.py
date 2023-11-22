import setuptools


with open("README.md") as fp:
    long_description = fp.read()


setuptools.setup(
    name="iac_ros_cdk",
    version="0.0.1",

    description="An empty ROS CDK Python app",
    long_description=long_description,
    long_description_content_type="text/markdown",

    author="author",

    package_dir={"": "iac_ros_cdk"},
    packages=setuptools.find_packages(where="iac_ros_cdk") + setuptools.find_packages(where="test"),

    install_requires=[
        "ros-cdk-core==1.0.20",
    ],

    python_requires=">=3.6",

    classifiers=[
        "Development Status :: 4 - Beta",

        "Intended Audience :: Developers",

        "License :: OSI Approved :: Apache Software License",

        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",

        "Topic :: Software Development :: Code Generators",
        "Topic :: Utilities",

        "Typing :: Typed",
    ],
)
