import { Module } from '@nestjs/common';
import { ServicioGestionCuidadoresMascotasController } from './servicio-gestion_cuidadores_mascotas.controller';
import { ServicioGestionCuidadoresMascotasService } from './servicio-gestion_cuidadores_mascotas.service';
import { CuidadoresMascotasService } from 'src/servicio-gestion_cuidadores_mascotas/http/cuidadores_mascotas.service';
import { HttpModule } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [HttpModule],
  controllers: [ServicioGestionCuidadoresMascotasController],
  providers: [ServicioGestionCuidadoresMascotasService, CuidadoresMascotasService, JwtService]
})
export class ServicioGestionCuidadoresMascotasModule {}
