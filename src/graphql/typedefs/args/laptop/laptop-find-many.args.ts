import { ArgsType } from '@nestjs/graphql'
import { FindManyLaptopArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class LaptopFindManyArgs extends FindManyLaptopArgs {}
