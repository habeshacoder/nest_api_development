import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EditBookMarkDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  description: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  link: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  title: string;
}
