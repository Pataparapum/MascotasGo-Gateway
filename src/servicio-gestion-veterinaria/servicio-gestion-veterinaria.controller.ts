import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { citaDto } from 'src/dto/cita.dto';
import { datosDto } from 'src/dto/datos.dto';
import { veterinariasDto } from 'src/dto/veterinaria.dto';
import { ServicioGestionVeterinariaService } from './servicio-gestion-veterinaria.service';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/login/jwt/jwt.guard';

@Controller('veterinaria')
export class ServicioGestionVeterinariaController {

    constructor(private api:ServicioGestionVeterinariaService){}

    //veterinaria ruta
    @Post()
    @UseGuards(JwtAuthGuard)
    async addVeterinaria(@Body() veterinaria:datosDto, @Res() response:Response){
        return await this.api.addVeterinaria(veterinaria, response);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteVeterinaria(@Param('id') id:string, @Res() response:Response){
        return await this.api.deleteVeterinaria(id, response);
    }

    @Put()
    @UseGuards(JwtAuthGuard)
    async updateDatosDeVeterinaria(nuevaVeterinaria:veterinariasDto, @Res() response:Response){
        return await this.api.updateDatosDeVeterinaria(nuevaVeterinaria, response);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getAllVeterinarias(@Param('id') user:string, @Res() response:Response) {
        return await this.api.getAll(user, response);
    }

    //cita ruta
    @Post('cita')
    @UseGuards(JwtAuthGuard)
    async addCita(@Body() nuevaCita:citaDto, @Res() response:Response) {
        return await this.api.addCita(nuevaCita, response)
    }
 
    @Delete('cita/:id')
    @UseGuards(JwtAuthGuard)
    async deleteCita(@Param('id') id:string, @Res() response:Response) {
        return await this.api.deleteCita(id, response)
    }

    @Get('cita/veterinaria/:id')
    @UseGuards(JwtAuthGuard)
    async getAllCita(@Param('id') id:string, @Res() response:Response){
        return await this.api.getAllCita(id, response)
    }

    @Get('cita/:userId')
    @UseGuards(JwtAuthGuard)
    async getUserCita(@Param('userId') userId:string, @Res() response:Response){
        return await this.api.getUserCita(userId, response)
    }
}
