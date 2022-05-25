import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [UserResolver, UserService],
   exports: [UserService],
})
export class UserModule {}
