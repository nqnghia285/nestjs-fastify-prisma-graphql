import { ApiConfigModule, ApiConfigService } from '@libs/api-config'
import { ServeStaticModuleAsyncOptions } from '@nestjs/serve-static'
import { join } from 'path'

export const serveStaticModuleOptions: ServeStaticModuleAsyncOptions = {
   imports: [ApiConfigModule],
   inject: [ApiConfigService],
   useFactory: (config: ApiConfigService) => [
      {
         rootPath: join(process.cwd(), 'public'),
         exclude: [config.system.graphql_path, '/api*'],
         serveStaticOptions: {
            index: false,
         },
      },
   ],
   isGlobal: true,
}
