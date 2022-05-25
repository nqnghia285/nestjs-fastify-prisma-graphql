import { GraphQLRequestContext, GraphQLResponse } from 'apollo-server-types'

export function formatResponse(
   response: GraphQLResponse,
   requestContext: GraphQLRequestContext<object>
): GraphQLResponse {
   // if (response.data) {
   //    response.data = { ...Object.values(response.data).at(0) }
   // }

   return response
}
