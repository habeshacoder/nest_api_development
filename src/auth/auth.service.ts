import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signUp(dto: AuthDto) {
    // generate user hash
    const hash = await argon.hash(dto.password.toString());
    const user = this.prismaService.user.create({
      data: {
        sex: dto.sex.toString(),
        email: dto.email.toString(),
        hash: hash,
        // Specify the property name and value separately
      },
    });
    return user;
  }
  async signIn(dto: AuthDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email.toString(),
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials Incorrect');
    }
    const pwVerify = await argon.verify(user.hash, dto.password.toString());
    if (!pwVerify) {
      return new ForbiddenException('Credential Incorrect');
    }
    
    delete user.hash;
    return this.signInToken(user.id, user.email);
  }

  //generate JWT accessToken
  async signInToken(
    userId: number,
    email: string,
  ): Promise<{ accessToken: String }> {
    const payload = { sub: userId, email };
    const secret = this.config.get('JWT_SECRET');
    const accessToken = await this.jwt.signAsync(payload, {
      expiresIn: '5m',
      secret: secret,
    });
    return {
      accessToken: accessToken,
    };
  }
}
