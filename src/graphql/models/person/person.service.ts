import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class PersonService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.PersonAggregateArgs) {
      return this.prisma.person.aggregate(args)
   }

   count(args: Prisma.PersonCountArgs) {
      return this.prisma.person.count(args)
   }

   create(args: Prisma.PersonCreateArgs) {
      return this.prisma.person.create(args)
   }

   createMany(args: Prisma.PersonCreateManyArgs) {
      return this.prisma.person.createMany(args)
   }

   delete(args: Prisma.PersonDeleteArgs) {
      return this.prisma.person.delete(args)
   }

   deleteMany(args: Prisma.PersonDeleteManyArgs) {
      return this.prisma.person.deleteMany(args)
   }

   findFirst(args: Prisma.PersonFindFirstArgs) {
      return this.prisma.person.findFirst(args)
   }

   findMany(args: Prisma.PersonFindManyArgs) {
      args.select
      return this.prisma.person.findMany(args)
   }

   findUnique(args: Prisma.PersonFindUniqueArgs) {
      return this.prisma.person.findUnique(args)
   }

   groupBy(args: Prisma.PersonGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.person.groupBy(args)
   }

   update(args: Prisma.PersonUpdateArgs) {
      return this.prisma.person.update(args)
   }

   updateMany(args: Prisma.PersonUpdateManyArgs) {
      return this.prisma.person.updateMany(args)
   }

   upsert(args: Prisma.PersonUpsertArgs) {
      return this.prisma.person.upsert(args)
   }
}
