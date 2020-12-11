import json
import os
import boto3
from newsapi import NewsApiClient
newsapi = NewsApiClient(api_key='efd31847c92b4e5791d31b203e8fd936')
from wordcloud import WordCloud
from uuid import uuid4
from time import time
from boto3.dynamodb.conditions import Key
from botocore.exceptions import ClientError
from decimal import Decimal

article_table_name = os.environ.get("ARTICLE_TABLE_NAME")
api_request_table_name = os.environ.get("API_REQUEST_TABLE_NAME")
s3_bucket_name = os.environ.get("S3_BUCKET")

dynamodb = boto3.resource('dynamodb')
s3 = boto3.client('s3')

article_table = dynamodb.Table(article_table_name)
api_request_table = dynamodb.Table(api_request_table_name)
# s3_bucket = s3.Bucket('name')

bucket_location = boto3.client('s3').get_bucket_location(Bucket=s3_bucket_name)

# import requests


def lambda_handler(event, context):
    """Sample pure Lambda function

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """

    # try:
    #     ip = requests.get("http://checkip.amazonaws.com/")
    # except requests.RequestException as e:
    #     # Send some context about this error to Lambda Logs
    #     print(e)

    #     raise e

    # api_request_table

    current_time = round(time())

    # print(api_request_table.query(KeyConditionExpression=Key('time').gt(Decimal(round(current_time - (60 * 60))))))

    past_requests = api_request_table.scan()["Items"]
    print(past_requests)

    if(past_requests and past_requests[0] and past_requests[0]["time"] > (current_time - (60 * 60))):
        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "too soon"
            })
        }

    last_hash = None
    if(past_requests and past_requests[0]):
        last_hash = past_requests[0]["hash"]

    top_headlines = newsapi.get_top_headlines(country='us', category='health')

    hash_title = None

    wc = WordCloud(background_color="white")
    for article in top_headlines["articles"]:
        if(article["title"] and hash(article["title"])==last_hash):
            break

        if(article["content"] != None):

            if(hash_title == None):
                hash_title = hash(article["title"])

            print(article["content"])
            print(article)
            print(article["title"])

            v4 = str(uuid4()) + '.png'
            wc.generate(article["content"])
            wc.to_file('/tmp/' + v4)
            try:
                s3.upload_file('/tmp/' + v4, s3_bucket_name, v4, ExtraArgs={'ACL': 'public-read'})
                url = "https://{0}.s3.amazonaws.com/{1}".format(s3_bucket_name, v4)
                
                article_table.put_item(Item={
                    "id": str(hash(article["title"] + article["content"])),
                    "title": article["title"],
                    "content": article["description"],
                    "imageLocation": url,
                    "imageAlt": "a wordcloud",
                    "url": article["url"]
                })
            except ClientError as e:
                logging.error(e)

    api_request_table.put_item(Item={
        "time": current_time,
        "hash": hash_title
    })

    return {
        "statusCode": 200,
        "headers": {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT'
        },
        "body": json.dumps({
            "message": "success",
        }),
    }