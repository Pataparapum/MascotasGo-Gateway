import { Injectable } from '@nestjs/common';
import { UserService } from './http/user.service';
import { UserDto } from '../dto/userDto';
import { Response } from 'express';

@Injectable()
export class ServicioUsuariosService {

    constructor(private userApi:UserService) {}

    async registrar(user:UserDto, response:Response) {
        return await this.userApi.RegistrarUsuario(user, response);
    }

    async update(correo:string, user:UserDto, response:Response) {
        return await this.userApi.ModificarDatosDeCuenta(correo, user, response);
    }

    async delete(correo:string, response:Response) {
        return await this.userApi.EliminarCuenta(correo, response);
    }

    async get(id:string, response:Response) {
        return await this.userApi.getUserWithId(id, response);
    }

    async getAll(response:Response) {
        return await this.userApi.getAll(response);
    }
}
