import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { UserDto } from 'src/dto/userDto';
import { response, Response } from 'express';

@Injectable()
export class UserService {

    constructor(private api:HttpService, private env:ConfigService){}

    userUrl = this.env.get<string>("USER_URL");

    RegistrarUsuario(newUser:UserDto, response:Response){
        return this.api.post(`${this.userUrl}`, newUser).subscribe((data)=>{
            response.send({status:data.status, data: data.data})
        })
    }

    EliminarCuenta(correo:string, response:Response){
        return this.api.delete(`${this.userUrl}/${correo}`).subscribe((data) => {
            response.send({status:data.status, data: data.data})
        })
    }

    ModificarDatosDeCuenta(correo:string, newInfo: UserDto, response:Response){
        return this.api.put(`${this.userUrl}/${correo}`, newInfo).subscribe((data) => {
            response.send({status:data.status, data: data.data})
        })
    }

    GetUsariosCuidadores(){
        //ruta por crear
    }
}
