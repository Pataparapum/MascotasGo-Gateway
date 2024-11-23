import { Body, Controller, Param, Post, Res, Put, Delete, UseGuards} from '@nestjs/common';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { UserDto } from 'src/dto/userDto';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';
import { tokenGuard } from 'src/guards/tokenGuard';

@Controller('usuario')
export class ServicioUsuariosController {

    constructor(private userdb:ServicioUsuariosService) {}

    @Post()
    register(@Body() newUser:UserDto, @Res() response:Response) {
        return this.userdb.registrar(newUser, response);
    }

    @Put(':correo')
    @UseGuards(tokenGuard)
    update(@Param('correo') correo:string, @Body() user:UserDto, @Res() response:Response) {
        return this.userdb.update(correo, user, response);
    }

    @Delete(':correo')
    @UseGuards(tokenGuard)
    delete(@Param('correo') correo:string, response:Response) {
        return this.userdb.delete(correo, response);
    }
}
