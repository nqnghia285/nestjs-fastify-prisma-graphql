import { ArgsType } from '@nestjs/graphql'
import { UpdateOneDiscountArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class DiscountUpdateArgs extends UpdateOneDiscountArgs {}
