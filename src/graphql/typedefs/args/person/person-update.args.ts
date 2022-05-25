import { ArgsType } from '@nestjs/graphql'
import { UpdateOnePersonArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PersonUpdateArgs extends UpdateOnePersonArgs {}
