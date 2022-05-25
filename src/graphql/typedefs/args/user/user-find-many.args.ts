import { ArgsType } from '@nestjs/graphql'
import { FindManyUserArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class UserFindManyArgs extends FindManyUserArgs {}
