import { Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { UserDto, UserLoginDto } from 'src/dto/userDto';
import { Response } from 'express';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class UserService {

    constructor(private api:HttpService, private config:ConfigService){}

    userUrl = this.config.get<string>('USER_URL');
    authUrl = this.config.get<string>('AUTH_URL');

    async RegistrarUsuario(newUser:UserDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.post(`${this.userUrl}`, newUser).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data})
                })
            )
        );

        return response.json({status: 201, data});
    }

    async EliminarCuenta(correo:string, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.delete(`${this.userUrl}/${correo}`).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            )
        ); 

        return response.json({status:200, data })
    }

    async ModificarDatosDeCuenta(correo:string, newInfo: UserDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.put(`${this.userUrl}/${correo}`, newInfo).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        );

        return response.json({status: 201, data});
    }

    async Login(user:UserLoginDto, response:Response):Promise<Response> {
        const { data}  = await firstValueFrom(
            this.api.post(`${this.authUrl}`, user).pipe(
                catchError((error: AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        );
    
        return response.json({status: 200, data});
    }

    GetUsariosCuidadores(){
        //ruta por crear
    }

}
