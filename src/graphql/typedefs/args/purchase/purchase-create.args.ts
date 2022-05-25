import { ArgsType } from '@nestjs/graphql'
import { CreateOnePurchaseArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PurchaseCreateArgs extends CreateOnePurchaseArgs {}
