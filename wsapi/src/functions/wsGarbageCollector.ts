import { GetConnectionCommand } from '@aws-sdk/client-apigatewaymanagementapi';
import { paginateScan } from '@aws-sdk/client-dynamodb';
import { DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { dynamoDBClient, apigwClient, dynamoClient } from 'clients';
import { env } from 'config';

export async function handler() {
  const paginator = paginateScan(
    { client: dynamoDBClient },
    { TableName: env.connectionsTable }
  );
  for await (const { Items = [] } of paginator) {
    await Promise.allSettled(Items.map(async item => {
      try {
        const getConnectionCommand = new GetConnectionCommand({
          ConnectionId: item.connectionId.S,
        });
        await apigwClient.send(getConnectionCommand);
      } catch {
        const deleteCommand = new DeleteCommand({
          TableName: env.connectionsTable,
          Key: { connectionId: item.connectionId.S }
        });

        await dynamoClient.send(deleteCommand);
      }
    }));
  }
}
