import { Gender, Role } from '@prisma/client'

export interface IUserInfo {
   id: string
   fullname: string
   gender: Gender
   phone: string
   email: string
   role: Role
}
