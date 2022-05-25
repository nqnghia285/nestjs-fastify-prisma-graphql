import { ArgsType } from '@nestjs/graphql'
import { CreateManyPassageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PassageCreateManyArgs extends CreateManyPassageArgs {}
