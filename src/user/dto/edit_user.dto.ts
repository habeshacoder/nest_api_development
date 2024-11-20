import { ClassTransformer } from 'class-transformer';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class EditUserDto {
  @IsEmail()
  @IsOptional()
  @ApiProperty({type: String})
  email: string;
  @IsString()
  @IsOptional()
  @ApiProperty({type: String})
  firstName: string;
  @IsString()
  @IsOptional()
  @ApiProperty({type: String})
  lastName: string;
}
