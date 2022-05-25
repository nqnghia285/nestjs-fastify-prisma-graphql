import { ApiConfigModule } from '@libs/api-config'
import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { SchemaResolver } from './schema.resolver'
import { SchemaService } from './schema.service'

@Module({
   imports: [ApiConfigModule, CaslModule, PrismaModule],
   providers: [SchemaResolver, SchemaService],
   exports: [SchemaService],
})
export class SchemaModule {}
