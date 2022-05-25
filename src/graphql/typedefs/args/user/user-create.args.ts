import { ArgsType } from '@nestjs/graphql'
import { CreateOneUserArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class UserCreateArgs extends CreateOneUserArgs {}
