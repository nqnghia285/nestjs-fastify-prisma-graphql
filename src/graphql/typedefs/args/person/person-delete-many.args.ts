import { ArgsType } from '@nestjs/graphql'
import { DeleteManyPersonArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PersonDeleteManyArgs extends DeleteManyPersonArgs {}
