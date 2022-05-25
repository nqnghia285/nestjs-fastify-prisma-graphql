import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   FindManyPersonArgs,
   PersonCountAggregateInput,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class PersonCountAggregateArgs {
   @Field(() => PersonCountAggregateInput, { nullable: true })
   select?: PersonCountAggregateInput
}

@ArgsType()
export class PersonCountArgs extends IntersectionType(
   FindManyPersonArgs,
   PersonCountAggregateArgs
) {}
