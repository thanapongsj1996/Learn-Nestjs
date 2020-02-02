import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne
} from "typeorm";
import { User } from "src/modules/users/user.entity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(
    type => User,
    user => user.address
  )
  user: User;
}
