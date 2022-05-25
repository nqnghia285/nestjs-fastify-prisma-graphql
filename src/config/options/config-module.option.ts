import { ConfigModuleOptions } from '@nestjs/config'
import { database } from '../database.config'
import { system } from '../system.config'
import { validationSchema } from '../schema'

export const configModuleOptions: ConfigModuleOptions = {
   expandVariables: true,
   cache: true,
   isGlobal: true,
   load: [system, database],
   validationSchema,
   validationOptions: {
      allowUnknown: true,
      abortEarly: false,
   },
}
