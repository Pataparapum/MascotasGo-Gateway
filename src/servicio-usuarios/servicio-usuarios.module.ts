import { Module } from '@nestjs/common';
import { ServicioUsuariosController } from './servicio-usuarios.controller';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { UserService } from './http/user.service';
import { HttpModule } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [HttpModule],
  controllers: [ServicioUsuariosController],
  providers: [ServicioUsuariosService, UserService, JwtService]
})
export class ServicioUsuariosModule {
  
}
