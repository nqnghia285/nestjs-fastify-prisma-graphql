import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import {
   AggregateCustomer,
   Customer,
   CustomerAggregateArgs,
   CustomerGroupBy,
   CustomerGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   CustomerCountArgs,
   CustomerCreateArgs,
   CustomerCreateManyArgs,
   CustomerDeleteArgs,
   CustomerDeleteManyArgs,
   CustomerFindFirstArgs,
   CustomerFindManyArgs,
   CustomerFindUniqueArgs,
   CustomerUpdateArgs,
   DeleteMany,
} from '../../typedefs'
import { CustomerService } from './customer.service'

@Resolver(() => Customer)
export class CustomerResolver {
   constructor(private readonly customer: CustomerService) {}

   @Query(() => AggregateCustomer)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Customer'))
   async aggregateCustomer(
      @Args() args: CustomerAggregateArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Customer'))
   async countCustomer(@Args() args: CustomerCountArgs) {
      return handleResolver(this.customer, 'count', args)
   }

   @Mutation(() => Customer)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Customer'))
   async createCustomer(
      @Args() args: CustomerCreateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.customer, 'create', { ...args, select })
   }

   @Mutation(() => [Customer])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Customer'))
   async createManyCustomer(
      @Args()
      args: CustomerCreateManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.customer, 'createMany', { ...args, select })
   }

   @Mutation(() => Customer)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Customer'))
   async deleteCustomer(
      @Args() args: CustomerDeleteArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.customer, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Customer'))
   async deleteManyCustomer(@Args() args: CustomerDeleteManyArgs) {
      return handleResolver(this.customer, 'deleteMany', args)
   }

   @Query(() => Customer, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Customer'))
   async findFirstCustomer(
      @Args() args: CustomerFindFirstArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.customer, 'findFirst', { ...args, select })
   }

   @Query(() => [Customer])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Customer'))
   async findManyCustomer(
      @Args() args: CustomerFindManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.customer, 'findMany', { ...args, select })
   }

   @Query(() => Customer, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Customer'))
   async findUniqueCustomer(
      @Args() args: CustomerFindUniqueArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.customer, 'findUnique', { ...args, select })
   }

   @Query(() => CustomerGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Customer'))
   async groupByCustomer(
      @Args() args: CustomerGroupByArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'groupBy', { ...args, select })
   }

   @Mutation(() => Customer)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Customer'))
   async updateCustomer(
      @Args() args: CustomerUpdateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.customer, 'update', { ...args, select })
   }
}
