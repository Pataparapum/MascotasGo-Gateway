import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { cuidadoresDto } from 'src/dto/cuidadores.dto';
import { mascotasDto } from 'src/dto/mascotas.dto';
import { trabajoDto } from 'src/dto/trabajo.dto';
import { ServicioGestionCuidadoresMascotasService } from './servicio-gestion_cuidadores_mascotas.service';
import { Response } from 'express';

@Controller('cuidadores_mascotas')
export class ServicioGestionCuidadoresMascotasController {

    constructor(private service:ServicioGestionCuidadoresMascotasService){}

    //Mascota
    @Post('mascotas')
    addMascota(@Body() mascota:mascotasDto, @Res() response:Response) {
        return this.service.addMascota(mascota, response);
    }

    @Put('mascotas')
    updateMascota(@Body() nuevaMascota:mascotasDto, @Res() response:Response) {
        return this.service.updateMascota(nuevaMascota, response);
    }

    @Delete('mascotas/:id')
    DeleteMascota(@Param('id') id:string, @Res() response:Response) {
        return this.service.DeleteMascota(id, response);
    }

    @Get('mascotas/:id')
    getMascota(@Param('id') id:string, @Res() response:Response) {
        return this.service.getMascota(id, response);
    }

    @Get('mascotas/:user')
    getAllMascota(@Param('user') user:string, @Res() response:Response) {
        return this.service.getAllMascota(user, response);
    }

    //Cuidadores
    @Post('cuidadores')
    addCuidador(@Body() cuidador:cuidadoresDto, @Res() response:Response){
        return this.service.addCuidador(cuidador, response);
    }

    @Put('cuidadores')
    updateCuidador(@Body() nuevoCuidador:cuidadoresDto, @Res() response:Response) {
        return this.service.updateCuidador(nuevoCuidador, response);
    }

    @Delete('cuidadores/:id')
    DeleteCuidador(@Param('id') id:string, @Res() response:Response) {
        return this.service.DeleteCuidador(id, response);
    }

    @Get('cuidadores/:id')
    getCuidador(@Param('id') id:string, @Res() response:Response) {
        return this.service.getCuidador(id, response);
    }

    @Get('cuidadores')
    getAllCuidador(@Res() response:Response) {
        return this.service.getAllCuidador(response)
    }

    //Trabajo
    @Post('trabajos')
    addTrabajo(trabajo:trabajoDto, @Res() response:Response){
        return this.service.addTrabajo(trabajo, response)
    }

    @Put('trabajos')
    updateTrabajo(nuevoTrabajo:trabajoDto, @Res() response:Response) {
        return this.service.updateTrabajo(nuevoTrabajo, response)
    }

    @Delete('trabajos/:id')
    DeleteTrabajo(@Param('id') id:string, @Res() response:Response) {
        return this.service.DeleteTrabajo(id, response)
    }

    @Get('trabajos/:id')
    getTrabajo(@Param('id') id:string, @Res() response:Response) {
        return this.service.getTrabajo(id,response)
    }

    @Get('trabajos')
    getAllTrabajo( @Res()response:Response) {
        return this.service.getAllTrabajo(response);
    }
}
