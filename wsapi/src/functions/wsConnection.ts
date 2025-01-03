import { APIGatewayProxyWebsocketEventV2 } from 'aws-lambda';
import { ConnectController, DisconnectController } from 'controllers';

type RouteKey = '$connect' | '$disconnect' | 'sendMessage'

export async function handler(event: APIGatewayProxyWebsocketEventV2) {
  const routeKey = event.requestContext.routeKey as RouteKey;

  if (routeKey === '$connect') {
    await ConnectController.handle(event);
  }
  if (routeKey === '$disconnect') {
    await DisconnectController.handle(event);
  }


  return { statusCode: 200 };
}
