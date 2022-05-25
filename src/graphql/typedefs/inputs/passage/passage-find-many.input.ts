import { Field, InputType, OmitType } from '@nestjs/graphql'
import { FindManyPassageArgs } from '~/generated/prisma-nestjs-graphql'
import { PassageInclude, PassageSelect } from '.'

@InputType()
export class PassageFindManyInput extends OmitType(
   FindManyPassageArgs,
   [] as const,
   InputType
) {
   @Field(() => PassageSelect, { nullable: true })
   select?: PassageSelect | null

   @Field(() => PassageInclude, { nullable: true })
   include?: PassageInclude | null
}
