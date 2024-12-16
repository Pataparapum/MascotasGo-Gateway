import { Module } from '@nestjs/common';
import { CuidadoresController } from './cuidadores.controller';
import { CuidadoresService } from './cuidadores.service';

@Module({
  controllers: [CuidadoresController],
  providers: [CuidadoresService]
})
export class CuidadoresModule {}
