import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstCommentArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CommentFindFirstArgs extends FindFirstCommentArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
