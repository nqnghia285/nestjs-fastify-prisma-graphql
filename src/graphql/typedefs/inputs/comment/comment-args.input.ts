import { Field, InputType } from '@nestjs/graphql'
import { CommentInclude, CommentSelect } from '.'

@InputType()
export class CommentArgs {
   @Field(() => CommentSelect, { nullable: true })
   select?: CommentSelect | null

   @Field(() => CommentInclude, { nullable: true })
   include?: CommentInclude | null
}
