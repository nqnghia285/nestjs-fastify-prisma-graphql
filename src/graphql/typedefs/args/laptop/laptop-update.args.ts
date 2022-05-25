import { ArgsType } from '@nestjs/graphql'
import { UpdateOneLaptopArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class LaptopUpdateArgs extends UpdateOneLaptopArgs {}
