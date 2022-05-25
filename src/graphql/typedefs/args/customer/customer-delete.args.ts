import { ArgsType } from '@nestjs/graphql'
import { DeleteOneCustomerArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CustomerDeleteArgs extends DeleteOneCustomerArgs {}
