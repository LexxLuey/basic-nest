import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto, EditTaskDto } from './dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  getTasks(ownerId: number) {
    return this.prisma.task.findMany({
      where: {
        ownerId,
      },
    });
  }

  getTaskById(ownerId: number, taskId: number) {
    return this.prisma.task.findFirst({
      where: {
        id: taskId,
        ownerId,
      },
    });
  }

  async createTask(ownerId: number, dto: CreateTaskDto) {
    try {
      const task = await this.prisma.task.create({
        data: {
          ownerId: ownerId,
          name: dto.name,
          description: dto.description,
          isDone: dto.isDone,
        },
      });
      return task;
    } catch (error) {
      if (error) {
        if (error.code === 'P2002') {
          console.log(
            `A unique constraint error occurred: ${error.meta.target}`,
          );
          if (error.meta.target == 'ownerId') {
            throw new ForbiddenException('You can only create one task');
          }
          if (error.meta.target == 'name') {
            throw new ForbiddenException('The task name is already taken');
          }
        }
      }
      throw error;
    }
  }

  async editTaskById(ownerId: number, taskId: number, dto: EditTaskDto) {
    // get the task by id
    const task = await this.prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    // check if user owns the task
    if (!task || task.ownerId !== ownerId)
      throw new ForbiddenException('Access to resources denied');

    return this.prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteTaskById(ownerId: number, taskId: number) {
    const task = await this.prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    // check if user owns the task
    if (!task || task.ownerId !== ownerId)
      throw new ForbiddenException('Access to resources denied');

    await this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    return {
      message: 'Task successfully deleted',
    };
  }
}
