import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstPurchaseArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PurchaseFindFirstArgs extends FindFirstPurchaseArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
