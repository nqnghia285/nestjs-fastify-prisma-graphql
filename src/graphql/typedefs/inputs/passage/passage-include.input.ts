import { Field, InputType } from '@nestjs/graphql'
import { PostArgs } from '..'

@InputType()
export class PassageInclude {
   @Field(() => PostArgs, { nullable: true })
   post?: PostArgs
}
