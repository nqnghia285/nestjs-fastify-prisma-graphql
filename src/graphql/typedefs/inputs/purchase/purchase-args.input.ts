import { Field, InputType } from '@nestjs/graphql'
import { PurchaseInclude, PurchaseSelect } from '.'

@InputType()
export class PurchaseArgs {
   @Field(() => PurchaseSelect, { nullable: true })
   select?: PurchaseSelect | null

   @Field(() => PurchaseInclude, { nullable: true })
   include?: PurchaseInclude | null
}
