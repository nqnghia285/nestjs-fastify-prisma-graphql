import { Database, Env, System } from '~/interface'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class ApiConfigService {
   constructor(private readonly configService: ConfigService) {}

   get system() {
      return this.configService.get<System>(Env.SYSTEM)
   }

   get database() {
      return this.configService.get<Database>(Env.DATABASE)
   }
}
