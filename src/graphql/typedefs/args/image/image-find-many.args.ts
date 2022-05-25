import { ArgsType } from '@nestjs/graphql'
import { FindManyImageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class ImageFindManyArgs extends FindManyImageArgs {}
