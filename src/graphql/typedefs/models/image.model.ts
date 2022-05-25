import { ObjectType } from '@nestjs/graphql'
import { Image as ImageModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Image extends ImageModel {
   static readonly modelName = 'Image'
}
