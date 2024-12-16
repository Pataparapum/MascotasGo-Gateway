import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { cuidadoresDto } from '../dto/cuidadores.dto';
import { trabajoDto } from '../dto/trabajo.dto';
import { Response } from 'express';
import { CuidadoresService } from './cuidadores.service';
import { JwtAuthGuard } from '../login/jwt/jwt.guard';

@Controller('cuidadores')
export class CuidadoresController {

    constructor(private service:CuidadoresService){}

     //Cuidadores
     @Post('')
     @UseGuards(JwtAuthGuard)
     async addCuidador(@Body() cuidador:cuidadoresDto, @Res() response:Response){
         return await this.service.addCuidador(cuidador, response);
     }
 
     @Put(':id')
     @UseGuards(JwtAuthGuard)
     async updateCuidador(@Param('id') id:string, @Body() nuevoCuidador:cuidadoresDto, @Res() response:Response) {
         return await this.service.updateCuidador(id, nuevoCuidador, response);
     }
 
     @Delete(':id')
     @UseGuards(JwtAuthGuard)
     async DeleteCuidador(@Param('id') id:string, @Res() response:Response) {
         return await this.service.DeleteCuidador(id, response);
     }
 
     @Get(':id')
     @UseGuards(JwtAuthGuard)
     async getCuidador(@Param('id') id:string, @Res() response:Response) {
         return await this.service.getCuidador(id, response);
     }
 
     @Get()
     @UseGuards(JwtAuthGuard)
     async getAllCuidador(@Res() response:Response) {
         return await this.service.getAllCuidador(response)
     }
 
     //Trabajo
     @Post('trabajos')
     @UseGuards(JwtAuthGuard)
     async addTrabajo(trabajo:trabajoDto, @Res() response:Response){
         return await this.service.addTrabajo(trabajo, response)
     }
 
     @Put('trabajos/:id')
     @UseGuards(JwtAuthGuard)
     async updateTrabajo(@Param('id') id:string, nuevoTrabajo:trabajoDto, @Res() response:Response) {
         return await this.service.updateTrabajo(id, nuevoTrabajo, response)
     }
 
     @Delete('trabajos/:id')
     @UseGuards(JwtAuthGuard)
     async DeleteTrabajo(@Param('id') id:string, @Res() response:Response) {
         return await this.service.DeleteTrabajo(id, response)
     }
 
     @Get('trabajos/:id')
     @UseGuards(JwtAuthGuard)
     async getTrabajo(@Param('id') id:string, @Res() response:Response) {
         return await this.service.getTrabajo(id,response)
     }
 
     @Get('trabajos')
     @UseGuards(JwtAuthGuard)
     async getAllTrabajo(@Res() response:Response) {
         return await this.service.getAllTrabajo(response);
     }
}
