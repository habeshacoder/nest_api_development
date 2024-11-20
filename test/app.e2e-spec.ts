import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto } from '../src/auth/dto/auth.dto';
import * as pactum from 'pactum';

describe('Sample Project e2e Test', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    prisma = moduleRef.get(PrismaService);
    
    // Start the NestJS app before the tests run
    await app.init();
    await app.listen(3333);
    pactum.request.setBaseUrl('http://localhost:3333');
  });

  const cleanDatabase = async () => {
    await prisma.user.deleteMany(); // Adjust according to your schema
    await prisma.bookMark.deleteMany(); // Adjust according to your schema
  };

  afterAll(async () => {
    await cleanDatabase(); // Cleanup
    await prisma.$disconnect(); // Disconnect Prisma
    await app.close(); // Shutdown NestJS application
  });

  // Authentication related tests
  describe('Authentication', () => {
    const user = new AuthDto();
    user.email = 'test@example.com';
    user.password = 'password';
    user.firstName = 'Adoni';
    user.lastName = 'Hailem';
    user.sex = 'male';

    it('Sign up', async () => {
      return pactum.spec()
        .post('/auth/signup')
        .withBody(user)
        .expectStatus(201);
    });

    it('Sign in', async () => {
      return pactum.spec()
        .post('/auth/signIn')
        .withBody(user)
        .expectStatus(200).inspect;
    });
  });

  // User related tests
  describe('User', () => {
    it('Get me', async () => {
      // Add test logic here
    });

    it('Edit me', async () => {
      // Add test logic here
    });
  });

  // Bookmark related tests
  describe('Bookmark', () => {
    it('Create bookmark', async () => {
      // Add test logic here
    });

    it('Get bookmark by id', async () => {
      // Add test logic here
    });

    it('Edit bookmark', async () => {
      // Add test logic here
    });

    it('Delete bookmark', async () => {
      // Add test logic here
    });
  });
});