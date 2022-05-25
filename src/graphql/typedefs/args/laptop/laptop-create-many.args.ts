import { ArgsType } from '@nestjs/graphql'
import { CreateManyLaptopArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class LaptopCreateManyArgs extends CreateManyLaptopArgs {}
