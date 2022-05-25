import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   CustomerCountAggregateInput,
   FindManyCustomerArgs,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class CustomerCountAggregateArgs {
   @Field(() => CustomerCountAggregateInput, { nullable: true })
   select?: CustomerCountAggregateInput
}

@ArgsType()
export class CustomerCountArgs extends IntersectionType(
   FindManyCustomerArgs,
   CustomerCountAggregateArgs
) {}
