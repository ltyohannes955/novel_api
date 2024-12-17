import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { Novel } from './entities/novel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class NovelsService {
  @InjectRepository(Novel)
  private readonly novelRepository: Repository<Novel>;
  constructor(private entityManager: EntityManager) {}
  async create(createNovelDto: CreateNovelDto) {
    const novel = new Novel(createNovelDto);
    await this.novelRepository.save(novel);
    return novel;
  }

  findAll() {
    return this.novelRepository.find({
      relations: { user: true, comments: true },
    });
  }

  async findOne(id: number) {
    return await this.novelRepository.findOne({ where: { id } });
  }

  async update(id: number, updateNovelDto: UpdateNovelDto) {
    const novel = await this.novelRepository.findOneBy({ id });
    novel.title = updateNovelDto.title;
    novel.content = updateNovelDto.content;
    novel.like_count = updateNovelDto.like_count;
    await this.entityManager.save(novel);
  }

  async remove(id: number) {
    await this.novelRepository.delete(id);
  }
}
