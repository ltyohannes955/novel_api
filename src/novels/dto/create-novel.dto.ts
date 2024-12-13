import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateNovelDto {
  @IsString()
  title: string;
  @IsString()
  content: string;

  @IsOptional()
  @IsNumber()
  like_count: number;

  @IsNumber()
  userId: number;
}
