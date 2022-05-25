import { Field, InputType } from '@nestjs/graphql'
import { LaptopFindManyInput, PriceMapCountOutputTypeArgs } from '..'

@InputType()
export class PriceMapSelect {
   @Field({ nullable: true })
   id?: boolean

   @Field({ nullable: true })
   price?: boolean

   @Field(() => LaptopFindManyInput, { nullable: true })
   laptops?: LaptopFindManyInput

   @Field({ nullable: true })
   createdAt?: boolean

   @Field({ nullable: true })
   updatedAt?: boolean

   @Field(() => PriceMapCountOutputTypeArgs, { nullable: true })
   _count?: PriceMapCountOutputTypeArgs
}
