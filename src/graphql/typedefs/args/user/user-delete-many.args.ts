import { ArgsType } from '@nestjs/graphql'
import { DeleteManyUserArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class UserDeleteManyArgs extends DeleteManyUserArgs {}
