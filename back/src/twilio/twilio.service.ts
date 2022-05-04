import { ConfigService } from '@nestjs/config';
import { jwt, Twilio } from 'twilio';
import { v4 as uuidv4 } from 'uuid';

export class TwilioService {
  public twilioClient: Twilio;
  public configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;
    this.twilioClient = new Twilio(
      configService.get('TWILIO_API_KEY_SID'),
      configService.get('TWILIO_API_KEY_SECRET'),
      {
        accountSid: configService.get('TWILIO_ACCOUNT_SID'),
      },
    );
  }

  async findRoom(roomName: string) {
    return await this.twilioClient.video.rooms(roomName).fetch();
  }

  async createRoom(roomName: string) {
    return await this.twilioClient.video.rooms.create({
      uniqueName: roomName,
      type: 'go',
    });
  }

  createAccessToken(identity: string) {
    return new jwt.AccessToken(
      this.configService.get('TWILIO_ACCOUNT_SID'),
      this.configService.get('TWILIO_API_KEY_SID'),
      this.configService.get('TWILIO_API_KEY_SECRET'),
      { identity },
    );
  }

  videoGrant(room) {
    return new jwt.AccessToken.VideoGrant({
      room,
    });
  }
}
