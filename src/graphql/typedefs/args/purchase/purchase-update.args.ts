import { ArgsType } from '@nestjs/graphql'
import { UpdateOnePurchaseArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PurchaseUpdateArgs extends UpdateOnePurchaseArgs {}
