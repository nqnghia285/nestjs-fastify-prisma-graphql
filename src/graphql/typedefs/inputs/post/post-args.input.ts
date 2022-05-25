import { Field, InputType } from '@nestjs/graphql'
import { PostInclude, PostSelect } from '.'

@InputType()
export class PostArgs {
   @Field(() => PostSelect, { nullable: true })
   select?: PostSelect | null

   @Field(() => PostInclude, { nullable: true })
   include?: PostInclude | null
}
