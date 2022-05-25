import { ArgsType } from '@nestjs/graphql'
import { DeleteOneImageArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class ImageDeleteArgs extends DeleteOneImageArgs {}
