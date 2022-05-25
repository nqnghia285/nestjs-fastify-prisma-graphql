import { ObjectType } from '@nestjs/graphql'
import { Post as PostModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Post extends PostModel {
   static readonly modelName = 'Post'
}
