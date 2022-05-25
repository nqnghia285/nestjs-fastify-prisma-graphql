import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class DiscountService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.DiscountAggregateArgs) {
      return this.prisma.discount.aggregate(args)
   }

   count(args: Prisma.DiscountCountArgs) {
      return this.prisma.discount.count(args)
   }

   create(args: Prisma.DiscountCreateArgs) {
      return this.prisma.discount.create(args)
   }

   createMany(args: Prisma.DiscountCreateManyArgs) {
      return this.prisma.discount.createMany(args)
   }

   delete(args: Prisma.DiscountDeleteArgs) {
      return this.prisma.discount.delete(args)
   }

   deleteMany(args: Prisma.DiscountDeleteManyArgs) {
      return this.prisma.discount.deleteMany(args)
   }

   findFirst(args: Prisma.DiscountFindFirstArgs) {
      return this.prisma.discount.findFirst(args)
   }

   findMany(args: Prisma.DiscountFindManyArgs) {
      args.select
      return this.prisma.discount.findMany(args)
   }

   findUnique(args: Prisma.DiscountFindUniqueArgs) {
      return this.prisma.discount.findUnique(args)
   }

   groupBy(args: Prisma.DiscountGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.discount.groupBy(args)
   }

   update(args: Prisma.DiscountUpdateArgs) {
      return this.prisma.discount.update(args)
   }

   updateMany(args: Prisma.DiscountUpdateManyArgs) {
      return this.prisma.discount.updateMany(args)
   }

   upsert(args: Prisma.DiscountUpsertArgs) {
      return this.prisma.discount.upsert(args)
   }
}
