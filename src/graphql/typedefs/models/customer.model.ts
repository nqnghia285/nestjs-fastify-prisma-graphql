import { ObjectType } from '@nestjs/graphql'
import { Customer as CustomerModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Customer extends CustomerModel {
   static readonly modelName = 'Customer'
}
