import { ArgsType } from '@nestjs/graphql'
import { CreateManyVideoArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class VideoCreateManyArgs extends CreateManyVideoArgs {}
