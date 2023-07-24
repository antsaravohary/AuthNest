import { IsEmail, IsEnum, MinLength } from 'class-validator';
import { Role } from 'src/users/enums/role.enum';

export class SignUpDto {
  @IsEmail()
  email: string;
  @MinLength(10)
  password: string;
  @IsEnum(Role)
  role: Role;
}
