import { ArgsType } from '@nestjs/graphql'
import { FindManyVideoArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class VideoFindManyArgs extends FindManyVideoArgs {}
