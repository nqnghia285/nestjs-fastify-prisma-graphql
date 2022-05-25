import { ObjectType } from '@nestjs/graphql'
import { Person as PersonModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Person extends PersonModel {
   static readonly modelName = 'Person'
}
