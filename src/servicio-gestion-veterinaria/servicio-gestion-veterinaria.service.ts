import { Injectable } from '@nestjs/common';
import { VeterinariasService } from './http/veterinarias.service';
import { datosDto } from '../dto/datos.dto';
import { Response } from 'express';
import { veterinariasDto } from '../dto/veterinaria.dto';
import { citaDto } from '../dto/cita.dto';

@Injectable()
export class ServicioGestionVeterinariaService {

    constructor(private api:VeterinariasService){}

    async addVeterinaria(veterinaria:datosDto, response:Response){
        return await this.api.RegistrarVeterinaria(veterinaria, response);
    }

    async deleteVeterinaria(id:string, response:Response){
        return await this.api.EliminarVeterinaria(id, response);
    }

    async updateDatosDeVeterinaria(id:string, nuevaVeterinaria:veterinariasDto, response:Response){
        return await this.api.ModificarDatosDeVeterinaria(id, nuevaVeterinaria, response);
    }

    async getAll(user:string, response:Response): Promise<Response> {
        return await this.api.getAll(user, response);
    }

    async addCita(nuevaCita:citaDto, response:Response) {
        return await this.api.addCita(nuevaCita, response)
    }

    async deleteCita(id:string, response:Response) {
        return await this.api.deleteCita(id, response)
    }

    async getAllCita(id:string, response:Response){
        return await this.api.getAllCita(id, response)
    }

    async getUserCita(userId:string, response:Response){
        return await this.api.getUserCita(userId, response)
    }

    
}
