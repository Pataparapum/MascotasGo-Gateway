import { UserLoginDto } from 'src/dto/userDto';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';


@Controller('login')
export class LoginController {

    constructor(private auth:LoginService){}

    @Post()
    login(@Body() user:UserLoginDto, @Res() response:Response) {
        return this.auth.login(user, response);
    }

}
