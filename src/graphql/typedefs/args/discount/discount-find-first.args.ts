import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstDiscountArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class DiscountFindFirstArgs extends FindFirstDiscountArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
