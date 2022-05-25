import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { FastifyRequest } from 'fastify'
import { IContext } from '~/interface'

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
   getRequest(context: ExecutionContext): FastifyRequest {
      const ctx = GqlExecutionContext.create(context)
      return ctx.getContext<IContext>().request
   }

   override handleRequest(
      err: any,
      user: any,
      info: any,
      context: ExecutionContext
   ) {
      const ctx = context.getArgByIndex<IContext>(2)
      context.getArgs()[0] = user
      ctx.user = user
      return user
   }
}
