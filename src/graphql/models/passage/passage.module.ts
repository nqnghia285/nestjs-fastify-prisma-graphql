import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { PassageResolver } from './passage.resolver'
import { PassageService } from './passage.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [PassageResolver, PassageService],
   exports: [PassageService],
})
export class PassageModule {}
