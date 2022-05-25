import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal'
import { Purchase } from '~/generated/prisma-nestjs-graphql'
import { calculatePrice } from '~/handlers'
import { PurchaseService } from './purchase.service'

@Resolver(() => Purchase)
export class TotalFieldOfLaptopResolver {
   constructor(private readonly purchase: PurchaseService) {}

   @ResolveField(() => GraphQLDecimal)
   async total(@Parent() parent: Purchase) {
      const purchase: Purchase = await this.purchase.findUnique({
         where: { id: parent.id },
         select: {
            laptops: true,
         },
      })

      const priceList =
         purchase?.laptops?.map((laptop) => calculatePrice(laptop)) || []

      const total = priceList.reduce(
         (preValue, curValue) => preValue.add(curValue),
         new Prisma.Decimal(0)
      )

      return total
   }
}
