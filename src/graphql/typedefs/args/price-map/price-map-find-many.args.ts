import { ArgsType } from '@nestjs/graphql'
import { FindManyPriceMapArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PriceMapFindManyArgs extends FindManyPriceMapArgs {}
