import { Module } from '@nestjs/common';
import { ServicioUsuariosModule } from './servicio-usuarios/servicio-usuarios.module';
import { ServicioAuthModule } from './servicio-auth/servicio-auth.module';
import { ServicioGestionVeterinariaModule } from './servicio-gestion-veterinaria/servicio-gestion-veterinaria.module';
import { ServicioGestionCuidadoresMascotasModule } from './servicio-gestion_cuidadores_mascotas/servicio-gestion_cuidadores_mascotas.module';
import { ApisModule } from './apis/apis.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { jwtConstanst } from './jwt/jwt.constant';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    //Servicios
    ServicioUsuariosModule,
    ServicioAuthModule,
    ServicioGestionVeterinariaModule,
    ServicioGestionCuidadoresMascotasModule,
    ApisModule,

    //configuración variables de entorno
    ConfigModule.forRoot({
      envFilePath: './env/development.env',
      isGlobal: true
    }),

    //jwt tokens
    JwtModule.register({
      secret: jwtConstanst.secret
    }),
    PassportModule
  ],

})
export class AppModule {}
