import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { VideoResolver } from './video.resolver'
import { VideoService } from './video.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [VideoResolver, VideoService],
   exports: [VideoService],
})
export class VideoModule {}
