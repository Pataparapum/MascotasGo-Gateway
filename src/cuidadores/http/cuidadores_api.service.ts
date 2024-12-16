import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { firstValueFrom } from 'rxjs';
import { cuidadoresDto } from '../../dto/cuidadores.dto';
import { trabajoDto } from '../../dto/trabajo.dto';

@Injectable()
export class CuidadoresApiService {

    constructor(private api:HttpService, private config:ConfigService){}

    private mc_url = this.config.get<string>('MASCOTA_CUIDADOR_URL');

     // Ruta cuidadores
     async registrarCuidador(cuidador:cuidadoresDto, response:Response): Promise<Response>{
        const req = this.api.post(`${this.mc_url}/cuidadores`, cuidador);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

    async EliminarCuidador(cuidador:string, response:Response): Promise<Response>{
        const req = this.api.delete(`${this.mc_url}/cuidadores/${cuidador}`);
        const { data } = await firstValueFrom(req); 

        return response.json(data)
    }

    async ModificarDatosDelCuidador(id:string, nuevaCuidador:cuidadoresDto, response:Response): Promise<Response>{
        const req = this.api.put(`${this.mc_url}/cuidadores/${id}`, nuevaCuidador);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

    async getAllCuidadores(response:Response): Promise<Response> {
        const req = this.api.get(`${this.mc_url}/cuidadores`);
        const { data } = await firstValueFrom(req)
        
        return response.json(data);
    }

    async getOneCuidador(cuidadorId: string, response: Response): Promise<Response>{
        const req = this.api.get(`${this.mc_url}/cuidadores/${cuidadorId}`);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

    // Ruta trabajos
    async RegistrarTrabajo(trabajo:trabajoDto, response:Response): Promise<Response>{
        const req = this.api.post(`${this.mc_url}/trabajo`, trabajo);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

    async EliminarTrabajo(id:string, response:Response): Promise<Response>{
        const req = this.api.delete(`${this.mc_url}/trabajo/${id}`);
        const { data } = await firstValueFrom(req); 

        return response.json(data)
    }

    async ModificarDatosDelTrabajo(id:string, nuevaTrabajo:trabajoDto, response:Response): Promise<Response>{
        const req = this.api.put(`${this.mc_url}/trabajo/${id}`, nuevaTrabajo);
        const { data } = await firstValueFrom(req);

        return response.json({status: 201, data});
    }

    async getAllTrabajo(response:Response): Promise<Response> {
        const req = this.api.get(`${this.mc_url}/trabajo`);
        const { data } = await firstValueFrom(req)
        
        return response.json(data);
    }

    async getOneTrabajo(trabajoId: string, response: Response): Promise<Response>{
        const req = this.api.get(`${this.mc_url}/trabajo/${trabajoId}`);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }
}