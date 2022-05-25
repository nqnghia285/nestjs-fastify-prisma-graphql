import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { GraphQLResolveInfo as Info } from 'graphql'
import {
   ParseFieldsOptions,
   parseSelectedFields,
} from 'prisma-parse-selected-fields'

export const ParseAndRemoveSelectedFields = createParamDecorator(
   (parseFieldsOptions: ParseFieldsOptions, context: ExecutionContext) => {
      const ctx = GqlExecutionContext.create(context)
      const info = ctx.getInfo<Info>()

      return parseSelectedFields(info, { parseFieldsOptions })
   }
)
