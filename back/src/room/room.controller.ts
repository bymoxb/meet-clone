import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { GenerateToken } from './dto/generate-token.dto';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post()
  async generateToken(@Res() res: Response, @Body() request: GenerateToken) {
    const accessToken = await this.roomService.generateToken(request);
    return res.status(HttpStatus.CREATED).json({ data: accessToken });
  }
}
