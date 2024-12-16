import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { mascotasDto } from 'src/dto/mascotas.dto';
import { ServicioGestionCuidadoresMascotasService } from './servicio-gestion_cuidadores_mascotas.service';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/login/jwt/jwt.guard';

@Controller('mascotas')
export class ServicioGestionCuidadoresMascotasController {

    constructor(private service:ServicioGestionCuidadoresMascotasService){}

    //Mascota
    @Post()
    @UseGuards(JwtAuthGuard)
    async addMascota(@Body() mascota:mascotasDto, @Res() response:Response) {
        return await this.service.addMascota(mascota, response);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateMascota(@Param('id') id:string, @Body() nuevaMascota:mascotasDto, @Res() response:Response) {
        return await this.service.updateMascota(id, nuevaMascota, response);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async DeleteMascota(@Param('id') id:string, @Res() response:Response) {
        return await this.service.DeleteMascota(id, response);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getMascota(@Param('id') id:string, @Res() response:Response) {
        return await this.service.getMascota(id, response);
    }

    @Get('usuario/:user')
    @UseGuards(JwtAuthGuard)
    async getAllMascota(@Param('user') user:string, @Res() response:Response) {
        return await this.service.getAllMascota(user, response);
    }

}
