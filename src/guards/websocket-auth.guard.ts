import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { parse } from 'cookie'
import { Socket } from 'socket.io'

@Injectable()
export class WebsocketAuthGuard extends AuthGuard('jwt') {
   getRequest(context: ExecutionContext) {
      const ctx = context.switchToWs()
      const client = ctx.getClient<Socket>()
      const request = client.request
      const cookies = parse(request.headers.cookie)
      const req = { ...request, cookies }
      return req
   }

   override handleRequest(
      err: any,
      user: any,
      info: any,
      context: ExecutionContext
   ) {
      const args = context.getArgs()
      args[2] = user
      return user
   }
}
