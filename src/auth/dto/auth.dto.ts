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
  @IsNotEmpty()
  lastName: String;
  @IsString()
  @IsNotEmpty()
  firstName: String;
}
