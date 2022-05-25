import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   DiscountCountAggregateInput,
   FindManyDiscountArgs,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class DiscountCountAggregateArgs {
   @Field(() => DiscountCountAggregateInput, { nullable: true })
   select?: DiscountCountAggregateInput
}

@ArgsType()
export class DiscountCountArgs extends IntersectionType(
   FindManyDiscountArgs,
   DiscountCountAggregateArgs
) {}
