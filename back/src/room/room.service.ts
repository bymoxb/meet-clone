import { Injectable } from '@nestjs/common';
import { TwilioService } from 'twilio/twilio.service';
import { GenerateToken } from './dto/generate-token.dto';

@Injectable()
export class RoomService {
  constructor(private twilioService: TwilioService) {}

  private async findOrCreateRoom(roomName: string) {
    try {
      // see if the room exists already. If it doesn't, this will throw
      // error 20404.
      return await this.twilioService.findRoom(roomName);
    } catch (error: any) {
      // the room was not found, so create it
      if (error.code == 20404) {
        return await this.twilioService.createRoom(roomName);
      } else {
        // let other errors bubble up
        throw error;
      }
    }
  }

  private getAccessToken(room, identity: string) {
    // create an access token
    const token = this.twilioService.createAccessToken(identity);
    // create a video grant for this specific room
    const videoGrant = this.twilioService.videoGrant(room);

    // add the video grant
    token.addGrant(videoGrant);
    // token.identity = identity;

    // serialize the token and return it
    return token.toJwt();
  }

  async generateToken(request: GenerateToken) {
    const { room: roomName, username } = request;
    const room = await this.findOrCreateRoom(roomName);
    const token = this.getAccessToken(room, username);
    return token;
  }
}
