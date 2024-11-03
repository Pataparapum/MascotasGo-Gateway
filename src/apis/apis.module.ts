import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { VeterinariasService } from './veterinarias/veterinarias.service';
import { CuidadoresMascotasService } from './cuidadores_mascotas/cuidadores_mascotas.service';

@Module({
  providers: [
    UserService,
    VeterinariasService,
    CuidadoresMascotasService
  ]
})
export class ApisModule {}
