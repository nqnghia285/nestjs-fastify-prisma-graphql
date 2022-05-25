import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { IUserInfo } from '~/interface'

export const User = createParamDecorator(
   (data: unknown, context: ExecutionContext) => {
      const ctx = GqlExecutionContext.create(context)
      return ctx.getArgByIndex<IUserInfo>(0)
   }
)
