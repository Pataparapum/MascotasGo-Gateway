import { Module } from '@nestjs/common';
import { ServicioUsuariosModule } from './servicio-usuarios/servicio-usuarios.module';
import { ServicioAuthModule } from './servicio-auth/servicio-auth.module';
import { ServicioGestionVeterinariaModule } from './servicio-gestion-veterinaria/servicio-gestion-veterinaria.module';
import { ServicioGestionCuidadoresMascotasModule } from './servicio-gestion_cuidadores_mascotas/servicio-gestion_cuidadores_mascotas.module';
import { ApisModule } from './apis/apis.module';

@Module({
  imports: [
    ServicioUsuariosModule,
    ServicioAuthModule,
    ServicioGestionVeterinariaModule,
    ServicioGestionCuidadoresMascotasModule,
    ApisModule
  ],

})
export class AppModule {}
