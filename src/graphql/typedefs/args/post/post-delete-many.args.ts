import { ArgsType } from '@nestjs/graphql'
import { DeleteManyPostArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PostDeleteManyArgs extends DeleteManyPostArgs {}
