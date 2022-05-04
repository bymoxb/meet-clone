import { IsString, MaxLength } from 'class-validator';

export class GenerateToken {
  @IsString()
  @MaxLength(20)
  username: string;

  @IsString()
  @MaxLength(20)
  room: string;
}
