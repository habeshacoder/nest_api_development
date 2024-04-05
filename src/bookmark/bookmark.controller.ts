import {
  Controller,
  Get,
  Patch,
  Delete,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookMarkDto } from './dto/create_bookmark.dtos';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookMarkService: BookmarkService) {}
  @Get()
  getAllBookmarks() {}

  @Get(':id')
  getBookmarkById(@Param('id') id: string) {}

  @Post('create/:id')
  createBookmark(@Param('id') userId: number, @Body() dto: CreateBookMarkDto) {
    return this.bookMarkService.createBookmark(userId, dto);
  }

  @Patch(':id')
  editBookmark(@Param('id') id: string) {}

  @Delete(':id')
  deleteBookmark(@Param('id') id: string) {}
}
