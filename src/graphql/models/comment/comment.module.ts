import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { CommentResolver } from './comment.resolver'
import { CommentService } from './comment.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [CommentResolver, CommentService],
   exports: [CommentService],
})
export class CommentModule {}
