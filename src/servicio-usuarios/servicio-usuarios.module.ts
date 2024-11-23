import { Module } from '@nestjs/common';
import { ServicioUsuariosController } from './servicio-usuarios.controller';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { UserService } from 'src/apis/user.service';
import { HttpModule } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { ServicioAuthModule } from 'src/servicio-auth/servicio-auth.module';


@Module({
  imports: [HttpModule, ServicioAuthModule],
  controllers: [ServicioUsuariosController],
  providers: [ServicioUsuariosService, UserService, JwtService]
})
export class ServicioUsuariosModule {
  
}
