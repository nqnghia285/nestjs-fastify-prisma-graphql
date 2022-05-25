import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   FindManyLaptopArgs,
   LaptopCountAggregateInput,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class LaptopCountAggregateArgs {
   @Field(() => LaptopCountAggregateInput, { nullable: true })
   select?: LaptopCountAggregateInput
}

@ArgsType()
export class LaptopCountArgs extends IntersectionType(
   FindManyLaptopArgs,
   LaptopCountAggregateArgs
) {}
