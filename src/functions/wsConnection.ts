import { APIGatewayProxyWebsocketEventV2 } from 'aws-lambda';

export async function handler(event: APIGatewayProxyWebsocketEventV2) {
  console.log(JSON.stringify(event, null, 2));

  return { statusCode: 200 };
}
