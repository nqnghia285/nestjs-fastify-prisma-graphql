import { PoliciesGuard, PolicyOption } from '@libs/casl'
import { applyDecorators, UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '~/guards'
import { CheckPolicies } from '.'

export function CheckPoliciesGuard(policyOption: PolicyOption) {
   return applyDecorators(
      CheckPolicies(policyOption),
      UseGuards(GqlAuthGuard, PoliciesGuard)
   )
}
