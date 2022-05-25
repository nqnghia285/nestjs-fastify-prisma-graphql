import { ArgsType } from '@nestjs/graphql'
import { FindManyDiscountArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class DiscountFindManyArgs extends FindManyDiscountArgs {}
