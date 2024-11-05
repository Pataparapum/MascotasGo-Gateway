import { Module } from '@nestjs/common';
import { ServicioUsuariosController } from './servicio-usuarios.controller';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { UserService } from 'src/apis/user/user.service';

@Module({
  controllers: [ServicioUsuariosController],
  providers: [ServicioUsuariosService, UserService]
})
export class ServicioUsuariosModule {}
