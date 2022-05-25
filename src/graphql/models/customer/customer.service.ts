import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class CustomerService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.CustomerAggregateArgs) {
      return this.prisma.customer.aggregate(args)
   }

   count(args: Prisma.CustomerCountArgs) {
      return this.prisma.customer.count(args)
   }

   create(args: Prisma.CustomerCreateArgs) {
      return this.prisma.customer.create(args)
   }

   createMany(args: Prisma.CustomerCreateManyArgs) {
      return this.prisma.customer.createMany(args)
   }

   delete(args: Prisma.CustomerDeleteArgs) {
      return this.prisma.customer.delete(args)
   }

   deleteMany(args: Prisma.CustomerDeleteManyArgs) {
      return this.prisma.customer.deleteMany(args)
   }

   findFirst(args: Prisma.CustomerFindFirstArgs) {
      return this.prisma.customer.findFirst(args)
   }

   findMany(args: Prisma.CustomerFindManyArgs) {
      args.select
      return this.prisma.customer.findMany(args)
   }

   findUnique(args: Prisma.CustomerFindUniqueArgs) {
      return this.prisma.customer.findUnique(args)
   }

   groupBy(args: Prisma.CustomerGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.customer.groupBy(args)
   }

   update(args: Prisma.CustomerUpdateArgs) {
      return this.prisma.customer.update(args)
   }

   updateMany(args: Prisma.CustomerUpdateManyArgs) {
      return this.prisma.customer.updateMany(args)
   }

   upsert(args: Prisma.CustomerUpsertArgs) {
      return this.prisma.customer.upsert(args)
   }
}
