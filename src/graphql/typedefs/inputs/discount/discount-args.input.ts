import { Field, InputType } from '@nestjs/graphql'
import { DiscountInclude, DiscountSelect } from '.'

@InputType()
export class DiscountArgs {
   @Field(() => DiscountSelect, { nullable: true })
   select?: DiscountSelect | null

   @Field(() => DiscountInclude, { nullable: true })
   include?: DiscountInclude | null
}
