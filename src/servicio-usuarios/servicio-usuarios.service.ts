import { Injectable } from '@nestjs/common';
import { UserService } from 'src/apis/user/user.service';
import { UserDto } from 'src/dto/userDto';
import { Response } from 'express';

@Injectable()
export class ServicioUsuariosService {

    constructor(private userApi:UserService) {}

    registrar(user:UserDto, response:Response) {
        return this.userApi.RegistrarUsuario(user, response);
    }

    update(correo:string, user:UserDto, response:Response) {
        return this.userApi.ModificarDatosDeCuenta(correo, user, response);
    }

    delete(correo:string, response:Response) {
        return this.userApi.EliminarCuenta(correo, response);
    }
}
