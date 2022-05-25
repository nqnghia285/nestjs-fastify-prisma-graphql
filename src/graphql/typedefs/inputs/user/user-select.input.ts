import { Field, InputType } from '@nestjs/graphql'
import { PersonArgs, PostFindManyInput, UserCountOutputTypeArgs } from '..'

@InputType()
export class UserSelect {
   @Field({ nullable: true })
   id?: boolean

   @Field(() => PersonArgs, { nullable: true })
   profile?: PersonArgs

   @Field({ nullable: true })
   role?: boolean

   @Field(() => PostFindManyInput, { nullable: true })
   posts?: PostFindManyInput

   @Field({ nullable: true })
   createdAt?: boolean

   @Field({ nullable: true })
   updatedAt?: boolean

   @Field(() => UserCountOutputTypeArgs, { nullable: true })
   _count?: UserCountOutputTypeArgs
}
