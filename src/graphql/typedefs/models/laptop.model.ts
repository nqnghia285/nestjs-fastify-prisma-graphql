import { ObjectType } from '@nestjs/graphql'
import { Laptop as LaptopModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Laptop extends LaptopModel {
   static readonly modelName = 'Laptop'
}
