import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { IUserInfo } from './user-info.interface'

export interface IContext {
   request: FastifyRequest
   reply: FastifyReply
   user?: IUserInfo
   prisma?: PrismaClient
}
