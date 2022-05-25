import { ArgsType } from '@nestjs/graphql'
import { CreateOnePassageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PassageCreateArgs extends CreateOnePassageArgs {}
