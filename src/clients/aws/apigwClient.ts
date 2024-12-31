import { ApiGatewayManagementApiClient } from '@aws-sdk/client-apigatewaymanagementapi';
import { env } from 'config';

export const apigwClient = new ApiGatewayManagementApiClient({
  endpoint: env.ApiGatewayURLConnection
});