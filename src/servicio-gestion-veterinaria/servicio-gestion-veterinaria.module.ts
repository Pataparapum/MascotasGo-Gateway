import { Module } from '@nestjs/common';
import { ServicioGestionVeterinariaController } from './servicio-gestion-veterinaria.controller';
import { ServicioGestionVeterinariaService } from './servicio-gestion-veterinaria.service';
import { VeterinariasService } from './http/veterinarias.service';
import { HttpModule } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [HttpModule],
  controllers: [ServicioGestionVeterinariaController],
  providers: [ServicioGestionVeterinariaService, VeterinariasService, JwtService]
})
export class ServicioGestionVeterinariaModule {}
