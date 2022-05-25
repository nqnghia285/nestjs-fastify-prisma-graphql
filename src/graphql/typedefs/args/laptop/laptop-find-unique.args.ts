import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueLaptopArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class LaptopFindUniqueArgs extends FindUniqueLaptopArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
