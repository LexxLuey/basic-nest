import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { TaskService } from './task.service';
import { CreateTaskDto, EditTaskDto } from './dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TaskEntity } from './entity/task.entity';

@ApiBearerAuth()
@ApiTags('tasks')
@UseGuards(JwtGuard)
@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks for the logged-in user' })
  @ApiResponse({
    status: 200,
    description: 'Return all tasks.',
    type: [TaskEntity],
  })
  getTasks(@GetUser('id') ownerId: number) {
    return this.taskService.getTasks(ownerId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the task.',
    type: TaskEntity,
  })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  getTaskById(
    @GetUser('id') ownerId: number,
    @Param('id', ParseIntPipe) taskId: number,
  ) {
    return this.taskService.getTaskById(ownerId, taskId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
    type: TaskEntity,
  })
  createTask(@GetUser('id') ownerId: number, @Body() dto: CreateTaskDto) {
    return this.taskService.createTask(ownerId, dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Edit a task by ID' })
  @ApiBody({ type: EditTaskDto })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully updated.',
    type: TaskEntity,
  })
  editTaskById(
    @GetUser('id') ownerId: number,
    @Param('id', ParseIntPipe) taskId: number,
    @Body() dto: EditTaskDto,
  ) {
    return this.taskService.editTaskById(ownerId, taskId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiResponse({
    status: 204,
    description: 'The task has been successfully deleted.',
  })
  deleteTaskById(
    @GetUser('id') ownerId: number,
    @Param('id', ParseIntPipe) taskId: number,
  ) {
    return this.taskService.deleteTaskById(ownerId, taskId);
  }
}
