import { Field, InputType } from '@nestjs/graphql'
import { LaptopFindManyInput } from '..'

@InputType()
export class DiscountCountOutputTypeSelect {
   @Field({ nullable: true })
   laptops?: boolean
}

@InputType()
export class DiscountCountOutputTypeArgs {
   @Field(() => DiscountCountOutputTypeSelect, { nullable: true })
   select?: DiscountCountOutputTypeSelect | null
}

@InputType()
export class DiscountInclude {
   @Field(() => LaptopFindManyInput, { nullable: true })
   laptops?: LaptopFindManyInput

   @Field(() => DiscountCountOutputTypeArgs, { nullable: true })
   _count?: DiscountCountOutputTypeArgs
}
