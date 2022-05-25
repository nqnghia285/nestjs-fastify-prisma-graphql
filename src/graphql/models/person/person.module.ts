import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { PersonResolver } from './person.resolver'
import { PersonService } from './person.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [PersonResolver, PersonService],
   exports: [PersonService],
})
export class PersonModule {}
