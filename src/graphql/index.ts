import { Module } from '@nestjs/common'
import { SchemaModule } from './features'
import {
   CommentModule,
   CustomerModule,
   DiscountModule,
   ImageModule,
   LaptopModule,
   PassageModule,
   PersonModule,
   PostModule,
   PriceMapModule,
   PurchaseModule,
   UserModule,
   VideoModule,
} from './models'
import { ScalarTypeModule } from './typedefs'

@Module({
   imports: [
      ScalarTypeModule,
      CommentModule,
      CustomerModule,
      DiscountModule,
      ImageModule,
      LaptopModule,
      PassageModule,
      PersonModule,
      PostModule,
      PriceMapModule,
      PurchaseModule,
      UserModule,
      VideoModule,
      SchemaModule,
   ],
   exports: [
      ScalarTypeModule,
      CommentModule,
      CustomerModule,
      DiscountModule,
      ImageModule,
      LaptopModule,
      PassageModule,
      PersonModule,
      PostModule,
      PriceMapModule,
      PurchaseModule,
      UserModule,
      VideoModule,
      SchemaModule,
   ],
})
export class GraphQLModules {}
