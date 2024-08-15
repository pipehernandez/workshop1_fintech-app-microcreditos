import { FinancialRecord } from 'src/interfaces/financial-record.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  creditScore: number;

  @Column()
  financialHistory?: FinancialRecord[];
}
