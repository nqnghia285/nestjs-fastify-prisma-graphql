import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import { Base64 } from '~/graphql/typedefs'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import { SchemaService } from './schema.service'

@Resolver(() => 'Schema')
export class SchemaResolver {
   constructor(private readonly schema: SchemaService) {}

   @Query(() => Base64)
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Schema'))
   async getSchema() {
      return this.schema.getGraphQLSchema()
   }
}
