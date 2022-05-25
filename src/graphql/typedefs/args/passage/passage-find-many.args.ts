import { ArgsType } from '@nestjs/graphql'
import { FindManyPassageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PassageFindManyArgs extends FindManyPassageArgs {}
