import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import { LoggerService } from '@libs/logger'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestFastifyApplication } from '@nestjs/platform-fastify'
import { address } from 'ip'
import { AppModule } from '~/app.module'
import { fastifyAdapter } from '~/config'
import { Env, System } from '~/interface'

async function bootstrap() {
   const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      fastifyAdapter
   )

   const logger = app.get(LoggerService)
   app.useLogger(logger)

   const configService = app.get(ConfigService)
   const host = configService.get<System>(Env.SYSTEM).host
   const port = configService.get<System>(Env.SYSTEM).port
   const origin = configService.get<System>(Env.SYSTEM).origin

   logger.log(origin, 'Origin')

   app.setGlobalPrefix('api', {
      exclude: [configService.get<System>(Env.SYSTEM).graphql_path],
   })

   // For REST API
   // Currently, @nestjs/graphql@10.0.12: CorsOptionsDelegate solution is not working with the apollo-server-fastify package yet
   // app.register(fastifyCors, {
   //    origin: origin,
   //    credentials: true,
   //    methods: ['GET', 'POST', 'PUT', 'DELETE'],
   // })

   app.register(fastifyCookie)

   await app.listen(port, host, async () => {
      const announcement = {
         url: await app.getUrl(),
         address: address(),
         message: `NestJS Server is running!`,
      }
      logger.log(announcement, 'Main')
   })
}

// Run app
bootstrap()
