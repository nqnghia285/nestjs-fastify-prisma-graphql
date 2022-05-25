import { ObjectType } from '@nestjs/graphql'
import { PriceMap as PriceMapModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class PriceMap extends PriceMapModel {
   static readonly modelName = 'PriceMap'
}
