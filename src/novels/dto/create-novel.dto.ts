import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateNovelDto {
  @IsString()
  title: string;
  @IsString()
  content: string;

  @IsOptional()
  @IsNumber()
  like_count: number;

  @IsEnum(
    [
      'Fantasy',
      'Mystery',
      'Thriller',
      'Romance',
      'Horror',
      'Historical',
      'Drama',
    ],
    { message: 'values must be a catagory' },
  )
  Catagory:
    | 'Fantasy'
    | 'Mystery'
    | 'Thriller'
    | 'Romance'
    | 'Horror'
    | 'Historical'
    | 'Drama';

  @IsNumber()
  userId: number;
}
