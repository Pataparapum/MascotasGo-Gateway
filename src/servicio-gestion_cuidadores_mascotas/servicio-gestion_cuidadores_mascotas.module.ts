import { Module } from '@nestjs/common';
import { ServicioGestionCuidadoresMascotasController } from './servicio-gestion_cuidadores_mascotas.controller';
import { ServicioGestionCuidadoresMascotasService } from './servicio-gestion_cuidadores_mascotas.service';

@Module({
  controllers: [ServicioGestionCuidadoresMascotasController],
  providers: [ServicioGestionCuidadoresMascotasService]
})
export class ServicioGestionCuidadoresMascotasModule {}
