import { ApiConfigModule, ApiConfigService } from '@libs/api-config'
import { LoggerModule } from '@libs/logger'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from '~/strategies'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

@Module({
   imports: [
      ApiConfigModule,
      JwtModule.registerAsync({
         imports: [ApiConfigModule],
         inject: [ApiConfigService],
         useFactory: async (config: ApiConfigService) => ({
            secret: config.system.jwt_key,
         }),
      }),
      LoggerModule,
      PassportModule,
      PrismaModule,
   ],
   providers: [JwtStrategy, AuthService, AuthResolver],
   exports: [AuthService],
})
export class AuthModule {}
