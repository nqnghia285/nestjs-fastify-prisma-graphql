import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueImageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class ImageFindUniqueArgs extends FindUniqueImageArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
