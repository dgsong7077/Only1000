import { Injectable } from '@nestjs/common';
import { CreateSentenceDto } from './dto/create-sentence.dto';

@Injectable()
export class SentencesService {
  private sentences = [];

  create(createSentenceDto: CreateSentenceDto) {
    this.sentences.push(createSentenceDto);
    return createSentenceDto;
  }

  findAll() {
    return this.sentences;
  }
}
