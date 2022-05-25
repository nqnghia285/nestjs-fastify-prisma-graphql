import { ArgsType } from '@nestjs/graphql'
import { CreateManyCustomerArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CustomerCreateManyArgs extends CreateManyCustomerArgs {}
