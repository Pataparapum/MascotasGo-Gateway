import { mascotasDto } from 'src/dto/mascotas.dto';
import { CuidadoresMascotasService } from './http/cuidadores_mascotas.service';
import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ServicioGestionCuidadoresMascotasService {

    constructor(private mc:CuidadoresMascotasService){}

    //Mascota
    async addMascota(mascota:mascotasDto, response:Response) {
        return await this.mc.RegistrarMascota(mascota, response);
    }

    async updateMascota(nuevaMascota:mascotasDto, response:Response) {
        return await this.mc.ModificarDatosDeMascota(nuevaMascota, response);
    }

    async DeleteMascota(id:string, response:Response) {
        return await this.mc.EliminarMascota(id, response);
    }

    async getMascota(id:string, response:Response) {
        return await this.mc.getOnePet(id, response);
    }

    async getAllMascota(user:string, response:Response) {
        return await this.mc.getAllMascota(user, response);
    }

    
}
