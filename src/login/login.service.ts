import { UserLoginDto } from '../dto/userDto';
import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from '../servicio-usuarios/http/user.service';
import { Response } from 'express';


@Injectable()
export class LoginService {

    constructor(private jwt:JwtService, private userApi:UserService) {

    }

    async login(userLogin:UserLoginDto, response:Response) {
        
        const { correo, password } = userLogin;

        const user = await this.userApi.getUserForLogin(correo);

        if(!user) return response.status(HttpStatus.NOT_FOUND)
                          .send({status:404, error:"El usuario no existe"});

        const checkPassword = await compare(password, user.password)

        if(!checkPassword) return response.status(403)
                                   .send({status:403, error:"La contraseña no es correcta"});

        const payload = { id:user.id, username: user.username};

        const token = this.jwt.sign(payload);

        const data = {
            payload,
            token
        };

        return response.json(data);
    }

}
