import { ObjectType } from '@nestjs/graphql'
import { User as UserModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class User extends UserModel {
   static readonly modelName = 'User'
}
