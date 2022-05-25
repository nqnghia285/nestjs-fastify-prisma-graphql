import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import {
   AggregateUser,
   User,
   UserAggregateArgs,
   UserGroupBy,
   UserGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import { UserCreateArgsPipe, UserCreateManyArgsPipe } from '~/pipes'
import {
   DeleteMany,
   UserCountArgs,
   UserCreateArgs,
   UserCreateManyArgs,
   UserDeleteArgs,
   UserDeleteManyArgs,
   UserFindFirstArgs,
   UserFindManyArgs,
   UserFindUniqueArgs,
   UserUpdateArgs,
} from '../../typedefs'
import { UserService } from './user.service'

@Resolver(() => User)
export class UserResolver {
   constructor(private readonly user: UserService) {}

   @Query(() => AggregateUser)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'User'))
   async aggregateUser(
      @Args() args: UserAggregateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.user, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'User'))
   async countUser(@Args() args: UserCountArgs) {
      return handleResolver(this.user, 'count', args)
   }

   @Mutation(() => User)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'User'))
   async createUser(
      @Args(UserCreateArgsPipe) args: UserCreateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.user, 'create', { ...args, select })
   }

   @Mutation(() => [User])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'User'))
   async createManyUser(
      @Args(UserCreateManyArgsPipe)
      args: UserCreateManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.user, 'createMany', { ...args, select })
   }

   @Mutation(() => User)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'User'))
   async deleteUser(
      @Args() args: UserDeleteArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.user, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'User'))
   async deleteManyUser(@Args() args: UserDeleteManyArgs) {
      return handleResolver(this.user, 'deleteMany', args)
   }

   @Query(() => User, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'User'))
   async findFirstUser(
      @Args() args: UserFindFirstArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.user, 'findFirst', { ...args, select })
   }

   @Query(() => [User])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'User'))
   async findManyUser(
      @Args() args: UserFindManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.user, 'findMany', { ...args, select })
   }

   @Query(() => User, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'User'))
   async findUniqueUser(
      @Args() args: UserFindUniqueArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.user, 'findUnique', { ...args, select })
   }

   @Query(() => UserGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'User'))
   async groupByUser(
      @Args() args: UserGroupByArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.user, 'groupBy', { ...args, select })
   }

   @Mutation(() => User)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'User'))
   async updateUser(
      @Args() args: UserUpdateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.user, 'update', { ...args, select })
   }
}
