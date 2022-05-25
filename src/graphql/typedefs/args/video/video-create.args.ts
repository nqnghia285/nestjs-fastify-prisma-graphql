import { ArgsType } from '@nestjs/graphql'
import { CreateOneVideoArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class VideoCreateArgs extends CreateOneVideoArgs {}
