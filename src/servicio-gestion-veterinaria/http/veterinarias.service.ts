import { HttpService } from '@nestjs/axios';
import { Injectable} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { datosDto } from '../../dto/datos.dto';
import { Response } from 'express';
import { veterinariasDto } from '../../dto/veterinaria.dto';
import { citaDto } from '../../dto/cita.dto';

@Injectable()
export class VeterinariasService {

    constructor(private api:HttpService, private config:ConfigService){}

    private veterinaria_url = this.config.get<string>('VETERINARIAS_URL');

    async RegistrarVeterinaria(veterinaria:datosDto, response:Response): Promise<Response>{
        const req = this.api.post(`${this.veterinaria_url}/veterinaria`, veterinaria);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

    async EliminarVeterinaria(id:string, response:Response): Promise<Response>{
        const req = this.api.delete(`${this.veterinaria_url}/veterinaria/${id}`);
        const { data } = await firstValueFrom(req); 

        return response.json(data);
    }

    async ModificarDatosDeVeterinaria(id:string, nuevaVeterinaria:veterinariasDto, response:Response): Promise<Response>{
        const req = this.api.put(`${this.veterinaria_url}/veterinaria/${id}`, nuevaVeterinaria)
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

    async getAll(user:string, response:Response): Promise<Response> {
        const req = this.api.get(`${this.veterinaria_url}/veterinaria/${user}` )
        const { data } = await firstValueFrom(req)
        
        return response.json(data);
    }

    // citas
    async addCita(nuevaCita:citaDto, response:Response) {
        const req = this.api.post(`${this.veterinaria_url}/cita`, nuevaCita)
        const { data } = await firstValueFrom(req)
        
        return response.json(data);
    }

    async deleteCita(id:string, response:Response) {
        const req = this.api.delete(`${this.veterinaria_url}/cita/${id}`)
        const { data } = await firstValueFrom(req)
        
        return response.json(data);
    }

    async getAllCita(id:string, response:Response){
        const req = this.api.get(`${this.veterinaria_url}/cita/veterinaria/${id}`)
        const { data } = await firstValueFrom(req)
        
        return response.json(data);
    }

    async getUserCita(userId:string, response:Response){
        const req = this.api.get(`${this.veterinaria_url}/cita/${userId}` )
        const { data } = await firstValueFrom(req)
        
        return response.json(data);
    }

}
