import { ArgsType } from '@nestjs/graphql'
import { FindManyPurchaseArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PurchaseFindManyArgs extends FindManyPurchaseArgs {}
