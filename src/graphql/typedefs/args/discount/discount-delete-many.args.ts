import { ArgsType } from '@nestjs/graphql'
import { DeleteManyDiscountArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class DiscountDeleteManyArgs extends DeleteManyDiscountArgs {}
