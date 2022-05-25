import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { Laptop } from '~/generated/prisma-nestjs-graphql'
import { Rating } from '~/graphql/typedefs'
import { sumRating } from '~/handlers'
import { Rating as IRating } from '~/interface'
import { LaptopService } from './laptop.service'

@Resolver(() => Laptop)
export class RatingFieldOfLaptopResolver {
   constructor(private readonly laptop: LaptopService) {}

   @ResolveField(() => Rating)
   async rating(@Parent() parent: Laptop) {
      const rating: IRating = {
         one: 0,
         two: 0,
         three: 0,
         four: 0,
         five: 0,
      }

      const laptop: Laptop = await this.laptop.findUnique({
         where: { id: parent.id },
         select: {
            comments: true,
         },
      })

      if (laptop?.comments) {
         const comments = laptop.comments

         comments.forEach((comment) => sumRating(rating, comment))
      }

      return rating
   }
}
