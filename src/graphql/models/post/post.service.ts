import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class PostService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.PostAggregateArgs) {
      return this.prisma.post.aggregate(args)
   }

   count(args: Prisma.PostCountArgs) {
      return this.prisma.post.count(args)
   }

   create(args: Prisma.PostCreateArgs) {
      return this.prisma.post.create(args)
   }

   createMany(args: Prisma.PostCreateManyArgs) {
      return this.prisma.post.createMany(args)
   }

   delete(args: Prisma.PostDeleteArgs) {
      return this.prisma.post.delete(args)
   }

   deleteMany(args: Prisma.PostDeleteManyArgs) {
      return this.prisma.post.deleteMany(args)
   }

   findFirst(args: Prisma.PostFindFirstArgs) {
      return this.prisma.post.findFirst(args)
   }

   findMany(args: Prisma.PostFindManyArgs) {
      args.select
      return this.prisma.post.findMany(args)
   }

   findUnique(args: Prisma.PostFindUniqueArgs) {
      return this.prisma.post.findUnique(args)
   }

   groupBy(args: Prisma.PostGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.post.groupBy(args)
   }

   update(args: Prisma.PostUpdateArgs) {
      return this.prisma.post.update(args)
   }

   updateMany(args: Prisma.PostUpdateManyArgs) {
      return this.prisma.post.updateMany(args)
   }

   upsert(args: Prisma.PostUpsertArgs) {
      return this.prisma.post.upsert(args)
   }
}
