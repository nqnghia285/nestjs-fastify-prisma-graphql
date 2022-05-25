import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   FindManyVideoArgs,
   VideoCountAggregateInput,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class VideoCountAggregateArgs {
   @Field(() => VideoCountAggregateInput, { nullable: true })
   select?: VideoCountAggregateInput
}

@ArgsType()
export class VideoCountArgs extends IntersectionType(
   FindManyVideoArgs,
   VideoCountAggregateArgs
) {}
