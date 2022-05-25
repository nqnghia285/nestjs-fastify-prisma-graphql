import { ArgsType } from '@nestjs/graphql'
import { FindManyPersonArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PersonFindManyArgs extends FindManyPersonArgs {}
