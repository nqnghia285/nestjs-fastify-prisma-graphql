import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { ImageResolver } from './image.resolver'
import { ImageService } from './image.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [ImageResolver, ImageService],
   exports: [ImageService],
})
export class ImageModule {}
