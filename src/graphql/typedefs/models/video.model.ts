import { ObjectType } from '@nestjs/graphql'
import { Video as VideoModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Video extends VideoModel {
   static readonly modelName = 'Video'
}
