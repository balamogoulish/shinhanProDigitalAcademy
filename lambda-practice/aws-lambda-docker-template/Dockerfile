# FROM public.ecr.aws/sam/build-python3.9:latest
# FROM lambci/lambda:build-python3.8
# FROM public.ecr.aws/sam/build-python3.9:latest
# FROM public.ecr.aws/sam/build-python3.9:latest-arm64
# FROM public.ecr.aws/sam/build-python3.9:1.67.0-arm64
# FROM public.ecr.aws/sam/build-python3.8:1.67.0-20221219215754-arm64
# FROM public.ecr.aws/sam/build-python3.8:latest-arm64
# FROM public.ecr.aws/sam/build-python3.10:1.81.0-20230420214754-x86_64
# FROM public.ecr.aws/sam/build-python3.10:1.90.0-20230706224408
# FROM public.ecr.aws/sam/build-python3.10:1.90.0-20230706224408-x86_64
# FROM public.ecr.aws/sam/build-python3.10:1.90.0-20230706224408-arm64
# FROM public.ecr.aws/sam/build-python3.11:1.108.0-20240123220119-x86_64
# FROM public.ecr.aws/sam/build-python3.11:1.108.0-20240123220119-arm64
# FROM public.ecr.aws/sam/build-python3.11:latest-x86_64
# FROM public.ecr.aws/sam/build-python3.11:latest-arm64
FROM public.ecr.aws/sam/build-python3.12:latest-x86_64
#FROM public.ecr.aws/sam/build-python3.12:latest-arm64
# https://gallery.ecr.aws/sam/build-python3.11


ENV AWS_DEFAULT_REGION ap-northeast-2
ENV APP_DIR /var/task

ADD . .

CMD pip install -r requirements.txt -t $APP_DIR && \
  zip -9 deploy_package.zip lambda_function.py && \
  zip -r9 deploy_package.zip *
