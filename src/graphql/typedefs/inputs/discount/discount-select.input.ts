import { Field, InputType } from '@nestjs/graphql'
import { DiscountCountOutputTypeArgs, LaptopFindManyInput } from '..'

@InputType()
export class DiscountSelect {
   @Field({ nullable: true })
   id?: boolean

   @Field({ nullable: true })
   value?: boolean

   @Field(() => LaptopFindManyInput, { nullable: true })
   laptops?: LaptopFindManyInput

   @Field({ nullable: true })
   createdAt?: boolean

   @Field({ nullable: true })
   updatedAt?: boolean

   @Field(() => DiscountCountOutputTypeArgs, { nullable: true })
   _count?: DiscountCountOutputTypeArgs
}
