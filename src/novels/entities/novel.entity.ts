import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';

@Entity()
export class Novel extends AbstractEntity<Novel> {
  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: 0 })
  like_count: number;

  @Column()
  userId: number;

  @Column()
  Catagory:
    | 'Fantasy'
    | 'Mystery'
    | 'Thriller'
    | 'Romance'
    | 'Horror'
    | 'Historical'
    | 'Drama';

  @ManyToOne(() => User, (user) => user.novels)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.novel)
  comments: Comment[];
}
