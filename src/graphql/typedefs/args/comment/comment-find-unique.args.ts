import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueCommentArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CommentFindUniqueArgs extends FindUniqueCommentArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
