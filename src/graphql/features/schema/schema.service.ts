import { ApiConfigService } from '@libs/api-config'
import { Injectable } from '@nestjs/common'
import { readFileSync } from 'fs'
import path from 'path'

@Injectable()
export class SchemaService {
   constructor(private readonly config: ApiConfigService) {}

   getGraphQLSchema() {
      return readFileSync(
         path.join(process.cwd(), this.config.system.graphql_schema_path)
      )
   }
}
