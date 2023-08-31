// entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, type: 'text' })
  username!: string;

  @Column({ nullable: false })
  password!: string;
}
