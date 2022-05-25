import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstUserArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class UserFindFirstArgs extends FindFirstUserArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
