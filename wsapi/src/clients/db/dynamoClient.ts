import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

export const dynamoDBClient = new DynamoDBClient();

export const dynamoClient = DynamoDBDocument.from(dynamoDBClient);