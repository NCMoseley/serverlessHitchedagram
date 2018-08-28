import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'users',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      createdAt: Date.now(),
      ownerEmail: data.ownerEmail,
      ownerName: data.ownerName
    }
  };
  try {
    await dynamoDbLib.call('put', params);
    callback(null, success(params.Item));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}
