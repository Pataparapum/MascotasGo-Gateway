import { Body, Controller, Param, Post, Res, Put, Delete, Get} from '@nestjs/common';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { UserDto } from '../dto/userDto';
import { Response } from 'express';

@Controller('usuario')
export class ServicioUsuariosController {

    constructor(private userdb:ServicioUsuariosService) {}

    @Post()
    async register(@Body() newUser:UserDto, @Res() response:Response) {
        return await this.userdb.registrar(newUser, response);
    }

    @Put(':correo')
    async update(@Param('correo') correo:string, @Body() user:UserDto, @Res() response:Response) {
        return await this.userdb.update(correo, user, response);
    }

    @Delete(':correo')
    async delete(@Param('correo') correo:string, response:Response) {
        return await this.userdb.delete(correo, response);
    }

    @Get(':id') 
    async get(@Param('id') id:string, response:Response) {
        return await this.userdb.get(id, response);
    }
}
