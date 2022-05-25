import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Gender, Role } from '@prisma/client'
import bcrypt from 'bcrypt'
import { isEmail, isPhoneNumber } from 'class-validator'
import { IUserInfo } from '~/interface'

interface Person {
   email: string
   fullname: string
   gender: Gender
   id: string
   phone: string
   user: {
      password: string
      role: Role
   }
}

@Injectable()
export class AuthService {
   constructor(
      private jwtService: JwtService,
      private prismaService: PrismaService
   ) {}

   async validateUser(username: string, password: string): Promise<IUserInfo> {
      let person: Person

      if (isEmail(username)) {
         person = await this.prismaService.person.findUnique({
            where: { email: username },
            select: {
               email: true,
               fullname: true,
               gender: true,
               id: true,
               phone: true,
               user: {
                  select: {
                     password: true,
                     role: true,
                  },
               },
            },
         })
      } else if (isPhoneNumber(username)) {
         person = await this.prismaService.person.findUnique({
            where: { phone: username },
            select: {
               email: true,
               fullname: true,
               gender: true,
               id: true,
               phone: true,
               user: {
                  select: {
                     password: true,
                     role: true,
                  },
               },
            },
         })
      }

      if (person?.user && bcrypt.compareSync(password, person.user.password)) {
         const { user, ...rest } = person
         const profile = { role: user.role, ...rest }

         return profile
      }

      return null
   }

   createJWT(payload: any) {
      return this.jwtService.sign(payload, { algorithm: 'HS256' })
   }
}
