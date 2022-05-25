import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class AuthLogInArgs {
   @Field()
   username!: string

   @Field()
   password!: string
}
