import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { cuidadoresDto } from 'src/dto/cuidadores.dto';
import { trabajoDto } from 'src/dto/trabajo.dto';
import { Response } from 'express';
import { CuidadoresService } from './cuidadores.service';

@Controller('cuidadores')
export class CuidadoresController {

    constructor(private service:CuidadoresService){}

     //Cuidadores
     @Post('cuidadores')
     async addCuidador(@Body() cuidador:cuidadoresDto, @Res() response:Response){
         return await this.service.addCuidador(cuidador, response);
     }
 
     @Put('cuidadores')
     async updateCuidador(@Body() nuevoCuidador:cuidadoresDto, @Res() response:Response) {
         return await this.service.updateCuidador(nuevoCuidador, response);
     }
 
     @Delete('cuidadores/:id')
     async DeleteCuidador(@Param('id') id:string, @Res() response:Response) {
         return await this.service.DeleteCuidador(id, response);
     }
 
     @Get('cuidadores/:id')
     async getCuidador(@Param('id') id:string, @Res() response:Response) {
         return await this.service.getCuidador(id, response);
     }
 
     @Get('cuidadores')
     async getAllCuidador(@Res() response:Response) {
         return await this.service.getAllCuidador(response)
     }
 
     //Trabajo
     @Post('trabajos')
     async addTrabajo(trabajo:trabajoDto, @Res() response:Response){
         return await this.service.addTrabajo(trabajo, response)
     }
 
     @Put('trabajos')
     async updateTrabajo(nuevoTrabajo:trabajoDto, @Res() response:Response) {
         return await this.service.updateTrabajo(nuevoTrabajo, response)
     }
 
     @Delete('trabajos/:id')
     async DeleteTrabajo(@Param('id') id:string, @Res() response:Response) {
         return await this.service.DeleteTrabajo(id, response)
     }
 
     @Get('trabajos/:id')
     async getTrabajo(@Param('id') id:string, @Res() response:Response) {
         return await this.service.getTrabajo(id,response)
     }
 
     @Get('trabajos')
     async getAllTrabajo(@Res() response:Response) {
         return await this.service.getAllTrabajo(response);
     }
}
