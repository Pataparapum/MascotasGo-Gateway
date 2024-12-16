import { Module } from '@nestjs/common';
import { CuidadoresController } from './cuidadores.controller';
import { CuidadoresService } from './cuidadores.service';
import { CuidadoresApiService } from './http/cuidadores_api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CuidadoresController],
  providers: [CuidadoresService, CuidadoresApiService]
})
export class CuidadoresModule {}
