import { PolicyOption } from '@libs/casl'
import { SetMetadata } from '@nestjs/common'

export const CHECK_POLICIES_KEY = 'check_policy'
export const CheckPolicies = (policyOption: PolicyOption) =>
   SetMetadata(CHECK_POLICIES_KEY, policyOption)
