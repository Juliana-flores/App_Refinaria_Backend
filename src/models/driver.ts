import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import Truck from './truck';

@Entity({ name: 'SAT_APP_MOTORISTA' })
export default class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  driverCode: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  document: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Truck)
  @JoinTable({ name: 'SAT_APP_MOTORISTA_VEICULO' })
  trucks: Truck[];
}
