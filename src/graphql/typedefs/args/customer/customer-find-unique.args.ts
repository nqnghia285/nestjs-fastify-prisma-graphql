import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueCustomerArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class CustomerFindUniqueArgs extends FindUniqueCustomerArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
