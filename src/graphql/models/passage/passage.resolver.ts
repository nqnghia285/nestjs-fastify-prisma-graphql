import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import {
   AggregatePassage,
   Passage,
   PassageAggregateArgs,
   PassageGroupBy,
   PassageGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   PassageCountArgs,
   PassageCreateArgs,
   PassageCreateManyArgs,
   PassageDeleteArgs,
   PassageDeleteManyArgs,
   PassageFindFirstArgs,
   PassageFindManyArgs,
   PassageFindUniqueArgs,
   PassageUpdateArgs,
} from '../../typedefs'
import { PassageService } from './passage.service'

@Resolver(() => Passage)
export class PassageResolver {
   constructor(private readonly passage: PassageService) {}

   @Query(() => AggregatePassage)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Passage'))
   async aggregatePassage(
      @Args() args: PassageAggregateArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Passage'))
   async countPassage(@Args() args: PassageCountArgs) {
      return handleResolver(this.passage, 'count', args)
   }

   @Mutation(() => Passage)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Passage'))
   async createPassage(
      @Args() args: PassageCreateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.passage, 'create', { ...args, select })
   }

   @Mutation(() => [Passage])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Passage'))
   async createManyPassage(
      @Args()
      args: PassageCreateManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.passage, 'createMany', { ...args, select })
   }

   @Mutation(() => Passage)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Passage'))
   async deletePassage(
      @Args() args: PassageDeleteArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.passage, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Passage'))
   async deleteManyPassage(@Args() args: PassageDeleteManyArgs) {
      return handleResolver(this.passage, 'deleteMany', args)
   }

   @Query(() => Passage, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Passage'))
   async findFirstPassage(
      @Args() args: PassageFindFirstArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.passage, 'findFirst', { ...args, select })
   }

   @Query(() => [Passage])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Passage'))
   async findManyPassage(
      @Args() args: PassageFindManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.passage, 'findMany', { ...args, select })
   }

   @Query(() => Passage, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Passage'))
   async findUniquePassage(
      @Args() args: PassageFindUniqueArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.passage, 'findUnique', { ...args, select })
   }

   @Query(() => PassageGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Passage'))
   async groupByPassage(
      @Args() args: PassageGroupByArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'groupBy', { ...args, select })
   }

   @Mutation(() => Passage)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Passage'))
   async updatePassage(
      @Args() args: PassageUpdateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.passage, 'update', { ...args, select })
   }
}
