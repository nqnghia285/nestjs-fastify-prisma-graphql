import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { DiscountResolver } from './discount.resolver'
import { DiscountService } from './discount.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [DiscountResolver, DiscountService],
   exports: [DiscountService],
})
export class DiscountModule {}
