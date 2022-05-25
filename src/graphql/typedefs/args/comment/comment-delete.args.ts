import { ArgsType } from '@nestjs/graphql'
import { DeleteOneCommentArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CommentDeleteArgs extends DeleteOneCommentArgs {}
