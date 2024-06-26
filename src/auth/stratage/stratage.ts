import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'), // Replace with your secret key for signing/verifying the JWT
    });
  }

  async validate(payload: { sub: number; email: string }) {
    console.log('payload from validate:', payload);
    const user = this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
      include: {
        bookMarks: true,
      },
    });
    delete (await user).hash;
    return user;
  }
}
