import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePriceMapArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PriceMapFindUniqueArgs extends FindUniquePriceMapArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
