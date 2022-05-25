import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstPostArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PostFindFirstArgs extends FindFirstPostArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
