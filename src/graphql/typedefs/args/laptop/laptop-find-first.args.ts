import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstLaptopArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class LaptopFindFirstArgs extends FindFirstLaptopArgs {
   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
