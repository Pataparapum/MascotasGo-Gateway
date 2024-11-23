import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { firstValueFrom } from 'rxjs';
import { UserService } from 'src/apis/user.service';
import { UserLoginDto } from 'src/dto/userDto';

@Injectable()
export class ServicioAuthService {

    constructor(private api:UserService){}

    async authentificar(user:UserLoginDto, response:Response){
        const existUser = await this.api.getOneUser(user.correo, response);

        return await this.api.Login(user, existUser, response);
    }
}
