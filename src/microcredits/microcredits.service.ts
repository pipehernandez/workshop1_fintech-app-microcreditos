import { Injectable } from '@nestjs/common';
import { CreateMicrocreditDto } from './dto/create-microcredit.dto';
import { UpdateMicrocreditDto } from './dto/update-microcredit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MicrocreditsService {
  constructor(@InjectRepository(Microcredit) private microcreditRepository: Repository<Microcredit>){}
  async create(createMicrocreditDto: CreateMicrocreditDto) {
		// const interestRate = CreditCalculationService.calculateInterestRate(user)
    const newMicrocredit = this.microcreditRepository.create(createMicrocreditDto);
		return await this.microcreditRepository.save(newMicrocredit);
  }

  async findAll() {
    return `This action returns all microcredits`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} microcredit`;
  }

  async update(id: number, updateMicrocreditDto: UpdateMicrocreditDto) {
    return `This action updates a #${id} microcredit`;
  }

  async remove(id: number) {
    return `This action removes a #${id} microcredit`;
  }
}

@Injectable()
export class CreditCalculationService {
  static calculateInterestRate(user: User): number {
    return user.creditScore > 700 ? 5 : 15;
  }
}

// @Injectable()
// export class MicrocreditRegistryService {
//   saveMicrocredit(microcredit: Microcredit): void {
//     // Lógica para guardar el microcrédito en la base de datos

//   }
// }

// @Injectable()
// export class MicrocreditService {
//   constructor(
//     private readonly microcreditRepository: Repository<Microcredit>,
//     private readonly userRepository: Repository<User>,
//     private readonly creditCalculationService: CreditCalculationService,
//     private readonly microcreditRegistryService: MicrocreditRegistryService
//   ) {}

//   async applyForMicrocredit(userId: number, amount: number): Promise<Microcredit>{
//     const user = await this.microcreditRepository.findOne({where: {userId}});
//     const interestRate = this.creditCalculationService.calculateInterestRate(user);
//     const microcredit = new Microcredit(userId, amount, interestRate, 'PENDING');
//     this.microcreditRegistryService.saveMicrocredit(microcredit);
//     return microcredit;
//   }
// }


