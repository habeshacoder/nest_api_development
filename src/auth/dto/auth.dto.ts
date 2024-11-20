import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  // Class properties and methods can be defined here
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  password: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  sex: string;
  @IsNotEmpty()
  @ApiProperty({ type: String })
  lastName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  firstName: string;
}
