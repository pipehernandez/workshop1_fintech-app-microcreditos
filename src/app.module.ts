import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MicrocreditsModule } from './microcredits/microcredits.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Microcredit } from './microcredits/entities/microcredit.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "biequfya7ihuylak8vcc-mysql.services.clever-cloud.com",
      port: 3306,
      username: "uwxqtlsgrhvneonw",
      password: "HvKN5agoBh5lYZmZ5ei6",
      database: "biequfya7ihuylak8vcc",
      entities: [User, Microcredit],
      synchronize: true,
    }),
    UsersModule, MicrocreditsModule],
})
export class AppModule {}
