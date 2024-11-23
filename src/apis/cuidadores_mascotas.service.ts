import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { Response } from 'express';
import { catchError, firstValueFrom } from 'rxjs';
import { cuidadoresDto } from 'src/dto/cuidadores.dto';
import { mascotasDto } from 'src/dto/mascotas.dto';
import { trabajoDto } from 'src/dto/trabajo.dto';

@Injectable()
export class CuidadoresMascotasService {

    constructor(private api:HttpService, private config:ConfigService){}

    mc_url = this.config.get<string>('MASCOTA_CUIDADOR_URL');

    // ruta mascotas
    async RegistrarMascota(mascota:mascotasDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.post(`${this.mc_url}/mascotas`, mascota).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data})
                })
            )
        );

        return response.json({status: 201, data});
    }

    async EliminarMascota(id:string, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.delete(`${this.mc_url}/mascotas/${id}`).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            )
        ); 

        return response.json({status:200, data })
    }

    async ModificarDatosDeMascota(nuevaMascota:mascotasDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.put(`${this.mc_url}/mascotas`, nuevaMascota).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        );

        return response.json({status: 201, data});
    }

    async getAllMascota(user:string, response:Response): Promise<Response> {
        const { data } = await firstValueFrom( 
            this.api.get(`${this.mc_url}/mascotas/${user}` ).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        )
        
        return response.json({status: 200, data});
    }

    async getOnePet(mascotaId: string, response: Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.get(`${this.mc_url}/mascotas/${mascotaId}`).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                })
            )
        );

        return response.json({status: 200, data});
    }

    // Ruta cuidadores
    async registrarCuidador(cuidador:cuidadoresDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.post(`${this.mc_url}/cuidadores`, cuidador).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data})
                })
            )
        );

        return response.json({status: 201, data});
    }

    async EliminarCuidador(cuidador:string, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.delete(`${this.mc_url}/cuidadores/${cuidador}`,).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            )
        ); 

        return response.json({status:200, data })
    }

    async ModificarDatosDelCuidador(nuevaCuidador:cuidadoresDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.put(`${this.mc_url}/cuidadores`, nuevaCuidador).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        );

        return response.json({status: 201, data});
    }

    async getAllCuidadores(response:Response): Promise<Response> {
        const { data } = await firstValueFrom( 
            this.api.get(`${this.mc_url}/cuidadores`).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        )
        
        return response.json({status: 200, data});
    }

    async getOneCuidador(cuidadorId: string, response: Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.get(`${this.mc_url}/cuidadores/${cuidadorId}`).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                })
            )
        );

        return response.json({status: 200, data});
    }

    // Ruta trabajos
    async RegistrarTrabajo(trabajo:trabajoDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.post(`${this.mc_url}/trabajo`, trabajo).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data})
                })
            )
        );

        return response.json({status: 201, data});
    }

    async EliminarTrabajo(id:string, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.delete(`${this.mc_url}/trabajo/${id}`).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            )
        ); 

        return response.json({status:200, data })
    }

    async ModificarDatosDelTrabajo(nuevaTrabajo:trabajoDto, response:Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.put(`${this.mc_url}/trabajo`, nuevaTrabajo).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        );

        return response.json({status: 201, data});
    }

    async getAllTrabajo(response:Response): Promise<Response> {
        const { data } = await firstValueFrom( 
            this.api.get(`${this.mc_url}/trabaja` ).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                }),
            ),
        )
        
        return response.json({status: 200, data});
    }

    async getOneTrabajo(trabajoId: string, response: Response): Promise<Response>{
        const { data } = await firstValueFrom(
            this.api.get(`${this.mc_url}/trabajo/${trabajoId}`).pipe(
                catchError((error:AxiosError) => {
                    throw response.json({error: error.response.data});
                })
            )
        );

        return response.json({status: 200, data});
    }

    


    


}
