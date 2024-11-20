import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateBookMarkDto {
  @IsOptional()
  @ApiProperty({ type: String })
  description: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  link: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  title: string;
}
