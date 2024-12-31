import { APIGatewayProxyWebsocketEventV2 } from 'aws-lambda';

export class ConnectController {
  constructor() { }

  static async handle(event: APIGatewayProxyWebsocketEventV2) {
    console.log('ConnectController.handle', event);
  }
}