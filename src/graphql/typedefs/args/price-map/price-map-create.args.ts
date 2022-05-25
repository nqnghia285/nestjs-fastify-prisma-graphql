import { ArgsType } from '@nestjs/graphql'
import { CreateOnePriceMapArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PriceMapCreateArgs extends CreateOnePriceMapArgs {}
