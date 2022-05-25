import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class PassageService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.PassageAggregateArgs) {
      return this.prisma.passage.aggregate(args)
   }

   count(args: Prisma.PassageCountArgs) {
      return this.prisma.passage.count(args)
   }

   create(args: Prisma.PassageCreateArgs) {
      return this.prisma.passage.create(args)
   }

   createMany(args: Prisma.PassageCreateManyArgs) {
      return this.prisma.passage.createMany(args)
   }

   delete(args: Prisma.PassageDeleteArgs) {
      return this.prisma.passage.delete(args)
   }

   deleteMany(args: Prisma.PassageDeleteManyArgs) {
      return this.prisma.passage.deleteMany(args)
   }

   findFirst(args: Prisma.PassageFindFirstArgs) {
      return this.prisma.passage.findFirst(args)
   }

   findMany(args: Prisma.PassageFindManyArgs) {
      args.select
      return this.prisma.passage.findMany(args)
   }

   findUnique(args: Prisma.PassageFindUniqueArgs) {
      return this.prisma.passage.findUnique(args)
   }

   groupBy(args: Prisma.PassageGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.passage.groupBy(args)
   }

   update(args: Prisma.PassageUpdateArgs) {
      return this.prisma.passage.update(args)
   }

   updateMany(args: Prisma.PassageUpdateManyArgs) {
      return this.prisma.passage.updateMany(args)
   }

   upsert(args: Prisma.PassageUpsertArgs) {
      return this.prisma.passage.upsert(args)
   }
}
