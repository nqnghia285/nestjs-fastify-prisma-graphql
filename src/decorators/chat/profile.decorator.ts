import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { IUserInfo } from '~/interface'

export const Profile = createParamDecorator(
   (data: unknown, context: ExecutionContext) => {
      const user = context.getArgByIndex<IUserInfo>(2)
      return user
   }
)
