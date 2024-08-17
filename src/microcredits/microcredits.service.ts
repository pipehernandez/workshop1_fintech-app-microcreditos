import { Injectable } from '@nestjs/common';
import { CreateMicrocreditDto } from './dto/create-microcredit.dto';
import { UpdateMicrocreditDto } from './dto/update-microcredit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MicrocreditService {
  constructor(private readonly userRepository: Repository<User>) {}

  applyForMicrocredit(userId: number, amount: number): Microcredit {
    const user = this.userRepository.findOne({where: {userId}});

    // Lógica para calcular la tasa de interés
    const interestRate = this.calculateInterestRate(user);

    // Lógica para registrar el microcrédito
    const microcredit = new Microcredit(userId, amount, interestRate, 'PENDING');
    this.saveMicrocredit(microcredit);

    return microcredit;
  }

  private calculateInterestRate(user: User): number {
    // Lógica de cálculo de tasa de interés basada en el historial de crédito
    return user.creditScore > 700 ? 5 : 15;
  }

  private saveMicrocredit(microcredit: Microcredit): void {
    // Lógica para guardar el microcrédito en la base de datos
  }
}