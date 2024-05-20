import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'The email', required: true })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The password', required: true })
  password: string;
}
