import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('microcredits')
export class Microcredit {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.financialHistory)
    @JoinColumn({name: 'userId'})
    userId: number;

    @Column()
    amount: number;

    @Column()
    interestRate: number;

    @Column()
    status: string;
}
