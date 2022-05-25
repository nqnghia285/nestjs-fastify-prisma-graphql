import { ArgsType } from '@nestjs/graphql'
import { UpdateOneImageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class ImageUpdateArgs extends UpdateOneImageArgs {}
