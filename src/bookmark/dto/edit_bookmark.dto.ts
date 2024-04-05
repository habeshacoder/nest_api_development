import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class EditBookMarkDto {
  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  link: string;

  @IsString()
  @IsOptional()
  title: string;
}
