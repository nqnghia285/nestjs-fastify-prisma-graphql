import { ArgsType } from '@nestjs/graphql'
import { UpdateOneVideoArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class VideoUpdateArgs extends UpdateOneVideoArgs {}
