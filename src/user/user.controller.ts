import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { User } from '@prisma/client';
import { CurrentUser } from '../auth/decorator/current_user.decorator';
import { EditUserDto } from './dto/edit_user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user;
  }

  @UseGuards(JwtGuard)
  @Patch('edit/:id')
  editUser(@Param('id') id: number, @Body() dto: EditUserDto) {
    console.log('id', id);
    console.log('data from controller:', dto);

    return this.userService.updateUser(id, dto);
  }
  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
