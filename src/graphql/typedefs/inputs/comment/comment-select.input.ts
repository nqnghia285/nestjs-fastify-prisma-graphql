import { Field, InputType } from '@nestjs/graphql'
import {
   CommentArgs,
   CommentCountOutputTypeArgs,
   CommentFindManyInput,
   LaptopArgs,
   PersonArgs,
} from '..'

@InputType()
export class CommentSelect {
   @Field({ nullable: true })
   authorId?: boolean

   @Field(() => PersonArgs, { nullable: true })
   author?: PersonArgs

   @Field(() => CommentArgs, { nullable: true })
   comment?: CommentArgs

   @Field({ nullable: true })
   commentId?: boolean

   @Field(() => CommentFindManyInput, { nullable: true })
   comments?: CommentFindManyInput

   @Field({ nullable: true })
   content?: boolean

   @Field({ nullable: true })
   createdAt?: boolean

   @Field({ nullable: true })
   id?: boolean

   @Field({ nullable: true })
   isStaff?: boolean

   @Field({ nullable: true })
   laptopId?: boolean

   @Field({ nullable: true })
   rank?: boolean

   @Field({ nullable: true })
   updatedAt?: boolean

   @Field(() => LaptopArgs, { nullable: true })
   laptop?: LaptopArgs

   @Field(() => CommentCountOutputTypeArgs, { nullable: true })
   _count?: CommentCountOutputTypeArgs
}
