import { Field, InputType } from '@nestjs/graphql'
import { PriceMapInclude, PriceMapSelect } from '.'

@InputType()
export class PriceMapArgs {
   @Field(() => PriceMapSelect, { nullable: true })
   select?: PriceMapSelect | null

   @Field(() => PriceMapInclude, { nullable: true })
   include?: PriceMapInclude | null
}
