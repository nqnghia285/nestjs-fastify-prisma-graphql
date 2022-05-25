import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { LaptopResolver } from './laptop.resolver'
import { LaptopService } from './laptop.service'
import { PriceFieldOfLaptopResolver } from './price-field.resolver'
import { RatingFieldOfLaptopResolver } from './rating-field.resolver'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [
      PriceFieldOfLaptopResolver,
      RatingFieldOfLaptopResolver,
      LaptopResolver,
      LaptopService,
   ],
   exports: [LaptopService],
})
export class LaptopModule {}
