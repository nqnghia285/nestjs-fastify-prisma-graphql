import { ArgsType } from '@nestjs/graphql'
import { DeleteOnePersonArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PersonDeleteArgs extends DeleteOnePersonArgs {}
