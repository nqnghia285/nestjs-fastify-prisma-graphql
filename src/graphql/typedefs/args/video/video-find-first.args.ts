import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstVideoArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class VideoFindFirstArgs extends FindFirstVideoArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
