import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { PriceMapResolver } from './price-map.resolver'
import { PriceMapService } from './price-map.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [PriceMapResolver, PriceMapService],
   exports: [PriceMapService],
})
export class PriceMapModule {}
