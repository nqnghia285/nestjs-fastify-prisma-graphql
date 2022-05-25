import { ArgsType } from '@nestjs/graphql'
import { CreateManyPriceMapArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PriceMapCreateManyArgs extends CreateManyPriceMapArgs {}
