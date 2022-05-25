import { ArgsType } from '@nestjs/graphql'
import { CreateManyCommentArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CommentCreateManyArgs extends CreateManyCommentArgs {}
