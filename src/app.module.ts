import { Module } from '@nestjs/common';
import { SentencesModule } from './sentences/sentences.module'; // 정확한 경로로 임포트

@Module({
  imports: [SentencesModule], // SentencesModule이 한 번만 임포트되도록 확인
})
export class AppModule {}
