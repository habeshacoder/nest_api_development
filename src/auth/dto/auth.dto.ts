import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  // Class properties and methods can be defined here
  @IsEmail()
  @IsNotEmpty()
  email: String;
  @IsString()
  @IsNotEmpty()
  password: String;
  @IsString()
  @IsNotEmpty()
  sex: String;
}
