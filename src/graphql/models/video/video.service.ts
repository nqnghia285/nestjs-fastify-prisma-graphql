import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class VideoService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.VideoAggregateArgs) {
      return this.prisma.video.aggregate(args)
   }

   count(args: Prisma.VideoCountArgs) {
      return this.prisma.video.count(args)
   }

   create(args: Prisma.VideoCreateArgs) {
      return this.prisma.video.create(args)
   }

   createMany(args: Prisma.VideoCreateManyArgs) {
      return this.prisma.video.createMany(args)
   }

   delete(args: Prisma.VideoDeleteArgs) {
      return this.prisma.video.delete(args)
   }

   deleteMany(args: Prisma.VideoDeleteManyArgs) {
      return this.prisma.video.deleteMany(args)
   }

   findFirst(args: Prisma.VideoFindFirstArgs) {
      return this.prisma.video.findFirst(args)
   }

   findMany(args: Prisma.VideoFindManyArgs) {
      args.select
      return this.prisma.video.findMany(args)
   }

   findUnique(args: Prisma.VideoFindUniqueArgs) {
      return this.prisma.video.findUnique(args)
   }

   groupBy(args: Prisma.VideoGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.video.groupBy(args)
   }

   update(args: Prisma.VideoUpdateArgs) {
      return this.prisma.video.update(args)
   }

   updateMany(args: Prisma.VideoUpdateManyArgs) {
      return this.prisma.video.updateMany(args)
   }

   upsert(args: Prisma.VideoUpsertArgs) {
      return this.prisma.video.upsert(args)
   }
}
