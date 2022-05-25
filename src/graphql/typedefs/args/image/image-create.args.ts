import { ArgsType } from '@nestjs/graphql'
import { CreateOneImageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class ImageCreateArgs extends CreateOneImageArgs {}
