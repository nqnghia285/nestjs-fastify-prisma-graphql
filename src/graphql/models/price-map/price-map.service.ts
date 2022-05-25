import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class PriceMapService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.PriceMapAggregateArgs) {
      return this.prisma.priceMap.aggregate(args)
   }

   count(args: Prisma.PriceMapCountArgs) {
      return this.prisma.priceMap.count(args)
   }

   create(args: Prisma.PriceMapCreateArgs) {
      return this.prisma.priceMap.create(args)
   }

   createMany(args: Prisma.PriceMapCreateManyArgs) {
      return this.prisma.priceMap.createMany(args)
   }

   delete(args: Prisma.PriceMapDeleteArgs) {
      return this.prisma.priceMap.delete(args)
   }

   deleteMany(args: Prisma.PriceMapDeleteManyArgs) {
      return this.prisma.priceMap.deleteMany(args)
   }

   findFirst(args: Prisma.PriceMapFindFirstArgs) {
      return this.prisma.priceMap.findFirst(args)
   }

   findMany(args: Prisma.PriceMapFindManyArgs) {
      args.select
      return this.prisma.priceMap.findMany(args)
   }

   findUnique(args: Prisma.PriceMapFindUniqueArgs) {
      return this.prisma.priceMap.findUnique(args)
   }

   groupBy(args: Prisma.PriceMapGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.priceMap.groupBy(args)
   }

   update(args: Prisma.PriceMapUpdateArgs) {
      return this.prisma.priceMap.update(args)
   }

   updateMany(args: Prisma.PriceMapUpdateManyArgs) {
      return this.prisma.priceMap.updateMany(args)
   }

   upsert(args: Prisma.PriceMapUpsertArgs) {
      return this.prisma.priceMap.upsert(args)
   }
}
