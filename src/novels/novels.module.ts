import { Module } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { NovelsController } from './novels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Novel } from './entities/novel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Novel])],
  controllers: [NovelsController],
  providers: [NovelsService],
})
export class NovelsModule {}
