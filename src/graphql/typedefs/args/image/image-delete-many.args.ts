import { ArgsType } from '@nestjs/graphql'
import { DeleteManyImageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class ImageDeleteManyArgs extends DeleteManyImageArgs {}
