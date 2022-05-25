import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   FindManyUserArgs,
   UserCountAggregateInput,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class UserCountAggregateArgs {
   @Field(() => UserCountAggregateInput, { nullable: true })
   select?: UserCountAggregateInput
}

@ArgsType()
export class UserCountArgs extends IntersectionType(
   FindManyUserArgs,
   UserCountAggregateArgs
) {}
