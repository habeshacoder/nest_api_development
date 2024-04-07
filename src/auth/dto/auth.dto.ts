import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  // Class properties and methods can be defined here
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  sex: string;
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  firstName: string;
}
