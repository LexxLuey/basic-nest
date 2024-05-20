import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserEntity } from './entity/user.entity';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  @ApiOperation({ summary: 'Get all tasks for the logged-in user' })
  @ApiResponse({
    status: 200,
    description: 'Return current user.',
    type: UserEntity,
  })
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  @ApiOperation({ summary: 'Edit a user' })
  @ApiBody({ type: EditUserDto })
  @ApiResponse({
    status: 200,
    description: 'Return current user.',
    type: UserEntity,
  })
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
