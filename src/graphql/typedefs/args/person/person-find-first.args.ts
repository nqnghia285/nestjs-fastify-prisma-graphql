import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstPersonArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PersonFindFirstArgs extends FindFirstPersonArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
