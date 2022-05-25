import { Field, InputType } from '@nestjs/graphql'
import { CommentFindManyInput, CustomerArgs, UserArgs } from '..'

@InputType()
export class PersonCountOutputTypeSelect {
   @Field({ nullable: true })
   comments?: boolean
}

@InputType()
export class PersonCountOutputTypeArgs {
   @Field(() => PersonCountOutputTypeSelect, { nullable: true })
   select?: PersonCountOutputTypeSelect | null
}

@InputType()
export class PersonInclude {
   @Field(() => UserArgs, { nullable: true })
   user?: UserArgs

   @Field(() => CustomerArgs, { nullable: true })
   customer?: CustomerArgs

   @Field(() => CommentFindManyInput, { nullable: true })
   comments?: CommentFindManyInput

   @Field(() => PersonCountOutputTypeArgs, { nullable: true })
   _count?: PersonCountOutputTypeArgs
}
