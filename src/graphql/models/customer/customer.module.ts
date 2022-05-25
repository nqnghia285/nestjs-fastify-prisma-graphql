import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { CustomerResolver } from './customer.resolver'
import { CustomerService } from './customer.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [CustomerResolver, CustomerService],
   exports: [CustomerService],
})
export class CustomerModule {}
