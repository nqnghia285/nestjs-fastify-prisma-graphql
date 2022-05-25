import { ArgsType } from '@nestjs/graphql'
import { UpdateOneCustomerArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CustomerUpdateArgs extends UpdateOneCustomerArgs {}
