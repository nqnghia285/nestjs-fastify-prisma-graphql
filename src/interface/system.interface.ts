export interface System {
   node_env: 'development' | 'production' | 'test' | 'provision'
   host: '0.0.0.0' | 'localhost' | '127.0.0.1'
   port: number
   origin: string | string[]
   url: string
   graphql_path: string
   graphql_schema_path: string
   jwt_key: string
   token_name: string
   author: string
   redis_server_name: string
   redis_server_port: number
}
