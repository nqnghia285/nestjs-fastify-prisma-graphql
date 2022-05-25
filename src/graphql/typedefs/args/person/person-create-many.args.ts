import { ArgsType } from '@nestjs/graphql'
import { CreateManyPersonArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class PersonCreateManyArgs extends CreateManyPersonArgs {}
