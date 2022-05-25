import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import {
   AggregateLaptop,
   Laptop,
   LaptopAggregateArgs,
   LaptopGroupBy,
   LaptopGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   LaptopCountArgs,
   LaptopCreateArgs,
   LaptopCreateManyArgs,
   LaptopDeleteArgs,
   LaptopDeleteManyArgs,
   LaptopFindFirstArgs,
   LaptopFindManyArgs,
   LaptopFindUniqueArgs,
   LaptopUpdateArgs,
} from '../../typedefs'
import { LaptopService } from './laptop.service'

@Resolver(() => Laptop)
export class LaptopResolver {
   constructor(private readonly laptop: LaptopService) {}

   @Query(() => AggregateLaptop)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Laptop'))
   async aggregateLaptop(
      @Args() args: LaptopAggregateArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Laptop'))
   async countLaptop(@Args() args: LaptopCountArgs) {
      return handleResolver(this.laptop, 'count', args)
   }

   @Mutation(() => Laptop)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Laptop'))
   async createLaptop(
      @Args() args: LaptopCreateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.laptop, 'create', { ...args, select })
   }

   @Mutation(() => [Laptop])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Laptop'))
   async createManyLaptop(
      @Args()
      args: LaptopCreateManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.laptop, 'createMany', { ...args, select })
   }

   @Mutation(() => Laptop)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Laptop'))
   async deleteLaptop(
      @Args() args: LaptopDeleteArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.laptop, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Laptop'))
   async deleteManyLaptop(@Args() args: LaptopDeleteManyArgs) {
      return handleResolver(this.laptop, 'deleteMany', args)
   }

   @Query(() => Laptop, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Laptop'))
   async findFirstLaptop(
      @Args() args: LaptopFindFirstArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.laptop, 'findFirst', { ...args, select })
   }

   @Query(() => [Laptop])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Laptop'))
   async findManyLaptop(
      @Args() args: LaptopFindManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.laptop, 'findMany', { ...args, select })
   }

   @Query(() => Laptop, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Laptop'))
   async findUniqueLaptop(
      @Args() args: LaptopFindUniqueArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.laptop, 'findUnique', { ...args, select })
   }

   @Query(() => LaptopGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Laptop'))
   async groupByLaptop(
      @Args() args: LaptopGroupByArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'groupBy', { ...args, select })
   }

   @Mutation(() => Laptop)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Laptop'))
   async updateLaptop(
      @Args() args: LaptopUpdateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.laptop, 'update', { ...args, select })
   }
}
