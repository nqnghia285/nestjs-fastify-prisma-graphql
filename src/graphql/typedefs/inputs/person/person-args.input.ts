import { Field, InputType } from '@nestjs/graphql'
import { PersonInclude, PersonSelect } from '.'

@InputType()
export class PersonArgs {
   @Field(() => PersonSelect, { nullable: true })
   select?: PersonSelect | null

   @Field(() => PersonInclude, { nullable: true })
   include?: PersonInclude | null
}
