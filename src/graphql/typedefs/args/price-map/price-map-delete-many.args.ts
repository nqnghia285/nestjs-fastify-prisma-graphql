import { ArgsType } from '@nestjs/graphql'
import { DeleteManyPriceMapArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PriceMapDeleteManyArgs extends DeleteManyPriceMapArgs {}
