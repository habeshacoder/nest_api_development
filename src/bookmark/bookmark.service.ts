import { Injectable } from '@nestjs/common';
import { Controller, Get, Patch, Delete, Post, Param } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBookMarkDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

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

  getAllBookmarks() {}

  getBookmarkById(@Param('id') id: string) {}

  editBookmark(@Param('id') id: string) {}

  deleteBookmark(@Param('id') id: string) {}
}
