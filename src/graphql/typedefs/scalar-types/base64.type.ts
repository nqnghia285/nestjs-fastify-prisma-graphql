import { isBase64 } from 'class-validator'
import { GraphQLScalarType, Kind, ValueNode } from 'graphql'

export const Base64 = new GraphQLScalarType({
   name: 'Base64',

   description: 'Base64 custom scalar type',

   parseValue(value: string): Buffer {
      if (isBase64(value)) {
         return Buffer.from(value, 'base64') // value from the client input variables
      }

      throw new Error('Base64 can only parse a string formatted base64')
   },

   serialize(value: Buffer): string {
      if (!(value instanceof Buffer)) {
         throw new Error('value have to be an instance of Buffer')
      }

      return value.toString('base64') // value sent to the client
   },

   parseLiteral(ast: ValueNode): Buffer {
      if (ast.kind !== Kind.STRING) {
         throw new Error('value have to be a string formatted base64')
      }

      return Buffer.from(ast.value, 'base64') // value from the client query
   },
})
