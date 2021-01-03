import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import User from './User';

@Entity('spots')
class Spot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  owner_id: string;

  @ManyToOne(() => User, user => user, { eager: true })
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @Column()
  status: string;

  @Column()
  price: number;

  @Column()
  localization: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Spot;
