import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb'

const client = new DynamoDBClient({
  region: 'us-east-1',
})

const dynamo = DynamoDBDocumentClient.from(client)

export const handler = async (event, context) => {
  const command = new ScanCommand({
    TableName: 'ServicesAndAmenities',
  })
  try {
    const results = await dynamo.send(command)
    return results.Items
  } catch (err) {
    console.error(err)
  }
}
