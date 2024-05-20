import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthResponseDto } from './entity/auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: AuthDto })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: AuthResponseDto,
  })
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiOperation({ summary: 'Login a user' })
  @ApiBody({ type: AuthDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully created.',
    type: AuthResponseDto,
  })
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
