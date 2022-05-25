import { ArgsType } from '@nestjs/graphql'
import { UpdateOnePriceMapArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PriceMapUpdateArgs extends UpdateOnePriceMapArgs {}
