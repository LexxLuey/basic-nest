import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CreateTaskDto } from './dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class TaskGateway {
  @WebSocketServer()
  server: Server;

  handleTaskCreated(task: CreateTaskDto) {
    this.server.emit('taskCreated', task);
  }
}
