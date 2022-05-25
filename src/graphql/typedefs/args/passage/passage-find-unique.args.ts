import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePassageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PassageFindUniqueArgs extends FindUniquePassageArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
