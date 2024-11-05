import { Body, Controller, Param, Post, Res, Put, Delete} from '@nestjs/common';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { UserDto } from 'src/dto/userDto';
import { Response } from 'express';

@Controller('usuario')
export class ServicioUsuariosController {

    constructor(private userdb:ServicioUsuariosService) {}

    @Post()
    register(@Body() newUser:UserDto, @Res() response:Response) {
        return this.userdb.registrar(newUser, response);
    }

    @Put(':correo')
    update(@Param('correo') correo:string, @Body() user:UserDto, @Res() response:Response) {
        return this.userdb.update(correo, user, response);
    }

    @Delete(':correo')
    delete(@Param('correo') correo:string, response:Response) {
        return this.userdb.delete(correo, response);
    }
}
