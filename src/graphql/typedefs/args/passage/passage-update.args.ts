import { ArgsType } from '@nestjs/graphql'
import { UpdateOnePassageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PassageUpdateArgs extends UpdateOnePassageArgs {}
