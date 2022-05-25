import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class ImageService {
   constructor(private readonly prisma: PrismaService) {}

   aggregate(args: Prisma.ImageAggregateArgs) {
      return this.prisma.image.aggregate(args)
   }

   count(args: Prisma.ImageCountArgs) {
      return this.prisma.image.count(args)
   }

   create(args: Prisma.ImageCreateArgs) {
      return this.prisma.image.create(args)
   }

   createMany(args: Prisma.ImageCreateManyArgs) {
      return this.prisma.image.createMany(args)
   }

   delete(args: Prisma.ImageDeleteArgs) {
      return this.prisma.image.delete(args)
   }

   deleteMany(args: Prisma.ImageDeleteManyArgs) {
      return this.prisma.image.deleteMany(args)
   }

   findFirst(args: Prisma.ImageFindFirstArgs) {
      return this.prisma.image.findFirst(args)
   }

   findMany(args: Prisma.ImageFindManyArgs) {
      args.select
      return this.prisma.image.findMany(args)
   }

   findUnique(args: Prisma.ImageFindUniqueArgs) {
      return this.prisma.image.findUnique(args)
   }

   groupBy(args: Prisma.ImageGroupByArgs) {
      // @ts-expect-error: Unreachable code error
      return this.prisma.image.groupBy(args)
   }

   update(args: Prisma.ImageUpdateArgs) {
      return this.prisma.image.update(args)
   }

   updateMany(args: Prisma.ImageUpdateManyArgs) {
      return this.prisma.image.updateMany(args)
   }

   upsert(args: Prisma.ImageUpsertArgs) {
      return this.prisma.image.upsert(args)
   }
}
