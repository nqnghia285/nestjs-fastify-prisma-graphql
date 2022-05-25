/* eslint-disable @typescript-eslint/ban-types */
import { Injectable, PipeTransform } from '@nestjs/common'
import bcrypt from 'bcrypt'
import { CreateOneUserArgs } from '~/generated/prisma-nestjs-graphql'

@Injectable()
export class UserCreateArgsPipe implements PipeTransform<any> {
   async transform(value: any) {
      const args: CreateOneUserArgs = value
      if (args?.data?.password) {
         args.data.password = bcrypt.hashSync(
            args.data.password,
            bcrypt.genSaltSync(10)
         )
      }

      return value
   }
}
