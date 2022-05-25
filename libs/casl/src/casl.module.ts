import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { CaslAbilityFactory } from './casl.service'
import { PoliciesGuard } from './policies.guard'

@Module({
   imports: [PrismaModule],
   providers: [CaslAbilityFactory, PoliciesGuard],
   exports: [CaslAbilityFactory, PoliciesGuard],
})
export class CaslModule {}
