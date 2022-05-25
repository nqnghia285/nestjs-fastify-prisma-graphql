import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import {
   AggregatePriceMap,
   PriceMap,
   PriceMapAggregateArgs,
   PriceMapGroupBy,
   PriceMapGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   PriceMapCountArgs,
   PriceMapCreateArgs,
   PriceMapCreateManyArgs,
   PriceMapDeleteArgs,
   PriceMapDeleteManyArgs,
   PriceMapFindFirstArgs,
   PriceMapFindManyArgs,
   PriceMapFindUniqueArgs,
   PriceMapUpdateArgs,
} from '../../typedefs'
import { PriceMapService } from './price-map.service'

@Resolver(() => PriceMap)
export class PriceMapResolver {
   constructor(private readonly priceMap: PriceMapService) {}

   @Query(() => AggregatePriceMap)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'PriceMap'))
   async aggregatePriceMap(
      @Args() args: PriceMapAggregateArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'PriceMap'))
   async countPriceMap(@Args() args: PriceMapCountArgs) {
      return handleResolver(this.priceMap, 'count', args)
   }

   @Mutation(() => PriceMap)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'PriceMap'))
   async createPriceMap(
      @Args() args: PriceMapCreateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      delete select.price
      return handleResolver(this.priceMap, 'create', { ...args, select })
   }

   @Mutation(() => [PriceMap])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'PriceMap'))
   async createManyPriceMap(
      @Args()
      args: PriceMapCreateManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.priceMap, 'createMany', { ...args, select })
   }

   @Mutation(() => PriceMap)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'PriceMap'))
   async deletePriceMap(
      @Args() args: PriceMapDeleteArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.priceMap, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'PriceMap'))
   async deleteManyPriceMap(@Args() args: PriceMapDeleteManyArgs) {
      return handleResolver(this.priceMap, 'deleteMany', args)
   }

   @Query(() => PriceMap, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'PriceMap'))
   async findFirstPriceMap(
      @Args() args: PriceMapFindFirstArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.priceMap, 'findFirst', { ...args, select })
   }

   @Query(() => [PriceMap])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'PriceMap'))
   async findManyPriceMap(
      @Args() args: PriceMapFindManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.priceMap, 'findMany', { ...args, select })
   }

   @Query(() => PriceMap, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'PriceMap'))
   async findUniquePriceMap(
      @Args() args: PriceMapFindUniqueArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.priceMap, 'findUnique', { ...args, select })
   }

   @Query(() => PriceMapGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'PriceMap'))
   async groupByPriceMap(
      @Args() args: PriceMapGroupByArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'groupBy', { ...args, select })
   }

   @Mutation(() => PriceMap)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'PriceMap'))
   async updatePriceMap(
      @Args() args: PriceMapUpdateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.priceMap, 'update', { ...args, select })
   }
}
