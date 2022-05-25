import { ArgsType } from '@nestjs/graphql'
import { DeleteOneVideoArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class VideoDeleteArgs extends DeleteOneVideoArgs {}
