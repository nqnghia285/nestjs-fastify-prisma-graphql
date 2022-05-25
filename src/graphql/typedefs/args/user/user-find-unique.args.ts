import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueUserArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class UserFindUniqueArgs extends FindUniqueUserArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
