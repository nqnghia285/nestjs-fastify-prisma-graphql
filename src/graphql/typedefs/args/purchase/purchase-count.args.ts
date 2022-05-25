import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   FindManyPurchaseArgs,
   PurchaseCountAggregateInput,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class PurchaseCountAggregateArgs {
   @Field(() => PurchaseCountAggregateInput, { nullable: true })
   select?: PurchaseCountAggregateInput
}

@ArgsType()
export class PurchaseCountArgs extends IntersectionType(
   FindManyPurchaseArgs,
   PurchaseCountAggregateArgs
) {}
