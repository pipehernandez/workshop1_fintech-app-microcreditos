import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    readonly name?: string;
    readonly creditScore?: number;
    readonly financialHistory?: string;
}
