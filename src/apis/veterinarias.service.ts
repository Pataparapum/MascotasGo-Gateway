import { HttpService } from '@nestjs/axios';
import { Injectable} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom } from 'rxjs';
import { datosDto } from 'src/dto/datos.dto';
import { Response } from 'express';
import { AxiosError } from 'axios';
import { veterinariasDto } from 'src/dto/veterinaria.dto';
import { citaDto } from 'src/dto/cita.dto';

@Injectable()
export class VeterinariasService {

    constructor(private api:HttpService, private config:ConfigService){}

    veterinaria_url = this.config.get<string>('VETERINARIAS_URL');

    async RegistrarVeterinaria(veterinaria:datosDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.post(`${this.veterinaria_url}/veterinaria`, veterinaria).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data})
                })
            )
        );

        return response.json({status: 201, data});
    }

    async EliminarVeterinaria(id:string, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.delete(`${this.veterinaria_url}/veterinaria/${id}`).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            )
        ); 

        return response.json({status:200, data })
    }

    async ModificarDatosDeVeterinaria(nuevaVeterinaria:veterinariasDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.put(`${this.veterinaria_url}/veterinaria`, nuevaVeterinaria).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        );

        return response.json({status: 201, data});
    }

    async getAll(user:string, response:Response): Promise<Response> {
        const { data } = await firstValueFrom( 
            this.api.get(`${this.veterinaria_url}/veterinaria/${user}` ).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        )
        
        return response.json({status: 200, data});
    }

    // citas
    async addCita(nuevaCita:citaDto, response:Response) {
        const { data } = await firstValueFrom( 
            this.api.post(`${this.veterinaria_url}/cita`, nuevaCita).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        )
        
        return response.json({status: 200, data});
    }

    async deleteCita(id:string, response:Response) {
        const { data } = await firstValueFrom( 
            this.api.delete(`${this.veterinaria_url}/cita/${id}` ).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        )
        
        return response.json({status: 200, data});
    }

    async getAllCita(id:string, response:Response){
        const { data } = await firstValueFrom( 
            this.api.get(`${this.veterinaria_url}/cita/veterinaria/${id}`).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        )
        
        return response.json({status: 200, data});
    }

    async getUserCita(userId:string, response:Response){
        const { data } = await firstValueFrom( 
            this.api.get(`${this.veterinaria_url}/cita/${userId}` ).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        )
        
        return response.json({status: 200, data});
    }


}
