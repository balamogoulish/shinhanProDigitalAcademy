# AWS Python Lambda Deployment Guide using Docker 🐳

Welcome to our AWS Lambda deployment guide! This README will help you build, initialize, and update your AWS Lambda functions with ease using Docker. Follow the steps below to get started.

## Getting Started

### Prerequisites

-   Docker installed on your machine.
-   AWS CLI configured with your AWS account.
-   An existing S3 bucket for lambda deployment (replace `your-lambda-deployment` with your actual S3 bucket name).

### Build Instructions 🛠

1. **Building the Docker Image:**

    Use the following commands to build your Docker image. This image is configured with Python 3.11 and other necessary settings for AWS Lambda deployment.

    ```sh
    docker build -t coredot/lambda311 .
    ```

2. **Running the Docker Container:**

    After building the image, run the container. This step will install your Python dependencies and prepare the deployment package.

    ```sh
    docker run --rm -v "${PWD}":/var/task coredot/lambda311
    ```

### 🚀 Deployment

#### Initial Deployment

1. 📦 **Uploading the Deployment Package:**

    Upload your `deploy_package.zip` to your AWS S3 bucket. Ensure you replace `your-lambda-deployment` with the name of your S3 bucket.

    ```sh
    aws s3 cp deploy_package.zip s3://your-lambda-deployment --profile default
    ```

2. 🌟 **Creating the AWS Lambda Function:**

    Create your new AWS Lambda function by specifying its name, runtime, handler, role, and other configurations.

    ```sh
    aws lambda create-function --function-name this-func-name --runtime python3.11 --code S3Bucket=your-lambda-deployment,S3Key=deploy_package.zip --handler lambda_function.lambda_handler --role arn:aws:iam::4010101010:role/lambda-role --region ap-northeast-2 --profile default --timeout 30 --memory-size 128
    ```

#### ⚡ Updating Your Function

If you need to update your Lambda function, simply use the following command to upload the new version of your `deploy_package.zip`.

```sh
aws lambda update-function-code --function-name this-func-name --zip-file fileb://deploy_package.zip --profile default
```

## Conclusion

That's it! You've now learned how to deploy and update your AWS Lambda functions using Docker. If you encounter any issues or have questions, don't hesitate to consult the AWS documentation or seek help from the AWS community forums.
