import { Field, InputType } from '@nestjs/graphql'
import {
   CustomerCountOutputTypeArgs,
   PersonArgs,
   PurchaseFindManyInput,
} from '..'

@InputType()
export class CustomerSelect {
   @Field({ nullable: true })
   id?: boolean

   @Field(() => PersonArgs, { nullable: true })
   profile?: PersonArgs

   @Field(() => PurchaseFindManyInput, { nullable: true })
   purchases?: PurchaseFindManyInput

   @Field({ nullable: true })
   createdAt?: boolean

   @Field({ nullable: true })
   updatedAt?: boolean

   @Field(() => CustomerCountOutputTypeArgs, { nullable: true })
   _count?: CustomerCountOutputTypeArgs
}
