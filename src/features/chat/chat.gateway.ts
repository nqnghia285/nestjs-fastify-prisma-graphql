import { LoggerService } from '@libs/logger'
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import {
   ConnectedSocket,
   MessageBody,
   SubscribeMessage,
   WebSocketGateway,
   WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { wsOptions } from '~/config'
import { Profile } from '~/decorators'
import { WebsocketAuthGuard } from '~/guards'
import { Events, IUserInfo, Payload, Rooms } from '~/interface'

@WebSocketGateway(wsOptions)
export class ChatGateway {
   constructor(private readonly logger: LoggerService) {}

   @WebSocketServer()
   server: Server

   @SubscribeMessage(Events.CONNECTION)
   handleConnection(@ConnectedSocket() client: Socket) {
      this.logger.log('Client is connected!')
      client.emit(Events.CONNECTION, 'Connected')
   }

   @SubscribeMessage(Events.DISCONNECT)
   handleDisconnect(@ConnectedSocket() client: Socket) {
      this.logger.log('Client is disconnected!')
      client.disconnect(true)
   }

   @UseGuards(WebsocketAuthGuard)
   @UsePipes(new ValidationPipe())
   @SubscribeMessage(Events.STAFF_JOINS_SUPPORT_TEAM_ROOM)
   handleStaffJoinsSupportTeamRoom(
      @ConnectedSocket() client: Socket,
      @Profile() profile: IUserInfo
   ) {
      if (profile) {
         client.join(Rooms.SUPPORT_TEAM_ROOM)
         client
            .to([Rooms.SUPPORT_TEAM_ROOM])
            .emit(Events.STAFF_JOINS_SUPPORT_TEAM_ROOM, {
               profile,
               staffSocketId: client.id,
               message: `${profile.fullname} joined the support team room`,
            })

         client.emit(Events.STAFF_JOINS_SUPPORT_TEAM_ROOM, {
            profile,
            staffSocketId: client.id,
            isSuccess: true,
            message: `You joined the support team room`,
         })
      } else {
         client.emit(Events.STAFF_JOINS_SUPPORT_TEAM_ROOM, {
            isSuccess: false,
            message: `You are not allowed to join the support team room`,
         })
      }

      this.logger.log(
         profile,
         `${Events.STAFF_JOINS_SUPPORT_TEAM_ROOM}:profile`
      )
   }

   @UseGuards(WebsocketAuthGuard)
   @UsePipes(new ValidationPipe())
   @SubscribeMessage(Events.CUSTOMER_NEEDS_SUPPORT)
   handleCustomerNeedsSupport(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: Payload
   ) {
      client.to(Rooms.SUPPORT_TEAM_ROOM).emit(Events.CUSTOMER_NEEDS_SUPPORT, {
         customerSocketId: client.id,
         message: payload,
      })
   }

   @UseGuards(WebsocketAuthGuard)
   @UsePipes(new ValidationPipe())
   @SubscribeMessage(Events.STAFF_LEAVES_SUPPORT_TEAM_ROOM)
   handleStaffLeavesSupportTeamRoom(
      @ConnectedSocket() client: Socket,
      @Profile() profile: IUserInfo
   ) {
      if (profile) {
         client.leave(Rooms.SUPPORT_TEAM_ROOM)
         client
            .to(Rooms.SUPPORT_TEAM_ROOM)
            .emit(Events.STAFF_LEAVES_SUPPORT_TEAM_ROOM, {
               staffSocketId: client.id,
            })
      } else {
         client.emit(Events.STAFF_LEAVES_SUPPORT_TEAM_ROOM, {
            isSuccess: false,
            message: `You are not on the support team room`,
         })
      }
   }

   @UseGuards(WebsocketAuthGuard)
   @UsePipes(new ValidationPipe())
   @SubscribeMessage(Events.STAFF_RESPONSIBLE_FOR_CUSTOMER_SUPPORT)
   handleStaffResponsibleForCustomerSupport(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: Payload
   ) {
      if (client.rooms.has(Rooms.SUPPORT_TEAM_ROOM)) {
         const { customerSocketId } = payload
         // * Send a notification to staffs in 'support-team-room' but the sender
         client
            .to(Rooms.SUPPORT_TEAM_ROOM)
            .emit(Events.STAFF_RESPONSIBLE_FOR_CUSTOMER_SUPPORT, {
               supported: true,
               customerSocketId,
               staffSocketId: client.id,
            })

         // * Join a room only the staff and the customer
         const room = `${client.id}-supports-${customerSocketId}`
         client.join(room)

         // * Send a notification to the customer to join the room
         client
            .to(customerSocketId)
            .emit(Events.STAFF_RESPONSIBLE_FOR_CUSTOMER_SUPPORT, {
               room,
               staffSocketId: client.id,
            })

         this.logger.log(payload, 'message:payload')
      } else {
         client.emit(Events.STAFF_RESPONSIBLE_FOR_CUSTOMER_SUPPORT, {
            isSuccess: false,
            message: `You are not on the support team room`,
         })
      }
   }

   @UseGuards(WebsocketAuthGuard)
   @UsePipes(new ValidationPipe())
   @SubscribeMessage(Events.MESSAGE)
   handleMessage(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: Payload,
      @Profile() profile: IUserInfo
   ) {
      const { rooms, message } = payload
      client.to(rooms).emit(Events.MESSAGE, message)

      this.logger.log(payload, 'message:payload')
      this.logger.log(profile, `${Events.MESSAGE}:profile`)
   }
}
