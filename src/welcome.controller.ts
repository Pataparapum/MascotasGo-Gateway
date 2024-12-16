import { Controller, Res, Get } from '@nestjs/common';
import { Response } from 'express';


@Controller()
export class welcomeController {

    @Get()
    welcome(@Res() response:Response) {
        return response.json({message:'bienvenido al gateway'});
    }
    
}