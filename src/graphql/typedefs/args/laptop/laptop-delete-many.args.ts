import { ArgsType } from '@nestjs/graphql'
import { DeleteManyLaptopArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class LaptopDeleteManyArgs extends DeleteManyLaptopArgs {}
