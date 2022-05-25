import { ArgsType } from '@nestjs/graphql'
import { DeleteManyPassageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PassageDeleteManyArgs extends DeleteManyPassageArgs {}
