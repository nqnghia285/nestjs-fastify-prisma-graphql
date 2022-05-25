import { Field, InputType } from '@nestjs/graphql'
import {
   CommentFindManyInput,
   CustomerArgs,
   PersonCountOutputTypeArgs,
   UserArgs,
} from '..'

@InputType()
export class PersonSelect {
   @Field({ nullable: true })
   address?: boolean

   @Field({ nullable: true })
   createdAt?: boolean

   @Field({ nullable: true })
   email?: boolean

   @Field({ nullable: true })
   fullname?: boolean

   @Field({ nullable: true })
   gender?: boolean

   @Field({ nullable: true })
   id?: boolean

   @Field({ nullable: true })
   phone?: boolean

   @Field({ nullable: true })
   updatedAt?: boolean

   @Field(() => UserArgs, { nullable: true })
   user?: UserArgs

   @Field(() => CustomerArgs, { nullable: true })
   customer?: CustomerArgs

   @Field(() => CommentFindManyInput, { nullable: true })
   comments?: CommentFindManyInput

   @Field(() => PersonCountOutputTypeArgs, { nullable: true })
   _count?: PersonCountOutputTypeArgs
}
