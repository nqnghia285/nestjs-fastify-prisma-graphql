import { LoggerModule } from '@libs/logger'
import { Module } from '@nestjs/common'
import { ChatGateway } from './chat.gateway'

@Module({
   imports: [LoggerModule],
   providers: [ChatGateway],
   exports: [ChatGateway],
})
export class ChatModule {}
