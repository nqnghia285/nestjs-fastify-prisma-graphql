import { ArgsType } from '@nestjs/graphql'
import { DeleteOneUserArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class UserDeleteArgs extends DeleteOneUserArgs {}
