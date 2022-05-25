import { PrismaService } from '@libs/prisma'
import {
   CanActivate,
   ExecutionContext,
   ForbiddenException,
   Injectable,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { CHECK_POLICIES_KEY } from '~/decorators'
import { Role } from '~/generated/prisma-nestjs-graphql'
import { Action, IUserInfo } from '~/interface'
import { AppSubjects } from '.'
import { CaslAbilityFactory } from './casl.service'
import { PolicyOption } from './policy.type'

@Injectable()
export class PoliciesGuard implements CanActivate {
   constructor(
      private readonly reflector: Reflector,
      private readonly caslAbilityFactory: CaslAbilityFactory,
      private readonly prisma: PrismaService
   ) {}

   /**
    * ! Note: To check permissions of users with conditions you have to create an instance of classes in AppSubjects.
    * ! Because CASL stipulates that.
    * * For more details, visits: https://casl.js.org
    */
   async canActivate(context: ExecutionContext) {
      const policyOption = this.reflector.get<PolicyOption>(
         CHECK_POLICIES_KEY,
         context.getHandler()
      )

      const user = context.getArgByIndex<IUserInfo>(0)
      const args = context.getArgByIndex(1)
      const ability = this.caslAbilityFactory.createForUser(user)
      let subject: AppSubjects = null

      // ! begin: Admin
      if (user?.role === Role.ADMIN) {
         const allow = ability.can(policyOption.action, policyOption.model)
         return allow
      }
      // ! end

      // ! begin: Staff
      if (user?.role === Role.STAFF) {
         if (
            policyOption.action === 'FIND_FIRST' &&
            policyOption.model === 'User'
         ) {
            const object = await this.prisma.user.findFirst({
               where: args.where,
            })

            subject = this.caslAbilityFactory.createSubjectInstance(
               object,
               policyOption.model
            )
         }

         if (
            policyOption.action === 'FIND_UNIQUE' &&
            policyOption.model === 'User'
         ) {
            const object = await this.prisma.user.findUnique({
               where: args.where,
            })

            subject = this.caslAbilityFactory.createSubjectInstance(
               object,
               policyOption.model
            )
         }

         if (
            policyOption.action === 'UPDATE' &&
            (policyOption.model === 'Comment' ||
               policyOption.model === 'Post' ||
               policyOption.model === 'User')
         ) {
            const modelProperty = (policyOption.model as string).toLowerCase()

            const object = await this.prisma[modelProperty].findUnique({
               where: args.where,
            })

            subject = this.caslAbilityFactory.createSubjectInstance(
               object,
               policyOption.model
            )
         }

         if (
            policyOption.action === 'UPDATE_MANY' &&
            (policyOption.model === 'Comment' || policyOption.model === 'Post')
         ) {
            const modelProperty = (policyOption.model as string).toLowerCase()

            const object = await this.prisma[modelProperty].findFirst({
               where: args.where,
            })

            subject = this.caslAbilityFactory.createSubjectInstance(
               object,
               policyOption.model
            )
         }

         const allow = subject
            ? ability.can(policyOption.action, subject)
            : ability.can(policyOption.action, policyOption.model)

         if (!allow) {
            throwForbiddenException(policyOption.action, policyOption.model)
         }

         return true
      }
      // ! end

      // ! begin: Customer
      const allow = ability.can(policyOption.action, policyOption.model)

      if (!allow) {
         throwForbiddenException(policyOption.action, policyOption.model)
      }

      return true
      // ! end
   }
}

function throwForbiddenException(
   action: keyof typeof Action,
   model: AppSubjects
) {
   throw new ForbiddenException(
      {
         action,
         model,
         isSuccess: false,
         error: 'Authorization',
         message: `You are not allowed to ${action} to ${model} or unsatisfactory condition`,
      },
      '[Error]: Authorization'
   )
}
