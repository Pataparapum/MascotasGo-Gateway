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
    async addVeterinaria(@Body() veterinaria:datosDto, @Res() response:Response){
        return await this.api.addVeterinaria(veterinaria, response);
    }

    @Delete(':id')
    async deleteVeterinaria(@Param('id') id:string, @Res() response:Response){
        return await this.api.deleteVeterinaria(id, response);
    }

    @Put()
    async updateDatosDeVeterinaria(nuevaVeterinaria:veterinariasDto, @Res() response:Response){
        return await this.api.updateDatosDeVeterinaria(nuevaVeterinaria, response);
    }

    @Get(':id')
    async getAllVeterinarias(@Param('id') user:string, @Res() response:Response) {
        return await this.api.getAll(user, response);
    }

    //cita ruta
    @Post('cita')
    async addCita(@Body() nuevaCita:citaDto, @Res() response:Response) {
        return await this.api.addCita(nuevaCita, response)
    }
 
    @Delete('cita/:id')
    async deleteCita(@Param('id') id:string, @Res() response:Response) {
        return await this.api.deleteCita(id, response)
    }

    @Get('cita/veterinaria/:id')
    async getAllCita(@Param('id') id:string, @Res() response:Response){
        return await this.api.getAllCita(id, response)
    }

    @Get('cita/:userId')
    async getUserCita(@Param('userId') userId:string, @Res() response:Response){
        return await this.api.getUserCita(userId, response)
    }
}
