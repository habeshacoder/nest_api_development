import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { dot } from 'node:test/reporters';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    console.log('sign up dto:', dto);
    
    // return 'I am signed up';
    return this.authService.signUp(dto);
  }
  @Post('signIn')
  signIn(@Body() dto: any) {
    return this.authService.signIn(dto);
  }
}
