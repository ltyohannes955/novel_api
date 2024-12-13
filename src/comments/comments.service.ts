import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  @InjectRepository(Comment)
  private readonly commentRepository: Repository<Comment>;
  constructor(private readonly entityManager: EntityManager) {}
  async create(createCommentDto: CreateCommentDto) {
    const comment = new Comment(createCommentDto);
    await this.commentRepository.save(comment);
  }

  findAll() {
    return this.commentRepository.find({
      relations: { novel: true, user: true },
    });
  }

  async findOne(id: number) {
    return await this.commentRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentRepository.findOneBy({ id });
    comment.comment = updateCommentDto.comment;
    this.entityManager.save(comment);
  }

  async remove(id: number) {
    await this.commentRepository.delete(id);
  }
}
