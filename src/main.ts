import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Le dice a nest que ignoren los params que no esten definidas en el DTO.
      forbidNonWhitelisted: true, // Hace que se genere un error si se envian mas params que los que se esperaban en el DTO.
    }),
  );

  await app.listen(3000);
}
bootstrap();
