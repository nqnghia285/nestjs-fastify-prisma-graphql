import { ArgsType } from '@nestjs/graphql'
import { CreateOnePostArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PostCreateArgs extends CreateOnePostArgs {}
