import { GraphQLScalarType, Kind, ValueNode } from 'graphql'
import { Rating as IRating } from '~/interface'

function instanceOfRating(obj: any): obj is IRating {
   const keysOfIRating: (keyof IRating)[] = [
      'one',
      'two',
      'three',
      'four',
      'five',
   ]

   return Object.keys(obj).every((key) =>
      keysOfIRating.includes(key as keyof IRating)
   )
}

export const Rating = new GraphQLScalarType({
   name: 'Rating',

   description: 'Rating custom scalar type',

   parseValue(value: string): IRating {
      const rating = JSON.parse(value)
      if (rating) {
         return rating // value from the client input variables
      }

      throw new Error('The string is invalid when parse to Rating type')
   },

   serialize(value: IRating): IRating {
      if (!instanceOfRating(value)) {
         throw new Error('value have to be an instance of Rating')
      }

      return value // value sent to the client
   },

   parseLiteral(ast: ValueNode): IRating {
      if (ast.kind !== Kind.STRING) {
         throw new Error('value have to be a string')
      }

      const rating = JSON.parse(ast.value)
      if (rating) {
         return rating // value from the client query
      }

      throw new Error('The string is invalid when parse to Rating type')
   },
})
