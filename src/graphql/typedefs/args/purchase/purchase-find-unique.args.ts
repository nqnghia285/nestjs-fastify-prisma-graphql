import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePurchaseArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PurchaseFindUniqueArgs extends FindUniquePurchaseArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
