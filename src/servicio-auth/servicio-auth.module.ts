import { Module } from '@nestjs/common';
import { ServicioAuthController } from './servicio-auth.controller';
import { ServicioAuthService } from './servicio-auth.service';
import { UserService } from 'src/apis/user.service';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstanst } from 'src/jwt/jwt.constant';

@Module({
  imports: [
    //jwt tokens
    JwtModule.register({
      secret: jwtConstanst.secret
    }),
    HttpModule],
  controllers: [ServicioAuthController],
  providers: [ServicioAuthService, UserService]
})
export class ServicioAuthModule {}
