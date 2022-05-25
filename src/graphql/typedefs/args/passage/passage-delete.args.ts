import { ArgsType } from '@nestjs/graphql'
import { DeleteOnePassageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PassageDeleteArgs extends DeleteOnePassageArgs {}
