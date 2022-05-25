import { ArgsType } from '@nestjs/graphql'
import { DeleteManyVideoArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class VideoDeleteManyArgs extends DeleteManyVideoArgs {}
