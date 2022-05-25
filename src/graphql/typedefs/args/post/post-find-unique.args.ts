import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePostArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PostFindUniqueArgs extends FindUniquePostArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
