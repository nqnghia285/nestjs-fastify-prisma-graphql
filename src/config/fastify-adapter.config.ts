import { FastifyAdapter } from '@nestjs/platform-fastify'
import { IUserInfo, NodeEnv } from '~/interface'

// async function preValidationHandler(
//    request: FastifyRequest & { isMultipart: boolean },
//    reply: FastifyReply
// ) {
//    if (!request.isMultipart) {
//       return
//    }

//    request.body = await processRequest(request.raw, reply.raw, {
//       maxFileSize: 1e7,
//       maxFiles: 10,
//    })
// }

export const fastifyAdapter = new FastifyAdapter({
   logger: process.env.NODE_ENV !== NodeEnv.PRODUCTION,
})

fastifyAdapter.getInstance().decorateRequest<IUserInfo>('user', null)

// fastifyAdapter.getInstance().addHook('preValidation', preValidationHandler)

// fastifyAdapter.getInstance().decorateRequest<boolean>('isMultipart', false)

// fastifyAdapter
//    .getInstance()
//    .decorateRequest<{ [key: string]: string }>('cookies', null)

// fastifyAdapter
//    .getInstance()
//    .addContentTypeParser(
//       'multipart',
//       (request: FastifyRequest & { isMultipart: boolean }, done) => {
//          request.isMultipart = true
//          done()
//       }
//    )
