import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePersonArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PersonFindUniqueArgs extends FindUniquePersonArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
