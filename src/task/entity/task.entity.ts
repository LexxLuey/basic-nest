import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';

export class TaskEntity implements Task {
  @ApiProperty({ description: 'The unique identifier of the task' })
  id: number;

  @ApiProperty({ description: 'The date and time when the task was created' })
  createdAt: Date;

  @ApiProperty({
    description: 'The date and time when the task was last updated',
  })
  updatedAt: Date;

  @ApiProperty({ description: 'The name of the task' })
  name: string;

  @ApiProperty({ description: 'The description of the task' })
  description: string;

  @ApiProperty({ description: 'The completion status of the task' })
  isDone: boolean;

  @ApiProperty({ description: 'The ID of the owner of the task' })
  ownerId: number;
}
