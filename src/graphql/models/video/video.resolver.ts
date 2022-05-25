import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
   CheckPoliciesGuard,
   includeAndExcludeFieldsCreator,
   ParseAndRemoveSelectedFields,
} from '~/decorators'
import {
   AggregateVideo,
   Video,
   VideoAggregateArgs,
   VideoGroupBy,
   VideoGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   VideoCountArgs,
   VideoCreateArgs,
   VideoCreateManyArgs,
   VideoDeleteArgs,
   VideoDeleteManyArgs,
   VideoFindFirstArgs,
   VideoFindManyArgs,
   VideoFindUniqueArgs,
   VideoUpdateArgs,
} from '../../typedefs'
import { VideoService } from './video.service'

@Resolver(() => Video)
export class VideoResolver {
   constructor(private readonly video: VideoService) {}

   @Query(() => AggregateVideo)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Video'))
   async aggregateVideo(
      @Args() args: VideoAggregateArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.video, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Video'))
   async countVideo(@Args() args: VideoCountArgs) {
      return handleResolver(this.video, 'count', args)
   }

   @Mutation(() => Video)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Video'))
   async createVideo(
      @Args() args: VideoCreateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.video, 'create', { ...args, select })
   }

   @Mutation(() => [Video])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Video'))
   async createManyVideo(
      @Args()
      args: VideoCreateManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.video, 'createMany', { ...args, select })
   }

   @Mutation(() => Video)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Video'))
   async deleteVideo(
      @Args() args: VideoDeleteArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.video, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Video'))
   async deleteManyVideo(@Args() args: VideoDeleteManyArgs) {
      return handleResolver(this.video, 'deleteMany', args)
   }

   @Query(() => Video, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Video'))
   async findFirstVideo(
      @Args() args: VideoFindFirstArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.video, 'findFirst', { ...args, select })
   }

   @Query(() => [Video])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Video'))
   async findManyVideo(
      @Args() args: VideoFindManyArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.video, 'findMany', { ...args, select })
   }

   @Query(() => Video, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Video'))
   async findUniqueVideo(
      @Args() args: VideoFindUniqueArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.video, 'findUnique', { ...args, select })
   }

   @Query(() => VideoGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Video'))
   async groupByVideo(
      @Args() args: VideoGroupByArgs,
      @ParseAndRemoveSelectedFields() select: any
   ) {
      return handleResolver(this.video, 'groupBy', { ...args, select })
   }

   @Mutation(() => Video)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Video'))
   async updateVideo(
      @Args() args: VideoUpdateArgs,
      @ParseAndRemoveSelectedFields(includeAndExcludeFieldsCreator())
      select: any
   ) {
      return handleResolver(this.video, 'update', { ...args, select })
   }
}
