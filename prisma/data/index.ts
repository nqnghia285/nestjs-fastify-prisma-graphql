import { Logger } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

export async function createTemplate() {
   const prisma = new PrismaClient()

   const logger = new Logger()

   await prisma.user
      .create({
         data: {
            profile: {
               create: {
                  fullname: process.env.fullname,
                  phone: process.env.phone,
                  email: process.env.email,
               },
            },
            password: bcrypt.hashSync(
               process.env.password,
               bcrypt.genSaltSync(10)
            ),
            role: 'ADMIN',
         },
         select: {
            id: true,
            profile: true,
            role: true,
            posts: true,
            createdAt: true,
            updatedAt: true,
            _count: true,
         },
      })
      .then((user) => logger.log(user, 'Created Admin'))
      .catch((err) => logger.log(err, 'Error'))

   await prisma.$disconnect()
}

createTemplate()
