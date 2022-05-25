import { IUserInfo } from '~/interface'

export interface Payload {
   isSuccess?: boolean
   supported?: boolean
   message?: string
   staffSocketId?: string
   customerSocketId?: string
   profile?: IUserInfo
   rooms?: string[]
}
