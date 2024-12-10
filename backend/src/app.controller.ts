import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
      try {
          const user = await this.appService.register(createUserDto);
          return {
              message: 'User registered successfully',
              user,
          };
      } catch (error) {
          throw new HttpException(error.message || 'Internal Server Error', HttpStatus.BAD_REQUEST);
      }
  }
}
