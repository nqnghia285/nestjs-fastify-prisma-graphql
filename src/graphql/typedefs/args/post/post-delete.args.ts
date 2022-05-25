import { ArgsType } from '@nestjs/graphql'
import { DeleteOnePostArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PostDeleteArgs extends DeleteOnePostArgs {}
