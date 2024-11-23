import { Module } from '@nestjs/common';
import { ServicioGestionVeterinariaController } from './servicio-gestion-veterinaria.controller';
import { ServicioGestionVeterinariaService } from './servicio-gestion-veterinaria.service';
import { VeterinariasService } from 'src/apis/veterinarias.service';
import { HttpModule } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { ServicioAuthModule } from 'src/servicio-auth/servicio-auth.module';

@Module({
  imports: [HttpModule, ServicioAuthModule],
  controllers: [ServicioGestionVeterinariaController],
  providers: [ServicioGestionVeterinariaService, VeterinariasService, JwtService]
})
export class ServicioGestionVeterinariaModule {}
