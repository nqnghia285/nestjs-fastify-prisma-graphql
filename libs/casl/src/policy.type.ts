import { Action } from '~/interface'
import { AppSubjects } from '.'

export interface PolicyOption {
   action: keyof typeof Action
   model: AppSubjects
}
