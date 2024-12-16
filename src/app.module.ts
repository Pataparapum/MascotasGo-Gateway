import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ServicioUsuariosModule } from './servicio-usuarios/servicio-usuarios.module';
import { LoginModule } from './login/login.module';
import { ServicioGestionVeterinariaModule } from './servicio-gestion-veterinaria/servicio-gestion-veterinaria.module';
import { ServicioGestionCuidadoresMascotasModule } from './servicio-gestion_cuidadores_mascotas/servicio-gestion_cuidadores_mascotas.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { HttpModule } from '@nestjs/axios';
import { CuidadoresModule } from './cuidadores/cuidadores.module';

@Module({
  imports: [
    //configuración variables de entorno
    ConfigModule.forRoot({
      isGlobal: true
    }),

    //Servicios
    ServicioUsuariosModule,
    LoginModule,
    ServicioGestionVeterinariaModule,
    ServicioGestionCuidadoresMascotasModule,
    HttpModule,
    PassportModule,
    CuidadoresModule
  ],
  providers:[JwtService]

})
export class AppModule {
  
}
