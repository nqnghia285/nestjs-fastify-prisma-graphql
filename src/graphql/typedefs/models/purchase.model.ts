import { ObjectType } from '@nestjs/graphql'
import { Purchase as PurchaseModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Purchase extends PurchaseModel {
   static readonly modelName = 'Purchase'
}
