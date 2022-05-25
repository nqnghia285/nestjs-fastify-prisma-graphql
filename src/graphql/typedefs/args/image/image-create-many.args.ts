import { ArgsType } from '@nestjs/graphql'
import { CreateManyImageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class ImageCreateManyArgs extends CreateManyImageArgs {}
