# COVID-19-News-Article-Word-Cloud-Web-App
CS321 repository for group 4

Instructions to run the frontend (dockerized container):

1) Run the following commands:

cd covid19-word-cloud-frontend
docker build -t sample:dev .
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev

2) Open localhost:3001 in your browser

(Optional) Instructions to run the backend (you may be charged a few cents for the use of cloud resources):

0) This is an optional step, the backend is currently hosted on Robert's AWS account serverlessly

1) Install AWS CLI, AWS SAM CLI, and configure AWS CLI to use your AWS credentials

2) cd ArticleWordCloudApi

3) run the following commands:

sam build
sam deploy --guided

4) Change the code in ArticleList.js on the frontend to reflect the new endpoint