import { CuidadoresApiService } from './http/cuidadores_api.service';
import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { cuidadoresDto } from '../dto/cuidadores.dto';
import { trabajoDto } from '../dto/trabajo.dto';

@Injectable()
export class CuidadoresService {

    constructor(private mc:CuidadoresApiService){}

    //Cuidadores
    async addCuidador(cuidador:cuidadoresDto, response:Response){
        return await this.mc.registrarCuidador(cuidador, response);
    }

    async updateCuidador(id:string, nuevoCuidador:cuidadoresDto, response:Response) {
        return await this.mc.ModificarDatosDelCuidador(id, nuevoCuidador, response);
    }

    async DeleteCuidador(cuidador:string, response:Response) {
        return await this.mc.EliminarCuidador(cuidador, response);
    }

    async getCuidador(id:string, response:Response) {
        return await this.mc.getOneCuidador(id, response);
    }

    async getAllCuidador(response:Response) {
        return await this.mc.getAllCuidadores(response)
    }

    //Trabajo
    async addTrabajo(trabajo:trabajoDto, response:Response){
        return await this.mc.RegistrarTrabajo(trabajo, response)
    }

    async updateTrabajo(id:string, nuevoTrabajo:trabajoDto, response:Response) {
        return await this.mc.ModificarDatosDelTrabajo(id, nuevoTrabajo, response)
    }

    async DeleteTrabajo(id:string, response:Response) {
        return await this.mc.EliminarTrabajo(id, response)
    }

    async getTrabajo(id:string, response:Response) {
        return await this.mc.getOneTrabajo(id,response)
    }

    async getAllTrabajo(response:Response) {
        return await this.mc.getAllTrabajo(response);
    }
}
