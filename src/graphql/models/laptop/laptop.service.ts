import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class LaptopService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.LaptopAggregateArgs) {
      return this.prisma.laptop.aggregate(args)
   }

   count(args: Prisma.LaptopCountArgs) {
      return this.prisma.laptop.count(args)
   }

   create(args: Prisma.LaptopCreateArgs) {
      return this.prisma.laptop.create(args)
   }

   createMany(args: Prisma.LaptopCreateManyArgs) {
      return this.prisma.laptop.createMany(args)
   }

   delete(args: Prisma.LaptopDeleteArgs) {
      return this.prisma.laptop.delete(args)
   }

   deleteMany(args: Prisma.LaptopDeleteManyArgs) {
      return this.prisma.laptop.deleteMany(args)
   }

   findFirst(args: Prisma.LaptopFindFirstArgs) {
      return this.prisma.laptop.findFirst(args)
   }

   findMany(args: Prisma.LaptopFindManyArgs) {
      return this.prisma.laptop.findMany(args)
   }

   findUnique(args: Prisma.LaptopFindUniqueArgs) {
      return this.prisma.laptop.findUnique(args)
   }

   groupBy(args: Prisma.LaptopGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.laptop.groupBy(args)
   }

   update(args: Prisma.LaptopUpdateArgs) {
      return this.prisma.laptop.update(args)
   }

   updateMany(args: Prisma.LaptopUpdateManyArgs) {
      return this.prisma.laptop.updateMany(args)
   }

   upsert(args: Prisma.LaptopUpsertArgs) {
      return this.prisma.laptop.upsert(args)
   }
}
