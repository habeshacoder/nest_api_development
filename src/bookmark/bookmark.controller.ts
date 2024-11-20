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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Bookmarks') 
@Controller('bookmark')
export class BookmarkController {
  constructor(private bookMarkService: BookmarkService) {}

  @Get('allbookmarks')
  @ApiOperation({ summary: 'Get all bookmarks' })
  @ApiResponse({ status: 200, description: 'Successful retrieval of all bookmarks.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllBookmarks() {
    return this.bookMarkService.getAllBookmarks();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get bookmark by ID' })
  @ApiResponse({ status: 200, description: 'Successful retrieval of the bookmark.' })
  @ApiResponse({ status: 404, description: 'Bookmark not found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getBookmarkById(@Param('id') id: string) {
    return this.bookMarkService.getBookmarkById(id);
  }

  @Post('create/:id')
  @ApiOperation({ summary: 'Create a new bookmark' })
  @ApiResponse({ status: 201, description: 'Successful creation of a bookmark.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createBookmark(@Param('id') userId: number, @Body() dto: CreateBookMarkDto) {
    return this.bookMarkService.createBookmark(userId, dto);
  }

  @Patch('edit/:id')
  @ApiOperation({ summary: 'Edit an existing bookmark' })
  @ApiResponse({ status: 200, description: 'Successful update of the bookmark.' })
  @ApiResponse({ status: 404, description: 'Bookmark not found.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  editBookmark(@Param('id') id: string, @Body() dto: EditBookMarkDto) {
    return this.bookMarkService.editBookmark(id, dto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a bookmark by ID' })
  @ApiResponse({ status: 200, description: 'Successful deletion of the bookmark.' })
  @ApiResponse({ status: 404, description: 'Bookmark not found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  deleteBookmark(@Param('id') id: string) {
    return this.bookMarkService.deleteBookmarkById(id);
  }
}