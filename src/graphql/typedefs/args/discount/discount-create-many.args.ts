import { ArgsType } from '@nestjs/graphql'
import { CreateManyDiscountArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class DiscountCreateManyArgs extends CreateManyDiscountArgs {}
