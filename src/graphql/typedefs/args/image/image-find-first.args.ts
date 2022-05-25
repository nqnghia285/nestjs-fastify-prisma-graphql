import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstImageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class ImageFindFirstArgs extends FindFirstImageArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
