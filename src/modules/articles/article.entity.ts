import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Comment } from "src/modules/comments/comment.entity";
import { Category } from "src/modules/categories/category.entity";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 110 })
  title: string;

  @Column("text")
  body: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => Comment,
    comment => comment.article,
    { cascade: true }
  )
  comments: Comment[];

  @ManyToMany(
    type => Category,
    category => category.articles
  )
  @JoinTable()
  categories: Category[];
}
