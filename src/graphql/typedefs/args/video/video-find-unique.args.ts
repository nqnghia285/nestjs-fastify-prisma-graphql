import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueVideoArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class VideoFindUniqueArgs extends FindUniqueVideoArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
