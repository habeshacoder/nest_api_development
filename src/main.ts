import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

console.log('starting the app 1.........');

async function bootstrap() {
  console.log('starting the app  2.........');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
console.log('starting the app 3.........');
bootstrap();
