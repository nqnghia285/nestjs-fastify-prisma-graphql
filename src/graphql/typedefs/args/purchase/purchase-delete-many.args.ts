import { ArgsType } from '@nestjs/graphql'
import { DeleteManyPurchaseArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PurchaseDeleteManyArgs extends DeleteManyPurchaseArgs {}
