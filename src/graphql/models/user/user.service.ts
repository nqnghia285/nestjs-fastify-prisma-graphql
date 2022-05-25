import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.UserAggregateArgs) {
      return this.prisma.user.aggregate(args)
   }

   count(args: Prisma.UserCountArgs) {
      return this.prisma.user.count(args)
   }

   create(args: Prisma.UserCreateArgs) {
      return this.prisma.user.create(args)
   }

   createMany(args: Prisma.UserCreateManyArgs) {
      return this.prisma.user.createMany(args)
   }

   delete(args: Prisma.UserDeleteArgs) {
      return this.prisma.user.delete(args)
   }

   deleteMany(args: Prisma.UserDeleteManyArgs) {
      return this.prisma.user.deleteMany(args)
   }

   findFirst(args: Prisma.UserFindFirstArgs) {
      return this.prisma.user.findFirst(args)
   }

   findMany(args: Prisma.UserFindManyArgs) {
      args.select
      return this.prisma.user.findMany(args)
   }

   findUnique(args: Prisma.UserFindUniqueArgs) {
      return this.prisma.user.findUnique(args)
   }

   groupBy(args: Prisma.UserGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.user.groupBy(args)
   }

   update(args: Prisma.UserUpdateArgs) {
      return this.prisma.user.update(args)
   }

   updateMany(args: Prisma.UserUpdateManyArgs) {
      return this.prisma.user.updateMany(args)
   }

   upsert(args: Prisma.UserUpsertArgs) {
      return this.prisma.user.upsert(args)
   }
}
