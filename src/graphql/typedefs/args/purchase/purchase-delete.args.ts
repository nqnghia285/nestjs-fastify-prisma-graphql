import { ArgsType } from '@nestjs/graphql'
import { DeleteOnePurchaseArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PurchaseDeleteArgs extends DeleteOnePurchaseArgs {}
