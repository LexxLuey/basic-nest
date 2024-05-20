import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ description: 'The access token for the authenticated user' })
  access_token: string;
}
