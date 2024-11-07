import { Module } from '@nestjs/common';
import { ServicioUsuariosController } from './servicio-usuarios.controller';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { UserService } from 'src/apis/user.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [HttpModule],
  controllers: [ServicioUsuariosController],
  providers: [ServicioUsuariosService, UserService]
})
export class ServicioUsuariosModule {
  
}
