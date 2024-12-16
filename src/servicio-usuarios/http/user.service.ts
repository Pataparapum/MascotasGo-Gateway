import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { UserDto, } from 'src/dto/userDto';
import { Response } from 'express';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class UserService {

    constructor(private api:HttpService, private config:ConfigService){}

    private userUrl = this.config.get<string>('USER_URL');

    async RegistrarUsuario(newUser:UserDto, response:Response): Promise<Response>{
        const req = this.api.post(`${this.userUrl}`, newUser);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }

    async EliminarCuenta(correo:string, response:Response): Promise<Response>{
        const req = this.api.delete(`${this.userUrl}/${correo}`);
        const { data } = await firstValueFrom(req); 

        return response.json(data)
    }

    async ModificarDatosDeCuenta(correo:string, newInfo: UserDto, response:Response): Promise<Response>{
        const req = this.api.put(`${this.userUrl}/${correo}`, newInfo);
        const { data } = await firstValueFrom(req)

        return response.json(data);
    }

    async getUserForLogin(correo: string) {
        const req = this.api.get<UserDto>(`${this.userUrl}/login/${correo}`);
        const { data } = await firstValueFrom(req);

        return data
    }

    async getUserWithId(id:string, response:Response): Promise<Response> {
        const req = this.api.get<UserDto[]>(`${this.userUrl}/${id}`);
        const { data } = await firstValueFrom(req);

        return response.json(data);
    }


}
