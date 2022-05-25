import { ArgsType } from '@nestjs/graphql'
import { DeleteManyCustomerArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CustomerDeleteManyArgs extends DeleteManyCustomerArgs {}
