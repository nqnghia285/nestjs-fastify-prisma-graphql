import { ArgsType } from '@nestjs/graphql'
import { CreateOneLaptopArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class LaptopCreateArgs extends CreateOneLaptopArgs {}
