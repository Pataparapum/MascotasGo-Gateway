import { Module } from '@nestjs/common';
import { ServicioGestionVeterinariaController } from './servicio-gestion-veterinaria.controller';
import { ServicioGestionVeterinariaService } from './servicio-gestion-veterinaria.service';

@Module({
  controllers: [ServicioGestionVeterinariaController],
  providers: [ServicioGestionVeterinariaService]
})
export class ServicioGestionVeterinariaModule {}
