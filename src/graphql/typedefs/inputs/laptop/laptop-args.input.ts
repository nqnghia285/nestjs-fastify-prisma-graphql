import { Field, InputType } from '@nestjs/graphql'
import { LaptopInclude, LaptopSelect } from '.'

@InputType()
export class LaptopArgs {
   @Field(() => LaptopSelect, { nullable: true })
   select?: LaptopSelect | null

   @Field(() => LaptopInclude, { nullable: true })
   include?: LaptopInclude | null
}
