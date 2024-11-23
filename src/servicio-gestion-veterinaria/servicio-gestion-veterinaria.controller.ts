import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { citaDto } from 'src/dto/cita.dto';
import { datosDto } from 'src/dto/datos.dto';
import { veterinariasDto } from 'src/dto/veterinaria.dto';
import { ServicioGestionVeterinariaService } from './servicio-gestion-veterinaria.service';
import { Response } from 'express';

@Controller('veterinaria')
export class ServicioGestionVeterinariaController {

    constructor(private api:ServicioGestionVeterinariaService){}

    //veterinaria ruta
    @Post()
    addVeterinaria(@Body() veterinaria:datosDto, @Res() response:Response){
        return this.api.addVeterinaria(veterinaria, response);
    }

    @Delete(':id')
    deleteVeterinaria(@Param('id') id:string, @Res() response:Response){
        return this.api.deleteVeterinaria(id, response);
    }

    @Put()
    updateDatosDeVeterinaria(nuevaVeterinaria:veterinariasDto, @Res() response:Response){
        return this.api.updateDatosDeVeterinaria(nuevaVeterinaria, response);
    }

    @Get(':id')
    getAllVeterinarias(@Param('id') user:string, @Res() response:Response) {
        return this.api.getAll(user, response);
    }


    //cita ruta
    @Post('cita')
    addCita(@Body() nuevaCita:citaDto, @Res() response:Response) {
        return this.api.addCita(nuevaCita, response)
    }
 
    @Delete('cita/:id')
    deleteCita(@Param('id') id:string, @Res() response:Response) {
        return this.api.deleteCita(id, response)
    }

    @Get('cita/veterinaria/:id')
    getAllCita(@Param('id') id:string, @Res() response:Response){
        return this.api.getAllCita(id, response)
    }

    @Get('cita/:userId')
    getUserCita(@Param('userId') userId:string, @Res() response:Response){
        return this.api.getUserCita(userId, response)
    }
}
