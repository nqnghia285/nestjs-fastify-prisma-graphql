import { Field, InputType, OmitType } from '@nestjs/graphql'
import { FindManyPostArgs } from '~/generated/prisma-nestjs-graphql'
import { PostInclude, PostSelect } from '.'

@InputType()
export class PostFindManyInput extends OmitType(
   FindManyPostArgs,
   [] as const,
   InputType
) {
   @Field(() => PostSelect, { nullable: true })
   select?: PostSelect | null

   @Field(() => PostInclude, { nullable: true })
   include?: PostInclude | null
}
