import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateNovelDto {
  @IsOptional()
  @IsString()
  title: string;
  @IsOptional()
  @IsString()
  content: string;
  @IsNumber()
  like_count: number;
}
