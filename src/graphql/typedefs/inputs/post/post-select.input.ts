import { Field, InputType } from '@nestjs/graphql'
import {
   LaptopFindManyInput,
   PassageFindManyInput,
   PostCountOutputTypeArgs,
   UserArgs,
} from '..'

@InputType()
export class PostSelect {
   @Field({ nullable: true })
   id?: boolean

   @Field({ nullable: true })
   title?: boolean

   @Field(() => PassageFindManyInput, { nullable: true })
   passages?: PassageFindManyInput

   @Field(() => LaptopFindManyInput, { nullable: true })
   laptops?: LaptopFindManyInput

   @Field(() => UserArgs, { nullable: true })
   author?: UserArgs

   @Field({ nullable: true })
   authorId?: boolean

   @Field({ nullable: true })
   createdAt?: boolean

   @Field({ nullable: true })
   updatedAt?: boolean

   @Field(() => PostCountOutputTypeArgs, { nullable: true })
   _count?: PostCountOutputTypeArgs
}
