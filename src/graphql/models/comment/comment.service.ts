import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class CommentService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.CommentAggregateArgs) {
      return this.prisma.comment.aggregate(args)
   }

   count(args: Prisma.CommentCountArgs) {
      return this.prisma.comment.count(args)
   }

   create(args: Prisma.CommentCreateArgs) {
      return this.prisma.comment.create(args)
   }

   createMany(args: Prisma.CommentCreateManyArgs) {
      return this.prisma.comment.createMany(args)
   }

   delete(args: Prisma.CommentDeleteArgs) {
      return this.prisma.comment.delete(args)
   }

   deleteMany(args: Prisma.CommentDeleteManyArgs) {
      return this.prisma.comment.deleteMany(args)
   }

   findFirst(args: Prisma.CommentFindFirstArgs) {
      return this.prisma.comment.findFirst(args)
   }

   findMany(args: Prisma.CommentFindManyArgs) {
      args.select
      return this.prisma.comment.findMany(args)
   }

   findUnique(args: Prisma.CommentFindUniqueArgs) {
      return this.prisma.comment.findUnique(args)
   }

   groupBy(args: Prisma.CommentGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.comment.groupBy(args)
   }

   update(args: Prisma.CommentUpdateArgs) {
      return this.prisma.comment.update(args)
   }

   updateMany(args: Prisma.CommentUpdateManyArgs) {
      return this.prisma.comment.updateMany(args)
   }

   upsert(args: Prisma.CommentUpsertArgs) {
      return this.prisma.comment.upsert(args)
   }
}
