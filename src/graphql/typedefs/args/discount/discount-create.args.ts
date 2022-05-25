import { ArgsType } from '@nestjs/graphql'
import { CreateOneDiscountArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class DiscountCreateArgs extends CreateOneDiscountArgs {}
