import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Truck, Location } from '../models';

@Entity('SAT_APP_FILA')
export default class Queue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Truck)
  truck: Truck;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: string;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;
}
