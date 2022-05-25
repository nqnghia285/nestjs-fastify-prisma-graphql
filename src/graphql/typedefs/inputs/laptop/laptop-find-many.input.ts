import { Field, InputType, OmitType } from '@nestjs/graphql'
import { FindManyLaptopArgs } from '~/generated/prisma-nestjs-graphql'
import { LaptopInclude, LaptopSelect } from '.'

@InputType()
export class LaptopFindManyInput extends OmitType(
   FindManyLaptopArgs,
   [] as const,
   InputType
) {
   @Field(() => LaptopSelect, { nullable: true })
   select?: LaptopSelect | null

   @Field(() => LaptopInclude, { nullable: true })
   include?: LaptopInclude | null
}
