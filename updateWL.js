import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'posts',
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'postId': path parameter
    Key: {
      userId: data.userId,
      postId: event.pathParameters.id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: 'SET whoLiked = :whoLiked, likes = :likes',
    ExpressionAttributeValues: {
      ':whoLiked': data.whoLiked ? data.whoLiked : null,
      ':likes': data.likes ? data.likes : 0
    },
    ReturnValues: 'ALL_NEW'
  };

  try {
    const result = await dynamoDbLib.call('update', params);
    callback(null, success({ status: true }));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}
