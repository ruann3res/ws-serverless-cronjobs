import { DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { APIGatewayProxyWebsocketEventV2 } from 'aws-lambda';
import { dynamoClient } from 'clients';
import { env } from 'config';

export class DisconnectController {
  constructor() { }

  static async handle(event: APIGatewayProxyWebsocketEventV2) {
    const { connectionId } = event.requestContext;

    const deleteCommand = new DeleteCommand({
      TableName: env.connectionsTable,
      Key: {
        connectionId
      },
    });

    await dynamoClient.send(deleteCommand);
  }
}