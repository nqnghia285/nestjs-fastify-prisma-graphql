import { ApiConfigModule } from '@libs/api-config'
import { AuthModule } from '@libs/auth'
import { CaslModule } from '@libs/casl'
import { LoggerModule } from '@libs/logger'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ApiModule } from '~/api'
import {
   configModuleOptions,
   gqlModuleAsyncOptions,
   // serveStaticModuleOptions,
} from '~/config'
import { FeaturesModule } from '~/features'
import { GraphQLModules } from '~/graphql'

@Module({
   imports: [
      ConfigModule.forRoot(configModuleOptions),
      // ServeStaticModule.forRootAsync(serveStaticModuleOptions),
      GraphQLModule.forRootAsync(gqlModuleAsyncOptions),
      ApiConfigModule,
      ApiModule,
      AuthModule,
      CaslModule,
      LoggerModule,
      PrismaModule,
      GraphQLModules,
      FeaturesModule,
   ],
})
export class AppModule {}
