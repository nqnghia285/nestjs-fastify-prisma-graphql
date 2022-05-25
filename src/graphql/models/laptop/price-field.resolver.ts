import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal'
import { Laptop } from '~/generated/prisma-nestjs-graphql'
import { calculatePrice } from '~/handlers'
import { LaptopService } from './laptop.service'

@Resolver(() => Laptop)
export class PriceFieldOfLaptopResolver {
   constructor(private readonly laptop: LaptopService) {}

   @ResolveField(() => GraphQLDecimal)
   async price(@Parent() parent: Laptop) {
      const laptop: Laptop = await this.laptop.findUnique({
         where: { id: parent.id },
         select: {
            discounts: true,
            priceMap: true,
         },
      })

      return calculatePrice(laptop)
   }
}
