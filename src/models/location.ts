import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('SAT_APP_LOCALIZACAO')
export default class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: number;

  @Column()
  lon: number;
}
