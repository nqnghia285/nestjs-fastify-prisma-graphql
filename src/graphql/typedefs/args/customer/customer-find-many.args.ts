import { ArgsType } from '@nestjs/graphql'
import { FindManyCustomerArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CustomerFindManyArgs extends FindManyCustomerArgs {}
