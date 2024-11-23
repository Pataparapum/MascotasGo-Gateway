import { Module } from '@nestjs/common';
import { ServicioAuthController } from './servicio-auth.controller';
import { ServicioAuthService } from './servicio-auth.service';
import { UserService } from 'src/apis/user.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstanst } from 'src/jwt/jwt.constant';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/jwt/jwt.strategy';

@Module({
  imports: [
    //jwt tokens
    JwtModule.register({
      secret: jwtConstanst.secret
    }),
    HttpModule,
    PassportModule
  ],
  controllers: [ServicioAuthController],
  providers: [ServicioAuthService, UserService, JwtService, JwtStrategy]
})
export class ServicioAuthModule {}
