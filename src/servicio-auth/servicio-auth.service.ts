import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/apis/user.service';
import { UserLoginDto } from 'src/dto/userDto';

@Injectable()
export class ServicioAuthService {

    constructor(private api:UserService){}

    async authentificar(user:UserLoginDto, response:Response){
        return await this.api.Login(user, response);
    }
}
