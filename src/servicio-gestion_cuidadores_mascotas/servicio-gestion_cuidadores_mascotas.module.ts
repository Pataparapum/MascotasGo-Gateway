import { Module } from '@nestjs/common';
import { ServicioGestionCuidadoresMascotasController } from './servicio-gestion_cuidadores_mascotas.controller';
import { ServicioGestionCuidadoresMascotasService } from './servicio-gestion_cuidadores_mascotas.service';
import { CuidadoresMascotasService } from 'src/apis/cuidadores_mascotas.service';
import { HttpModule } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { ServicioAuthModule } from 'src/servicio-auth/servicio-auth.module';

@Module({
  imports: [HttpModule, ServicioAuthModule],
  controllers: [ServicioGestionCuidadoresMascotasController],
  providers: [ServicioGestionCuidadoresMascotasService, CuidadoresMascotasService, JwtService]
})
export class ServicioGestionCuidadoresMascotasModule {}
