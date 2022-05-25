import { Module } from '@nestjs/common'
import { Base64Scalar } from './base64-scalar.type'

@Module({
   providers: [Base64Scalar],
})
export class ScalarTypeModule {}
