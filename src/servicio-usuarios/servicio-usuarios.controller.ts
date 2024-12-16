import { Body, Controller, Param, Post, Res, Put, Delete, Get, UseGuards} from '@nestjs/common';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { UserDto } from '../dto/userDto';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/login/jwt/jwt.guard';

@Controller('usuario')
export class ServicioUsuariosController {

    constructor(private userdb:ServicioUsuariosService) {}

    @Post()
    async register(@Body() newUser:UserDto, @Res() response:Response) {
        return await this.userdb.registrar(newUser, response);
    }

    
    @Put(':correo')
    @UseGuards(JwtAuthGuard)
    async update(@Param('correo') correo:string, @Body() user:UserDto, @Res() response:Response) {
        return await this.userdb.update(correo, user, response);
    }

    @Delete(':correo')
    @UseGuards(JwtAuthGuard)
    async delete(@Param('correo') correo:string, @Res() response:Response) {
        return await this.userdb.delete(correo, response);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async get(@Param('id') id:string, @Res() response:Response) {
        return await this.userdb.get(id, response);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAll(@Res() response:Response) {
        return await this.userdb.getAll(response);
    }
}
