import { ObjectType } from '@nestjs/graphql'
import { Comment as CommentModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Comment extends CommentModel {
   static readonly modelName = 'Comment'
}
