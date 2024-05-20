import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The name of the task' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The description of the task', required: false })
  description?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'The completion status of the task',
    default: false,
  })
  isDone?: boolean;

  @IsInt()
  @IsOptional()
  @ApiProperty({ description: 'The owner of the task' })
  ownerId: number;
}
