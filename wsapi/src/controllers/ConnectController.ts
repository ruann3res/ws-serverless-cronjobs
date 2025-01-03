import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { APIGatewayProxyWebsocketEventV2 } from 'aws-lambda';
import { dynamoClient } from 'clients';
import { env } from 'config';

export class ConnectController {
  constructor() { }

  static async handle(event: APIGatewayProxyWebsocketEventV2) {
    const { connectionId, connectedAt } = event.requestContext;
    const putCommand = new PutCommand({
      TableName: env.connectionsTable,
      Item: {
        connectionId,
        connectedAt,
      }
    });

    await dynamoClient.send(putCommand);
  }
}