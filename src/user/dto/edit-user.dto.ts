import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EditUserDto {
  @IsEmail()
  @IsOptional()
  @ApiProperty({ description: 'The email', required: false })
  email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The email', required: false })
  password?: string;
}
