import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { VeterinariasService } from './veterinarias/veterinarias.service';
import { CuidadoresMascotasService } from './cuidadores_mascotas/cuidadores_mascotas.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule
  ],
  providers: [
    UserService,
    VeterinariasService,
    CuidadoresMascotasService,
    HttpService,
    ConfigService
  ]
})
export class ApisModule {}
