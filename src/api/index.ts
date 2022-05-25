import { Module } from '@nestjs/common'
import { GraphQLSchemaModule } from './graphql-schema'

@Module({
   imports: [GraphQLSchemaModule],
   exports: [GraphQLSchemaModule],
})
export class ApiModule {}
