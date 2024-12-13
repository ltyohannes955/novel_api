import { AbstractEntity } from 'src/database/abstract.entity';
import { Novel } from 'src/novels/entities/novel.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Comment extends AbstractEntity<Comment> {
  @Column()
  comment: string;

  @Column()
  userId;

  @Column()
  novelId;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Novel, (novel) => novel.comments)
  novel: Novel;
}
