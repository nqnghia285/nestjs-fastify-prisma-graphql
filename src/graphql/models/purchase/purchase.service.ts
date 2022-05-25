import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class PurchaseService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.PurchaseAggregateArgs) {
      return this.prisma.purchase.aggregate(args)
   }

   count(args: Prisma.PurchaseCountArgs) {
      return this.prisma.purchase.count(args)
   }

   create(args: Prisma.PurchaseCreateArgs) {
      return this.prisma.purchase.create(args)
   }

   createMany(args: Prisma.PurchaseCreateManyArgs) {
      return this.prisma.purchase.createMany(args)
   }

   delete(args: Prisma.PurchaseDeleteArgs) {
      return this.prisma.purchase.delete(args)
   }

   deleteMany(args: Prisma.PurchaseDeleteManyArgs) {
      return this.prisma.purchase.deleteMany(args)
   }

   findFirst(args: Prisma.PurchaseFindFirstArgs) {
      return this.prisma.purchase.findFirst(args)
   }

   findMany(args: Prisma.PurchaseFindManyArgs) {
      return this.prisma.purchase.findMany(args)
   }

   findUnique(args: Prisma.PurchaseFindUniqueArgs) {
      return this.prisma.purchase.findUnique(args)
   }

   groupBy(args: Prisma.PurchaseGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.purchase.groupBy(args)
   }

   update(args: Prisma.PurchaseUpdateArgs) {
      return this.prisma.purchase.update(args)
   }

   updateMany(args: Prisma.PurchaseUpdateManyArgs) {
      return this.prisma.purchase.updateMany(args)
   }

   upsert(args: Prisma.PurchaseUpsertArgs) {
      return this.prisma.purchase.upsert(args)
   }
}
