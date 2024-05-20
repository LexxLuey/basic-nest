import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';

export class EditTaskDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The name of the task', required: false })
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The description of the task', required: false })
  description?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'The completion status of the task',
    required: false,
  })
  isDone?: boolean;
}
