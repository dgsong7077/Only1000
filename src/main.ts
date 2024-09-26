import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // EJS 템플릿 엔진 설정
  app.setBaseViewsDir(join(__dirname, '..', 'views'));  // EJS 템플릿 경로 설정
  app.setViewEngine('ejs');  // EJS 사용

  // 정적 파일 경로 설정
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // 서버 시작
  await app.listen(3000);
}

bootstrap();
