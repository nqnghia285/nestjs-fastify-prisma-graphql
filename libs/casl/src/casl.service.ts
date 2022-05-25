import {
   Ability,
   AbilityBuilder,
   AbilityClass,
   ExtractSubjectType,
   InferSubjects,
} from '@casl/ability'
import { Injectable } from '@nestjs/common'
import { Role } from '~/generated/prisma-nestjs-graphql'
import {
   Comment,
   Customer,
   Discount,
   Image,
   Laptop,
   Passage,
   Person,
   Post,
   PriceMap,
   Purchase,
   User,
   Video,
} from '~/graphql/typedefs'
import { Action, IUserInfo } from '~/interface'

export type AppSubjects = InferSubjects<
   | typeof Comment
   | typeof Customer
   | typeof Discount
   | typeof Image
   | typeof Laptop
   | typeof Passage
   | typeof Person
   | typeof Post
   | typeof PriceMap
   | typeof Purchase
   | typeof User
   | typeof Video
   | 'Schema',
   true
>

export type AppAbility = Ability<[keyof typeof Action, AppSubjects]>

@Injectable()
export class CaslAbilityFactory {
   /**
    * ! Note: To define permissions of users with conditions you have to use classes in AppSubjects instead of their 'key string' or 'model name string'.
    * ! Because CASL stipulates that.
    * * For more details, visits: https://casl.js.org
    */
   createForUser(user?: IUserInfo) {
      const { can, build } = new AbilityBuilder(
         Ability as AbilityClass<AppAbility>
      )
      if (user) {
         if (user.role === Role.ADMIN) {
            // ? Apply to Admin
            can(
               [
                  'AGGREGATE',
                  'COUNT',
                  'CREATE',
                  'CREATE_MANY',
                  'DELETE',
                  'DELETE_MANY',
                  'FIND_FIRST',
                  'FIND_MANY',
                  'FIND_UNIQUE',
                  'GROUP_BY',
                  'UPDATE',
                  'UPDATE_MANY',
               ],
               [
                  'Comment',
                  'Customer',
                  'Discount',
                  'Image',
                  'Laptop',
                  'Passage',
                  'Person',
                  'Post',
                  'PriceMap',
                  'Purchase',
                  'User',
                  'Video',
               ]
            )

            can('FIND_FIRST', 'Schema')
         } else {
            // ? Apply to Staff
            // ? can
            // * CREATE and READ action:
            can(
               [
                  'AGGREGATE',
                  'COUNT',
                  'CREATE',
                  'CREATE_MANY',
                  'FIND_FIRST',
                  'FIND_MANY',
                  'FIND_UNIQUE',
                  'GROUP_BY',
               ],
               [
                  'Comment',
                  'Customer',
                  'Discount',
                  'Image',
                  'Laptop',
                  'Post',
                  'PriceMap',
                  'Purchase',
                  'Video',
               ]
            )
            // * DELETE action:
            can(['DELETE', 'DELETE_MANY'], 'Comment')
            // * READ action with conditions:
            can(['FIND_FIRST', 'FIND_UNIQUE'], User, { id: user.id })
            // * UPDATE action:
            can(
               ['UPDATE', 'UPDATE_MANY'],
               [
                  'Customer',
                  'Discount',
                  'Image',
                  'Laptop',
                  'PriceMap',
                  'Purchase',
                  'Video',
               ]
            )
            // * UPDATE action with conditions:
            can(['UPDATE', 'UPDATE_MANY'], Comment, {
               isStaff: true,
               authorId: user.id,
            })
            can(['UPDATE', 'UPDATE_MANY'], Post, {
               authorId: user.id,
            })
            can('UPDATE', User, { id: user.id })
         }
      } else {
         // ? Apply to customer
         // ? can
         // * CREATE action:
         can('CREATE', 'Comment')
         // * READ action:
         can(
            [
               'AGGREGATE',
               'COUNT',
               'FIND_FIRST',
               'FIND_MANY',
               'FIND_UNIQUE',
               'GROUP_BY',
            ],
            [
               'Comment',
               'Discount',
               'Image',
               'Laptop',
               'Post',
               'PriceMap',
               'Video',
            ]
         )
      }

      return build({
         detectSubjectType: (item) =>
            item.constructor as ExtractSubjectType<AppSubjects>,
      })
   }

   createSubjectInstance(source: any, subjectType: AppSubjects): AppSubjects {
      let target: AppSubjects = null
      switch (subjectType) {
         case 'Comment': {
            target = new Comment()
            break
         }
         case 'Customer': {
            target = new Customer()
            break
         }
         case 'Discount': {
            target = new Discount()
            break
         }
         case 'Image': {
            target = new Image()
            break
         }
         case 'Laptop': {
            target = new Laptop()
            return target
         }
         case 'Passage': {
            target = new Passage()
            break
         }
         case 'Person': {
            target = new Person()
            break
         }
         case 'Post': {
            target = new Post()
            break
         }
         case 'PriceMap': {
            target = new PriceMap()
            break
         }
         case 'Purchase': {
            target = new Purchase()
            break
         }
         case 'User': {
            target = new User()
            break
         }
         case 'Video': {
            target = new Video()
            break
         }
      }
      Object.assign(target, source)
      return target
   }
}
