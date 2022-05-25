import { Field, InputType } from '@nestjs/graphql'
import { UserInclude, UserSelect } from '..'

@InputType()
export class UserArgs {
   @Field(() => UserSelect, { nullable: true })
   select?: UserSelect | null

   @Field(() => UserInclude, { nullable: true })
   include?: UserInclude | null
}
