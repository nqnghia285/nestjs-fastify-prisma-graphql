import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstPriceMapArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PriceMapFindFirstArgs extends FindFirstPriceMapArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
