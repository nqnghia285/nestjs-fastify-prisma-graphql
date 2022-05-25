import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { PostResolver } from './post.resolver'
import { PostService } from './post.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [PostResolver, PostService],
   exports: [PostService],
})
export class PostModule {}
