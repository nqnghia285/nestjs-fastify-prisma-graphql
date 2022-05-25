import { Field, InputType } from '@nestjs/graphql'
import { CustomerArgs, LaptopFindManyInput } from '..'

@InputType()
export class PurchaseCountOutputTypeSelect {
   @Field({ nullable: true })
   laptops?: boolean
}

@InputType()
export class PurchaseCountOutputTypeArgs {
   @Field(() => PurchaseCountOutputTypeSelect, { nullable: true })
   select?: PurchaseCountOutputTypeSelect | null
}

@InputType()
export class PurchaseInclude {
   @Field(() => CustomerArgs, { nullable: true })
   customer?: CustomerArgs

   @Field(() => LaptopFindManyInput, { nullable: true })
   laptops?: LaptopFindManyInput

   @Field(() => PurchaseCountOutputTypeArgs, { nullable: true })
   _count?: PurchaseCountOutputTypeArgs
}
