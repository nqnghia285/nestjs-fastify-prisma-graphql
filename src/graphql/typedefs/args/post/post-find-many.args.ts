import { ArgsType } from '@nestjs/graphql'
import { FindManyPostArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PostFindManyArgs extends FindManyPostArgs {}
