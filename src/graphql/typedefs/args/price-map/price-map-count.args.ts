import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   FindManyPriceMapArgs,
   PriceMapCountAggregateInput,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class PriceMapCountAggregateArgs {
   @Field(() => PriceMapCountAggregateInput, { nullable: true })
   select?: PriceMapCountAggregateInput
}

@ArgsType()
export class PriceMapCountArgs extends IntersectionType(
   FindManyPriceMapArgs,
   PriceMapCountAggregateArgs
) {}
