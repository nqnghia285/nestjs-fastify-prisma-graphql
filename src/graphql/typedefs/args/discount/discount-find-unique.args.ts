import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueDiscountArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class DiscountFindUniqueArgs extends FindUniqueDiscountArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
