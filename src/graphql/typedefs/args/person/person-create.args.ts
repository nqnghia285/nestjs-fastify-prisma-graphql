import { ArgsType } from '@nestjs/graphql'
import { CreateOnePersonArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PersonCreateArgs extends CreateOnePersonArgs {}
