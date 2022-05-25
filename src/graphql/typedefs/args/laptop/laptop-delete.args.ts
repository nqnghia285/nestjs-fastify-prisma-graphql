import { ArgsType } from '@nestjs/graphql'
import { DeleteOneLaptopArgs } from '~/generated/prisma-nestjs-graphql'

@ArgsType()
export class LaptopDeleteArgs extends DeleteOneLaptopArgs {}
