import { ArgsType } from '@nestjs/graphql'
import { DeleteOneDiscountArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class DiscountDeleteArgs extends DeleteOneDiscountArgs {}
