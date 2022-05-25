import { Field, InputType, OmitType } from '@nestjs/graphql'
import { FindManyPurchaseArgs } from '~/generated/prisma-nestjs-graphql'
import { PurchaseInclude, PurchaseSelect } from '.'

@InputType()
export class PurchaseFindManyInput extends OmitType(
   FindManyPurchaseArgs,
   [] as const,
   InputType
) {
   @Field(() => PurchaseSelect, { nullable: true })
   select?: PurchaseSelect | null

   @Field(() => PurchaseInclude, { nullable: true })
   include?: PurchaseInclude | null
}
