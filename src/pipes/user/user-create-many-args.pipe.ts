/* eslint-disable @typescript-eslint/ban-types */
import { Injectable, PipeTransform } from '@nestjs/common'
import bcrypt from 'bcrypt'
import { CreateManyUserArgs } from '~/generated/prisma-nestjs-graphql'

@Injectable()
export class UserCreateManyArgsPipe implements PipeTransform<any> {
   async transform(value: any) {
      const args: CreateManyUserArgs = value
      if (args?.data) {
         args.data.forEach((user) => {
            user.password = bcrypt.hashSync(
               user.password,
               bcrypt.genSaltSync(10)
            )
         })
      }

      return value
   }
}
