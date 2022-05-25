import { Field, InputType } from '@nestjs/graphql'
import { PostArgs } from '..'

@InputType()
export class PassageSelect {
   @Field({ nullable: true })
   id?: boolean

   @Field({ nullable: true })
   header?: boolean

   @Field({ nullable: true })
   content?: boolean

   @Field(() => PostArgs, { nullable: true })
   post?: PostArgs

   @Field({ nullable: true })
   postId?: boolean
}
