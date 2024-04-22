import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestValidationPipe } from './validation/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
	new NestValidationPipe({
		transform: true,
		skipMissingProperties: false,
		whitelist: true,
		forbidNonWhitelisted: true,
		forbidUnknownValues: true
		})
	);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
