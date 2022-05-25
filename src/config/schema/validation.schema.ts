import Joi from 'joi'
import { NodeEnv } from '~/interface'

export const validationSchema = Joi.object().keys({
   NODE_ENV: Joi.string()
      .valid(
         NodeEnv.DEVELOPMENT,
         NodeEnv.PRODUCTION,
         NodeEnv.PROVISION,
         NodeEnv.TEST
      )
      .default(NodeEnv.DEVELOPMENT),
   HOST: Joi.string()
      .valid('0.0.0.0', 'localhost', '127.0.0.1')
      .default('0.0.0.0'),
   PORT: Joi.number().port().default(80),
   ORIGIN: Joi.alternatives()
      .try(Joi.string(), Joi.array().items(Joi.string())) // Issue: Can't check with uri()
      .required(),
   URL: Joi.string().uri().required(),
   GRAPHQL_PATH: Joi.string().required(),
   GRAPHQL_SCHEMA_PATH: Joi.string().required(),
   DATABASE_URL: Joi.string().uri().required(),
   JWT_KEY: Joi.string().required(),
   TOKEN_NAME: Joi.string().required(),
   AUTHOR: Joi.string().required(),
   REDIS_SERVER_NAME: Joi.string().required(),
   REDIS_SERVER_PORT: Joi.number().port().default(6379),
})
