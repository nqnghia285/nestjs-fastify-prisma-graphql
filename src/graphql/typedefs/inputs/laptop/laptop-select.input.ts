import { Field, InputType } from '@nestjs/graphql'
import {
   CommentFindManyInput,
   DiscountArgs,
   LaptopCountOutputTypeArgs,
   PostFindManyInput,
   PriceMapArgs,
   PurchaseFindManyInput,
} from '..'

@InputType()
export class LaptopSelect {
   @Field({ nullable: true })
   id?: boolean

   @Field({ nullable: true })
   brand?: boolean

   @Field({ nullable: true })
   model?: boolean

   @Field({ nullable: true })
   material?: boolean

   @Field({ nullable: true })
   display?: boolean

   @Field({ nullable: true })
   cpu?: boolean

   @Field({ nullable: true })
   ram?: boolean

   @Field({ nullable: true })
   graphicCard?: boolean

   @Field({ nullable: true })
   ports?: boolean

   @Field({ nullable: true })
   wifi?: boolean

   @Field({ nullable: true })
   storage?: boolean

   @Field({ nullable: true })
   webcam?: boolean

   @Field({ nullable: true })
   fans?: boolean

   @Field({ nullable: true })
   speakers?: boolean

   @Field({ nullable: true })
   keyboard?: boolean

   @Field({ nullable: true })
   security?: boolean

   @Field({ nullable: true })
   adapter?: boolean

   @Field({ nullable: true })
   specialFeatures?: boolean

   @Field({ nullable: true })
   dimensionsAndWeight?: boolean

   @Field({ nullable: true })
   releaseDate?: boolean

   @Field({ nullable: true })
   os?: boolean

   @Field(() => PriceMapArgs, { nullable: true })
   priceMap?: PriceMapArgs

   @Field({ nullable: true })
   priceMapId?: boolean

   @Field(() => DiscountArgs, { nullable: true })
   discount?: DiscountArgs

   @Field({ nullable: true })
   discountId?: boolean

   @Field(() => PurchaseFindManyInput, { nullable: true })
   purchases?: PurchaseFindManyInput

   @Field(() => PostFindManyInput, { nullable: true })
   posts?: PostFindManyInput

   @Field(() => CommentFindManyInput, { nullable: true })
   comments?: CommentFindManyInput

   @Field({ nullable: true })
   createdAt?: boolean

   @Field({ nullable: true })
   updatedAt?: boolean

   @Field(() => LaptopCountOutputTypeArgs, { nullable: true })
   _count?: LaptopCountOutputTypeArgs
}
