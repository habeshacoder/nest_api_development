import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto } from '../src/auth/dto/auth.dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    prisma = moduleRef.get(PrismaService);
  });

  describe('Auth ', () => {
    it('should validate a valid user', async () => {
      const user = new AuthDto();
      user.email = 'test@example.com';
      user.password = 'password';
      user.sex = 'male';
      user.lastName = 'Doe';
      user.firstName = 'John';
      const userCreated = await prisma.user.create({
        data: {
          email: user.email,
          sex: user.sex,
          hash: user.password,
          lastName: user.lastName,
          firstName: user.firstName,
        },
      });
      console.log('user:', userCreated);
    });
  });
});
