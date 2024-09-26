import { Controller, Get, Post, Render, Body } from '@nestjs/common';
import { SentencesService } from './sentences.service';
import { CreateSentenceDto } from './dto/create-sentence.dto';

@Controller()
export class SentencesController {
  constructor(private readonly sentencesService: SentencesService) {}

  @Get()
  @Render('index')  // index.ejs 파일을 렌더링
  getForm() {
    return { sentence: '', keywords: [], situation: '' };
  }

  @Post('/sentences')
  @Render('index')  // 데이터를 다시 EJS로 렌더링
  create(@Body() createSentenceDto: CreateSentenceDto) {
    this.sentencesService.create(createSentenceDto);
    return createSentenceDto;  // 입력된 데이터를 다시 EJS로 전달
  }
}
