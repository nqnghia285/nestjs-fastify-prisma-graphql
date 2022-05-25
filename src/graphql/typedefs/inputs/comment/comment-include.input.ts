import { Field, InputType } from '@nestjs/graphql'
import { CommentArgs, CommentFindManyInput, LaptopArgs, PersonArgs } from '..'

@InputType()
export class CommentCountOutputTypeSelect {
   @Field({ nullable: true })
   comments?: boolean
}

@InputType()
export class CommentCountOutputTypeArgs {
   @Field(() => CommentCountOutputTypeSelect, { nullable: true })
   select?: CommentCountOutputTypeSelect | null
}

@InputType()
export class CommentInclude {
   @Field(() => PersonArgs, { nullable: true })
   author?: PersonArgs

   @Field(() => LaptopArgs, { nullable: true })
   laptop?: LaptopArgs

   @Field(() => CommentArgs, { nullable: true })
   comment?: CommentArgs

   @Field(() => CommentFindManyInput, { nullable: true })
   comments?: CommentFindManyInput

   @Field(() => CommentCountOutputTypeArgs, { nullable: true })
   _count?: CommentCountOutputTypeArgs
}
