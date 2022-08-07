import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'SAT_APP_VEICULO' })
export default class Truck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plateCarriage: string;

  @Column({ nullable: true })
  plateHorse: string;

  @Column()
  numberOfCompartments: number;

  @Column()
  description: string;
}
