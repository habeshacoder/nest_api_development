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
import { EditBookMarkDto } from './dto/edit_bookmark.dto';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookMarkService: BookmarkService) {}
  @Get('allbookmarks')
  getAllBookmarks() {
    return this.bookMarkService.getAllBookmarks();
  }

  @Get('/:id')
  getBookmarkById(@Param('id') id: string) {
    return this.bookMarkService.getBookmarkById(id);
  }

  @Post('create/:id')
  createBookmark(@Param('id') userId: number, @Body() dto: CreateBookMarkDto) {
    return this.bookMarkService.createBookmark(userId, dto);
  }

  @Patch('edit/:id')
  editBookmark(@Param('id') id: string, @Body() dto: EditBookMarkDto) {
    return this.bookMarkService.editBookmark(id, dto);
  }

  @Delete('delete/:id')
  deleteBookmark(@Param('id') id: string) {
    return this.bookMarkService.deleteBookmarkById(id);
  }
}
