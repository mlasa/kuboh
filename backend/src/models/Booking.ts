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
  customer_id: string;
  @ManyToOne(() => User, user => user, { eager: true })
  @JoinColumn({ name: 'customer_id' })
  customer: User;

  @Column()
  spot_id: string;
  @OneToOne(() => Spot, spot => spot, { eager: true })
  @JoinColumn({ name: 'spot-id' })
  spot: Spot;

  @Column()
  status: string

  @Column()
  checkin: Date;

  @Column()
  checkout: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
} export default Booking;
