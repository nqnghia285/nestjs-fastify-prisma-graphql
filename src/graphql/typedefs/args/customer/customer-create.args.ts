import { ArgsType } from '@nestjs/graphql'
import { CreateOneCustomerArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CustomerCreateArgs extends CreateOneCustomerArgs {}
