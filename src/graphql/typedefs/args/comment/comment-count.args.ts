import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   CommentCountAggregateInput,
   FindManyCommentArgs,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class CommentCountAggregateArgs {
   @Field(() => CommentCountAggregateInput, { nullable: true })
   select?: CommentCountAggregateInput
}

@ArgsType()
export class CommentCountArgs extends IntersectionType(
   FindManyCommentArgs,
   CommentCountAggregateArgs
) {}
