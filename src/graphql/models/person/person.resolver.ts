import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import {
   AggregatePerson,
   Person,
   PersonAggregateArgs,
   PersonGroupBy,
   PersonGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   PersonCountArgs,
   PersonCreateArgs,
   PersonCreateManyArgs,
   PersonDeleteArgs,
   PersonDeleteManyArgs,
   PersonFindFirstArgs,
   PersonFindManyArgs,
   PersonFindUniqueArgs,
   PersonUpdateArgs,
} from '../../typedefs'
import { PersonService } from './person.service'

@Resolver(() => Person)
export class PersonResolver {
   constructor(private readonly person: PersonService) {}

   @Query(() => AggregatePerson)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Person'))
   async aggregatePerson(
      @Args() args: PersonAggregateArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.person, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Person'))
   async countPerson(@Args() args: PersonCountArgs) {
      return handleResolver(this.person, 'count', args)
   }

   @Mutation(() => Person)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Person'))
   async createPerson(
      @Args() args: PersonCreateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.person, 'create', { ...args, select })
   }

   @Mutation(() => [Person])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Person'))
   async createManyPerson(
      @Args()
      args: PersonCreateManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.person, 'createMany', { ...args, select })
   }

   @Mutation(() => Person)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Person'))
   async deletePerson(
      @Args() args: PersonDeleteArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.person, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Person'))
   async deleteManyPerson(@Args() args: PersonDeleteManyArgs) {
      return handleResolver(this.person, 'deleteMany', args)
   }

   @Query(() => Person, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Person'))
   async findFirstPerson(
      @Args() args: PersonFindFirstArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.person, 'findFirst', { ...args, select })
   }

   @Query(() => [Person])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Person'))
   async findManyPerson(
      @Args() args: PersonFindManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.person, 'findMany', { ...args, select })
   }

   @Query(() => Person, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Person'))
   async findUniquePerson(
      @Args() args: PersonFindUniqueArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.person, 'findUnique', { ...args, select })
   }

   @Query(() => PersonGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Person'))
   async groupByPerson(
      @Args() args: PersonGroupByArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.person, 'groupBy', { ...args, select })
   }

   @Mutation(() => Person)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Person'))
   async updatePerson(
      @Args() args: PersonUpdateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.person, 'update', { ...args, select })
   }
}
