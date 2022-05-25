import { Prisma } from '@prisma/client'
import { Laptop } from '~/generated/prisma-nestjs-graphql'

/**
 * @method calculatePrice Calculate price of laptop
 * @param laptop Laptop
 * @returns Prisma.Decimal
 */
export function calculatePrice(laptop: Laptop) {
   if (laptop?.priceMap) {
      const discounts = laptop.discounts.map((discount) => discount.value)
      const discount = discounts.reduce(
         (preValue, curValue) => preValue + curValue,
         0
      )

      return (laptop.priceMap.price as Prisma.Decimal).mul(
         (100 - discount) / 100
      )
   }

   return new Prisma.Decimal(0)
}
