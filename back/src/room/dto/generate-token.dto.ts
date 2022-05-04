import { IsString, MaxLength } from 'class-validator';

export class GenerateToken {
  @IsString()
  @MaxLength(100)
  username: string;

  @IsString()
  @MaxLength(100)
  room: string;
}
