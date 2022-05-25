import { registerAs } from '@nestjs/config'

export const database = registerAs('database', () => ({
   database_url: process.env.DATABASE_URL,
}))
