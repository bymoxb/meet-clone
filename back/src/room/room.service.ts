import { Injectable } from '@nestjs/common';
import config from 'config/twilio';
import { jwt, Twilio } from 'twilio';
import { v4 as uuidv4 } from 'uuid';
import { GenerateToken } from './dto/generate-token.dto';

const { TWILIO_ACCOUNT_SID, TWILIO_API_KEY_SECRET, TWILIO_API_KEY_SID } =
  config;

const twilioClient = new Twilio(TWILIO_API_KEY_SID, TWILIO_API_KEY_SECRET, {
  accountSid: TWILIO_ACCOUNT_SID,
});

@Injectable()
export class RoomService {
  private async findOrCreateRoom(roomName: string) {
    try {
      // see if the room exists already. If it doesn't, this will throw
      // error 20404.
      return await twilioClient.video.rooms(roomName).fetch();
    } catch (error: any) {
      // the room was not found, so create it
      if (error.code == 20404) {
        return await twilioClient.video.rooms.create({
          uniqueName: roomName,
          type: 'go',
        });
      } else {
        // let other errors bubble up
        throw error;
      }
    }
  }

  private getAccessToken(roomName) {
    // create an access token
    const token = new jwt.AccessToken(
      TWILIO_ACCOUNT_SID,
      TWILIO_API_KEY_SID,
      TWILIO_API_KEY_SECRET,
      // generate a random unique identity for this participant
      { identity: uuidv4() },
    );
    // create a video grant for this specific room
    const videoGrant = new jwt.AccessToken.VideoGrant({
      room: roomName,
    });

    // add the video grant
    token.addGrant(videoGrant);
    // token.identity = identity;

    // serialize the token and return it
    return token.toJwt();
  }

  async generateToken(request: GenerateToken) {
    const { room } = request;
    const roomName = await this.findOrCreateRoom(room);
    return this.getAccessToken(roomName);
  }
}
