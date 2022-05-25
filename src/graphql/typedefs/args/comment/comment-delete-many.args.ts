import { ArgsType } from '@nestjs/graphql'
import { DeleteManyCommentArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CommentDeleteManyArgs extends DeleteManyCommentArgs {}
