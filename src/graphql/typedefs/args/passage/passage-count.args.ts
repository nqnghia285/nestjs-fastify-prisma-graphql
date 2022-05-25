import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   FindManyPassageArgs,
   PassageCountAggregateInput,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class PassageCountAggregateArgs {
   @Field(() => PassageCountAggregateInput, { nullable: true })
   select?: PassageCountAggregateInput
}

@ArgsType()
export class PassageCountArgs extends IntersectionType(
   FindManyPassageArgs,
   PassageCountAggregateArgs
) {}
