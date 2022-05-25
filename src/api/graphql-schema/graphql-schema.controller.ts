import { Controller, Get, Res } from '@nestjs/common'
import { FastifyReply } from 'fastify'
import { CheckPoliciesGuardForRestApi } from '~/decorators'
import { ActionCreator } from '~/guards'
import { GraphQLSchemaService } from './graphql-schema.service'

@Controller('graphql-schema')
export class GraphQLSchemaController {
   constructor(private readonly graphQLSchema: GraphQLSchemaService) {}

   @Get()
   @CheckPoliciesGuardForRestApi(ActionCreator('FIND_FIRST', 'Schema'))
   getGraphQLSchema(@Res({ passthrough: true }) res: FastifyReply) {
      res.type('application/octet-stream')
      res.header('Content-Disposition', 'attachment; filename="schema.gql"')

      return this.graphQLSchema.getGraphQLSchema()
   }
}
