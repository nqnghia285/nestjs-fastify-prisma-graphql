import { Comment } from '~/generated/prisma-nestjs-graphql'
import { Rating } from '~/interface'

/**
 * @method sumRating Sum rating(one, two, three, four, five) corresponding to the rank of comment
 * @param rating Rating
 * @param comment Comment
 */
export function sumRating(rating: Rating, comment: Comment) {
   switch (comment.rank) {
      case 'ONE': {
         rating.one += 1
         break
      }
      case 'TWO': {
         rating.two += 1
         break
      }
      case 'THREE': {
         rating.three += 1
         break
      }
      case 'FOUR': {
         rating.four += 1
         break
      }
      case 'FIVE': {
         rating.five += 1
         break
      }
      default: {
         throw new Error(`${rating} is invalid`)
      }
   }
}
