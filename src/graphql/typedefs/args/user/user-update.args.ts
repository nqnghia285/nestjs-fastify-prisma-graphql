import { ArgsType } from '@nestjs/graphql'
import { UpdateOneUserArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class UserUpdateArgs extends UpdateOneUserArgs {}
