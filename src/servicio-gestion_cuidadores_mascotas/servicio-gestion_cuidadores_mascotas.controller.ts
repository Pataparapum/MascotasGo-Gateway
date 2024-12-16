import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { mascotasDto } from 'src/dto/mascotas.dto';
import { ServicioGestionCuidadoresMascotasService } from './servicio-gestion_cuidadores_mascotas.service';
import { Response } from 'express';

@Controller('cuidadores_mascotas')
export class ServicioGestionCuidadoresMascotasController {

    constructor(private service:ServicioGestionCuidadoresMascotasService){}

    //Mascota
    @Post('mascotas')
    async addMascota(@Body() mascota:mascotasDto, @Res() response:Response) {
        return await this.service.addMascota(mascota, response);
    }

    @Put('mascotas')
    async updateMascota(@Body() nuevaMascota:mascotasDto, @Res() response:Response) {
        return await this.service.updateMascota(nuevaMascota, response);
    }

    @Delete('mascotas/:id')
    async DeleteMascota(@Param('id') id:string, @Res() response:Response) {
        return await this.service.DeleteMascota(id, response);
    }

    @Get('mascotas/:id')
    async getMascota(@Param('id') id:string, @Res() response:Response) {
        return await this.service.getMascota(id, response);
    }

    @Get('mascotas/:user')
    async getAllMascota(@Param('user') user:string, @Res() response:Response) {
        return await this.service.getAllMascota(user, response);
    }

}
