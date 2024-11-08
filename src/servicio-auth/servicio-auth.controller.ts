import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserLoginDto } from 'src/dto/userDto';
import { ServicioAuthService } from './servicio-auth.service';

@Controller('servicio-auth')
export class ServicioAuthController {

    constructor(private auth:ServicioAuthService){}

    @Post()
    login(@Body() user:UserLoginDto, @Res() response:Response) {
        return this.auth.authentificar(user, response);
    }
}
