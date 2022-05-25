import { Field, InputType } from '@nestjs/graphql'
import { LaptopFindManyInput } from '..'

@InputType()
export class PriceMapCountOutputTypeSelect {
   @Field({ nullable: true })
   laptops?: boolean
}

@InputType()
export class PriceMapCountOutputTypeArgs {
   @Field(() => PriceMapCountOutputTypeSelect, { nullable: true })
   select?: PriceMapCountOutputTypeSelect | null
}

@InputType()
export class PriceMapInclude {
   @Field(() => LaptopFindManyInput, { nullable: true })
   laptops?: LaptopFindManyInput

   @Field(() => PriceMapCountOutputTypeArgs, { nullable: true })
   _count?: PriceMapCountOutputTypeArgs
}
