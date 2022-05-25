import { ArgsType } from '@nestjs/graphql'
import { CreateManyUserArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class UserCreateManyArgs extends CreateManyUserArgs {}
