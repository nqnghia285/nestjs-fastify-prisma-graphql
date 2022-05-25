import { Module } from '@nestjs/common'
import { ChatModule } from './chat'

@Module({
   imports: [ChatModule],
   exports: [ChatModule],
})
export class FeaturesModule {}
