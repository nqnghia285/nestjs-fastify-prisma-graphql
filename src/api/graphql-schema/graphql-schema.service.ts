import { ApiConfigService } from '@libs/api-config'
import { Injectable, StreamableFile } from '@nestjs/common'
import { createReadStream } from 'fs'
import { join } from 'path'

@Injectable()
export class GraphQLSchemaService {
   constructor(private readonly config: ApiConfigService) {}
   getGraphQLSchema() {
      const path = join(process.cwd(), this.config.system.graphql_schema_path)
      const file = createReadStream(path)
      return new StreamableFile(file)
   }
}
