import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import {
   AggregatePost,
   Post,
   PostAggregateArgs,
   PostGroupBy,
   PostGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   PostCountArgs,
   PostCreateArgs,
   PostCreateManyArgs,
   PostDeleteArgs,
   PostDeleteManyArgs,
   PostFindFirstArgs,
   PostFindManyArgs,
   PostFindUniqueArgs,
   PostUpdateArgs,
} from '../../typedefs'
import { PostService } from './post.service'

@Resolver(() => Post)
export class PostResolver {
   constructor(private readonly post: PostService) {}

   @Query(() => AggregatePost)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Post'))
   async aggregatePost(
      @Args() args: PostAggregateArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.post, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Post'))
   async countPost(@Args() args: PostCountArgs) {
      return handleResolver(this.post, 'count', args)
   }

   @Mutation(() => Post)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Post'))
   async createPost(
      @Args() args: PostCreateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.post, 'create', { ...args, select })
   }

   @Mutation(() => [Post])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Post'))
   async createManyPost(
      @Args()
      args: PostCreateManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.post, 'createMany', { ...args, select })
   }

   @Mutation(() => Post)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Post'))
   async deletePost(
      @Args() args: PostDeleteArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.post, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Post'))
   async deleteManyPost(@Args() args: PostDeleteManyArgs) {
      return handleResolver(this.post, 'deleteMany', args)
   }

   @Query(() => Post, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Post'))
   async findFirstPost(
      @Args() args: PostFindFirstArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.post, 'findFirst', { ...args, select })
   }

   @Query(() => [Post])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Post'))
   async findManyPost(
      @Args() args: PostFindManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.post, 'findMany', { ...args, select })
   }

   @Query(() => Post, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Post'))
   async findUniquePost(
      @Args() args: PostFindUniqueArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.post, 'findUnique', { ...args, select })
   }

   @Query(() => PostGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Post'))
   async groupByPost(
      @Args() args: PostGroupByArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.post, 'groupBy', { ...args, select })
   }

   @Mutation(() => Post)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Post'))
   async updatePost(
      @Args() args: PostUpdateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.post, 'update', { ...args, select })
   }
}
