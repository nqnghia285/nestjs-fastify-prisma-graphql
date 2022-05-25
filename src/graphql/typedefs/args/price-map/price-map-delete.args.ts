import { ArgsType } from '@nestjs/graphql'
import { DeleteOnePriceMapArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PriceMapDeleteArgs extends DeleteOnePriceMapArgs {}
