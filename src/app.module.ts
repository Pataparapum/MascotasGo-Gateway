import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ServicioUsuariosModule } from './servicio-usuarios/servicio-usuarios.module';
import { ServicioAuthModule } from './servicio-auth/servicio-auth.module';
import { ServicioGestionVeterinariaModule } from './servicio-gestion-veterinaria/servicio-gestion-veterinaria.module';
import { ServicioGestionCuidadoresMascotasModule } from './servicio-gestion_cuidadores_mascotas/servicio-gestion_cuidadores_mascotas.module';
import { ApisModule } from './apis/apis.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    //configuración variables de entorno
    ConfigModule.forRoot({
      isGlobal: true
    }),

    //Servicios
    ServicioUsuariosModule,
    ServicioAuthModule,
    ServicioGestionVeterinariaModule,
    ServicioGestionCuidadoresMascotasModule,
    ApisModule,
    HttpModule,
    PassportModule
  ],
  providers:[JwtService]

})
export class AppModule {
  
}
