import { Field, InputType } from '@nestjs/graphql'
import { PassageInclude, PassageSelect } from '..'

@InputType()
export class PassageArgs {
   @Field(() => PassageSelect, { nullable: true })
   select?: PassageSelect | null

   @Field(() => PassageInclude, { nullable: true })
   include?: PassageInclude | null
}
