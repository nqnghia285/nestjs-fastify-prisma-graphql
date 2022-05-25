import { ObjectType } from '@nestjs/graphql'
import { Discount as DiscountModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Discount extends DiscountModel {
   static readonly modelName = 'Discount'
}
