import { ArgsType } from '@nestjs/graphql'
import { UpdateOneCommentArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CommentUpdateArgs extends UpdateOneCommentArgs {}
