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
import { ApiResponse ,ApiOperation} from '@nestjs/swagger';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(JwtGuard)
  @Get('me')
  @ApiOperation({ summary: 'Get current user' })
  @ApiResponse({ status: 200, description: 'Successful retrieval of cats.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getMe(@CurrentUser() user: User) {
    return user;
  }

  @UseGuards(JwtGuard)
  @Patch('edit/:id')
  @ApiOperation({ summary: 'Edit current user' })
  @ApiResponse({ status: 200, description: 'Successful retrieval of cats.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  editUser(@Param('id') id: number, @Body() dto: EditUserDto) {
    return this.userService.updateUser(id, dto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete current user' })
  @ApiResponse({ status: 200, description: 'Successful retrieval of cats.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
