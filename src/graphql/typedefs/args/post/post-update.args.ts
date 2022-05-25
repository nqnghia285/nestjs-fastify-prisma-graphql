import { ArgsType } from '@nestjs/graphql'
import { UpdateOnePostArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PostUpdateArgs extends UpdateOnePostArgs {}
