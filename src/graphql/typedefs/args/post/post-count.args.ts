import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   FindManyPostArgs,
   PostCountAggregateInput,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class PostCountAggregateArgs {
   @Field(() => PostCountAggregateInput, { nullable: true })
   select?: PostCountAggregateInput
}

@ArgsType()
export class PostCountArgs extends IntersectionType(
   FindManyPostArgs,
   PostCountAggregateArgs
) {}
