import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { VeterinariasService } from './veterinarias.service';
import { CuidadoresMascotasService } from './cuidadores_mascotas.service';
import { HttpModule} from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule],
  providers: [
    UserService,
    VeterinariasService,
    CuidadoresMascotasService,
    ConfigService
  ]
})
export class ApisModule {}
