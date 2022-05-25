import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstPassageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PassageFindFirstArgs extends FindFirstPassageArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
