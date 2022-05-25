import { ArgsType } from '@nestjs/graphql'
import { FindManyCommentArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CommentFindManyArgs extends FindManyCommentArgs {}
