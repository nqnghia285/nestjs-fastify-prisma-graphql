import { ArgsType } from '@nestjs/graphql'
import { CreateOneCommentArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CommentCreateArgs extends CreateOneCommentArgs {}
