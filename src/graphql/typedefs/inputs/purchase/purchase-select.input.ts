import { Field, InputType } from '@nestjs/graphql'
import {
   CustomerArgs,
   LaptopFindManyInput,
   PurchaseCountOutputTypeArgs,
} from '..'

@InputType()
export class PurchaseSelect {
   @Field({ nullable: true })
   id?: boolean

   @Field(() => CustomerArgs, { nullable: true })
   customer?: CustomerArgs

   @Field({ nullable: true })
   customerId?: boolean

   @Field(() => LaptopFindManyInput, { nullable: true })
   laptops?: LaptopFindManyInput

   @Field({ nullable: true })
   createdAt?: boolean

   @Field({ nullable: true })
   updatedAt?: boolean

   @Field(() => PurchaseCountOutputTypeArgs, { nullable: true })
   _count?: PurchaseCountOutputTypeArgs
}
