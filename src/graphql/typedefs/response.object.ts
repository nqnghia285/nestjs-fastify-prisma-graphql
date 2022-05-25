import { Field, ObjectType } from '@nestjs/graphql'
import { GraphQLJSON } from 'graphql-scalars'
import { Json } from '~/interface'

@ObjectType()
export class Response {
   @Field({ nullable: true })
   isSuccess?: boolean

   @Field({ nullable: true })
   message?: string

   @Field(() => GraphQLJSON, { nullable: true })
   data?: Json

   @Field()
   action: string

   @Field(() => [GraphQLJSON])
   errors: Json[]
}
