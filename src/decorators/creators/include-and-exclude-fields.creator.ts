import { ParseFieldsOptions } from 'prisma-parse-selected-fields'

export function includeAndExcludeFieldsCreator(): ParseFieldsOptions {
   return {
      excludeFields: ['total', 'price', 'rating'],
      includeFields: ['id'],
   }
}
