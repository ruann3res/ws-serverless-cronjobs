import { ApiGatewayManagementApiClient } from '@aws-sdk/client-apigatewaymanagementapi';

export const apigwClient = new ApiGatewayManagementApiClient({
  endpoint: ''
});