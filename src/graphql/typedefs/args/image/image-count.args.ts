import { ArgsType, Field, IntersectionType } from '@nestjs/graphql'
import {
   FindManyImageArgs,
   ImageCountAggregateInput,
} from '~/generated/prisma-nestjs-graphql'

@ArgsType()
class ImageCountAggregateArgs {
   @Field(() => ImageCountAggregateInput, { nullable: true })
   select?: ImageCountAggregateInput
}

@ArgsType()
export class ImageCountArgs extends IntersectionType(
   FindManyImageArgs,
   ImageCountAggregateArgs
) {}
