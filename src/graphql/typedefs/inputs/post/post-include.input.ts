import { Field, InputType } from '@nestjs/graphql'
import { LaptopFindManyInput, PassageFindManyInput, UserArgs } from '..'

@InputType()
export class PostCountOutputTypeSelect {
   @Field({ nullable: true })
   passages?: boolean

   @Field({ nullable: true })
   laptops?: boolean
}

@InputType()
export class PostCountOutputTypeArgs {
   @Field(() => PostCountOutputTypeSelect, { nullable: true })
   select?: PostCountOutputTypeSelect | null
}

@InputType()
export class PostInclude {
   @Field(() => PassageFindManyInput, { nullable: true })
   passages?: PassageFindManyInput

   @Field(() => LaptopFindManyInput, { nullable: true })
   laptops?: LaptopFindManyInput

   @Field(() => UserArgs, { nullable: true })
   author?: UserArgs

   @Field(() => PostCountOutputTypeArgs, { nullable: true })
   _count?: PostCountOutputTypeArgs
}
