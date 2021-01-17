import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne
} from 'typeorm'

import Spot from './Spot';
import User from './User'

@Entity('bookings')
class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  guest_id: string;
  @ManyToOne(() => User, user => user, { eager: true })
  @JoinColumn({ name: 'guest_id' })
  guest: User;

  @Column()
  spot_id: string;
  @OneToOne(() => Spot, spot => spot, { eager: true })
  @JoinColumn({ name: 'spot_id' })
  spot: Spot;

  @Column()
  status: string

  @Column()
  check_in: Date;

  @Column()
  check_out: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
} export default Booking;
