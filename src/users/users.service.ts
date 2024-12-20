import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { encodePass } from 'src/util/dcrypt';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;
  constructor(private readonly entityManager: EntityManager) {}

  async create(createUserDto: CreateUserDto) {
    const hash_password = encodePass(createUserDto.hash_password);
    const user = new User({ ...createUserDto, hash_password });
    await this.entityManager.save(user);
    return user;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });
    user.first_name = updateUserDto.first_name;
    user.last_name = updateUserDto.last_name;
    await this.entityManager.save(user);
  }

  remove(id: number) {
    this.userRepository.delete(id);
  }
}
