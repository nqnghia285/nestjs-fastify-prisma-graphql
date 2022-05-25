import { ArgsType } from '@nestjs/graphql'
import { CreateManyPurchaseArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PurchaseCreateManyArgs extends CreateManyPurchaseArgs {}
