import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import {
   AggregateDiscount,
   Discount,
   DiscountAggregateArgs,
   DiscountGroupBy,
   DiscountGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   DiscountCountArgs,
   DiscountCreateArgs,
   DiscountCreateManyArgs,
   DiscountDeleteArgs,
   DiscountDeleteManyArgs,
   DiscountFindFirstArgs,
   DiscountFindManyArgs,
   DiscountFindUniqueArgs,
   DiscountUpdateArgs,
} from '../../typedefs'
import { DiscountService } from './discount.service'

@Resolver(() => Discount)
export class DiscountResolver {
   constructor(private readonly discount: DiscountService) {}

   @Query(() => AggregateDiscount)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Discount'))
   async aggregateDiscount(
      @Args() args: DiscountAggregateArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Discount'))
   async countDiscount(@Args() args: DiscountCountArgs) {
      return handleResolver(this.discount, 'count', args)
   }

   @Mutation(() => Discount)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Discount'))
   async createDiscount(
      @Args() args: DiscountCreateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.discount, 'create', { ...args, select })
   }

   @Mutation(() => [Discount])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Discount'))
   async createManyDiscount(
      @Args()
      args: DiscountCreateManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.discount, 'createMany', { ...args, select })
   }

   @Mutation(() => Discount)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Discount'))
   async deleteDiscount(
      @Args() args: DiscountDeleteArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.discount, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Discount'))
   async deleteManyDiscount(@Args() args: DiscountDeleteManyArgs) {
      return handleResolver(this.discount, 'deleteMany', args)
   }

   @Query(() => Discount, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Discount'))
   async findFirstDiscount(
      @Args() args: DiscountFindFirstArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.discount, 'findFirst', { ...args, select })
   }

   @Query(() => [Discount])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Discount'))
   async findManyDiscount(
      @Args() args: DiscountFindManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.discount, 'findMany', { ...args, select })
   }

   @Query(() => Discount, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Discount'))
   async findUniqueDiscount(
      @Args() args: DiscountFindUniqueArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.discount, 'findUnique', { ...args, select })
   }

   @Query(() => DiscountGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Discount'))
   async groupByDiscount(
      @Args() args: DiscountGroupByArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'groupBy', { ...args, select })
   }

   @Mutation(() => Discount)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Discount'))
   async updateDiscount(
      @Args() args: DiscountUpdateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.discount, 'update', { ...args, select })
   }
}
