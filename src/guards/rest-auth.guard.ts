import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class RestAuthGuard extends AuthGuard('jwt') {
   override handleRequest(
      err: any,
      user: any,
      info: any,
      context: ExecutionContext
   ) {
      context.getArgs()[0] = user
      return user
   }
}
