import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TwilioService } from 'twilio/twilio.service';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

@Module({
  controllers: [RoomController],
  providers: [
    {
      useFactory: (optProvider) => {
        return new TwilioService(optProvider);
      },
      provide: TwilioService,
      inject: [ConfigService],
    },
    RoomService,
  ],
})
export class RoomModule {}
