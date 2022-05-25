import { Field, InputType } from '@nestjs/graphql'
import { CustomerInclude, CustomerSelect } from '.'

@InputType()
export class CustomerArgs {
   @Field(() => CustomerSelect, { nullable: true })
   select?: CustomerSelect | null

   @Field(() => CustomerInclude, { nullable: true })
   include?: CustomerInclude | null
}
