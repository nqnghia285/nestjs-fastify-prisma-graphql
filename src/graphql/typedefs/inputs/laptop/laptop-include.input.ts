import { Field, InputType } from '@nestjs/graphql'
import {
   CommentFindManyInput,
   DiscountArgs,
   PostFindManyInput,
   PriceMapArgs,
   PurchaseFindManyInput,
} from '..'

@InputType()
export class LaptopCountOutputTypeSelect {
   @Field({ nullable: true })
   purchases?: boolean

   @Field({ nullable: true })
   posts?: boolean

   @Field({ nullable: true })
   comments?: boolean
}

@InputType()
export class LaptopCountOutputTypeArgs {
   @Field(() => LaptopCountOutputTypeSelect, { nullable: true })
   select?: LaptopCountOutputTypeSelect | null
}

@InputType()
export class LaptopInclude {
   @Field(() => PriceMapArgs, { nullable: true })
   priceMap?: PriceMapArgs

   @Field(() => DiscountArgs, { nullable: true })
   discount?: DiscountArgs

   @Field(() => PurchaseFindManyInput, { nullable: true })
   purchases?: PurchaseFindManyInput

   @Field(() => PostFindManyInput, { nullable: true })
   posts?: PostFindManyInput

   @Field(() => CommentFindManyInput, { nullable: true })
   comments?: CommentFindManyInput

   @Field(() => LaptopCountOutputTypeArgs, { nullable: true })
   _count?: LaptopCountOutputTypeArgs
}
