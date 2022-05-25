import { Field, InputType } from '@nestjs/graphql'
import { PersonArgs, PostFindManyInput } from '..'

@InputType()
export class UserCountOutputTypeSelect {
   @Field({ nullable: true })
   posts?: boolean
}

@InputType()
export class UserCountOutputTypeArgs {
   @Field(() => UserCountOutputTypeSelect, { nullable: true })
   select?: UserCountOutputTypeSelect | null
}

@InputType()
export class UserInclude {
   @Field(() => PersonArgs, { nullable: true })
   profile?: PersonArgs

   @Field(() => PostFindManyInput, { nullable: true })
   posts?: PostFindManyInput

   @Field(() => UserCountOutputTypeArgs, { nullable: true })
   _count?: UserCountOutputTypeArgs
}
