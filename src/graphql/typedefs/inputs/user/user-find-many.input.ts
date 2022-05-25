import { Field, InputType, OmitType } from '@nestjs/graphql'
import { FindManyUserArgs } from '~/generated/prisma-nestjs-graphql'
import { UserInclude, UserSelect } from '.'

@InputType()
export class UserFindManyInput extends OmitType(
   FindManyUserArgs,
   [] as const,
   InputType
) {
   @Field(() => UserSelect, { nullable: true })
   select?: UserSelect | null

   @Field(() => UserInclude, { nullable: true })
   include?: UserInclude | null
}
