import { Module } from '@nestjs/common';
import { ServicioUsuariosController } from './servicio-usuarios.controller';
import { ServicioUsuariosService } from './servicio-usuarios.service';

@Module({
  controllers: [ServicioUsuariosController],
  providers: [ServicioUsuariosService]
})
export class ServicioUsuariosModule {}
