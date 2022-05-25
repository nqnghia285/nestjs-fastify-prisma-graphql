import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { PurchaseResolver } from './purchase.resolver'
import { PurchaseService } from './purchase.service'
import { TotalFieldOfLaptopResolver } from './total.resolver'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [TotalFieldOfLaptopResolver, PurchaseResolver, PurchaseService],
   exports: [PurchaseService],
})
export class PurchaseModule {}
