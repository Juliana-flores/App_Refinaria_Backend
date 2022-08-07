import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('SAT_APP_INTERVALO')
export default class TimeRange {
  @PrimaryColumn()
  id: number;

  @Column()
  start: string;

  @Column()
  end: string;
}
