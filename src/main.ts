import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
console.log('starting the app 1.........');

async function bootstrap() {
  console.log('starting the app  2.........');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  // Create Swagger options
  const options = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, options);
  
  // Set up Swagger module
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
console.log('starting the app 3.........');
bootstrap();
