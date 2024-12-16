import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { firstValueFrom } from 'rxjs';
import { mascotasDto } from 'src/dto/mascotas.dto';


@Injectable()
export class CuidadoresMascotasService {

    constructor(private api:HttpService, private config:ConfigService){}

    private mc_url = this.config.get<string>('MASCOTA_CUIDADOR_URL');

    // ruta mascotas
    async RegistrarMascota(mascota:mascotasDto, response:Response): Promise<Response>{
        const req = this.api.post(`${this.mc_url}/mascotas`, mascota);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

    async EliminarMascota(id:string, response:Response): Promise<Response>{
        const req = this.api.delete(`${this.mc_url}/mascotas/${id}`);
        const { data } = await firstValueFrom(req); 

        return response.json(data)
    }

    async ModificarDatosDeMascota(id:string, nuevaMascota:mascotasDto, response:Response): Promise<Response>{
        const req = this.api.put(`${this.mc_url}/mascotas/${id}`, nuevaMascota);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

    async getAllMascota(user:string, response:Response): Promise<Response> {
        const req = this.api.get(`${this.mc_url}/mascotas/user/${user}` );
        const { data } = await firstValueFrom(req)
        
        return response.json(data);
    }

    async getOnePet(mascotaId: string, response: Response): Promise<Response>{
        const req = this.api.get(`${this.mc_url}/mascotas/${mascotaId}`);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

}
