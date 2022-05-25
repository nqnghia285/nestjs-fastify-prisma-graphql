import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstCustomerArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CustomerFindFirstArgs extends FindFirstCustomerArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
