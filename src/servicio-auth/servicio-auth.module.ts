import { Module } from '@nestjs/common';
import { ServicioAuthController } from './servicio-auth.controller';
import { ServicioAuthService } from './servicio-auth.service';

@Module({
  controllers: [ServicioAuthController],
  providers: [ServicioAuthService]
})
export class ServicioAuthModule {}
