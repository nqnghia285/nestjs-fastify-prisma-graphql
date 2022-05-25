import { PolicyOption, AppSubjects } from '@libs/casl'
import { Action } from '~/interface'

export function ActionCreator(
   action: keyof typeof Action,
   model: AppSubjects
): PolicyOption {
   return { action, model }
}
