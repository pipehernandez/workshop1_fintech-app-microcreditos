import { FinancialRecord } from 'src/interfaces/financial-record.interface';

export class CreateUserDto {
  name: string;
  creditScore: number;
  financialHistory?: FinancialRecord[];
}
