import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateBookMarkDto {
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
