import { Field, InputType, OmitType } from '@nestjs/graphql'
import { FindManyCommentArgs } from '~/generated/prisma-nestjs-graphql'
import { CommentInclude, CommentSelect } from '.'

@InputType()
export class CommentFindManyInput extends OmitType(
   FindManyCommentArgs,
   [] as const,
   InputType
) {
   @Field(() => CommentSelect, { nullable: true })
   select?: CommentSelect | null

   @Field(() => CommentInclude, { nullable: true })
   include?: CommentInclude | null
}
