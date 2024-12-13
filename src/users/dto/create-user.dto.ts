import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateNovelDto } from 'src/novels/dto/create-novel.dto';
export class CreateUserDto {
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;

  @IsNotEmpty()
  user_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  hash_password: string;
}
