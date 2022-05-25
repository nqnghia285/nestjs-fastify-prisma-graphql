import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class DeleteMany {
   @Field(() => Int)
   count!: number
}
