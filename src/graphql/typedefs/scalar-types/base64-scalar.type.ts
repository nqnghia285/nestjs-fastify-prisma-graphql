import { CustomScalar, Scalar } from '@nestjs/graphql'
import { isBase64 } from 'class-validator'
import { Kind, ValueNode } from 'graphql'

@Scalar('Base64', () => Buffer)
export class Base64Scalar implements CustomScalar<string, Buffer> {
   description = 'Base64 custom scalar type'

   parseValue(value: string): Buffer {
      if (isBase64(value)) {
         return Buffer.from(value, 'base64') // value from the client input variables
      }

      throw new Error('Base64 can only parse a string formatted base64')
   }

   serialize(value: Buffer): string {
      if (!(value instanceof Buffer)) {
         throw new Error('value have to be an instance of Buffer')
      }

      return value.toString('base64') // value sent to the client
   }

   parseLiteral(ast: ValueNode): Buffer {
      if (ast.kind !== Kind.STRING) {
         throw new Error('value have to be a string formatted base64')
      }

      return Buffer.from(ast.value, 'base64') // value from the client query
   }
}
