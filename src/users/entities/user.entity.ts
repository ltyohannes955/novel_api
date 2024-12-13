import { AbstractEntity } from 'src/database/abstract.entity';
import { Novel } from 'src/novels/entities/novel.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Comment } from 'src/comments/entities/comment.entity';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  user_name: string;

  @Column()
  hash_password: string;

  @OneToMany(() => Novel, (novel) => novel.user)
  novels: Novel[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
