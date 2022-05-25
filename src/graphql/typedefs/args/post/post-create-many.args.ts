import { ArgsType } from '@nestjs/graphql'
import { CreateManyPostArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PostCreateManyArgs extends CreateManyPostArgs {}
