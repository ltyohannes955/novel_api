import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  comment: string;

  @IsNumber()
  novelId: number;

  @IsNumber()
  userId: number;
}
