import { Field, InputType } from '@nestjs/graphql'
import { PersonArgs, PurchaseFindManyInput } from '..'

@InputType()
export class CustomerCountOutputTypeSelect {
   @Field({ nullable: true })
   purchases?: boolean
}

@InputType()
export class CustomerCountOutputTypeArgs {
   @Field(() => CustomerCountOutputTypeSelect, { nullable: true })
   select?: CustomerCountOutputTypeSelect | null
}

@InputType()
export class CustomerInclude {
   @Field(() => PersonArgs, { nullable: true })
   profile?: PersonArgs

   @Field(() => PurchaseFindManyInput, { nullable: true })
   purchases?: PurchaseFindManyInput

   @Field(() => CustomerCountOutputTypeArgs, { nullable: true })
   _count?: CustomerCountOutputTypeArgs
}
