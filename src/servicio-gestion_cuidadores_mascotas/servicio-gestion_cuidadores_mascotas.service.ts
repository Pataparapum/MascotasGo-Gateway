import { mascotasDto } from 'src/dto/mascotas.dto';
import { CuidadoresMascotasService } from './../apis/cuidadores_mascotas.service';
import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { cuidadoresDto } from 'src/dto/cuidadores.dto';
import { trabajoDto } from 'src/dto/trabajo.dto';

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

    //Cuidadores
    async addCuidador(cuidador:cuidadoresDto, response:Response){
        return await this.mc.registrarCuidador(cuidador, response);
    }

    async updateCuidador(nuevoCuidador:cuidadoresDto, response:Response) {
        return await this.mc.ModificarDatosDelCuidador(nuevoCuidador, response);
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

    async updateTrabajo(nuevoTrabajo:trabajoDto, response:Response) {
        return await this.mc.ModificarDatosDelTrabajo(nuevoTrabajo, response)
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
