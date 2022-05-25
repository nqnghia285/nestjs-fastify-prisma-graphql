import { PoliciesGuard, PolicyOption } from '@libs/casl'
import { applyDecorators, UseGuards } from '@nestjs/common'
import { RestAuthGuard } from '~/guards'
import { CheckPolicies } from '.'

export function CheckPoliciesGuardForRestApi(policyOption: PolicyOption) {
   return applyDecorators(
      CheckPolicies(policyOption),
      UseGuards(RestAuthGuard, PoliciesGuard)
   )
}
