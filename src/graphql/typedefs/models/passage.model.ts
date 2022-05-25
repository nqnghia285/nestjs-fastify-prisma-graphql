import { ObjectType } from '@nestjs/graphql'
import { Passage as PassageModel } from '~/generated/prisma-nestjs-graphql'

@ObjectType()
export class Passage extends PassageModel {
   static readonly modelName = 'Passage'
}
