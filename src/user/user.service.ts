import { Injectable } from '@nestjs/common';
import { EditUserDto } from './dto/edit_user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async updateUser(userId: any, data: Partial<EditUserDto>) {
    console.log('data from service:', data);
    return this.prismaService.user.update({
      where: { id: parseInt(userId) },
      data,
    });
  }
}
