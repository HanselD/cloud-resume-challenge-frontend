import boto3
import json
import os

# initialize boto3 resources
dynamo = boto3.resource('dynamodb')
table = dynamo.Table(os.environ['tablename'])

def lambda_handler(event, context):
    #get current value from ddb
    resp = table.get_item(Key={'id':1})
    current = resp['Item']['visitors']

    #add 1
    current += 1
    
    #update ddb
    table.update_item(
       Key={'id':1},
       UpdateExpression='SET visitors = :val1',
       ExpressionAttributeValues={
            ':val1': current
        }
    )

    #return to website
    return {
        'count': current,
        'headers': {
            'Content-Type': 'application/json',
        },
    }