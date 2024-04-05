import { Injectable } from '@nestjs/common';
import { Controller, Get, Patch, Delete, Post, Param } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBookMarkDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { userInfo } from 'os';
import { EditBookMarkDto } from './dto/edit_bookmark.dto';

@Injectable()
export class BookmarkService {
  constructor(private prismaService: PrismaService) {}

  async createBookmark(userId, dto: CreateBookMarkDto) {
    return this.prismaService.bookMark.create({
      data: {
        title: dto.title,
        description: dto.description,
        link: dto.link,
        userId: parseInt(userId),
      },
    });
  }

  async getAllBookmarks() {
    const bookmarks = await this.prismaService.bookMark.findMany();
    console.log(bookmarks);
    return bookmarks;
  }

  async getBookmarkById(id: string) {
    return this.prismaService.bookMark.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  editBookmark(id: string, dto: EditBookMarkDto) {
    return this.prismaService.bookMark.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...dto,
      },
    });
  }

  deleteBookmarkById(@Param('id') id: string) {
    return this.prismaService.bookMark.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
