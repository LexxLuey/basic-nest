import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty({ description: 'The unique identifier of the task' })
  id: number;

  @ApiProperty({ description: 'The date and time when the task was created' })
  createdAt: Date;

  @ApiProperty({
    description: 'The date and time when the task was last updated',
  })
  updatedAt: Date;

  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @ApiProperty({ description: 'The password of the user' })
  password: string;
}
